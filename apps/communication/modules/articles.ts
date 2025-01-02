import { InferAttributes } from "sequelize";
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

export type saveArticleQuery = {
	menudata: InferAttributes<Article>;
	newMenuOrders: orderDataObject[];
	newMenuUrls: urlDataObject[];
	widgetContent: {
		deletedWCs: number[];
		newWCs: WidgetContentCreate[];
		editedWCs: Partial<InferAttributes<WidgetContent>>[];
	};
};

export type getsaveArticleQuery = useApiCallQuery & saveArticleQuery;
