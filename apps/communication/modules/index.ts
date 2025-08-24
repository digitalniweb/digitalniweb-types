import type { InferAttributes } from "sequelize";
import type { modulesWidgetsContent } from "~/digitalniweb-types/functionality/widgets";
// !!! delete this file after changing this to ArticleWidget type returned in admin maybe?
export type moduleResponse<T> = {
	moduleInfo: T;
	widgetContents: InferAttributes<modulesWidgetsContent>[];
};
