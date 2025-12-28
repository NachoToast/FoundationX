import type { HexColorString } from "./Common";
import type { Brand } from "./Utils";

export type RoleId = Brand<string, "roleId">;

export interface Role {
	id: RoleId;

	label: string;

	color: HexColorString;

	icon: RoleIcon;
}

export enum RoleIcon {
	Crown,
	Code,
}
