import { connectToPostgres } from "./start/connectToPostgres";
import { startApi } from "./start/startApi";

await Promise.all([connectToPostgres(), startApi()]);
