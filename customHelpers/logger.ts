import { logTypes } from "../../digitalniweb-custom/variables/logs";
import HTTPMethods from "../httpMethods";
import { statuses } from "./statuses";

/**
 * commonly occured properties of Error object.
 *
 * If needed can be expanded any time.
 */
export type commonError = {
	message?: string;
	name?: string;
	stack?: string;
	code?: number;
};

/**
 * Object injected to `log()` for being processed to save / log out
 * @property {any|undefined} error JS error object - usually have 'message', 'name', 'stack' properties
 * @property {number|string|undefined} code custom error code
 * @property {string|undefined} message custom error message
 * @property {any|undefined} data custom object with additional data which will be appended to response
 * @property {string|undefined} date UTC 0 time zone JS date (`digitalniweb-custom -> functions -> dateFunctions -> getUTCDateTime()`)
 * @property {logTypes} type "api", "consoleLog"... If there is `code` or `error.code` then type='http'
 * @property {statuses} status "error", "warning"... Makes the error colored.
 */
export type customLogObject = {
	error?: commonError | string;
	code?: number;
	message?: string;
	data?: any;
	date?: string;
	type: logTypes;
	status?: statuses;
};

/**
 * object data to save / log out
 */
export type logObject = {
	error?: {
		message?: string;
		name?: string;
		stack?: string;
		code?: number;
	};
	req?: {
		ip?: string;
		method?: HTTPMethods;
		originalUrl?: string;
	};
	message?: string;
	code?: number;
	type: logTypes;
	status?: statuses;
};

/**
 * Properties are assigned from `customLogObject`.
 *
 * Top level properties of `customLogObject` have priority over its nested properties (`message` > `error.message`)
 *
 * Used for http response
 * @property {number|undefined} code
 * @property {string} message
 */
export type responseLogObject = {
	code: number;
	message: string;
};
