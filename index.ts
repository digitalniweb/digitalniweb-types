import { CreationAttributes, InferAttributes } from "sequelize";

import { LoginLog } from "./models/users.js";
import { microservicesArray } from "../digitalniweb-custom/variables/microservices.js";
export type microservices = (typeof microservicesArray)[number];

import {
	appsArray,
	appsTypesArray,
} from "../digitalniweb-custom/variables/apps.js";
import { languages } from "../digitalniweb-custom/variables/languages.js";
import { Language } from "./models/globalData.js";
import { WidgetContent } from "./models/content.js";

export type apps = (typeof appsArray)[number];
export type appsTypes = (typeof appsTypesArray)[number];

export type appLanguages = { [key in languages]: InferAttributes<Language> };

export type languages = (typeof languages)[number];

export type loginAttempt = CreationAttributes<LoginLog>;
export type wrongLoginError = {
	message: string;
	messageTranslate:
		| "LoginErrorWrongLogin"
		| "LoginErrorNextAttemptIPBan"
		| "LoginErrorTooManyAttempts"; // string for translate() method for frontend. Should start with 'LoginError'
	loginAttemptsCount: number;
	maxLoginAttempts: number;
	timeSpanMinutes?: number;
	blockedTill?: Date | string;
};

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
 * @param `email` login string
 * @param `password` password string
 * @param `ua` user-agent header string
 */
export type loginInformation = {
	email: string;
	password: string;
	ua?: string;
};

export type appInfoParametersType = keyof appInfoType;

export type webInformationSocialMedia = {
	name: string;
	url: string;
	icon: string;
}[];

export type WidgetContentNew = Pick<
	InferAttributes<WidgetContent>,
	"active" | "content" | "name" | "options"
>;

export type WidgetContentCreate = Pick<
	InferAttributes<WidgetContent>,
	| "active"
	| "content"
	| "name"
	| "options"
	| "moduleId"
	| "order"
	| "widgetId"
>;

/**
 * @param type type of data
 * 	* 'data' general data
 *  * 'list' all rows of a globally used model from globalData like 'modules' or 'roles'
 *  * 'msId' (shardId) if scope === 'all' which means we don't know 'msId' beforehand
 * @param ms `microservices | apps` - use this even if it's the same microservice/app (in users ms use 'users' here). Because then we can delete the cache via redis event
 * @param msId (shardId) `number`
 * @param model `string` model name
 * @param modelId `number` model id
 * @param description `string` if we have other data than model or to use as additional identifier to make the key unique
 */
export type appCacheType = {
	type: "data" | "list" | "msId";
	ms: microservices | apps;
	msId?: number;
	model?: string;
	modelId?: number;
	description?: string;
};

export type newIdString = `new${number}`;
