import { UserRepository } from '@/domain/application/repositories/user-repository'
import { User } from '@/domain/enterprise/entities/user'

export class InMemoryUsersRepository implements UserRepository {
  public items: User[] = []

  async create(data: User) {
    this.items.push(data)
  }

  async findById(id: number) {
    const user = this.items.find((item) => item.id === id)

    if (!user) {
      return null
    }

    return user
  }

  async findByUsername(username: string): Promise<User | null> {
    const user = this.items.find((item) => item.username === username)

    if (!user) {
      return null
    }

    return user
  }

  async save(data: User) {
    const itemIndex = this.items.findIndex(
      (item) => item.id === data.id,
    )

    this.items[itemIndex] = data
  }

  async delete(id: number) {
    const itemIndex = this.items.findIndex(
      (item) => item.id === id,
    )

    this.items[itemIndex].active = false
  }
}
