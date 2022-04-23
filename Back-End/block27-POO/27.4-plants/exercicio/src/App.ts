import express, { Express, Request, Response, Router } from 'express';
import PlantsController from './Controllers/PlantsController';
import RoutesPlants from './Routes/plants.routes';

export default class App {
  public router: Router = express.Router();
  private plantsRoutes: RoutesPlants = new RoutesPlants(this.plantsController, this.router);

  constructor(private app: Express, private PORT: number, private plantsController: PlantsController) {
    this.routes();
  }

  private routes() {
    this.app.get('/', (_req: Request, res: Response) => {
      res.status(200).json('Ok');
    });

    this.app.use('/plants', this.plantsRoutes.router);
  }

  public start() {
    this.app.listen(this.PORT, () => {
      console.log(`Ouvindo na porta ${this.PORT}`);      
    });
  }
}