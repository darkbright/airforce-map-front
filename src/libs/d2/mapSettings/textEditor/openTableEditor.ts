import { ICKEditorUIMethod } from "../../../../types/d2/Core/ICkEditorUI";
import { IGraphicUtil } from "../../../../types/d2/Core/IGraphicUtil";
import { IEditor } from "../../../../types/d2/Core/ITextEditorPopupUI";
import { IGraphicObject } from "../../../../types/d2/Graphic";
import D2MapModule from "../../D2MapModule";
import { lockButtonHandler } from "./lockButtonHandler";
import { openPopup } from "./openPopup";

const { GraphicUtil } = D2MapModule;
const graphicUtil: IGraphicUtil = GraphicUtil;

/**
 * 지도 위 그리기 중 테이블 그리기 버튼 클릭 시 테이블 그리기 핸들링을 하는 기능임
 * @param object IGraphicObject
 * @param ckeUI ICKEditorUIMethod
 * @param ckeditorObject IEditor
 * @returns void
 */

export const openTableEditor = (
	object: IGraphicObject,
	ckeUI: ICKEditorUIMethod,
	ckeditorObject: IEditor,
) => {
	if (object === undefined) return;
	if (object._prop.type !== "table") return;

	ckeUI.setSelectObject(object);

	const popupElement = document.getElementById("d2map_popup-text-editor") as HTMLElement;

	const editorValue = object.getEditorInfo();

	ckeditorObject.setData(editorValue);
	ckeditorObject.resetUndo();

	if (openPopup(object, ckeUI, ckeditorObject) === false) return;

	popupElement.classList.remove("textEditor");
	popupElement.classList.add("table");
	popupElement.style.background = `${graphicUtil.rgb2hex([0, 0, 0, 0])}`;
	popupElement.style.border = "0";

	if (ckeditorObject.ui) {
		const bgStyle = document.querySelector(
			"#" + ckeditorObject.ui.get("bgstyle")._.id,
		)! as HTMLElement;
		bgStyle.style.display = "none";
	}

	lockButtonHandler(object);

	object.showTextEditFeature();

	window.graphic._selectObjectManager.clearTracker();
};
