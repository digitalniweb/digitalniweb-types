import type {
	Role as RoleType,
	Action as ActionType,
} from "../models/globalData.js";

import { actionNames } from "../../digitalniweb-custom/variables/actions.js";
import {
	mainAuthorizationNames,
	adminAuthorizationNames,
	userAuthorizationNames,
} from "../../digitalniweb-custom/variables/authorization.js";

import type { modules } from "../functionality/modules.js";

export type authorizationListType = {
	roles?: RoleType[];
	privileges?: ActionType[];
};

export type mainAuthorizationNames = (typeof mainAuthorizationNames)[number];

export type adminAuthorizationNames = (typeof adminAuthorizationNames)[number];

export type userAuthorizationNames = (typeof userAuthorizationNames)[number];

export type adminRoles = {
	[key in adminAuthorizationNames]: number;
};

export type userRoles = {
	[key in userAuthorizationNames]: number;
};

export type actions = {
	[key in (typeof actionNames)[number]]: number;
};

export type usersModulesPrivileges = {
	[key in modules]?: (typeof actionNames)[];
};
