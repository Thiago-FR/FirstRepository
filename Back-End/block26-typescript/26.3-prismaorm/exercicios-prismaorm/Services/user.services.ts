import IUser from "../Interfaces/user.interface";
import { PrismaClient } from "@prisma/client";
import UserModel from "../Models/user.models";

const prisma = new PrismaClient();

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(prisma);
  }

  public async findMany(): Promise<IUser[]> {
    const users = await this.model.findMany();

    return users;
  }

  public async create(data: IUser) {
    const users = await this.model.create(data);
    
    return users;
  }
};
