import {
	Model,
	CreationOptional,
	InferAttributes,
	InferCreationAttributes,
	BelongsToGetAssociationMixin,
	ForeignKey,
} from "sequelize";
import { UUID } from "node:crypto";
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
	active: boolean;
	createdAt?: CreationOptional<Date>;
	updatedAt?: CreationOptional<Date>;
	deletedAt?: Date;
	Tenant?: Tenant;
	/* Privileges: NonAttribute<Privilege[]>;

		addPrivileges: HasManyAddAssociationsMixin<Privilege, number>;
		getRole: HasOneGetAssociationMixin<Role>; */
}

export interface UserPrivilege
	extends Model<
		InferAttributes<UserPrivilege>,
		InferCreationAttributes<UserPrivilege>
	> {
	id: CreationOptional<number>;
	UserId: CreationOptional<number>;
	actionId: CreationOptional<number>;
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
	userLogin: string;
	UserId?: number | null;
	ip: string;
	userAgent: Object;
	successful: boolean;

	createdAt?: CreationOptional<Date>;
}
