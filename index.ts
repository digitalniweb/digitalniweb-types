import { CreationAttributes } from "sequelize";

import { LoginLog } from "./models/users.js";
import { microservicesArray } from "../digitalniweb-custom/variables/microservices.js";
export type microservices = (typeof microservicesArray)[number];

import {
	appsArray,
	appsTypesArray,
} from "../digitalniweb-custom/variables/apps.js";
import { languages } from "../digitalniweb-custom/variables/languages.js";
import { Language } from "./models/globalData.js";

export type apps = (typeof appsArray)[number];
export type appsTypes = (typeof appsTypesArray)[number];

export type appLanguages = { [key in languages]: Language };

export type languages = (typeof languages)[number];

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
 * 'module' - name of the module in camelCase
 */
type modulesMap = {
	articles: "Article";
	photoGallery: "PhotoGallery";
	news: "News";
};

export type modules = keyof modulesMap;
export type moduleModels = modulesMap[keyof modulesMap];

/**
 * 'widget': 'widget model'
 *
 * 'widget' - name of the widget in camelCase
 */
type widgetsMap = {
	text: "Text";
};
export type widgets = keyof widgetsMap;
export type widgetNames = widgetsMap[keyof widgetsMap];

export type appInfoParametersType = keyof appInfoType;
