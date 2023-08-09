import { logTypes } from "../../digitalniweb-custom/variables/logs";
export type logTypes = (typeof logTypes)[number];

/**
 * @property {any|undefined} error JS error object - usually have 'message', 'name', 'stack' properties
 * @property {number|string|undefined} code custom error code
 * @property {string|undefined} message custom error message
 * @property {any|undefined} data custom object with additional data which will be appended to response
 * @property {string|undefined} date UTC 0 time zone date
 * @property {logTypes} type "error", "warning"... If there is `code` or `error.code` then type='http'
 */
export type customLogObject = {
	error?: any;
	code?: number;
	message?: string;
	data?: any;
	date?: string;
	type?: logTypes;
};
