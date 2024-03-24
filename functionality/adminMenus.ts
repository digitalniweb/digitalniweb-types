import { modules } from "./modules";

type adminMenuOpeners =
	| "contentOpener"
	| "superadminModulesOpener"
	| "superadminLanguagesOpener"
	| "superadminWidgetsOpener"
	| "superadminAdminmenusOpener";

type adminMenuSeparators = "superadminSeparator";

type adminMenuSuperadmin =
	| "superadminAppModules"
	| "superadminAppLanguages"
	| "superadminAppWidgets"
	| "superadminAppAdminmenus";

export type adminMenus =
	| modules
	| adminMenuOpeners
	| adminMenuSeparators
	| adminMenuSuperadmin;
