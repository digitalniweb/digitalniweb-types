/**
 * @param {any|undefined} error JS error object
 * @param {number|string|undefined} code custom error code
 * @param {string|undefined} message custom error message
 * @param {any|undefined} data custom object with additional data which will be appended to response
 */
export type customErrorObject = {
	error?: any;
	code?: number | string;
	message?: string;
	data?: any;
};
