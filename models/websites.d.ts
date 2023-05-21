import {
	Sequelize,
	ModelDefined,
	Association,
	Model,
	CreationOptional,
	InferAttributes,
	InferCreationAttributes,
	HasManyGetAssociationsMixin,
	HasManyCreateAssociationMixin,
	HasManyAddAssociationsMixin,
	NonAttribute,
	CreationAttributes,
	BelongsToGetAssociationMixin,
	ModelAttributes,
	AssociationOptions,
	HasOneGetAssociationMixin,
	HasManySetAssociationsMixin,
	ForeignKey,
	BelongsToCreateAssociationMixin,
	BelongsToSetAssociationMixin,
	BelongsToManySetAssociationsMixin,
	HasOneSetAssociationMixin,
	BelongsToManyAddAssociationMixin,
	BelongsToManyAddAssociationsMixin,
	HasManyHasAssociationsMixin,
	HasManyCountAssociationsMixin,
	HasManyRemoveAssociationsMixin,
} from "sequelize";
export namespace websites {
	export interface Url
		extends Model<InferAttributes<Url>, InferCreationAttributes<Url>> {
		id: CreationOptional<number>;
		url: string;
		WebsiteId?: string;
	}

	export interface Website
		extends Model<
			InferAttributes<Website>,
			InferCreationAttributes<Website>
		> {
		id: CreationOptional<number>;
		uniqueName: CreationOptional<string>;
		MainUrlId?: number;
		userId?: number;
		appId?: number;
		mainLanguageId?: number;
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
		setApp: BelongsToSetAssociationMixin<App, number>;
	}
	export interface ModulesPagesLanguage
		extends Model<
			InferAttributes<ModulesPagesLanguage>,
			InferCreationAttributes<ModulesPagesLanguage>
		> {
		id: CreationOptional<number>;
		moduleId: CreationOptional<number>;
		languageId: CreationOptional<number>;
		url: string;
		title?: string;
		description?: string;
		headline?: string;
		image?: string;
		content?: string;
		translations?: any;
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
	export interface Article
		extends Model<
			InferAttributes<Article>,
			InferCreationAttributes<Article>
		> {
		id: CreationOptional<number>;
		languageId: CreationOptional<number>;
		name: string;
		url: string;
		icon: string;
		otherUrl: string;
		active: boolean;
		freeMenu: boolean;
		order: number;
		treeLevel: number;
		parentId: CreationOptional<number>;
		WebsiteId: ForeignKey<Website["id"]>;
		title: string;
		description: string;
		image: string;
		updatedAt?: CreationOptional<Date>;
		createdAt?: CreationOptional<Date>;
		deletedAt?: Date;
	}

	/**
	 * @property {number} widgetId ID of the widget
	 * @property {number} modlueId ID of the module i.e. ID inside 'Module' model representing 'Article'
	 * @property {number} moduleRecordId ID of record of the module i.e. ID inside 'Article' module
	 */
	export interface WidgetContent
		extends Model<
			InferAttributes<WidgetContent>,
			InferCreationAttributes<WidgetContent>
		> {
		id: CreationOptional<number>;
		widgetId: number;
		moduleId: number;
		moduleRecordId: number;
		name: string;
		content: string;
		options: object;
		active: boolean;
		order: number;
		createdAt?: CreationOptional<Date>;
		updatedAt?: CreationOptional<Date>;
		deletedAt?: Date;
	}
}
