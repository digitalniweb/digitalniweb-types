import { microservices } from "../index.js";
import {
	ServiceRegistry as ServiceRegistryType,
	App as AppType,
	Microservice as MicroserviceType,
} from "../models/globalData.js";
import { languages } from "../index.js";

/**
 * @property 'name' name of microservice because if I get this by id I need to know which microservice it is
 */
export type microserviceRegistryInfo = {
	mainId?: number;
	name: microservices;
	services: Array<ServiceRegistryType>;
};

export type serviceRegistry = {
	[key in microservices]?: microserviceRegistryInfo;
};

export type serviceRegistryApp = {
	[key: string]: AppType;
};

import { Optional, CreationAttributes } from "sequelize";

export type microserviceOptions = CreationAttributes<
	Optional<ServiceRegistryType, "MicroserviceId">
> &
	Pick<MicroserviceType, "name" | "mainServiceRegistryId">;

export type newAppOptions = CreationAttributes<AppType> & {
	language: languages;
	appType: string;
};
