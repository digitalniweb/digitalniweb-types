/**
 * 'widget': 'widget model'
 *
 * 'widget' - name of the widget in camelCase
 */
type widgetsMap = {
	text: "Text";
	carousel: "Carousel";
	news: "News";
	form: "Form";
	columnsTwo: "ColumnsTwo";
	columnsThree: "ColumnsThree";
	columnsFour: "ColumnsFour";
	columnsImageLeft: "ColumnsImageLeft";
	columnsImageRight: "ColumnsImageRight";
};
export type widgets = keyof widgetsMap;
export type widgetNames = widgetsMap[keyof widgetsMap];
