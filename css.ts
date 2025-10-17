import {
	backgroundAttachment,
	backgroundPosition,
	backgroundRepeat,
	lengthUnits,
	lengthUnitsGrid,
	sizeOptions,
	textAlign,
	widthOptions,
	type overlayEffects,
} from "../digitalniweb-custom/variables/css";
export type sizeOptions = (typeof sizeOptions)[number];
export type widthOptions = (typeof widthOptions)[number];

export type overlayEffects = (typeof overlayEffects)[number][];

export type background = {
	color?: string;
	image?: string;
	attachment?: (typeof backgroundAttachment)[number];
	position?: (typeof backgroundPosition)[number];
	repeat?: (typeof backgroundRepeat)[number];
	overlay?: overlayEffects;
};
export type textAlign = (typeof textAlign)[number];
export type lengthUnits = (typeof lengthUnits)[number];
export type lengthUnitsGrid = (typeof lengthUnitsGrid)[number];

export type containerOptions = {
	class?: string;
	customClass?: string;
	minHeight?: string;
	width?: widthOptions;
	elevation?: sizeOptions;
	border?: sizeOptions;
	padding?: sizeOptions;
	margin?: sizeOptions;
	textAlign: textAlign;
	background?: background;
};
