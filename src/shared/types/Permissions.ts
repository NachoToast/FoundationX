export enum Permissions {
	None = 0,

	EditRoles = 1 << 0,

	UseSite = 1 << 1,

	// Economy

	SeeTransactions = 1 << 2,

	EditShop = 1 << 3,

	// Support

	SeeTickets = 1 << 4,

	SnoopTickets = 1 << 5,

	MakeTickets = 1 << 6,
}
