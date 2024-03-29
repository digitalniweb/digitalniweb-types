import { loginAttempt } from "..";
import {
	adminAuthorizationNames,
	userAuthorizationNames,
} from "../authorization";
type requestLanguageExpansion = {
	header: string;
	code: string;
	languageId: number | null;
};

type requestAntispamExpansion = {
	loginAttempt: loginAttempt;
	loginAttemptsCount: number;
	maxLoginAttempts: number;
};

declare global {
	namespace Express {
		export interface Response {
			locals: {
				lang?: requestLanguageExpansion;
				antispam?: requestAntispamExpansion;
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
