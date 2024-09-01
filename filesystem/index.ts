export type fileSystemFile = {
	path: string;
	name: string;
	size: number;
	extension: string;
	mtime: Date;
};
export type fileSystemDirectory = {
	path: string;
	basename: string;
};
export type fileSystemItems = {
	files: fileSystemFile[];
	dirs: fileSystemDirectory[];
};
