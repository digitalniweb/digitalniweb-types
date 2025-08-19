import type { CreationAttributes } from "sequelize";
import type { Website } from "../../../models/websites";
import type { languages } from "../../..";

export type createWebsiteRequest = {
	websiteData: CreationAttributes<Website>;
	websiteUrl: string;
	languages: languages[];
};
export type addWebsiteModulesRequest = {
	moduleIds: number[];
	websiteId: number;
};
