import { languages } from "../../../../digitalniweb-types";
import {
	Role,
	Language,
} from "../../../../digitalniweb-types/models/globalData";
export type globalDataModelsListMapType = {
	roles: Role;
	languages: Language;
};

export type globalDataListWhereMap = {
	id?: number[];
	name?: string[];
	code?: languages[];
};
