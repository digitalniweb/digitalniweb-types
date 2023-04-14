import { microservices } from "../../digitalniweb-types/index.js";
import { globalData } from "../models/globalData.js";
import { languages } from "../../digitalniweb-types/index.js";

export type microserviceRegistryInfo = {
	mainId: number;
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
