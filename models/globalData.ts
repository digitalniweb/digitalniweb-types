import {
	Model,
	CreationOptional,
	InferAttributes,
	InferCreationAttributes,
	ForeignKey,
	BelongsToCreateAssociationMixin,
	BelongsToSetAssociationMixin,
	BelongsToGetAssociationMixin,
	HasOneSetAssociationMixin,
	HasOneGetAssociationMixin,
	HasOneCreateAssociationMixin,
} from "sequelize";
import {
	mainAuthorizationNames,
	userAuthorizationNames,
	adminAuthorizationNames,
} from "../authorization/index";

import { actionNames } from "../../digitalniweb-custom/variables/actions.js";
import { modules, widgetNames, moduleModels, microservices } from "..";
export interface Language
	extends Model<
		InferAttributes<Language>,
		InferCreationAttributes<Language>
	> {
	id: CreationOptional<number>;
	name: string;
	code: string;
	icon: string;
}
export interface AppType
	extends Model<InferAttributes<AppType>, InferCreationAttributes<AppType>> {
	id: CreationOptional<number>;
	name: string;
}

/**
 * @property {string} name This is name how we refer to this model i.e. 'photoGallery'
 * @property {string|null} model Name of the model i.e. 'PhotoGallery'
 */
export interface Module
	extends Model<InferAttributes<Module>, InferCreationAttributes<Module>> {
	id: CreationOptional<number>;
	name: modules; // english name
	model?: moduleModels; // model name
	usersRoleId?: number;
	creditsCost?: number; // per month
}
export interface RoleType
	extends Model<
		InferAttributes<RoleType>,
		InferCreationAttributes<RoleType>
	> {
	id: CreationOptional<number>;
	name: mainAuthorizationNames;

	createRole: HasOneCreateAssociationMixin<Role>;
}
export interface Role
	extends Model<InferAttributes<Role>, InferCreationAttributes<Role>> {
	id: CreationOptional<number>;
	RoleTypeId: ForeignKey<RoleType["id"]>;
	// this isn't quite right, I can pick name: 'owner' for type: 'user'
	name: adminAuthorizationNames | userAuthorizationNames;

	/*
		Users: NonAttribute<User[]>;
		// It's like this but I think this won't work
		// associations: {
		// 	Users: Association<Role, User>;
		// }; 
		*/
}

/**
 * 'actions' are events which happen e.g. for logging
 *
 * and at the same time they serve as privileges for users
 */
export interface Action
	extends Model<InferAttributes<Action>, InferCreationAttributes<Action>> {
	id: CreationOptional<number>;
	name: (typeof actionNames)[number];
}
export interface Currency
	extends Model<
		InferAttributes<Currency>,
		InferCreationAttributes<Currency>
	> {
	id: CreationOptional<number>;
	sign: string; // €
	code: string; // EUR
}
export interface CurrencyLanguage
	extends Model<
		InferAttributes<CurrencyLanguage>,
		InferCreationAttributes<CurrencyLanguage>
	> {
	id: CreationOptional<number>;
	CurrencyId: ForeignKey<Currency["id"]>;
	LanguageId: ForeignKey<Language["id"]>;
	name: string;
}
export interface ServiceRegistry
	extends Model<
		InferAttributes<ServiceRegistry>,
		InferCreationAttributes<ServiceRegistry>
	> {
	id: CreationOptional<number>;
	host: string;
	port: number;
	uniqueName: string;
	MicroserviceId: ForeignKey<Microservice["id"]>;
	apiKey?: string;
}
export interface Microservice
	extends Model<
		InferAttributes<Microservice>,
		InferCreationAttributes<Microservice>
	> {
	id: CreationOptional<number>;
	name: microservices;
	mainServiceRegistryId?: ForeignKey<ServiceRegistry["id"]>;
	ServiceRegistries?: ServiceRegistry[];

	getServiceRegistry: BelongsToGetAssociationMixin<ServiceRegistry>;
	createServiceRegistry: BelongsToCreateAssociationMixin<ServiceRegistry>;
	setMainServiceRegistry: BelongsToSetAssociationMixin<
		ServiceRegistry,
		number
	>;
}

/**
 * @comment websites_ms.Website.belongsTo(App)
 */
export interface App
	extends Model<InferAttributes<App>, InferCreationAttributes<App>> {
	id: CreationOptional<number>;
	parentId: ForeignKey<App["id"]>;
	name: string;
	port: number;
	AppTypeId: ForeignKey<AppType["id"]>;
	LanguageId: ForeignKey<Language["id"]>;
	host: string;
	uniqueName: string;
	apiKey?: string;

	setParent: BelongsToSetAssociationMixin<App, "id">;
	getParent: BelongsToGetAssociationMixin<App>;

	setChild: HasOneSetAssociationMixin<App, "id">;
	getChild: HasOneGetAssociationMixin<App>;

	setLanguage: BelongsToSetAssociationMixin<Language, "id">;

	setAppType: BelongsToSetAssociationMixin<AppType, number>;
}

export interface Widget
	extends Model<InferAttributes<Widget>, InferCreationAttributes<Widget>> {
	id: CreationOptional<number>;
	name: string;
	widgetName: widgetNames;
}

export interface AdminMenu
	extends Model<
		InferAttributes<AdminMenu>,
		InferCreationAttributes<AdminMenu>
	> {
	id: CreationOptional<number>;
	/**
	 * how we refer to the menu
	 */
	name: string;
	component: string;
	order: number;
	icon?: string;
	parentId: ForeignKey<AdminMenu["id"]>;
	openable: boolean;
	/**
	 * Defines if current 'AdminMenu' is default to all 'Apps' i.e. in all applications this 'AdminMenu' will be shown.
	 */
	isDefault: boolean;
	separator?: boolean;
	ModuleId?: ForeignKey<Module["id"]>;
	// RoleId: ForeignKey<Role["id"]>; // this should be hasMany
	// ActionId: ForeignKey<Action["id"]>; // I think this isn't necessary
}

export interface AdminMenuLanguage
	extends Model<
		InferAttributes<AdminMenuLanguage>,
		InferCreationAttributes<AdminMenuLanguage>
	> {
	id: CreationOptional<number>;
	AdminMenuId: ForeignKey<AdminMenu["id"]>;
	LanguageId: ForeignKey<Language["id"]>;
	url: string;
	/**
	 * how is menu shown in set language in /admin menu
	 */
	name: string;
}

/**
 * #ModulesPagesLanguage
 *
 * If modules have their own dedicated root url ('/news' in '/news/we-started-new-website') their default values are specified in here for every language.
 *
 * These values might be shown on the root page or other pages as well (depends on the individual module).
 *
 * (To implement maybe - user will be able to change these default values in 'content ms' for every website)
 */
export interface ModulesPagesLanguage
	extends Model<
		InferAttributes<ModulesPagesLanguage>,
		InferCreationAttributes<ModulesPagesLanguage>
	> {
	id: CreationOptional<number>;
	ModuleId: ForeignKey<Module["id"]>;
	LanguageId: ForeignKey<Language["id"]>;
	url: string;
	title?: string;
	description?: string;
	headline?: string;
	image?: string;
	content?: string;
	options?: any;
}
