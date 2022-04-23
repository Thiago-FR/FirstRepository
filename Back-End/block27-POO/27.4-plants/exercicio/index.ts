import express, { Express } from 'express';
import App from './src/App';
import PlantsServices from './src/Services/PlantsServices';
import PlantsModel from './src/Models/PlantsModel';
import PlantsController from './src/Controllers/PlantsController';
import IModel from './src/interfaces/Model';
import OrmAdapters from './src/helpers/ormAdapters';

const PORT = 3000;
const modelPlants: IModel = new PlantsModel(new OrmAdapters());
const servicePlants = new PlantsServices(modelPlants)
const plantsController = new PlantsController(servicePlants);

const server: Express = express();
server.use(express.json())

const app = new App(server, PORT, plantsController);

app.start();