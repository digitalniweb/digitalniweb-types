import {
	Model,
	CreationOptional,
	InferAttributes,
	InferCreationAttributes,
	ForeignKey,
} from "sequelize";
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
	treeLevel: number;
	parentId: ForeignKey<Article["id"]>;
	websiteId: number;
	websitesMsId: number;
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
export interface WebInformation
	extends Model<
		InferAttributes<WebInformation>,
		InferCreationAttributes<WebInformation>
	> {
	id: CreationOptional<number>;
	name: string;
	description?: string;
	titlePostfix?: string;
	motto?: string;
	mainImage?: string;
	logo?: string;
	favicon: string;
	googleTagManager?: string;
	googleTagManagerActive: boolean;
	socialMedia?: string;
	languageId: number;
	websiteId: number;
	websitesMsId: number;
	owner: string;
	tin?: string;
	vatId?: string;
	country?: string;
	city?: string;
	zip?: string;
	streetAddress?: string;
	landRegistryNumber?: string;
	houseNumber?: string;
	addressPattern?: string;
	fullAddress?: string;
	telephone?: string;
	email: string;
	bankName?: string;
	bankAccountNumber?: string;
	bankCode?: string;
	bankIBAN?: string;
}
