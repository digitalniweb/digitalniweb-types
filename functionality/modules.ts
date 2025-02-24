/**
 * 'module': 'module model'
 *
 * 'module' - name of the module in camelCase
 */
type modulesDefault = {
	articles: "Article";
	appearance: "Appearance";
	superadmin: "";
	webInformation: "WebInformation";
};

type modulesDedicatedTables = {
	photoGallery: "PhotoGallery";
	news: "News";
	products: "Product";
};

type modulesFunctionality = {
	users: "User";
	tenants: "Tenant";
	invoices: "Invoice";
	email: "Email";
	saasHost: "";
	saasTenants: "";
};

type modulesMap = modulesDefault &
	modulesDedicatedTables &
	modulesFunctionality;

export type modules = keyof modulesMap;
export type moduleModels = modulesMap[keyof modulesMap];
