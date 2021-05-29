import { v4 as uuidV4 } from "uuid";
class User {
  
  public id: string;
  public admin: boolean;
  public created_at: Date;
  public updated_at: Date;

  constructor(public name: string = null,
    public email: string = null
  ) {
    this.name = name;
    this.email = email;
    this.id = uuidV4();
    this.admin = false;
    this.created_at = new Date();
    this.updated_at = new Date();
  }
}

export { User };
