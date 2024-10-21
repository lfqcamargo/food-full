import { FakeHasher } from 'test/cryptography/fake-haser'
import { makeUser } from 'test/factories/make-user'
import { InMemoryUsersRepository } from 'test/repositories/in-memory-users-repository'

import { CreateUserUseCase } from './create-user'
import { AlreadyExistsUsernameError } from './errors/already-exists-username-error'

let inMemoryUsersRepository: InMemoryUsersRepository
let fakeHasher: FakeHasher
let sut: CreateUserUseCase

describe('CreateUserUseCase', () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository()
    fakeHasher = new FakeHasher()
    sut = new CreateUserUseCase(
      inMemoryUsersRepository,
      fakeHasher
    )
  })

  it('should be able to create a new user', async () => {
    const result = await sut.execute({
      username: 'lfqcamargo',
      password: '123456',
      role: 1,
      active: true
    })

    expect(result.isRight()).toBe(true)
    expect(inMemoryUsersRepository.items.length).toBe(1)
    expect(inMemoryUsersRepository.items[0].username).toEqual(
      'lfqcamargo',
    )
    expect(inMemoryUsersRepository.items[0].password).not.toEqual('123456')
  })

  it('should not be able to create a new user with an existing username', async () => {
    const oldUser = makeUser({ username: 'lfqcamargo' })
    await inMemoryUsersRepository.create(oldUser)

    const result = await sut.execute({
      username: 'lfqcamargo',
      password: '123456',
      role: 1,
      active: true
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(AlreadyExistsUsernameError)
  })
})
