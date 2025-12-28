import type { Permissions } from "../types/Permissions";

/**
 * Checks if the {@link source} permissions contain **every** one of the {@link required}
 * permissions.
 */
export function hasPermission(source: Permissions, required: Permissions): boolean {
	return (source & required) === required;
}

/** Splits a permissions bitfield into its individual components. */
export function splitPermissions(permissions: Permissions): Permissions[] {
	const values: Permissions[] = [];

	// It's giving Fast InvSqrt()
	while (permissions > 0) {
		const bit = permissions & (~permissions + 1);
		values.push(bit);
		permissions ^= bit;
	}

	return values;
}
