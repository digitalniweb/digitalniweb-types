import { useApiCallQuery } from "..";

export type getArticleQuery = useApiCallQuery & {
	url: string;
};
