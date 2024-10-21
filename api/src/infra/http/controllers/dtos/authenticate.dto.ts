import { ApiProperty } from '@nestjs/swagger'
import { createZodDto } from 'nestjs-zod'
import { z } from 'zod'

export const authenticateBodySchema = z.object({
  username: z.string(),
  password: z.string(),
})

export class AuthenticateBodySchemaDto extends createZodDto(
  authenticateBodySchema,
) {
  @ApiProperty({
    example: 'lfqcamargo',
    description: 'username of the user',
    type: String,
  })
  username!: string

  @ApiProperty({
    example: '123456',
    description: 'Password of the user',
    type: String,
  })
  password!: string
}
