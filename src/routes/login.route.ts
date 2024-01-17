import { Router } from 'express';
import loginController from '../controllers/login.controller';
import validateLogin from '../middlewares/login.middleware';

const loginRouter = Router();

loginRouter.post('/', validateLogin, loginController.verifyLogin);

export default loginRouter;