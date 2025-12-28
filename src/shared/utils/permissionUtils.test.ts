import { describe, expect, test } from "bun:test";
import { Permissions } from "../types/Permissions";
import { hasPermission, splitPermissions } from "./permissionUtils";

describe(hasPermission.name, () => {
	test("0:0 match", () => {
		expect(hasPermission(Permissions.None, Permissions.None)).toBeTrue();
	});

	test("0:1 mismatch", () => {
		expect(hasPermission(Permissions.None, Permissions.EditRoles)).toBeFalse();
	});

	test("1:0 match", () => {
		expect(hasPermission(Permissions.EditRoles, Permissions.None)).toBeTrue();
	});

	test("1:1 match", () => {
		expect(hasPermission(Permissions.EditRoles, Permissions.EditRoles)).toBeTrue();
	});

	test("1:1 mismatch", () => {
		expect(hasPermission(Permissions.EditRoles, Permissions.EditShop)).toBeFalse();
	});

	test("many:1 match", () => {
		expect(
			hasPermission(Permissions.EditRoles | Permissions.EditShop, Permissions.EditRoles),
		).toBeTrue();
	});

	test("many:1 mismatch", () => {
		expect(
			hasPermission(Permissions.EditRoles | Permissions.EditShop, Permissions.MakeTickets),
		).toBeFalse();
	});

	test("many:many match", () => {
		expect(
			hasPermission(
				Permissions.EditRoles | Permissions.EditShop,
				Permissions.EditRoles | Permissions.EditShop,
			),
		).toBeTrue();
	});

	test("many:many mismatch", () => {
		expect(
			hasPermission(
				Permissions.EditRoles | Permissions.EditShop,
				Permissions.MakeTickets | Permissions.SeeTickets,
			),
		).toBeFalse();
	});
});

describe(splitPermissions.name, () => {
	test("splits none", () => {
		expect(splitPermissions(Permissions.None)).toEqual([]);
	});

	test("splits permissions", () => {
		expect(splitPermissions(Permissions.EditRoles | Permissions.EditShop)).toEqual([
			Permissions.EditRoles,
			Permissions.EditShop,
		]);
	});
});
