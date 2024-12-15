import error from '../../../utils/error';
import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProduct = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};

const getProducts = async (searchTerm: string) => {
  if (searchTerm) {
    const result = await Product.find({
      $text: { $search: searchTerm },
    });
    return result;
  }

  const result = await Product.find();
  return result;
};

const getProductById = async (productId: string) => {
  const product = await Product.findById(productId);
  if (!product) {
    throw new error(`Product with ID not found`, 404);
  }
  return product;
};

const updateProductById = async (
  productId: string,
  productUpdateData: Partial<TProduct>,
) => {
  if (!productId) {
    throw new error(`Invalid product ID`, 400);
  }
  const updatedProduct = await Product.findByIdAndUpdate(
    productId,
    productUpdateData,
    { new: true },
  );

  if (!updatedProduct) {
    throw new error(`Product with id not found`, 404);
  }

  return updatedProduct;
};

const deleteProductById = async (productId: string) => {
  if (!productId) {
    throw new error('Invalid product ID', 400);
  }
  const deletedProduct = await Product.findByIdAndDelete(productId);

  if (!deletedProduct) {
    throw new error(`Product with id not found`, 404);
  }

  return deletedProduct;
};

export const ProductServices = {
  createProduct,
  getProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
