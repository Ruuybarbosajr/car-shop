import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';

const error: ErrorRequestHandler = (
  err: Error | ZodError,
  _req, 
  res, 
  _next,
) => {
  if (err instanceof ZodError) {
    return res.status(400).json({ message: err.issues });
  }
};

export default error;