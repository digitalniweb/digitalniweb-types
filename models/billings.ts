import { Model } from "sequelize";
import type {
	CreationOptional,
	InferAttributes,
	InferCreationAttributes,
	ForeignKey,
} from "sequelize";
export interface Invoice
	extends Model<InferAttributes<Invoice>, InferCreationAttributes<Invoice>> {
	id: CreationOptional<number>;
	invoiceNumber: string;
	amount: number;
	currencyId: number;
	statusId: number;
	CreditBalanceLogId?: ForeignKey<CreditBalanceLog["id"]>;
	dueDate: Date;
	createdAt?: CreationOptional<Date>;
	updatedAt?: CreationOptional<Date>;
	deletedAt?: Date;
}
export interface CreditBalanceLog
	extends Model<
		InferAttributes<CreditBalanceLog>,
		InferCreationAttributes<CreditBalanceLog>
	> {
	id: CreationOptional<number>;
	CreditBalanceTypeId: ForeignKey<CreditBalanceType["id"]>;
	appId: number;
	userId: number;
	websiteId: number;
	creditDifference: number;
	createdAt?: CreationOptional<Date>;
}
export interface CreditBalanceCompletionLog
	extends Model<
		InferAttributes<CreditBalanceCompletionLog>,
		InferCreationAttributes<CreditBalanceCompletionLog>
	> {
	id: CreationOptional<number>;
	CreditBalanceTypeId: ForeignKey<CreditBalanceType["id"]>;
	appId: number;
	completed: boolean;
	createdAt?: CreationOptional<Date>;
}
export interface CreditBalanceModule
	extends Model<
		InferAttributes<CreditBalanceModule>,
		InferCreationAttributes<CreditBalanceModule>
	> {
	id: CreationOptional<number>;
	CreditBalanceLogId: number;
	moduleId: number;
}

export interface CreditBalanceType
	extends Model<
		InferAttributes<CreditBalanceType>,
		InferCreationAttributes<CreditBalanceType>
	> {
	id: CreationOptional<number>;
	name: string;
	description?: string;
}
