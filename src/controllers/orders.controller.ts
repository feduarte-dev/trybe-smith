import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

const getAllOrders = async (_req: Request, res: Response) => {
  const { status, data } = await ordersService.getAllOrders();
  return res.status(status).json(data);
};

export default { 
  getAllOrders,

};