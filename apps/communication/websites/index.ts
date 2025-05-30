import type { CreationAttributes } from "sequelize";
import type { Website } from "../../../models/websites";

export type createWebsiteRequest = {
	websiteData: CreationAttributes<Website>;
	websiteUrl: string;
};
