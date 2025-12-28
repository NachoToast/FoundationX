import { createServer } from "node:http";
import express from "express";
import { config } from "@/config";
import { setApp } from "@/global/app";
import { Color } from "@/types/Color";
import { colorize } from "@/utils/colorize";
import { logWithTimeTaken } from "@/utils/logging";

export function startApi(): Promise<void> {
	const { startTime, commitHash, environment, api } = config;
	const { port, numProxies } = api;

	const startedAt = Date.now();

	const app = express();

	setApp(app);

	if (environment) {
		app.set("env", environment);
	}

	if (numProxies > 0) {
		app.set("trust proxy", numProxies);
	}

	app.get("/", (_, res) => {
		res.status(200).json({ startTime, commitHash });
	});

	app.get("/ip", (req, res) => res.status(200).send(req.ip));

	const server = createServer(app);

	return new Promise((resolve) => {
		server.listen(port, () => {
			const url = colorize(`http://localhost:${port}`, Color.FgCyan);

			logWithTimeTaken(`Web API listening on ${url}`, startedAt);

			resolve();
		});
	});
}
