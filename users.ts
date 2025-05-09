import type { InferAttributes, InferCreationAttributes } from "sequelize";
import type { User } from "./models/users";
import type { Role } from "./models/globalData";
import type { userAuthorizationNames } from "./authorization";

export type tokenType = "access" | "refresh";
export type tokensJWT = {
	accessToken?: string;
	refreshToken?: string;
};

export type registerUser = {
	user: InferCreationAttributes<User>;
	userRole: userAuthorizationNames;
};

// !!! whenever we add another parameter in any of these types we need to add this parameter name to corresponding array in 'digitalniwe-custom/variables/user.ts' as well
export type pickUserLoginResponse = Pick<
	InferAttributes<User>,
	| "uuid"
	| "id"
	| "nickname"
	| "email"
	| "roleId"
	| "role"
	| "credit"
	| "Tenant"
	| "UserPrivileges"
	| "UserModulesIds"
	| "websiteId"
	| "websitesMsId"
	| "websiteUuid"
>;

// authenticated user response in apps
export type userLoginResponse = pickUserLoginResponse & {
	refresh_token: string;
	access_token: string;
	role: InferAttributes<Role>;
	usersMsId: number;
};

// autenticated user data in ms: res.locals.userVerified
export type userVerified = Pick<
	userLoginResponse,
	| "uuid"
	| "id"
	| "role"
	| "websiteId"
	| "websitesMsId"
	| "usersMsId"
	| "UserPrivileges"
	| "UserModulesIds"
	| "credit"
	| "websiteUuid"
>;

// autenticated user data in jwt / access_token
export type userJWT = userVerified &
	Pick<userLoginResponse, "nickname" | "email">;

// refresh_token data
export type userRefreshToken = Pick<
	userLoginResponse,
	"id" | "uuid" | "usersMsId"
>;

// autenticated user in store (in app)
export type userStore = Omit<
	userLoginResponse,
	"refresh_token" | "access_token" | "roleId"
>;
