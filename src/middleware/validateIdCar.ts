import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import { ErrorType } from '../error/catalog';

const validIdMongo = (req: Request, _res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const isValid = isValidObjectId(id);
    if (!isValid) next({ message: ErrorType.InvalidMongoId });
    next();
  } catch (error) {
    next(error);
  }
};

export default validIdMongo;