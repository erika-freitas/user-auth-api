import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import JWT, { SignOptions } from 'jsonwebtoken';
import basicAuthenticationMiddleware from "../middlewares/basic-authentication.middleware";
import jwtBearerAuthenticationMiddleware from "../middlewares/jwt-bearer-authentication.middleware";
import ForbiddenError from "../models/errors/forbidden.error.model";

const authorizationRoute = Router();

authorizationRoute.post('/token', basicAuthenticationMiddleware, async (req: Request, res: Response, next: NextFunction) => {
  
  try {
    const user = req.user;

    if(!user) {
      throw new ForbiddenError('Username not provided');
    }

    const jwtPayload = { username: user.username };
    const jwtOptions: SignOptions = { subject: user?.uuid };
    const secretKey = 'my_secret_key';

    const jwt = JWT.sign(jwtPayload, secretKey, jwtOptions);

    res.status(StatusCodes.OK).json({ token: jwt });

  } catch (error) {
    next(error);
  }
});

authorizationRoute.post('/token/validate', jwtBearerAuthenticationMiddleware, async (req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(StatusCodes.OK);
});

export default authorizationRoute;