import { Prisma, User as PrismaUser } from '@prisma/client'
import { User } from '@/domain/enterprise/entities/user'

export class PrismaUserMapper {
  static toDomain(raw: PrismaUser): User {
    const user = User.create(
      {
        username: raw.username,
        password: raw.password,
        role: raw.role,
        createdAt: raw.createdAt,
        lastLogin: raw.lastLogin,
        active: raw.active
      },
      raw.id
    )

    return user
  }

  static toPrisma(user: User): Prisma.UserUncheckedCreateInput {
    return {
      id: user.id,
      username: user.username,
      password: user.password,
      role: user.role,
      createdAt: user.createdAt,
      lastLogin: user.lastLogin,
      active: user.active
    }
  }
}
