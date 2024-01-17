import { Router } from 'express';
import productsController from '../controllers/products.controller';
import validateProduct from '../middlewares/product.middleware';

const products = Router();

products.post('/', validateProduct, productsController.addProduct);
products.get('/', productsController.getAllProducts);

export default products;