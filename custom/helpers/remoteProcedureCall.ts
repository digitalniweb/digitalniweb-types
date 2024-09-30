import { AxiosResponse } from "axios";
import { microservices, appCacheType } from "../../../digitalniweb-types";
import HTTPMethods from "../../../digitalniweb-types/httpMethods";
import { InferAttributes, Model } from "sequelize";

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
	cache?: appCacheType;
};

export type cacheKey = string | appCacheType | (number | string)[];

export type appCallOptions = Omit<msCallOptions, "name"> & { name: string };

type msIdHeaders = {
	"x-ms-id"?: string;
	"x-app-id"?: string;
};

/**
 * "x-ms-id" and "x-app-id" are strings because headers are all type of string even though it is a number
 * "x-ms-id" = process.env.MICROSERVICE_ID - every microservice should return this in response' header (= i.e. 'usersMsId')
 * "x-app-id" = process.env.APP_ID - we can add app's id to header (this is not automatic, because Nuxt can't do this at this moment, when it will be possible, add this)
 */
export type cachedResponseData<T> = {
	data: T;
	status: number;
	headers?: msIdHeaders;
};

export type remoteCallResponse<T> =
	| { data: null; status: number; headers?: msIdHeaders }
	| AxiosResponse<T | null, any>
	| cachedResponseData<T>;
