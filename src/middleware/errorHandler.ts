import { Request, Response, NextFunction } from 'express';
import config from '../app/config';
import HttpError from '../utils/error';

const errorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = err.status || 500;

  res.status(statusCode).json({
    message: err.message || 'Something went wrong',
    status: false,
    error: err.name || 'Error',
    stack: config.node_env === 'development' ? err.stack : undefined,
  });
  next()
};

export default errorHandler;
