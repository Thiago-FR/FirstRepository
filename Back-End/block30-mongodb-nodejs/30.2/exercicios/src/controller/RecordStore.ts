import { Request, Response } from 'express';
import Controller, { RequestWithBody, ResponseError } from '.';
import RecordStoreService from '../service/RecordStore';
import RecordStore from '../interface/RecordStore';

export default class RecordStoreController extends Controller<RecordStore> {
  private _route: string;

  constructor(
    service = new RecordStoreService(),
    route = '/record-store',
  ) {
    super(service);
    this._route = route;
  }

  get route() { return this._route; }

  async create(
    req: RequestWithBody<RecordStore>,
    res: Response<RecordStore | ResponseError>,
  ): Promise<typeof res> {
    const { body } = req;

    try {
      const recordStore = await this.service.create(body);
      if (!recordStore) {
        return res.status(500).json({ error: this.errors.internal });
      }
      if ('error' in recordStore) {
        return res.status(400).json(recordStore);
      }
      return res.status(201).json(recordStore);
    } catch (err) {
      return res.status(500).json({ error: this.errors.internal });
    }
  }

  async readOne(
    req: Request<{ id: string }>,
    res: Response<RecordStore | ResponseError>,
  ): Promise<typeof res> {
    const { id } = req.params;
    try {
      const frame = await this.service.readOne(id);
      return frame
        ? res.json(frame)
        : res.status(404).json({ error: this.errors.notFound });
    } catch (error) {
      return res.status(500).json({ error: this.errors.internal });
    }
  }
}