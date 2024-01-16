import { Router } from 'express';
import ordersController from '../controllers/orders.controller';

const transactionsRouter = Router();

transactionsRouter.get('/', ordersController.getAllOrders);

export default transactionsRouter;