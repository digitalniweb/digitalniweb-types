import type { InferAttributes } from "sequelize";
import type { ArticleWidget } from "../../../models/content";

type widgets = ArticleWidget; // | OtherModuleWidget | AnotherModuleWidget | ...

export type moduleResponse<T> = {
	moduleInfo: T;
	widgetContents: InferAttributes<widgets>[];
};
