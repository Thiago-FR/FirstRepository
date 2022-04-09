import IPlant from "./Plants";

interface IModel {
  findAll: () => Promise<IPlant[]>,
  create: (data: IPlant) => Promise<IPlant>,
}

export default IModel;