import { customErrorCodes } from "../exception/exception.type";
import HttpException from "exception/http";
import { NextFunction, Request, Response } from "express";

function errorMiddleware(
  error: HttpException,
  request: Request,
  response: Response,
  next: NextFunction
) {
  const status = error.status || 500;
  const message = error.message || "Something went wrong";
  response.status(status).send({
    code: customErrorCodes.get(status),
    msg: message
  });
}

export default errorMiddleware;
