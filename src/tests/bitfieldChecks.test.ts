import { test } from "bun:test";
import { Permissions } from "@/shared/types/Permissions";

function checkBitfield(obj: object, name: string): void {
	const values = Object.entries(obj).filter(
		(x): x is [string, number] => typeof x[1] === "number",
	);

	if (values.length === 0) {
		throw new Error(`The ${name} bitfield is empty`);
	}

	if (values[0][1] !== 0) {
		throw new Error(
			`Expected the first value in the ${name} bitfield to be 0 (got ${values[0][0]})`,
		);
	}

	for (let i = 1; i < values.length; i++) {
		const expected = 1 << (i - 1);

		const actual = values[i][1];

		if (expected !== actual) {
			throw new Error(
				`Expected value "${values[i][0]}" (order ${i + 1}) of the ${name} bitfield to be ${expected} (got ${actual})`,
			);
		}
	}
}

test("Permissions", () => {
	checkBitfield(Permissions, "Permissions");
});
