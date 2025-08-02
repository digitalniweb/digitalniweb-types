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

type widgetsMap = widgetsDefault & widgetsArticle;

export type widgets = keyof widgetsMap;
export type widgetModels = widgetsMap[keyof widgetsMap];
