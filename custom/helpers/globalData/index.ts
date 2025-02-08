import { languages } from "../../../../digitalniweb-types";
import {
	Role,
	Language,
	Module,
	Widget,
} from "../../../../digitalniweb-types/models/globalData";
export type globalDataModelsListMapType = {
	roles: Role;
	languages: Language;
	modules: Module;
	widgets: Widget;
};

export type globalDataListWhereMap = {
	id?: number[];
	name?: string[];
	code?: languages[];
};
