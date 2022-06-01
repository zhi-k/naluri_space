import express, { Application } from "express";

import { config } from "./config";

const app: Application = express();

const port = parseInt(config.port);

app.listen(port, () => console.log(`[${config.env}] Server has started on port ${port}`));