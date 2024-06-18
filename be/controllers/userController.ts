import bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import User from '../models/userModel';
import { ResponseCodes } from '../types/constants';
import jwt from 'jsonwebtoken';

export const login = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user) {
    const passwordMatches = await bcrypt.compare(password, user.password);
    if (passwordMatches) {
      const accessTokenExpiresIn = 60 * 60;
      const refreshTokenExpiresIn = 7 * 24 * 60 * 60;

      const jwtToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, {
        expiresIn: accessTokenExpiresIn,
      });
      const refreshToken = jwt.sign({ id: user._id }, process.env.JWT_REFRESH_SECRET as string, {
        expiresIn: refreshTokenExpiresIn,
      });

      res.cookie('jwt', jwtToken, {
        sameSite: 'none',
        secure: true,
        httpOnly: true,
        maxAge: accessTokenExpiresIn * 1000,
      });
      res.cookie('refreshJwt', refreshToken, {
        sameSite: 'none',
        secure: true,
        httpOnly: true,
        maxAge: refreshTokenExpiresIn * 1000,
      });

      res.status(200).send({ role: user.role, id: user._id, message: ResponseCodes.LOGIN_SUCCESS });
    } else {
      res.status(401).send(ResponseCodes.WRONG_CREDENTIALS);
    }
  } else {
    res.status(401).send(ResponseCodes.WRONG_CREDENTIALS);
  }
};

export const refreshToken = async (req: Request, res: Response, next: NextFunction) => {
  const { refreshJwt } = req.cookies;
  if (!refreshJwt) {
    return res.status(401).send(ResponseCodes.CREDENTIALS_REQUIRED);
  }
  try {
    const payload = jwt.verify(
      refreshJwt,
      process.env.JWT_REFRESH_SECRET as string
    ) as jwt.JwtPayload;
    const user = await User.findById(payload.id);

    if (!user) {
      return res.status(401).send(ResponseCodes.CREDENTIALS_REQUIRED);
    }

    const accessTokenExpiresIn = 60 * 60;
    const refreshTokenExpiresIn = 7 * 24 * 60 * 60;

    const newJwtToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, {
      expiresIn: accessTokenExpiresIn,
    });
    const newRefreshToken = jwt.sign({ id: user._id }, process.env.JWT_REFRESH_SECRET as string, {
      expiresIn: refreshTokenExpiresIn,
    });

    res.cookie('jwt', newJwtToken, {
      sameSite: 'none',
      secure: true,
      httpOnly: true,
      maxAge: accessTokenExpiresIn * 1000,
    });

    res.cookie('refreshJwt', newRefreshToken, {
      sameSite: 'none',
      secure: true,
      httpOnly: true,
      maxAge: refreshTokenExpiresIn * 1000,
    });

    res.status(200).send({ role: user.role, id: user._id });
  } catch (err) {
    res.status(401).send(ResponseCodes.CREDENTIALS_REQUIRED);
  }
};

export const register = async (req: Request, res: Response, next: NextFunction) => {
  const findUsername = await User.findOne({ username: req.body.username });
  if (findUsername) {
    return res.status(400).send(ResponseCodes.USERNAME_ALREADY_EXISTS);
  }
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(ResponseCodes.REGISTER_SUCCESS);
  } catch (e: any) {
    res.status(400).send(e.message);
  }
};
