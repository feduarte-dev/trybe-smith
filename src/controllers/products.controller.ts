import { Request, Response } from 'express';
import productsService from '../services/products.service';

const addProduct = async (req: Request, res: Response) => {
  const { status, data } = await productsService.addProduct(req.body);
  return res.status(status).json(data);
};

const getAllProducts = async (_req: Request, res: Response) => {
  const { status, data } = await productsService.getAllProducts();
  return res.status(status).json(data);
};

export default { 
  addProduct,
  getAllProducts,
};