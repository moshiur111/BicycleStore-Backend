import { Router } from 'express';
import { OrderControllers } from './order.controller';

const router = Router();

router.get('/revenue', OrderControllers.calculateRevenue )
router.post('/', OrderControllers.createOrder)
router.get('/', OrderControllers.getOrders )

export const OrderRoutes = router;
