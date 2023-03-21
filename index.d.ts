import { CreationAttributes } from "sequelize";

import { users } from "../digitalniweb-types/models/users.js";
import LoginLog = users.LoginLog;
import { microservicesArray } from "../digitalniweb-custom/variables/microservices.js";
export type microservices = typeof microservicesArray[number];

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

export type appInfoParametersType = keyof appInfoType;
