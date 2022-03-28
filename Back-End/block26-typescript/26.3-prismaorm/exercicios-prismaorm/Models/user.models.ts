import { ResultSetHeader } from "mysql2/promise";
import IUser from "../Interfaces/user.interface";
import { PrismaClient } from "@prisma/client";
import UserService from "../Services/user.services";

// const prisma = new PrismaClient();

export default class UserModel {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  public async findMany(): Promise<IUser[]> {
    const users = await this.prisma.users.findMany();

    return users;
  }

  public async create(data: IUser): Promise<IUser> {
    const users = await this.prisma.users.create({
      data,
    });

    return users;
  }
};
