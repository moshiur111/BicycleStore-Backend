import { Product } from '../product/product.model';
import TOrder from './order.interface';
import HttpError from '../../../utils/error';
import { Order } from './order.model';

const createOrder = async (orderData: TOrder) => {
  const { email, product: productId, quantity } = orderData;

  const foundProduct = await Product.findById(productId);

  if (!foundProduct) {
    throw new HttpError('Product not found', 404);
  }

  if (foundProduct.quantity < quantity) {
    throw new HttpError('Insuficiant stock for this order', 400);
  }

  const totalPrice = foundProduct.price * quantity;

  foundProduct.quantity -= quantity;
  if (foundProduct.quantity === 0) {
    foundProduct.inStock = false;
  }

  await foundProduct.save();

  const order = new Order({
    email,
    product: productId,
    quantity,
    totalPrice,
  });

  await order.save();
  return order;
};

const calculateRevenue = async () => {
  const revenue = await Order.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
  ]);
  return revenue[0]?.totalRevenue || 0
};

export const OrderServices = {
  createOrder,
  calculateRevenue,
};
