import { Types } from "mongoose";

type TOrder = {
  email: string;
  product: string | Types.ObjectId;
  quantity: number;
  totalPrice: number;
};

export default TOrder;
