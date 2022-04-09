import IModel from "../interfaces/Model";
import IPlant from "../interfaces/Plants";

export default class PlantsServices implements IModel {
  constructor(private modelPlants: IModel) { 
    this.modelPlants = modelPlants;
  }

  public async findAll(): Promise<IPlant[]> {
    const plants = await this.modelPlants.findAll();

    const newPlants = plants.reduce((acc: IPlant[], curr: IPlant): IPlant[] => {
      if (!curr.specialCare) return [...acc, curr];

      return [...acc, { ...curr, specialCare: { waterFrequency: curr.specialCare }}];
    }, []);
    
    return newPlants;
  }

  public async create(data: IPlant): Promise<IPlant> {
    const plants = await this.modelPlants.create(data);
    if (data.specialCare) return { 
      ...plants, 
      specialCare: { waterFrequency: data.specialCare.waterFrequency }}
    return plants;
  }
}