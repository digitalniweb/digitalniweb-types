import { resourceIdsType } from "..";
import { ParsedQs } from "qs";

export type getArticleQuery = ParsedQs & {
	resourceIds: resourceIdsType | string; // string because after inside body (req.body) it might not be parsed to object
	url: string;
};
