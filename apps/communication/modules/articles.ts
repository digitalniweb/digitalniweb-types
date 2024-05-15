import { resourceIds } from "..";

export type getArticleQuery = typeof getQuery & {
	resourceIds: resourceIds;
	url: string;
};
