import * as express from 'express';

class App {
  public app: express.Application;
 
  constructor() {
    this.app = express();
  }
 
  public listen() {
    this.app.listen(3000, () => {
      console.log(`App listening on the port 3000`);
    });
  }

  public getServer() {
    return this.app;
  }
}
 
export default App;