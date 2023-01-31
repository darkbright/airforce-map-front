import { ICKEditorUIMethod } from "../../../../types/d2/Core/ICkEditorUI";
import { IEditor } from "../../../../types/d2/Core/ITextEditorPopupUI";
import { IGraphicObject } from "../../../../types/d2/Graphic";
import { openEditorPerType } from "./openEditorPerType";

/**
 * 지도 상 툴바 그리기에서 text 버튼 클릭 시 나타나게 되는 에디터의 지도 상 위치를 선정함
 * @param object IGraphicObject
 * @param ckeUI ICKEditorUIMethod
 * @param ckeditorObject IEditor
 * @returns false | undefined
 */
export const openPopup = (
	object: IGraphicObject,
	ckeUI: ICKEditorUIMethod,
	ckeditorObject: IEditor,
) => {
	let width = object.getWidth();
	let height = object.getHeight();

	if (width <= 5 || height <= 5) return false;

	const mapElement = window.map.getTargetElement();
	const screenSize = [mapElement.clientWidth, mapElement.clientHeight];
	const minPosition = window.map.getPixelFromCoordinate([
		object._prop.bound.minX,
		object._prop.bound.minY,
	]);
	const maxPosition = window.map.getPixelFromCoordinate([
		object._prop.bound.maxX,
		object._prop.bound.maxY,
	]);

	if (
		minPosition[0] < 0 ||
		maxPosition[1] < 0 ||
		maxPosition[0] > screenSize[0] ||
		minPosition[1] > screenSize[1]
	) {
		let count = 0;
		while (width > screenSize[0] || height > screenSize[1]) {
			width = width / 2;
			height = height / 2;
			++count;
		}
		const currentZoom = window.map.getView().getZoom() - count;
		object._showTracker = false;

		window.map.getView().animate(
			{
				zoom: currentZoom,
				center: object._prop.getCenter(),
				duration: 500,
			},
			function () {
				openEditorPerType(object, ckeUI, ckeditorObject);
			},
		);
	}
};
