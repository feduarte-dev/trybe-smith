import { Request, Response } from 'express';
import productsService from '../services/products.service';

const addProduct = async (req: Request, res: Response) => {
  const { status, data } = await productsService.addProduct(req.body);
  return res.status(status).json(data);
};

export default { 
  addProduct,
};