import { InferAttributes } from "sequelize";
import { WidgetContent } from "../../../models/content";

export type moduleResponse<T> = {
	moduleInfo: T;
	widgetContents: InferAttributes<WidgetContent>[];
};
