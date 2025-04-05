import type { InferAttributes } from "sequelize";
import type { WidgetContent } from "../../../models/content";

export type moduleResponse<T> = {
	moduleInfo: T;
	widgetContents: InferAttributes<WidgetContent>[];
};
