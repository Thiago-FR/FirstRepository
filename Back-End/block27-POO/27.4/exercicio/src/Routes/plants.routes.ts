import { Router, Request, Response } from 'express';
import PlantsController from '../Controllers/PlantsController';

export default class RoutesPlants {
  constructor(private plantsController: PlantsController, public router: Router) {
    this.routes();
  }

  private routes() {
    this.router.get('/', (req: Request, res: Response) => this.plantsController.findAll(req, res));
    this.router.post('/', (req: Request, res: Response) => this.plantsController.create(req, res));
  }
}