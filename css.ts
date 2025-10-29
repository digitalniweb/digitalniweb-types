import {
	backgroundAttachment,
	backgroundPosition,
	backgroundRepeat,
	headingTypes,
	lengthUnits,
	lengthUnitsGrid,
	overlayEffects,
	sizeOptions,
	textAlign,
	widthOptions,
} from "../digitalniweb-custom/variables/css";
export type sizeOptions = (typeof sizeOptions)[number];
export type widthOptions = (typeof widthOptions)[number];

export type overlayEffect = (typeof overlayEffects)[number];
export type overlayEffects = overlayEffect[];
export type overlayEffectsObject = {
	name: overlayEffect;
	title: string;
};

export type background = {
	color?: string;
	image?: string;
	attachment?: (typeof backgroundAttachment)[number];
	position?: (typeof backgroundPosition)[number];
	repeat?: (typeof backgroundRepeat)[number];
	overlay?: overlayEffects;
};
export type backgroundProperties = keyof background;

export type textAlign = (typeof textAlign)[number];
export type lengthUnits = (typeof lengthUnits)[number];
export type lengthUnitsGrid = (typeof lengthUnitsGrid)[number];

export type containerOptions = {
	class?: string;
	height100?: boolean;
	width?: widthOptions;
	elevation?: Extract<sizeOptions, "none" | "small" | "large">;
	border?: Extract<sizeOptions, "none" | "small" | "large">;
	borderRadius?: Extract<sizeOptions, "none" | "small" | "large">;
	padding?: Extract<sizeOptions, "none" | "small" | "large">;
	margin?: Extract<sizeOptions, "none" | "small" | "large">;
	textAlign?: Extract<textAlign, "right" | "left" | "center">;
	background?: background;
};

export type headingTypes = (typeof headingTypes)[number];

export type textClasses = "none" | "caption" | "subtitle" | "overline";
export type textWeight =
	| "thin"
	| "light"
	| "regular"
	| "medium"
	| "bold"
	| "black";

export type headingOptions = {
	show?: boolean;
	type?: headingTypes;
	class?: textClasses;
	weight?: textWeight;
	italic?: boolean;
	uppercase?: boolean;
};
