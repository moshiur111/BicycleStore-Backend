import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.get('/:productId', ProductControllers.getProductById);
router.put('/:productId', ProductControllers.updateProductById);
router.delete('/:productId', ProductControllers.deleteProductById);
router.post('/', ProductControllers.createProduct);
router.get('/', ProductControllers.getProducts);

export const ProductRoutes = router;
