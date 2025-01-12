import { CreationAttributes, InferAttributes } from "sequelize";
import { useApiCallQuery } from "..";
import { Article, WidgetContent } from "../../../models/content";
import { WidgetContentCreate } from "../../../.";

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
		previousLocation: orderDataObject; // might be the same location. This info is needed for change to new location
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
