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
}