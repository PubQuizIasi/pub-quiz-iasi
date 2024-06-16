import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { ResponseCodes } from '../types/constants';
import { refreshToken } from '../controllers/userController';

const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies?.jwt;
  const refreshJwt = req.cookies?.refreshJwt;

  if (!token && !refreshJwt) {
    return res.status(401).send(ResponseCodes.CREDENTIALS_REQUIRED);
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET as string);
    next();
  } catch (err) {
    if (refreshJwt) {
      return refreshToken(req, res, next);
    }
    return res.status(401).send(ResponseCodes.CREDENTIALS_REQUIRED);
  }
};

export default auth;
