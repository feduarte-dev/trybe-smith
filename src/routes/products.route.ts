import { Router } from 'express';
import productsController from '../controllers/products.controller';
import validateProduct from '../middlewares/productName.middleware copy';

const transactionsRouter = Router();

transactionsRouter.post('/', validateProduct, productsController.addProduct);
transactionsRouter.get('/', productsController.getAllProducts);

export default transactionsRouter;