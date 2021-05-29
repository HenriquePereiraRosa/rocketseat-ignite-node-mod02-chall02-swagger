import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.headers;
    try {
      const allUsers = this.listAllUsersUseCase.execute({ user_id: String(user_id) });
      if (!allUsers) {
        return response.json([]);
      }
      return response.json(allUsers);
    } catch (error) {
      return response.status(400).json({ error: error });
    }
  }
}

export { ListAllUsersController };
