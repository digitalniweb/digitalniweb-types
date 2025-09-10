import type { languages, microservices, apps, appsTypes } from "../index.js";
declare global {
	namespace NodeJS {
		interface ProcessEnv {
			MICROSERVICE_NAME: microservices;
			MICROSERVICE_UNIQUE_NAME: string;
			MICROSERVICE_API_KEY: string;

			MICROSERVICE_ID: string; // number

			GLOBALDATA_REGISTRY_API_KEY: string;

			APP_NAME: apps;
			APP_UNIQUE_NAME: string;
			APP_API_KEY: string;
			APP_TYPE: appsTypes;
			APP_ACCESS_TOKEN_SECRET: string;
			APP_REFRESH_TOKEN_SECRET: string;
			DEFAULT_LANGUAGE: languages;
			APP_LANGUAGES: string;

			APP_ID: string; // number

			HOST: string;
			PORT: string; // number

			DB_HOST?: string;
			DB_USER?: string;
			DB_PASSWORD?: string;
			DB_NAME?: string;
			DB_DRIVER?: string;

			REDIS_HOST: string;
			REDIS_PORT: string; // number

			FILEBROWSER_LOCAL_ROOT_PATH: string;
			FILEBROWSER_PUBLIC_ROOT_PATH: string;

			NODE_ENV: "development" | "production";
		}
	}
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
