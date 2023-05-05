import { microservices } from "../../digitalniweb-types/index.js";
import { globalData } from "../models/globalData.js";
import { languages } from "../../digitalniweb-types/index.js";

/**
 * @property 'name' name of microservice because if I get this by id I need to know which microservice it is
 */
export type microserviceRegistryInfo = {
	mainId?: number;
	name: microservices;
	services: Array<globalData.ServiceRegistry>;
};

export type serviceRegistry = {
	[key in microservices]?: microserviceRegistryInfo;
};

export type serviceRegistryApp = {
	[key: string]: globalData.App;
};

import { Optional, CreationAttributes } from "sequelize";
import { globalData } from "../models/globalData.js";

export type microserviceOptions = CreationAttributes<
	Optional<globalData.ServiceRegistry, "MicroserviceId">
> &
	Pick<globalData.Microservice, "name" | "mainServiceRegistryId">;

export type appOptions = CreationAttributes<globalData.App> & {
	language: languages;
	appType: string;
};
