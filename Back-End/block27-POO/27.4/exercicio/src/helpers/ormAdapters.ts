import { PrismaClient } from "@prisma/client";
import IDataCreate from "../interfaces/IDataCreate";
import IPlant from "../interfaces/Plants";
import IPrismaOrm from "../interfaces/PrismaOrm";

export default class OrmAdapters implements IPrismaOrm {

  public async getAll(): Promise<IPlant[]> {
    const prisma = await new PrismaClient().plants.findMany();
    return prisma;
  }

  public async create(data: IDataCreate): Promise<IPlant> {
    const prisma = await new PrismaClient().plants.create(data);
    return prisma;
  }
};