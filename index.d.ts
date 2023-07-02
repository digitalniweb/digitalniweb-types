import { CreationAttributes } from "sequelize";

import { users } from "../digitalniweb-types/models/users.js";
import LoginLog = users.LoginLog;
import { microservicesArray } from "../digitalniweb-custom/variables/microservices.js";
export type microservices = (typeof microservicesArray)[number];

import {
	appsArray,
	appsTypesArray,
} from "../digitalniweb-custom/variables/apps.js";
export type apps = (typeof appsArray)[number];
export type appsTypes = (typeof appsTypesArray)[number];

export type possibleRoles =
	| "superadmin"
	| "owner"
	| "admin"
	| "tenant"
	| "user";

export type languages = "cs" | "en";

export interface loginAttempt extends CreationAttributes<LoginLog> {}

export type microserviceInfoType = {
	PORT: number;
	HOST: string;
	MICROSERVICE_UNIQUE_NAME: string;
	MICROSERVICE_NAME: microservices;
	MICROSERVICE_API_KEY: string;
};

export type microserviceInfoParametersType = keyof microserviceInfoType;

export type appInfoType = {
	PORT: number;
	HOST: string;
	APP_UNIQUE_NAME: string;
	APP_NAME: string;
	APP_API_KEY: string;
	APP_TYPE: string;
	DEFAULT_LANGUAGE: languages;
};

/**
 * 'module': 'module model'
 *
 * 'module' - name of the module in common english language
 */
type modulesMap = {
	articles: "Article";
	"photo gallery": "PhotoGallery";
	news: "News";
};

export type modules = keyof modulesMap;
export type moduleModels = modulesMap[keyof modulesMap];

/**
 * 'widget': 'widget name'
 *
 * 'widget' - name of the widget in common english language
 */
type widgetsMap = {
	text: "Text";
};
export type widgets = keyof widgetsMap;
export type widgetNames = widgetsMap[keyof widgetsMap];

export type appInfoParametersType = keyof appInfoType;
