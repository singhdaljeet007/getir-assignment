import 'dotenv/config';
import App from './app';
import RecordController from './record/record.controller';

const app = new App(
  [
    new RecordController()
  ],
);

app.listen();
