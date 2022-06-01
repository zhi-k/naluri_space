import express, { Application } from "express";

import { config } from "./config";

const app: Application = express();

app.listen(config.port, () => console.log(`Server has started on port ${config.port}`));