import { customLogObject } from "./customHelpers/logger.js";
declare module "express-serve-static-core" {
	export interface NextFunction {
		(err?: customLogObject): void;
	}
}
