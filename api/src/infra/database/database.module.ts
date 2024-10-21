import { Module } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'
import { PrismaService } from './prisma/prisma.service'
import { PrismaUserRepository } from './prisma/repositories/prisma-user-repository'
import { UserRepository } from '@/domain/application/repositories/user-repository'

@Module({
  providers: [
    PrismaService,
    PrismaClient,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
  ],
  exports: [
    PrismaService,
    PrismaClient,
    UserRepository,
  ],
})
export class DatabaseModule { }
