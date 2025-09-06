import type { ArticleWidget } from "../models/content";
import { widgetModels } from "../../digitalniweb-custom/variables/widgets";
/**
 * 'widget name': 'widget model name'
 */
type widgetsDefault = {};
export type widgetsArticle = { text: "WidgetText"; banner: "WidgetBanner" };
// |
// "carousel" |
// "news" |
// "form" |
// "layout two columns" |
// "layout three columns" |
// "layout four columns" |
// "layout two columns image left" |
// "layout two columns image right";

export type modulesWidgetsContent = ArticleWidget; // | OtherModuleWidget | AnotherModuleWidget | ...

type widgetsMap = widgetsDefault & widgetsArticle;

export type widgets = keyof widgetsMap;
export type widgetModels = typeof widgetModels;
