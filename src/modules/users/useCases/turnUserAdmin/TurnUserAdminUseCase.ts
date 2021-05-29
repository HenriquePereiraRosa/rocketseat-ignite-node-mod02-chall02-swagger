import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    const userDb = this.usersRepository.findById(user_id);
    if(!userDb) {
      throw new Error("UserAdm not found");
    }
    return this.usersRepository
      .turnAdmin(userDb);
  }
}

export { TurnUserAdminUseCase };
