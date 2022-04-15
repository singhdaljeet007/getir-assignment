import { Request, Response, Router } from "express";
import Controller from "../interfaces/controller.interface";
import { SearchRequest } from "./record.interface";
import recordModel from "./record.model";

class RecordController implements Controller {
  public path = "/record";
  public router = Router();
  private record = recordModel;
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/ping`, this.ping);
    this.router.post(`${this.path}/search`, this.search);
  }

  private ping = async (request: Request, response: Response) => {
    response.send("pong!");
  };

  search = async (request: Request, response: Response) => {
    const searchData: SearchRequest = request.body;
    console.log("searchData:", searchData);
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

    response.status(200).send(recordsByCriteria);
  };
}

export default RecordController;
