import { Model } from "sequelize";
import type {
	CreationOptional,
	InferAttributes,
	InferCreationAttributes,
	BelongsToGetAssociationMixin,
	ForeignKey,
	HasManyAddAssociationsMixin,
	HasManySetAssociationsMixin,
	HasManyCreateAssociationMixin,
} from "sequelize";
import type { UUID } from "node:crypto";
import type { Role } from "./globalData";
export interface Tenant
	extends Model<InferAttributes<Tenant>, InferCreationAttributes<Tenant>> {
	id: CreationOptional<number>;
	UserId: ForeignKey<User["id"]>;
	countryId?: number;
	academicDegree?: string;
	firstName: string;
	lastName: string;
	telephone: string;
	city: string;
	zip: string;
	streetAddress: string;
	houseNumber: number;
	landRegistryNumber: number;
	company: boolean;
	companyName?: string;
	tin?: string;
	vatId?: string;
	subscribeNewsletters: boolean;

	findUser: BelongsToGetAssociationMixin<User>;
}
export interface User
	extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
	id: CreationOptional<number>;
	uuid: CreationOptional<UUID>;
	/**
	 * If credit is `null` then don't show information about credit or show some other information, not 0
	 */
	credit?: number;
	nickname?: string;
	email: string;
	password: string;
	refreshTokenSalt: CreationOptional<string>;
	roleId?: number;
	websiteId?: number;
	websitesMsId?: number;
	active: boolean;
	createdAt?: CreationOptional<Date>;
	updatedAt?: CreationOptional<Date>;
	deletedAt?: Date;
	Tenant?: Tenant;
	UserPrivileges?: UserPrivilege[];
	UserModules?: UserModule[];
	role?: InferAttributes<Role>;

	UserModulesIds?: number[]; // NonAttribute
	websiteUuid?: UUID; // NonAttribute

	addUserModules: HasManyAddAssociationsMixin<UserModule, number>;
	setUserModules: HasManySetAssociationsMixin<UserModule, number>;
	createUserModule: HasManyCreateAssociationMixin<UserModule>;
	/* Privileges: NonAttribute<Privilege[]>;

		addPrivileges: HasManyAddAssociationsMixin<Privilege, number>;
		getRole: HasOneGetAssociationMixin<Role>; */
}

// ? I guess this should be removed
export interface UserPrivilege
	extends Model<
		InferAttributes<UserPrivilege>,
		InferCreationAttributes<UserPrivilege>
	> {
	id: CreationOptional<number>;
	UserId: CreationOptional<number>;
	actionId: CreationOptional<number>;
}

export interface UserModule
	extends Model<
		InferAttributes<UserModule>,
		InferCreationAttributes<UserModule>
	> {
	id: CreationOptional<number>;
	UserId: CreationOptional<number>;
	moduleId: CreationOptional<number>;
}
export interface Blacklist
	extends Model<
		InferAttributes<Blacklist>,
		InferCreationAttributes<Blacklist>
	> {
	id: CreationOptional<number>;
	service: string;
	type: string;
	value: string;
	reason?: string;
	otherData?: any;
	blockedTill: Date;

	createdAt?: CreationOptional<Date>;
	deletedAt?: Date;
}
export interface LoginLog
	extends Model<
		InferAttributes<LoginLog>,
		InferCreationAttributes<LoginLog>
	> {
	id: CreationOptional<number>;
	UserId: number;
	websiteId: number;
	websitesMsId: number;
	ip: string;
	successful: boolean;
	unsuccessfulCount: number;

	createdAt?: CreationOptional<Date>;
}

export interface WrongLoginLog
	extends Model<
		InferAttributes<WrongLoginLog>,
		InferCreationAttributes<WrongLoginLog>
	> {
	id: CreationOptional<number>;
	userLogin?: string;
	websiteId: number;
	websitesMsId: number;
	ip?: string;
	unsuccessfulCount: number;
	createdAt?: CreationOptional<Date>;
}
