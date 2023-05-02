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
	HasManySetAssociationsMixin,
	HasManyCreateAssociationMixin,
	HasOneGetAssociationMixin,
} from "sequelize";
import { mainAuthorizationNames } from "./../authorization/index";
export namespace globalData {
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
		extends Model<
			InferAttributes<AppType>,
			InferCreationAttributes<AppType>
		> {
		id: CreationOptional<number>;
		name: string;
	}
	export interface Module
		extends Model<
			InferAttributes<Module>,
			InferCreationAttributes<Module>
		> {
		id: CreationOptional<number>;
		name: string;
		active: boolean;
		dedicatedTable: boolean;
		usersRoleId?: number;
		creditsCost?: number; // per month
	}
	export interface Role
		extends Model<InferAttributes<Role>, InferCreationAttributes<Role>> {
		id: CreationOptional<number>;
		name: string;
		type: mainAuthorizationNames;

		/*
		Users: NonAttribute<User[]>;
		// It's like this but I think this won't work
		// associations: {
		// 	Users: Association<Role, User>;
		// }; 
		*/
	}

	export interface Privilege
		extends Model<
			InferAttributes<Privilege>,
			InferCreationAttributes<Privilege>
		> {
		id: CreationOptional<number>;
		name: string;
		type: mainAuthorizationNames;
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
		name: string;
		mainServiceRegistryId?: ForeignKey<ServiceRegistry["id"]>;
		ServiceRegistries?: ServiceRegistry[];

		getServiceRegistry: BelongsToGetAssociationMixin<ServiceRegistry>;
		createServiceRegistry: BelongsToCreateAssociationMixin<ServiceRegistry>;
		setMainServiceRegistry: BelongsToSetAssociationMixin<
			ServiceRegistry,
			number
		>;
	}
	export interface AppLanguage
		extends Model<
			InferAttributes<AppLanguage>,
			InferCreationAttributes<AppLanguage>
		> {
		id: CreationOptional<number>;
		AppId: CreationOptional<number>;
		LanguageId: ForeignKey<Language["id"]>;
	}
	export interface App
		extends Model<InferAttributes<App>, InferCreationAttributes<App>> {
		id: CreationOptional<number>;
		parentId?: number;
		name: string;
		port: number;
		AppTypeId: ForeignKey<AppType["id"]>;
		LanguageId: ForeignKey<Language["id"]>;
		websiteId?: number;
		host?: NonAttribute<string>;
		uniqueName: string;
		apiKey?: string;

		setParent: BelongsToSetAssociationMixin<App, "id">;
		getParent: BelongsToGetAssociationMixin<App>;

		setChild: HasOneSetAssociationMixin<App, "id">;
		getChild: HasOneGetAssociationMixin<App>;

		setLanguages: HasManySetAssociationsMixin<Language, number>;
		createLanguage: HasManyCreateAssociationMixin<Language, "id">;

		setLanguage: BelongsToSetAssociationMixin<Language, "id">;

		setAppType: BelongsToSetAssociationMixin<AppType, number>;
	}
}
