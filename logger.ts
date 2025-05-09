import type { resourceIdsType } from "./apps/communication";
import type { HTTPMethods } from "./httpMethods";

export type logErrorObject = {
	statusCode: number; // http status code
	message: string;
	code?: string | number;
};
export type logObject = {
	req: {
		url: string;
		method: HTTPMethods | string;
		body?: Object;
		query?: any;
		params?: any;
	};
	error?: logErrorObject;
	caller?: {
		resourceIds?: resourceIdsType;
		ip?: string;
		ua?: string;
	};
	callee: {
		serviceType: "app" | "microservice";
		serviceId: number;
	};
	time: string | Date;
};
