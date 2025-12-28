import { describe, expect, test } from "bun:test";
import { makeTempEnvVariable } from "@/tests/makeTempEnvVariable.test";
import { KnownEnvVariable } from "./KnownEnvVariable";

describe(KnownEnvVariable.name, () => {
	describe(KnownEnvVariable.prototype.reliesOn.name, () => {
		test("does not throw if first value is missing", () => {
			const key = makeTempEnvVariable();

			new KnownEnvVariable("", undefined).reliesOn(key);
		});

		test("throws if the second value is missing", () => {
			const key = makeTempEnvVariable();

			try {
				new KnownEnvVariable("", "test").reliesOn(key);

				throw new Error("Did not throw");
			} catch (error) {
				if (!(error instanceof Error)) {
					throw error;
				}

				expect(error.message).toInclude(key);
			}
		});

		test("does now throw if both values are present", () => {
			const text = "  some value  ";

			const key = makeTempEnvVariable(text);

			new KnownEnvVariable("", "test").reliesOn(key);
		});
	});
});
