import { NextFunction, Request, Response } from 'express';
import CarZodSchema from '../interfaces/ICar';

const validateBodyCar = (req: Request, _res: Response, next: NextFunction) => {
  const parsedCar = CarZodSchema.safeParse(req.body);

  if (!parsedCar.success) {
    next(parsedCar.error); 
  }
  next();
};

export default validateBodyCar;