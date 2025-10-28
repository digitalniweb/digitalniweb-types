/**
 * This type can be either `object or array of objects = JSON` or `string = serialized JSON`
 * DataTypes.JSON is treated like object but is actually stored as text (serialized object) in Mariadb database.
 * So I want it to be exactly that - simultaneously an object and string and test it before using.
 */
type serializableJSONTypes = serializableJSONTypes[] | Record<string, any>;
export type serializableJSON<T extends serializableJSONTypes> = T | string;
