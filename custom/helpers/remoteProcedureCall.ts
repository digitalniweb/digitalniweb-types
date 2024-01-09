import { AxiosResponse } from "axios";
import { microservices } from "../../../digitalniweb-types";
import HTTPMethods from "../../../digitalniweb-types/httpMethods";

/**
 * @property { [key: string]: any } `data` POST data
 * @property { [key: string]: any } `params` GET parameters (query)
 * @property  'single' | 'all' `scope` 'single' calls single service (main if `id` is not supplied). 'all' creates calls to all services and waits for first non-null result.
 */
export type msCallOptions = {
	name: microservices;
	req?: Request;
	protocol?: "http" | "https";
	id?: number;
	path: string;
	method?: HTTPMethods;
	data?: { [key: string]: any };
	params?: { [key: string]: any };
	headers?: HeadersInit;
	scope?: "single" | "all";
	timeout?: number;
};

export type appCallOptions = Omit<msCallOptions, "name"> & { name: string };

/**
 * data - cached response data information
 * shardId - cached microservice shard id of 'all' request for particular information (e.g. 'websites' shard id for 'digitalweb.cz' url)
 */
export type apiAppCacheType = "data" | "shardId";

/**
 * "x-ms-id" and "x-app-id" are strings because headers are all type of string even though it is a number
 * "x-ms-id" = process.env.MICROSERVICE_ID - every microservice should return this in response' header (= i.e. 'usersMsId')
 * "x-app-id" = process.env.APP_ID - we can add app's id to header (this is not automatic))
 */
export type cachedResponseData = {
	data: any;
	status: number;
	headers?: {
		"x-ms-id"?: string;
		"x-app-id"?: string;
	};
};

export type remoteCallResponse = AxiosResponse<any, any> | cachedResponseData;
