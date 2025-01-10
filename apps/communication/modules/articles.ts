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
	parentId: number | null | undefined;
};

export type urlDataObject = { id: number; url: string };

export type saveNewArticleQuery = {
	menu: {
		data: CreationAttributes<Article>;
		newMenuOrders?: orderDataObject[];
	};
	widgetContent?: {
		newWCs?: WidgetContentCreate[];
	};
};

export type getSaveNewArticleQuery = useApiCallQuery & saveNewArticleQuery;

export type editArticleQuery = {
	menu: {
		id: number;
		data?: Partial<InferAttributes<Article>>;
		newMenuOrders?: orderDataObject[];
		newMenuUrls?: urlDataObject[];
	};
	widgetContent?: {
		newWCs?: WidgetContentCreate[];
		deletedWCs?: number[];
		editedWCs?: Partial<InferAttributes<WidgetContent>>[];
	};
};
export type getEditArticleQuery = useApiCallQuery & editArticleQuery;

export type deleteArticleQuery = { id: number };
export type getDeleteArticleQuery = useApiCallQuery & deleteArticleQuery;
