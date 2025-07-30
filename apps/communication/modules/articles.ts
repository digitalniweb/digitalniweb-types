import type { CreationAttributes, InferAttributes } from "sequelize";
import type { useApiCallQuery } from "..";
import type { Article, ArticleWidget } from "../../../models/content";

export type getArticleQuery = useApiCallQuery & {
	url: string;
};

export type orderDataObject = {
	id: number;
	order: number;
	parentId: number | null;
};

export type urlDataObject = { id: number; url: string };

export type saveNewArticleRequestBody = {
	menu: CreationAttributes<Article>;
	widgets?: {
		new?: ArticleWidget[];
	};
};

export type getSaveNewArticleRequestBody = useApiCallQuery &
	saveNewArticleRequestBody;

export type editArticleRequestBody = {
	menu: {
		id: number;
		data?: Partial<InferAttributes<Article>>;
		newMenuUrls?: urlDataObject[];
	};
	widgets?: {
		newWCs?: ArticleWidget[];
		deletedWCs?: number[];
		editedWCs?: Partial<InferAttributes<ArticleWidget>>[];
	};
};
export type getEditArticleRequestBody = useApiCallQuery &
	editArticleRequestBody;

export type deleteArticleRequestBody = {
	id: number;
};
export type getDeleteArticleRequestBody = useApiCallQuery &
	deleteArticleRequestBody;
