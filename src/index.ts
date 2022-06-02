import express, { Application, Request, Response, NextFunction } from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from 'cors';

import { config } from "./config";
import routes from "./routes";
import calculatePi from "./calculatePi";

const app: Application = express();

const port = parseInt(config.port);

app.disable('x-powered-by');

app.use(helmet({
	contentSecurityPolicy: false
}));
app.use(morgan("combined"));
app.use(cors());

app.use("/api", routes);

app.get("/health", (_, res) => res.sendStatus(200));

app.use("*", (_, res) => {
	return res.status(404).json({
		message: "Page Not Found",
		success: false
	});
});

// @ts-ignore
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	res.status(500);

	console.error(err);

	return res.json({
		message: "Something went wrong",
		success: false,
		...(config.env !== "production" && { debug: err }),
	});
});


app.listen(port, () => console.log(`[${config.env}] Server has started on port ${port}`));

process.on("uncaughtException", function uncaughtException(exception) {
	console.error(exception);
	process.exit(1);
});

process.on("unhandledRejection", function unhandledRejection(warning) {
	console.error(warning);
	process.exit(1);
});

async function main() {
	while (true) {
		await calculatePi();
	}
}

main();