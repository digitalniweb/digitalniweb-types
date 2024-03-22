import { modules } from "./modules";

type adminMenuOpeners = "contentOpener" | "superadminModulesOpener";

type adminMenuSeparators = "superadminSeparator";

type adminMenuSuperadmin = "superadminAppModules";

export type adminMenus =
	| modules
	| adminMenuOpeners
	| adminMenuSeparators
	| adminMenuSuperadmin;
