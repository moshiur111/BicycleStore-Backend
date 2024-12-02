import { Request, Response, NextFunction } from 'express';
import HttpError from '../../../utils/error';
import { OrderServices } from './order.service';

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const orderData = req.body;
    const { email, product, quantity, totalPrice } = orderData;

    if (!email || !product || !quantity || !totalPrice) {
      return next(
        new HttpError(
          'All fields(email, product, quantity, totalPrice) are requried',
          400,
        ),
      );
    }

    const order = await OrderServices.createOrder(orderData);

    res.status(201).json({
      message: 'Order created successfully',
      status: true,
      data: order,
    });
  } catch (error) {
    next(error);
  }
};

const calculateRevenue = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const revenue = await OrderServices.calculateRevenue();

    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: { totalRevenue: revenue },
    });
  } catch (error) {
    next(error);
  }
};

export const OrderControllers = {
  createOrder,
  calculateRevenue,
};
