import { Router } from 'express';
import ordersController from '../controllers/orders.controller';
import auth from '../middlewares/auth.middleware';
import validateOrderUser from '../middlewares/orderUser.middleware';
import validateOrderProduct from '../middlewares/orderProduct.middleware';

const orderRouter = Router();

orderRouter.post('/', auth, validateOrderUser, validateOrderProduct, ordersController.addOrder);
orderRouter.get('/', ordersController.getAllOrders);

export default orderRouter;