import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import { IService } from '../interfaces/IService';
import 'express-async-errors';

export default class {
  constructor(private _service: IService<ICar>) {}

  async create(req: Request, res: Response) {
    const { 
      buyValue,
      color,
      doorsQty,
      model,
      seatsQty,
      year, 
      status, 
    } = req.body as ICar;
   
    const newCar = await this._service.create(
      { buyValue, color, doorsQty, model, seatsQty, year, status },
    );
    return res.status(201).json(newCar);
  }

  async read(_req: Request, res: Response) {
    const cars = await this._service.read();
    return res.status(200).json(cars);
  }

  async readOne(req: Request, res: Response) {
    const { id } = req.params;
    const car = await this._service.readOne(id);
    return res.status(200).json(car);
  }

  async updated(req: Request, res: Response) {
    const {
      buyValue,
      color,
      doorsQty,
      model,
      seatsQty,
      year,
    } = req.body as ICar;

    const { id } = req.params;
    const carUpdated = await this._service
      .update(id, { buyValue, color, doorsQty, model, seatsQty, year });
    return res.status(200).json(carUpdated);
  }
}