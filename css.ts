import type {
	backgroundAttachment,
	backgroundPosition,
	backgroundRepeat,
	lengthUnits,
	lengthUnitsGrid,
	textAlign,
} from "../digitalniweb-custom/variables/css";

export type background = {
	color?: string;
	image?: string;
	attachment?: (typeof backgroundAttachment)[number];
	position?: (typeof backgroundPosition)[number];
	repeat?: (typeof backgroundRepeat)[number];
};
export type textAlign = (typeof textAlign)[number];
export type lengthUnits = (typeof lengthUnits)[number];
export type lengthUnitsGrid = (typeof lengthUnitsGrid)[number];
