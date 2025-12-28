import process from "node:process";
import { SQL } from "bun";
import { config } from "@/config";
import { setPg } from "@/global/pg";
import { Color } from "@/types/Color";
import { colorize } from "@/utils/colorize";
import { log, logWithTimeTaken } from "@/utils/logging";

enum ConnectionStatus {
	Attempting,
	Connected,
	Disconnected,
}

export async function connectToPostgres(): Promise<void> {
	const { hostname, port, database, username, password } = config.db;

	const startedAt = Date.now();

	// Logging In

	let connectionStatus = ConnectionStatus.Attempting;

	const pg = new SQL({
		hostname,
		port,
		database,
		username,
		password,

		onconnect: (): void => {
			if (connectionStatus === ConnectionStatus.Connected) return;

			connectionStatus = ConnectionStatus.Connected;

			logWithTimeTaken("Connected to PostgreSQL", startedAt);
		},

		onclose: (error: Error | null): void => {
			switch (connectionStatus) {
				case ConnectionStatus.Attempting:
					log(colorize("Failed to connect to PostgreSQL", Color.FgRed), error);
					break;
				case ConnectionStatus.Connected:
					log(colorize("Disconnected from PostgreSQL", Color.FgRed), error);
					break;
				default:
					return;
			}

			connectionStatus = ConnectionStatus.Disconnected;

			process.exit(1);
		},
	});

	setPg(pg);

	try {
		await pg.connect();
	} catch (error) {
		console.log("uh oh", error);
	}
}
