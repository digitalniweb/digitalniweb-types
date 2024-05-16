import { resourceIds } from "..";
import { ParsedQs } from "qs";

export type getArticleQuery = ParsedQs & {
	resourceIds: resourceIds;
	url: string;
};
