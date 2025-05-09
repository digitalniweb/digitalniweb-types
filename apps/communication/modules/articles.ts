import type { CreationAttributes, InferAttributes } from "sequelize";
import type { useApiCallQuery } from "..";
import type { Article, WidgetContent } from "../../../models/content";
import type { WidgetContentCreate } from "../../../.";

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
	menu: {
		data: CreationAttributes<Article>;
	};
	widgetContent?: {
		newWCs?: WidgetContentCreate[];
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
	widgetContent?: {
		newWCs?: WidgetContentCreate[];
		deletedWCs?: number[];
		editedWCs?: Partial<InferAttributes<WidgetContent>>[];
	};
};
export type getEditArticleRequestBody = useApiCallQuery &
	editArticleRequestBody;

export type deleteArticleRequestBody = {
	id: number;
};
export type getDeleteArticleRequestBody = useApiCallQuery &
	deleteArticleRequestBody;
