import { Request, Response, Router } from "express";
import Controller from "../interfaces/controller.interface";

class RecordController implements Controller {
  public path = "/record";
  public router = Router();
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/ping`, this.ping);
  }

  private ping = async (request: Request, response: Response) => {
    response.send("pong!");
  };

}

export default RecordController;
