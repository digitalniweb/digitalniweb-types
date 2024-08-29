export type fileSystemFile = {
	path: string;
	name: string;
	size: number;
	extension: string;
};
export type fileSystemDirectory = {
	path: string;
	basename: string;
};
export type fileSystemItems = {
	files: fileSystemFile[];
	dirs: fileSystemDirectory[];
};
