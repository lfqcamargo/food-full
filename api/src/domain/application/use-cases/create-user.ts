import { Either, left, right } from '@/core/either'
import { User } from '@/domain/enterprise/entities/user'

import { HashGenerator } from '../cryptography/hash-generator'
import { UserRepository } from '../repositories/user-repository'
import { AlreadyExistsUsernameError } from './errors/already-exists-username-error'

interface CreateUserUseCaseRequest {
  username: string
  password: string
  role: number
  active: boolean
}

type CreateUserUseCaseResponse = Either<AlreadyExistsUsernameError, null>

export class CreateUserUseCase {
  constructor(
    private userRepository: UserRepository,
    private hashGenerator: HashGenerator,
  ) { }

  async execute({
    username,
    password,
    role,
    active
  }: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
    const alreadyUsernameUser = await this.userRepository.findByUsername(username)

    if (alreadyUsernameUser) {
      return left(new AlreadyExistsUsernameError())
    }

    const hashedPassword = await this.hashGenerator.hash(password)

    const user = User.create({
      username,
      password: hashedPassword,
      role,
      active
    })

    await this.userRepository.create(user)

    return right(null)
  }
}
