import type { WidgetText, WidgetBanner } from "../models/content";

/**
 * 'widget name': 'widget model'
 */
type widgetsDefault = { text: WidgetText; banner: WidgetBanner };
// |
// "carousel" |
// "news" |
// "form" |
// "layout two columns" |
// "layout three columns" |
// "layout four columns" |
// "layout two columns image left" |
// "layout two columns image right";

type widgetsMap = widgetsDefault;

export type widgets = keyof widgetsMap;
export type widgetModels = widgetsMap[keyof widgetsMap];
