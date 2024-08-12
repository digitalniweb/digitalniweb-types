import { customLogObject } from "./customHelpers/logger.js";
import { userJWT } from "./users.js";
declare module "express-serve-static-core" {
	export interface NextFunction {
		(err?: customLogObject): void;
	}
}
declare module "h3" {
	interface H3EventContext {
		verifiedUser: userJWT;
	}
}
