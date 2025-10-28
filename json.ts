/**
 * This type can be either `object or array of objects = JSON` or `string = serialized JSON`
 * Simultaneously an object and string; must be tested before use
 */
type serializableJSONTypes = serializableJSONTypes[] | Record<string, any>;
export type serializableJSON<T extends serializableJSONTypes> = T | string;
