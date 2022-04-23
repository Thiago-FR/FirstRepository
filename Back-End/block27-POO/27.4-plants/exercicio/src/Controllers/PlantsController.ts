import { Request, Response} from 'express';
import IController from '../interfaces/Controller';
import IModel from '../interfaces/Model';

export default class PlantsController implements IController{
  constructor(private servicePlants: IModel) {}

  public async findAll(_req: Request, res: Response): Promise<Response> {
    const plants = await this.servicePlants.findAll();
    return res.status(200).json(plants);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { breed, needsSun, origin, specialCare, size } = req.body;
    const plants = await this.servicePlants.create({ breed, needsSun, origin, specialCare, size });
    return res.status(201).json(plants);
  }
}