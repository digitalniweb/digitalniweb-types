import type { loginAttempt } from "..";
import type {
	adminAuthorizationNames,
	userAuthorizationNames,
} from "../authorization";
type requestLanguageExpansion = {
	header: string;
	code: string;
	languageId: number | null;
};

declare global {
	namespace Express {
		export interface Response {
			locals: {
				lang?: requestLanguageExpansion;
				userVerified?: {
					id: number;
					usersMsId: number;
					role: adminAuthorizationNames | userAuthorizationNames;
				};
			};
		}
	}
}

export as namespace Express;
export default Express;
