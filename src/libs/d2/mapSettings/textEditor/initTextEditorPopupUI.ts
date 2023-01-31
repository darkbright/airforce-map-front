import D2MapModule from "../../D2MapModule";
import { ICKEditorUI } from "../../../../types/d2/Core/ICkEditorUI";
import { IGraphicUtil } from "../../../../types/d2/Core/IGraphicUtil";
import { blockBubbling, isAllowedKeys, throttle } from "./textEditorHelperFunctions";
import { toastShow } from "../../../../components/alert/ToastMessage";
import { closeEditor } from "./closeEditor";
import { openEditorPerType } from "./openEditorPerType";
import { IGraphicObject } from "../../../../types/d2/Graphic";
import { ILayerMessage } from "../../../../types/d2/layerMessage";
import { openTextEditor } from "./openTextEditor";
import { openTableEditor } from "./openTableEditor";

const { CKEditorUI, GraphicUtil } = D2MapModule;
const graphicUtil: IGraphicUtil = GraphicUtil;

/**
 * 맵 내 도형 툴바에서 Text라는 버튼을 눌렀을 시 텍스트 에디터가 뜨는데, 그 에디터 안에 적어 넣을 수 있는 최대 글자 수
 */
const MAX_TEXT_LENGTH = 10000;

/**
 * 지도 상 그리기 툴바에서 텍스트 또는 테이블 버튼 클릭 시 나타나게 되는 에디터를 핸들링하기 위한 시작 함수로
 * setupMap()에 등록해두고 사용함
 */
export const initTextEditorPopupUI = () => {
	let selectedObject: IGraphicObject | undefined = undefined;

	const ckEditorUI: typeof ICKEditorUI = CKEditorUI;
	const ckeUI = new ckEditorUI("d2map_popup-text-editor");
	const ckeditorObject = ckeUI.getInstance();

	const editorElement = document.querySelector("#d2map_popup-text-editor") as any;
	if (selectedObject) {
		window.CKEDITOR.baseZoomFunction = () => {
			selectedObject?.setBaseZoomLevel(window.map.getView().getZoom());
			closeEditor(selectedObject, ckeditorObject, ckeUI);
		};
	}

	const layerCallback = (type: ILayerMessage, param1?: any, param2?: IGraphicObject) => {
		switch (type) {
			case "SelectedObjectToDClick": {
				window.graphic._styleCallback("popupStyleOpen", param2);
				break;
			}
			case "CreateObjectDone": {
				const objList = window.graphic.getSelectObjectList();
				selectedObject = objList[0];

				if (param2?._prop.type === "textEditor") {
					if (param2._parent === undefined) {
						openTextEditor(param2, ckeUI, ckeditorObject);
					}
				} else if (param2?._prop.type === "table") {
					if (param2._parent === undefined) {
						openTableEditor(param2, ckeUI, ckeditorObject);
					}
				}

				break;
			}
		}
	};

	window.graphic._layerCallback = layerCallback;

	/**
	 * 클릭된 요소가 에디터 요소를 가리킬 때, 마우스 down 시 에디터를 종료시킴
	 */
	document.addEventListener("mousedown", function (event: Event) {
		if (event.target instanceof HTMLElement) {
			const popupElement = document.getElementById("d2map_popup-text-editor") as HTMLElement;

			const isPopupElem = popupElement?.contains(event.target);
			const isCKEElem = event.target.className.indexOf("cke_") >= 0;

			if (!(isPopupElem || isCKEElem)) closeEditor(selectedObject, ckeditorObject, ckeUI);
		}
	});

	document.addEventListener("keydown", function (event: KeyboardEvent) {
		console.log("event", event);
		console.log("keydown");
		const objList = window.graphic.getSelectObjectList();
		if (objList.length !== 1) return false;
		if (event.keyCode === 113 || event.code === "F2")
			openEditorPerType(objList[0], ckeUI, ckeditorObject);
	});

	window.onresize = throttle(function () {
		closeEditor(selectedObject, ckeditorObject, ckeUI);
	});

	window.map.getTargetElement().addEventListener(
		"wheel",
		throttle(function () {
			closeEditor(selectedObject, ckeditorObject, ckeUI);
		}),
	);

	/**
	 * 유저의 키보드 단축키 및 인풋값이 문제가 없는지 체크함
	 * @param event KeyboardEvent
	 */
	const checkUserInputIsQualified = (event: KeyboardEvent) => {
		event.stopPropagation();
		const key = event.key || event.keyCode;
		const target = event.target as HTMLInputElement;
		if (key === "Escape" || key === 27) {
			closeEditor(selectedObject, ckeditorObject, ckeUI);
		} else {
			if (isAllowedKeys(event) === true) {
				if (target.innerText.length >= MAX_TEXT_LENGTH) {
					toastShow({
						title: "글자 수 초과",
						message: `글자 수는 ${MAX_TEXT_LENGTH}자를 초과할 수 없습니다.`,
						type: "error",
					});
				}
				return true;
			} else {
				event.preventDefault;
				return false;
			}
		}
	};

	editorElement.addEventListener("keydown", checkUserInputIsQualified);
	editorElement.addEventListener("keypress", checkUserInputIsQualified);
	editorElement.addEventListener("keyup", checkUserInputIsQualified);
	editorElement.addEventListener("paste", checkUserInputIsQualified);

	editorElement.addEventListener("contextmenu", blockBubbling);
	editorElement.addEventListener("wheel", blockBubbling);

	editorElement.addEventListener("drop", (e: Event) => e.preventDefault());

	// 글 상자의 툴바를 lock/unlock 하는 버튼에 대한 이벤트
	document.body.addEventListener("click", (event: Event) => {
		const target = event.target as HTMLElement;

		if (!target.classList.contains("cke_button__unlock_icon")) return;
		const objList = window.graphic.getSelectObjectList();
		selectedObject = objList[0];

		const foundCkeEditor = document.querySelector(`#${ckeditorObject.name}`) as HTMLElement;
		if (foundCkeEditor) {
			const { backgroundColor, borderColor, borderWidth } = foundCkeEditor.style;
			const lockIcon = document.querySelector(".cke_button__unlock_icon") as HTMLElement;
			const isLocked =
				lockIcon.style.backgroundImage.split(".png")[0].split("/").pop() === "lock"
					? "lock"
					: "unlock";

			if (objList.length > 0) {
				if (objList[0]._prop.type === "textEditor" || objList[0]._prop.type === "table") {
					objList[0]._style.fill.color = graphicUtil.hex2rgb(backgroundColor);
					objList[0]._style.line.color = graphicUtil.hex2rgb(borderColor);
					objList[0]._style.line.width = Number(borderWidth.split("px")[0]);
					objList[0]._prop.editorScale = isLocked;

					const data = ckeditorObject.getData();
					objList[0]._prop.editorInfo = data;
					objList[0].updateEditorInfo();

					openEditorPerType(objList[0], ckeUI, ckeditorObject);
				}
			}
		}
	});
};
