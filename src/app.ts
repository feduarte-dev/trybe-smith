import express, { Request, Response } from 'express';
import productsRoute from './routes/products.route';
import ordersRoute from './routes/orders.route';
import loginRoute from './routes/login.route';

const app = express();

app.use(express.json());

app.use('/login', loginRoute);
app.use('/products', productsRoute);
app.use('/orders', ordersRoute);

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Aplicação está funcionando!');
});

export default app;
