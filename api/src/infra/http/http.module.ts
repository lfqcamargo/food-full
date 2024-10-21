import { Module } from '@nestjs/common'

import { DatabaseModule } from '@/infra/database/database.module'

import { CryptographyModule } from '../cryptography/cryptography.module'
import { AuthenticateController } from './controllers/authenticate.controller'
import { AuthenticateUserUseCase } from '@/domain/application/use-cases/authenticate-user'

@Module({
  imports: [DatabaseModule, CryptographyModule],
  controllers: [
    AuthenticateController,

  ],
  providers: [
    AuthenticateUserUseCase,

  ],
})
export class HttpModule { }
