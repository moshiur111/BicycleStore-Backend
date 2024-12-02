import { model, Schema } from 'mongoose';
import TOrder from './order.interface';

const OrderSchema = new Schema<TOrder>(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      validate: {
        validator: function (value: string) {
          return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
        },
        message: (props) => `${props.value} is not a valid email`,
      },
    },
    product: {
      type: Schema.Types.ObjectId,
      required: [true, 'Product is required'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [1, 'Quantity must be at least 1'],
      default: 1,
    },
    totalPrice: {
      type: Number,
      required: [true, 'Total price is required'],
      min: [0, 'Total price cannot be less than 0.'],
    },
  },
  {
    timestamps: true,
  },
);

export const Order = model<TOrder>('Order', OrderSchema);
