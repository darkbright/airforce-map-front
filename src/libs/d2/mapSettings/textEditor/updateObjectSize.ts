import { IEditor } from "../../../../types/d2/Core/ITextEditorPopupUI";
import { IGraphicObject } from "../../../../types/d2/Graphic";

/**
 * 도형의 사이즈를 조절함
 * @param selectedObject IGraphicObject
 * @param ckeditorObject IEditor
 */
export const updateObjectSize = (selectedObject: IGraphicObject, ckeditorObject: IEditor) => {
	const popupElement = document.querySelector("#d2map_popup-text-editor-popup") as HTMLElement;

	const element = ckeditorObject.element.$;
	const foundElement = element.querySelector("table");

	const scale = selectedObject.getScale();
	const width = foundElement.clientWidth * scale;
	const height = foundElement.clientHeight * scale;

	const pixelPosition1 = [
		Number(popupElement.style.left.replace("px", "")),
		Number(popupElement.style.top.replace("px", "")),
	];

	const pixelPosition2 = [pixelPosition1[0] + width, pixelPosition1[1] + height];
	const coord1 = window.map.getCoordinateFromPixel(pixelPosition1);
	const coord2 = window.map.getCoordinateFromPixel(pixelPosition2);

	selectedObject._prop.setCoordinate([coord1, coord2]);
	selectedObject.updateFeature();
	selectedObject.updateBound();
};
