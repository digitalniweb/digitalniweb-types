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
	| "superadminAdminmenus";

export type adminMenus =
	| modules
	| adminMenuOpeners
	| adminMenuSeparators
	| adminMenuSuperadmin;
