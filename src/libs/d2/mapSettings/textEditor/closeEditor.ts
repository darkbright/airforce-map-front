import { ICKEditorUIMethod } from "../../../../types/d2/Core/ICkEditorUI";
import { IGraphicUtil } from "../../../../types/d2/Core/IGraphicUtil";
import { IEditor } from "../../../../types/d2/Core/ITextEditorPopupUI";
import { IGraphicObject } from "../../../../types/d2/Graphic";
import D2MapModule from "../../D2MapModule";
import { updateObjectSize } from "./updateObjectSize";

const { GraphicUtil } = D2MapModule;
const graphicUtil: IGraphicUtil = GraphicUtil;

/**
 * 텍스트 에디터 닫기
 * @param selectedObject
 * @param ckeditorObject
 * @param ckeUI
 * @returns
 */
export const closeEditor = (
	selectedObject: IGraphicObject | undefined,
	ckeditorObject: IEditor,
	ckeUI: ICKEditorUIMethod,
) => {
	if (selectedObject === undefined) {
		return;
	}

	const possibleEditorType = ["textEditor", "table"];
	const editorType = selectedObject?._prop.type;

	if (!possibleEditorType.some((t) => t === editorType)) return;

	const popupElement = document.querySelector("#d2map_popup-text-editor-popup") as HTMLElement;
	const editorElement = document.querySelector("#d2map_popup-text-editor") as HTMLElement;

	if (popupElement.style.display === "none") return;

	selectedObject._showTracker = true;
	selectedObject.destroyTextEditFeature();

	const foundCkeEditor = document.querySelector(`#${ckeditorObject.name}`) as HTMLElement;
	const { backgroundColor, borderColor, borderWidth, backgroundImage } = foundCkeEditor.style;

	if (editorType === "textEditor") {
		console.log("popupElement", popupElement.style.display);
		selectedObject._style.fill.color = graphicUtil.hex2rgb(backgroundColor);
		selectedObject._style.line.color = graphicUtil.hex2rgb(borderColor);
		selectedObject._style.line.width = Number(borderWidth.split("px")[0]);
		selectedObject._prop.editorScale = backgroundImage.split(".png")[0].split("/").pop()!;
	}

	const data = ckeditorObject.getData();

	if (editorType === "table") {
		updateObjectSize(selectedObject, ckeditorObject);
		if (data === "") {
			selectedObject.destroy();
			window.graphic._selectGraphicBoard.sortZIndex();
			window.graphic.layerMessage("SelectedObjectRemove", window.graphic._selectGraphicBoard);
		}
		selectedObject = undefined;
		ckeUI.unsetSelectObject();

		return false;
	}

	selectedObject.setEditorInfo(data);

	popupElement.style.display = "none";
	console.log("popup on close", popupElement.style.display);
	editorElement.blur();

	window.graphic._selectObjectManager.clear();
	window.graphic._selectObjectManager.add(selectedObject);
	window.graphic._selectObjectManager.selectObject(false);

	//selectedObject 해제
	selectedObject = undefined;
	ckeUI.unsetSelectObject();
	foundCkeEditor.style.background = "#fff";
	foundCkeEditor.style.border = "1px solid #000000";

	window.graphic.getSelectGraphicBoard().undoRedoSave();
};
