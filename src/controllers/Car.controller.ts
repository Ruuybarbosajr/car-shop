import { NextFunction, Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import { IService } from '../interfaces/IService';

export default class {
  constructor(private _service: IService<ICar>) {}

  async create(req: Request, res: Response, next: NextFunction) {
    try {
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
    } catch (error) {
      next(error);
    }
  }
}