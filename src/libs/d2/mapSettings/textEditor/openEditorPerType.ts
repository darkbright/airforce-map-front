import { ICKEditorUIMethod } from "../../../../types/d2/Core/ICkEditorUI";
import { IEditor } from "../../../../types/d2/Core/ITextEditorPopupUI";
import { IGraphicObject } from "../../../../types/d2/Graphic";
import { openTableEditor } from "./openTableEditor";
import { openTextEditor } from "./openTextEditor";

/**
 * 에디터의 종류 즉, 일반 텍스트 에디터인지 테이블 그리기인지를 선택하여 해당 기능을 호출함
 * @param object IGraphicObject
 * @param ckeUI ICKEditorUIMethod
 * @param ckeditorObject IEditor
 */
export const openEditorPerType = (
	object: IGraphicObject,
	ckeUI: ICKEditorUIMethod,
	ckeditorObject: IEditor,
) => {
	const { type } = object._prop;
	if (type === "textEditor") {
		openTextEditor(object, ckeUI, ckeditorObject);
	}
	if (type === "table") {
		openTableEditor(object, ckeUI, ckeditorObject);
	}
};
