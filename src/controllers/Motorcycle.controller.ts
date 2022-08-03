import { Request, Response } from 'express';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import { IService } from '../interfaces/IService';

export default class {
  constructor(private _service: IService<IMotorcycle>) {}

  async create(req: Request, res: Response) {
    const {
      buyValue,
      category,
      color,
      engineCapacity,
      model,
      year,
      status,
    } = req.body as IMotorcycle;

    const newMotorcycle = await this._service
      .create(
        { buyValue, category, color, engineCapacity, model, year, status },
      );

    return res.status(201).json(newMotorcycle);
  }

  async read(_req: Request, res: Response) {
    const motorcycles = await this._service.read();
    return res.status(200).json(motorcycles);
  }

  async readOne(req: Request, res: Response) {
    const { id } = req.params;
    const motorcycle = await this._service.readOne(id);
    return res.status(200).json(motorcycle);
  }
}