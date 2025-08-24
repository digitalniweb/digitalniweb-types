import type { CreationAttributes } from "sequelize";
import type { Website } from "../../../models/websites";
import type { languages } from "../../..";
import type { modules } from "~/digitalniweb-types/functionality/modules";

export type createWebsiteRequest = {
	websiteData: CreationAttributes<Website>;
	websiteUrl: string;
	languages: languages[];
	modules: modules[];
};
export type addWebsiteModulesRequest = {
	moduleIds: number[];
	websiteId: number;
};
