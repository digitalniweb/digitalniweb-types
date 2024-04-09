type modulesDefault = {
	articles: "Article";
	css: "";
	webInformation: "WebInformation";
};

// modules with dedicated pages (with 'ModulePageLanguage')
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
};

/**
 * 'module': 'module model'
 *
 * 'module' - name of the module in camelCase
 */
type modulesMap = modulesDefault &
	modulesDedicatedTables &
	modulesFunctionality;

export type modules = keyof modulesMap;
export type moduleModels = modulesMap[keyof modulesMap];
