"use strict";
import {
	Model,
	CreationOptional,
	InferAttributes,
	InferCreationAttributes,
} from "sequelize";

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
