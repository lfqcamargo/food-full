import { UseCaseError } from '@/core/errors/use-case-error'

export class AlreadyExistsUsernameError extends Error implements UseCaseError {
  constructor() {
    super('Already exists Username.')
  }
}
