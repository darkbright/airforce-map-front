import { ICKEditorUIMethod } from "../../../../types/d2/Core/ICkEditorUI";
import { IGraphicUtil } from "../../../../types/d2/Core/IGraphicUtil";
import { IEditor } from "../../../../types/d2/Core/ITextEditorPopupUI";
import { IGraphicObject } from "../../../../types/d2/Graphic";
import D2MapModule from "../../D2MapModule";
import { setEditorStyle } from "./editorStyle";
import { lockButtonHandler } from "./lockButtonHandler";
import { openPopup } from "./openPopup";

const { GraphicUtil } = D2MapModule;

const graphicUtil: IGraphicUtil = GraphicUtil;

/**
 * 지도 위 툴바를 통해 text 입력 버튼 클릭 시 나타나게 되는 에디터(텍스트와 테이블로 분기됨) 중 텍스트 에디터를 여는 기능임
 * @param object IGraphicObject
 * @param ckeUI ICKEditorUIMethod
 * @param ckeditorObject IEditor
 * @returns void
 */
export const openTextEditor = (
	object: IGraphicObject,
	ckeUI: ICKEditorUIMethod,
	ckeditorObject: IEditor,
) => {
	if (object === undefined) return;
	if (object._prop.type !== "textEditor") return;

	const editorElement = document.querySelector("#d2map_popup-text-editor") as HTMLElement;
	const popupElement = document.querySelector("#d2map_popup-text-editor-popup") as HTMLElement;

	ckeUI.setSelectObject(object);
	const value = object.getEditorInfo();

	ckeditorObject.setData(value);
	ckeditorObject.resetUndo();

	if (openPopup(object, ckeUI, ckeditorObject) === false) return;

	editorElement?.classList.remove("table");
	editorElement?.classList.add("textEditor");
	editorElement.style.background = `${graphicUtil.rgb2hex(object._style.fill.color)}`;
	editorElement.style.border = `${object._style.line.width}px solid ${graphicUtil.rgb2hex(
		object._style.line.color,
	)}`;

	if (ckeditorObject.ui) {
		const bgStyle = document.querySelector(
			"#" + ckeditorObject.ui.get("bgstyle")._.id,
		)! as HTMLElement;
		bgStyle.style.display = "block";
	}

	const width = object.getWidth();
	const height = object.getHeight();

	const minPosition = window.map.getPixelFromCoordinate([
		object._prop.bound.minX,
		object._prop.bound.minY,
	]);
	const maxPosition = window.map.getPixelFromCoordinate([
		object._prop.bound.maxX,
		object._prop.bound.maxY,
	]);

	setEditorStyle({
		editorElement,
		popupElement,
		selectedObject: object,
		width,
		height,
		offsetX: 0,
		offsetY: 0,
		top: maxPosition[1],
		left: minPosition[0],
	});

	lockButtonHandler(object);

	object.showTextEditFeature();
	window.graphic._selectObjectManager.clearTracker();
};
