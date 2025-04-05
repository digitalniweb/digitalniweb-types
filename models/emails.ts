import { Model } from "sequelize";

import type {
	CreationOptional,
	InferAttributes,
	InferCreationAttributes,
} from "sequelize";

export interface User
	extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
	id: CreationOptional<number>;
	username: string;
	password: string;
	/**
	 * Maximum disk usage in bytes
	 */
	discUsageMax: number;
	discUsageCurrent?: number;
	/**
	 * Maximum numbers of emails
	 */
	messageCountMax: number;
	messageCountCurrent?: number;
	mailboxName: string;
	websitesMsId: number;
	active: boolean;
}
