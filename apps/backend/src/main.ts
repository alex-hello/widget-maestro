import express from 'express';
import {PageController} from "./controllers/PageController";
import {onCreate} from "./controllers/WidgetController";

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.use(express.json());
app.use('/page', PageController);
app.post('/widget/create', onCreate);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
