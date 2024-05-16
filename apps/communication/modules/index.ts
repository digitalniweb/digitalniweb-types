import { WidgetContent } from "~/digitalniweb-types/models/content";

export type moduleResponse<T> = {
	moduleInfo: T;
	widgetContents: WidgetContent[];
};
