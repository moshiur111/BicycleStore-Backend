import express, { Application, NextFunction, Request, Response } from 'express';
import { ProductRoutes } from './app/modules/product/product.route';
import errorHandler from './middleware/errorHandler';
import HttpError from './utils/error';

const app: Application = express();

app.use(express.json());

app.use('/api/products', ProductRoutes);

app.get('/health', (req: Request, res: Response) => {
  res.json({
    message: 'Success',
  });
});

app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new HttpError(`Route not found: ${req.originalUrl}`, 404);
  next(error);
});

app.use(errorHandler);

export default app;
