import { Request, Response, NextFunction } from 'express';
import config from '../app/config';

interface ICustomError extends Error {
  status?: number
} 

const globalErrorHandler = (
  err: ICustomError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = err.status || 500;

  res.status(statusCode).json({
    message: err.message || 'Something went wrong',
    success: false,
    error: err.name || 'Error',
    stack: config.node_env === 'development' ? err.stack : undefined,
  });
  next()
};

export default globalErrorHandler;
