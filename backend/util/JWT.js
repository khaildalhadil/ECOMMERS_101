import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
dotenv.config();

const seucrtKey = process.env.PRIVATEKEY;

export const createJWT = (payload) => {
  const token = jwt.sign(payload, seucrtKey);
  return token;
}