import { NextFunction, Request, Response } from 'express';
import MotorcycleZodSchema from '../interfaces/IMotorcycle';

const validateBodyMotorcycle = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const parsedMotorcycle = MotorcycleZodSchema.safeParse(req.body);
  if (!parsedMotorcycle.success) {
    next(parsedMotorcycle.error);
  }
  next();
};

export default validateBodyMotorcycle;