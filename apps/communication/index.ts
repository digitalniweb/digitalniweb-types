import type { ParsedQs } from "qs";
import type { serializableJSON } from "../../json";
export type resourceIdsType = {
	websiteId: number;
	websitesMsId: number;
	contentMsId: number;
	moduleId: number;
	languageId: number;
	appId: number;
	usersMsId: number;
};

export type useApiCallQuery = ParsedQs & {
	resourceIds: serializableJSON<resourceIdsType>; // string because h3 ('getQuery(event)') stringifies objects to strings if used in GET method via url
};
