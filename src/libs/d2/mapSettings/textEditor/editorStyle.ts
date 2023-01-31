import { IGraphicObject } from "../../../../types/d2/Graphic";

interface EditorStyleProps {
	editorElement: any;
	popupElement: any;
	selectedObject: IGraphicObject;
	width: number;
	height: number;
	offsetX: number;
	offsetY: number;
	top: number;
	left: number;
}

/**
 * 지도 위 텍스트 에디터의 스타일을 지정함
 * @param EditorStyleProps EditorStyleProps
 */
export const setEditorStyle = ({
	editorElement,
	popupElement,
	selectedObject,
	width,
	height,
	offsetX,
	offsetY,
	top,
	left,
}: EditorStyleProps) => {
	const scale = selectedObject.getScale();

	editorElement.style.color = "rgb(0, 0, 0)";
	editorElement.style.transform = `scale(${scale})`;
	editorElement.style.transformOrigin = "left top";

	if (selectedObject._prop.type === "table") {
		const tableElement = popupElement.querySelector("table");

		tableElement.style.width = `${width / scale}px`;
		tableElement.style.height = `${width / scale}px`;

		editorElement.style.width = "auto";
		editorElement.style.height = "auto";
		editorElement.style.display = "inline-block";
	} else if (selectedObject._prop.type === "textEditor") {
		editorElement.style.width = `${(width / scale) * 2}px`;
		editorElement.style.height = `${height / scale}px`;
		editorElement.style.display = "block";
	}

	popupElement.style.width = `${width}px`;
	popupElement.style.height = `${height}px`;
	popupElement.style.top = `${top + offsetY}px`;
	popupElement.style.left = `${left + offsetX}px`;
	popupElement.style.display = "block";
};
