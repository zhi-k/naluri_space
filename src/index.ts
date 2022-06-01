import express, { Application } from "express";
import helmet from 'helmet';
import morgan from 'morgan';

import { config } from "./config";
import routes from "./routes";

const app: Application = express();

const port = parseInt(config.port);

app.use(helmet());
app.use(morgan('combined'));

app.use(routes);

app.get("/health", (_, res) => res.sendStatus(200));

app.listen(port, () => console.log(`[${config.env}] Server has started on port ${port}`));