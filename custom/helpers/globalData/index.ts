import { globalDataListWhereMap } from "../../../../digitalniweb-custom/variables/globaldata";
import { languages } from "../../../../digitalniweb-types";
export type globalDataModelsListMap = typeof globalDataListWhereMap;

export type globalDataListWhereMap = {
	id?: number[];
	name?: string[];
	code?: languages[];
};
