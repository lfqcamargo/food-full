import { CreateUserUseCase } from "@/domain/application/use-cases/create-user"
import { Request, Response } from 'express'

export class CreateUserController {
  constructor(private CreateUserController: CreateUserUseCase) { }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      console.log("Controller")
    } catch (error) {
      console.log(error)
    }

    return res.status(201).json({ message: "Chegou no controller" })
  }
}
