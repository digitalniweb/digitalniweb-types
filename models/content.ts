import type {
	CreationOptional,
	ForeignKey,
	HasManyGetAssociationsMixin,
	InferAttributes,
	InferCreationAttributes,
} from "sequelize";
import { Model } from "sequelize";
/**
 * Articles are 'main menu'
 * @property parentId id of the parent Article a.k.a. menu
 */
export interface Article
	extends Model<InferAttributes<Article>, InferCreationAttributes<Article>> {
	id: CreationOptional<number>;
	languageId: CreationOptional<number>;
	name: string;
	url: string;
	icon: string;
	otherUrl: string;
	active: boolean;
	freeMenu: boolean;
	order: number;
	parentId: ForeignKey<Article["id"]> | null;
	websiteId: number;
	websitesMsId: number;
	title: string;
	description: string;
	image: string;
	updatedAt?: CreationOptional<Date>;
	createdAt?: CreationOptional<Date>;
	deletedAt?: Date;
	ArticleWidgets?: ArticleWidget[];

	getArticleWidgets: HasManyGetAssociationsMixin<ArticleWidget>;
}

export interface ModuleWidgets {
	id: CreationOptional<number>;
	ArticleId: number;
	widgetId: number; // not used for associations but to distinguish what widget it is. For associations we use "WidgetModel.moduleId" (i.e. WidgetText.moduleId) which every one of these we rename to "widget" ('as: "widget") in associations
	widgetRowId?: number; // it is not null eventually, but is nullable because when creating this can be null for a little while
	order: CreationOptional<number>;
	active?: boolean;
	createdAt?: CreationOptional<Date>;
	updatedAt?: CreationOptional<Date>;
	deletedAt?: Date;
}

/**
 * @property {number} articleId 'Article' ID
 * @property {number} widgetId ID of the widget - i.e. 'WidgetText'
 * @property {number} widgetRowId ID of row of the widget - i.e. ID inside 'WidgetText' widget
 */
export interface ArticleWidget
	extends Model<
			InferAttributes<ArticleWidget>,
			InferCreationAttributes<ArticleWidget>
		>,
		ModuleWidgets {
	WidgetText?: WidgetText | null;
	WidgetBanner?: WidgetBanner | null;
}

export interface WidgetText
	extends Model<
		InferAttributes<WidgetText>,
		InferCreationAttributes<WidgetText>
	> {
	id: CreationOptional<number>;
	name: string;
	moduleId: number;
	content: string;
	options?: string;
}
export interface WidgetBanner
	extends Model<
		InferAttributes<WidgetBanner>,
		InferCreationAttributes<WidgetBanner>
	> {
	id: CreationOptional<number>;
	name: string;
	moduleId: number;
	content: string;
	options?: string;
}

export interface WebInformation
	extends Model<
		InferAttributes<WebInformation>,
		InferCreationAttributes<WebInformation>
	> {
	id: CreationOptional<number>;
	name: string;
	mainImage?: string;
	logo?: string;
	favicon?: string;
	googleTagManager?: string;
	googleTagManagerActive: boolean;
	websiteId: number;
	websitesMsId: number;
	owner: string;
	tin?: string;
	vatId?: string;
	country: string;
	city: string;
	zip: string;
	streetAddress: string;
	landRegistryNumber?: string;
	houseNumber: string;
	addressPattern?: string;
	fullAddress: string;
	telephone: string;
	email: string;
	bankName?: string;
	bankAccountNumber?: string;
	bankCode?: string;
	bankIBAN?: string;
	createdAt?: CreationOptional<Date>;
	updatedAt?: CreationOptional<Date>;
	deletedAt?: Date;

	WebInformationLanguages?: WebInformationLanguage[];
}
export interface WebInformationLanguage
	extends Model<
		InferAttributes<WebInformationLanguage>,
		InferCreationAttributes<WebInformationLanguage>
	> {
	id: CreationOptional<number>;
	WebInformationId: ForeignKey<WebInformation["id"]>;
	name?: string;
	description?: string;
	motto?: string;
	titlePostfix?: string;
	mainImage?: string;
	logo?: string;
	socialMedia?: string;
	languageId: number;
	createdAt?: CreationOptional<Date>;
	updatedAt?: CreationOptional<Date>;
	deletedAt?: Date;
}
