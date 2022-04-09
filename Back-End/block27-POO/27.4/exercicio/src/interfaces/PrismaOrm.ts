import IDataCreate from "./IDataCreate";
import IPlant from "./Plants";

interface IPrismaOrm {
  getAll: () => Promise<IPlant[]>,
  create: (data: IDataCreate) => Promise<IPlant>,
}

export default IPrismaOrm;