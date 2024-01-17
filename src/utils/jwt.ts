import jwt from 'jsonwebtoken';
import { TokenPayload } from '../types/Login';

const secret = process.env.JWT_SECRET || 'secret';

const sign = (payload: TokenPayload): string => {
  const token = jwt.sign(payload, secret);
  return token;
};

const verify = (token: string): TokenPayload => {
  const fixedToken = token.split(' ')[1];
  const data = jwt.verify(fixedToken, secret) as TokenPayload;
  console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@2', data);
  return data;
};

export default {
  sign,
  verify,
};