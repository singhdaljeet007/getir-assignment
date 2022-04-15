import { NextFunction, Request, Response, Router } from "express";
import Controller from "../interfaces/controller.interface";
import SearchRecordDto from "./record.dto";
import { SearchRequest } from "./record.interface";
import recordModel from "./record.model";
import HttpException from "../exception/http";
import validationMiddleware from "../middleware/validation.middleware";

class RecordController implements Controller {
  public path = "/record";
  public router = Router();
  private record = recordModel;
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/search`,validationMiddleware(SearchRecordDto), this.search);
  }

  search = async (request: Request, response: Response,next:NextFunction) => {
    const searchData: SearchRequest = request.body;
    const recordsByCriteria = await this.record
      .aggregate([
        {
          $match: {
            createdAt: {
              $gte: new Date(searchData.startDate),
              $lt: new Date(searchData.endDate),
            },
          },
        },
        {
          $project: {
            createdAt: 1,
            key: 1,
            totalCount: { $sum: "$counts" },
          },
        },
        {
          $match: {
            totalCount: { $gte: searchData.minCount, $lt: searchData.maxCount },
          },
        },
      ])
      .exec();
    if(recordsByCriteria && recordsByCriteria?.length>0){
      response.status(200).send(recordsByCriteria);
    }else{
      next(new HttpException(500, 'No matching records found!'));
    }
  };
}

export default RecordController;
