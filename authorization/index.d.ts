import { type } from "os";
import { globalData } from "../models/globalData.js";
import RoleType = globalData.Role;
import PrivilegeType = globalData.Privilege;

export type authorizationListType = {
	roles?: RoleType[];
	privileges?: PrivilegeType[];
};

export type mainAuthorizationNames = "admin" | "user";

export type adminAuthorizationNames = "superadmin" | "admin" | "owner";

export type userAuthorizationNames = "user" | "tenant";

type adminRoles = {
	[key in adminAuthorizationNames]: number;
};

type userRoles = {
	[key in userAuthorizationNames]: number;
};

type adminPrivilegesNames =
	| "articles"
	| "menu"
	| "appereance"
	| "news"
	| "forms"
	| "users"
	| "redirects"
	| "webinformation"
	| "owner-information"
	| "url-information"
	| "analytics-marketing";

type userPrivilegesNames = "registered" | "premium";

type adminPrivileges = {
	[key in adminPrivilegesNames]: number;
};

type userPrivileges = {
	[key in userPrivilegesNames]: number;
};

/* 
	authorizationMap = {
		roles: {
			admin: { superadmin: 1,... }, // roleName: roleId
			user: { tenant: 4,... }
		},
		privileges: {
			admin: { adminPrivilegesNames: 1,... }
			user: { privilegeName: privilegeId,... }
		}
	}
*/
/**
 * i.e.:
 *
 * roles->admin->superadmin: number is roleId (id of role)
 *
 * privileges->admin->articles: number is privilegeId (id of privilege)
 */
export type authorizationMap = {
	// [key?: keyof authorizationListType]: {};
	roles?: {
		admin: adminRoles;
		user: userRoles;
	};
	privileges?: {
		admin: adminPrivileges;
		user: userPrivileges;
	};
};
