import { User } from '@/domain/enterprise/entities/user'

export abstract class UserRepository {
  abstract create(user: User): Promise<void>
  abstract findById(id: number): Promise<User | null>
  abstract findByUsername(username: string): Promise<User | null>
  abstract save(user: User): Promise<void>
  abstract delete(id: number): Promise<void>
}
