import { Router } from 'express';
import productsController from '../controllers/products.controller';

const transactionsRouter = Router();

transactionsRouter.post('/', productsController.addProduct);
transactionsRouter.get('/', productsController.getAllProducts);

export default transactionsRouter;