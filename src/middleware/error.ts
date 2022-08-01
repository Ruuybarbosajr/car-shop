import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import { errorCatalog, ErrorType } from '../error/catalog';

const error: ErrorRequestHandler = (
  err: Error | ZodError,
  _req,
  res, 
  _next,
) => {
  if (err instanceof ZodError) {
    return res.status(400).json({ error: err.issues });
  }
  const message = err.message as keyof typeof ErrorType;
  const errorObject = errorCatalog[message];
  
  if (errorObject) {
    return res
      .status(errorObject.status).json({ error: errorObject.message });
  }

  res.status(500).json({ error: err.message });
};

export default error;