import { Request, Response} from 'express';
import { StatusCodes } from "http-status-codes";
import IUser from "../Interfaces/user.interface";
import UserService from "../Services/user.services";

export default class UserController {
    constructor(private userService = new UserService()) { }

  public async findMany(_req: Request, res: Response): Promise<Response> {
    const users = await this.userService.findMany();

    return res.status(StatusCodes.OK).json(users);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password }: IUser = req.body

    const users = await this.userService.create({ name, email, password });
    
    return res.status(StatusCodes.CREATED).json(users);
  }
};
