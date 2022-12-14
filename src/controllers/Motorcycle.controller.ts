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

  async update(req: Request, res: Response) {
    const { id } = req.params;

    const {
      buyValue,
      category,
      color,
      engineCapacity,
      model,
      year,
    } = req.body as IMotorcycle;

    const motorcycleUpdated = await this._service.update(id, {
      buyValue,
      category,
      color,
      engineCapacity,
      model,
      year,
    });

    return res.status(200).json(motorcycleUpdated);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    await this._service.delete(id);
    return res.status(204).json({});
  }
}