import IModel from "../interfaces/Model";
import IPlant from "../interfaces/Plants";
import PrismaOrm from "../interfaces/PrismaOrm";

export default class PlantsModel implements IModel {
  constructor(private orm: PrismaOrm) { }

  public async findAll(): Promise<IPlant[]> {
    const plants = await this.orm.getAll();
    return plants;
  }

  public async create(data: IPlant): Promise<IPlant> {
    const plants = await this.orm.create({ 
        data: { ...data, specialCare: data.specialCare?.waterFrequency },
      });
    return plants;
  }
}