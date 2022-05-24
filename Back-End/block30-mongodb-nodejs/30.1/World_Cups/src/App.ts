import express, { Express } from 'express';
import CupController from './controllers/CupController';
import connection from './models/connection';

export default class App {
  public app: Express;

  public connection: Promise<typeof import('mongoose')>;

  private cupController: CupController

  constructor() {
    this.app = express();
    this.connection = connection();
    this.config();
    this.routes();
    this.cupController = new CupController();
  }

  private config() {
    this.app.use(express.json())    
  }

  private routes() {
    this.app.get('/cup', (req, res) => this.cupController.findAll(req, res))
  }
}