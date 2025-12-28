import { Color } from "@/types/Color";
import { colorize } from "@/utils/colorize";
import { pluralize } from "@/utils/pluralize";
import { KnownEnvVariable } from "./KnownEnvVariable";
import { NumericEnvVariable } from "./NumericEnvVariable";

export class StringEnvVariable extends KnownEnvVariable<string> {
	public cannotBe(forbiddenValue: string, errorMessage: string): this {
		if (this.value === forbiddenValue) {
			const thisValue = colorize(forbiddenValue, Color.FgRed);

			throw new Error(`${this.named()} cannot be ${thisValue} - ${errorMessage}`);
		}

		return this;
	}

	public minLength(length: number): this {
		if (this.value.length < length) {
			const xCharacters = pluralize(length, "character");

			throw new Error(`${this.named()} cannot be less than ${xCharacters} long`);
		}

		return this;
	}

	public maxLength(length: number): this {
		if (this.value.length > length) {
			const xCharacters = pluralize(length, "character");

			throw new Error(`${this.named()} cannot be more than ${xCharacters} long`);
		}

		return this;
	}

	public mustBeInteger(): NumericEnvVariable {
		const parsed = Number(this.value);

		if (!Number.isInteger(parsed)) {
			throw new Error(`${this.named()} is not a valid integer`);
		}

		return new NumericEnvVariable(this.key, parsed);
	}

	public customTransform(transformFn: (value: string) => string): this {
		this.value = transformFn(this.value);

		return this;
	}

	public isNullable(): KnownEnvVariable<string | null> {
		return new KnownEnvVariable(this.key, this.value || null);
	}

	/**
	 * Parses and validates a port, which can either be the number directly or a mapped port (which
	 * are used by Docker).
	 *
	 * @example "5000"
	 * @example "3000:5000" // Port 3000 on the host machine, port 5000 in the container.
	 */
	public isPort(): NumericEnvVariable {
		return this.customTransform((x) => x.split(":").at(-1) ?? x)
			.mustBeInteger()
			.withinValidPortRange();
	}
}
