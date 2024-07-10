import { languages } from "../../../../digitalniweb-types";
import {
	Role,
	Language,
	Module,
} from "../../../../digitalniweb-types/models/globalData";
export type globalDataModelsListMapType = {
	roles: Role;
	languages: Language;
	modules: Module;
};

export type globalDataListWhereMap = {
	id?: number[];
	name?: string[];
	code?: languages[];
};
