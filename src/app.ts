import express, { Request, Response } from 'express';
import productsRoute from './routes/products.route';

const app = express();

app.use(express.json());

app.use('/products', productsRoute);

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Aplicação está funcionando!');
});

export default app;
