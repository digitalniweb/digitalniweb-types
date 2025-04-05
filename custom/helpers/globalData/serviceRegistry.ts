import type { microservices } from "../../..";

// ServiceRegistry model exists only in 'Microservices', not in 'Apps'
// @ts-ignore
import type { ServiceRegistry } from "../../../../digitalniweb-types/models/globalData.js";
import type {
	microserviceOptions,
	microserviceRegistryInfo,
	serviceRegistry,
} from "../../../customFunctions/globalData";
import type { Microservice } from "../../../models/globalData";

export type registerService = (
	options: microserviceOptions
) => Promise<false | ServiceRegistry>;

export type serviceRegistryServices =
	| microserviceRegistryInfo
	| undefined
	| false;
export type getServiceRegistryServices = (
	name: microservices
) => Promise<serviceRegistryServices>;

export type getServiceRegistryInfo =
	() => ReturnType<getServiceRegistryServices>;

export type getMainServiceRegistry = (
	microservice: microservices
) => Promise<Microservice | null>;

export type serviceRegistryList = () => Promise<serviceRegistry | false>;
