import HttpException from '../exception/http';
import { NextFunction,Request, Response } from 'express';

async function postOnlyMiddleware(request: Request, response: Response, next: NextFunction) {
    if(request.method==="POST"){
        next();
    }else{
        next(new HttpException(405,"Method Not Allowed"));
    }
}

export default postOnlyMiddleware;