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

export type apps = (typeof appsArray)[number];
export type appsTypes = (typeof appsTypesArray)[number];

export type appLanguages = { [key in languages]: InferAttributes<Language> };

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
