import { InferAttributes } from "sequelize";
import { useApiCallQuery } from "..";
import { Article, WidgetContent } from "~/digitalniweb-types/models/content";
import { WidgetContentCreate } from "~/digitalniweb-types";

export type getArticleQuery = useApiCallQuery & {
	url: string;
};

export type orderDataObject = {
	id: number;
	order: number;
	parentId: number | null | undefined;
};

export type saveArticleQuery = {
	menudata: InferAttributes<Article>;
	newMenuOrders: orderDataObject[];
	widgetContent: {
		deletedWCs: number[];
		newWCs: WidgetContentCreate[];
		editedWCs: Partial<InferAttributes<WidgetContent>>[];
	};
};

export type getsaveArticleQuery = useApiCallQuery & saveArticleQuery;
