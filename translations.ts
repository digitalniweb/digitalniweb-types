import type { languages } from "./";
export type translations = {
	[key: string]: {
		[key in languages]?: string;
	};
};
