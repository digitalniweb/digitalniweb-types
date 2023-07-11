"use strict";
import {
	Model,
	CreationOptional,
	InferAttributes,
	InferCreationAttributes,
	ForeignKey,
} from "sequelize";
/* export declare namespace apps {	
} */
/**
 * current app's AdminMenus
 */
export interface AppAdminMenu
	extends Model<
		InferAttributes<AppAdminMenu>,
		InferCreationAttributes<AppAdminMenu>
	> {
	id: CreationOptional<number>;
	adminMenuId: number;
}
/**
 * current app's possible Languages
 */
export interface AppLanguage
	extends Model<
		InferAttributes<AppLanguage>,
		InferCreationAttributes<AppLanguage>
	> {
	id: CreationOptional<number>;
	languageId: number;
}
/**
 * current app's possible Modules
 */
export interface AppModule
	extends Model<
		InferAttributes<AppModule>,
		InferCreationAttributes<AppModule>
	> {
	id: CreationOptional<number>;
	moduleId: number;
}
/**
 * current app's possible Widget
 */
export interface AppWidget
	extends Model<
		InferAttributes<AppWidget>,
		InferCreationAttributes<AppWidget>
	> {
	id: CreationOptional<number>;
	widgetId: number;
}
