import { faker } from '@faker-js/faker'

import { User, UserProps } from '@/domain/enterprise/entities/user'
import { randomInt } from 'crypto'

export function makeUser(
  override: Partial<UserProps> = {},
  id?: number,
) {

  const user = User.create(
    {
      username: faker.name.firstName(),
      password: '123456',
      role: randomInt(2),
      ...override,
    },
    id,
  )

  return user
}

