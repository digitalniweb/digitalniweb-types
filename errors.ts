export type errorResponse = {
	statusCode: number; // http status code
	message: string;
	name?: string;
	messageTranslate?: string; // used in translate(messageTranslate)
	data?: any;
	code?: string | number;
};
