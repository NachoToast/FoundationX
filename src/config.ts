import { getCommitHash } from "./env/getCommitHash";
import { readFromEnv } from "./env/readFromEnv";
export const config = {
	/** Auto-generated. */
	startTime: new Date(),

	/** Auto-generated. */
	commitHash: getCommitHash(),

	/** Usually either "development" or "production". */
	environment: readFromEnv("NODE_ENV", (env) => env.hasDefaultValueOf("development")),

	api: {
		/** The port that the API will listen to HTTP requests on. */
		port: readFromEnv("API_PORT", (port) =>
			port.hasDefaultValueOf("5000").mustBeInteger().withinValidPortRange(),
		),

		/**
		 * Number of proxies (Cloudflare, NGINX, etc.) between the server and clients, rate
		 * limiting will be broken without this being set to the correct value.
		 *
		 * You can use the `/ip` endpoint to check this.
		 */
		numProxies: readFromEnv("API_NUM_PROXIES", (num) =>
			num.hasDefaultValueOf("0").mustBeInteger().minValue(0),
		),

		maxRequestsPerMinute: readFromEnv("API_MAX_REQUESTS_PER_MINUTE", (max) =>
			max.hasDefaultValueOf("30").mustBeInteger().zeroMeansInfinity().minValue(1),
		),
	},

	db: {
		hostname: readFromEnv("DB_HOST", (host) => host.isRequired()),

		username: readFromEnv("DB_USER", (name) => name.isRequired()),

		database: readFromEnv("DB_NAME", (name) => name.isRequired()),

		password: readFromEnv("DB_PASSWORD", (password) => password.isRequired()),

		port: readFromEnv("DB_PORT", (port) =>
			port
				.isRequired()
				.customTransform((x) => x.split(":").at(-1) ?? x)
				.mustBeInteger()
				.withinValidPortRange(),
		),
	},
} as const;
