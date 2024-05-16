import { WidgetContent } from "../../../models/content";

export type moduleResponse<T> = {
	moduleInfo: T;
	widgetContents: WidgetContent[];
};
