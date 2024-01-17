import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import jwt from '../utils/jwt';
import { LoginBody, Token } from '../types/login';
import { ServiceResponse } from '../types/ServiceResponse';

const verifyLogin = async (login: LoginBody):Promise<ServiceResponse<Token>> => {
  const user = await UserModel.findOne({ where: { username: login.username } });
  
  if (!user || !bcrypt.compareSync(login.password, user.dataValues.password)) {
    return { status: 401, data: { message: 'Username or password invalid' } };
  }

  const { id, username } = user.dataValues;

  const token = jwt.sign({ id, username });

  return { status: 200, data: { token } };
};

export default {
  verifyLogin,
};