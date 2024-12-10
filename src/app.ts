import express, { Application, Request, Response } from 'express';
import { ProductRoutes } from './app/modules/product/product.route';
import { OrderRoutes } from './app/modules/order/order.route';
import globalErrorHandler from './middleware/globalErrorHandler';
import notFound from './middleware/notFound';

const app: Application = express();

app.use(express.json());

app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRoutes)

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to Bicycle Store Backend',
  });
});

app.use(notFound)

app.use(globalErrorHandler);

export default app;
