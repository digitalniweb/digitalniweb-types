import {
	Model,
	CreationOptional,
	InferAttributes,
	InferCreationAttributes,
	HasManyGetAssociationsMixin,
	HasManyCreateAssociationMixin,
	HasManyAddAssociationsMixin,
	HasManySetAssociationsMixin,
	BelongsToCreateAssociationMixin,
	HasManyHasAssociationsMixin,
	HasManyCountAssociationsMixin,
	HasManyRemoveAssociationsMixin,
	NonAttribute,
	Optional,
} from "sequelize";
import { languages } from "..";
import { UUID } from "node:crypto";
export interface Url
	extends Model<InferAttributes<Url>, InferCreationAttributes<Url>> {
	id: CreationOptional<number>;
	url: string;
	WebsiteId?: string;
}

export interface Website
	extends Model<InferAttributes<Website>, InferCreationAttributes<Website>> {
	id: CreationOptional<number>;
	uuid: CreationOptional<UUID>;
	contentMsId: CreationOptional<number>;
	MainUrlId?: number;
	userId?: number;
	appId?: number;
	mainLanguageId?: number;
	emailsMsId?: number;
	active: boolean;
	testingMode: boolean;
	paused: boolean;
	createdAt?: CreationOptional<Date>;
	updatedAt?: CreationOptional<Date>;
	deletedAt?: Date;
	languages?: number[] | languages[]; // other languages without main language
	WebsiteLanguageMutations?: Optional<
		InferCreationAttributes<WebsiteLanguageMutation>,
		"id" | "WebsiteId"
	>[]; // other languages without main language
	websitesMsId?: number; // added in hook

	setAliases: HasManySetAssociationsMixin<Url, number>;
	addAliases: HasManyAddAssociationsMixin<Url, number>;
	removeAliases: HasManyRemoveAssociationsMixin<Url, number>;
	hasAliases: HasManyHasAssociationsMixin<Url, number>;
	getAliases: HasManyGetAssociationsMixin<Url>;
	countAliases: HasManyCountAssociationsMixin;
	createAlias: HasManyCreateAssociationMixin<Url, "id">;
	createMainUrl: BelongsToCreateAssociationMixin<Url>;
	setMainUrl: BelongsToCreateAssociationMixin<Url>;
	setWebsiteLanguageMutations: HasManySetAssociationsMixin<
		WebsiteLanguageMutation,
		number
	>;
}

export interface WebsiteModule
	extends Model<
		InferAttributes<WebsiteModule>,
		InferCreationAttributes<WebsiteModule>
	> {
	id: CreationOptional<number>;
	WebsiteId: CreationOptional<number>;
	moduleId: CreationOptional<number>;
	active: boolean;
	billingDay?: number;
	createdAt?: CreationOptional<Date>;
	deletedAt?: Date;
}
export interface WebsiteLanguageMutation
	extends Model<
		InferAttributes<WebsiteLanguageMutation>,
		InferCreationAttributes<WebsiteLanguageMutation>
	> {
	id: CreationOptional<number>;
	WebsiteId: CreationOptional<number>;
	languageId: CreationOptional<number>;
}

/**
 * which app can have which admin menu
 */
export interface AdminMenuApp
	extends Model<
		InferAttributes<AdminMenuApp>,
		InferCreationAttributes<AdminMenuApp>
	> {
	id: CreationOptional<number>;
	adminMenuId: number;
	appId: number;
}
