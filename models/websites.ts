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
} from "sequelize";
export interface Url
	extends Model<InferAttributes<Url>, InferCreationAttributes<Url>> {
	id: CreationOptional<number>;
	url: string;
	WebsiteId?: string;
}

export interface Website
	extends Model<InferAttributes<Website>, InferCreationAttributes<Website>> {
	id: CreationOptional<number>;
	uniqueName: CreationOptional<string>;
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

	setAliases: HasManySetAssociationsMixin<Url, number>;
	addAliases: HasManyAddAssociationsMixin<Url, number>;
	removeAliases: HasManyRemoveAssociationsMixin<Url, number>;
	hasAliases: HasManyHasAssociationsMixin<Url, number>;
	getAliases: HasManyGetAssociationsMixin<Url>;
	countAliases: HasManyCountAssociationsMixin;
	createAlias: HasManyCreateAssociationMixin<Url, "id">;
	createMainUrl: BelongsToCreateAssociationMixin<Url>;
	setMainUrl: BelongsToCreateAssociationMixin<Url>;
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
	billingDay: number;
	createdAt?: CreationOptional<Date>;
	deletedAt?: Date;
}
export interface WebsiteLanguageMutation
	extends Model<
		InferAttributes<WebsiteLanguageMutation>,
		InferCreationAttributes<WebsiteLanguageMutation>
	> {
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
