import D2MapModule from "../../D2MapModule";
import { ICKEditorUI, ICKEditorUIMethod } from "../../../../types/d2/Core/ICkEditorUI";
import { IGraphicObject } from "../../../../types/d2/Graphic";
import { IEditor } from "../../../../types/d2/Core/ITextEditorPopupUI";
import { IGraphicUtil } from "../../../../types/d2/Core/IGraphicUtil";
import { blockBubbling, isAllowedKeys, throttle } from "./textEditorHelperFunctions";
import { toastShow } from "../../../../components/alert/ToastMessage";
import { openPopup } from "./openPopup";
import { setEditorStyle } from "./editorStyle";
import { closeTextEditor } from "./closeTextEditor";

const { CKEditorUI, GraphicUtil } = D2MapModule;
const graphicUtil: IGraphicUtil = GraphicUtil;

/**
 * 맵 내 도형 툴바에서 Text라는 버튼을 눌렀을 시 텍스트 에디터가 뜨는데, 그 에디터 안에 적어 넣을 수 있는 최대 글자 수
 */
const MAX_TEXT_LENGTH = 10000;

export const initTextEditorPopupUI = () => {
	const ckEditorUI: typeof ICKEditorUI = CKEditorUI;
	const selectedObject = window.graphic.getSelectObjectList()[0];

	// window.CKEDITOR_BASEPATH = process.env.PUBLIC_URL + "/libs/d2editor/";

	const ckeUI = new ckEditorUI("d2map_popup-text-editor");
	const ckeditorObject = ckeUI.getInstance();

	const editorElement = document.querySelector("#d2map_popup-text-editor") as any;
	if (selectedObject) {
		window.CKEDITOR.baseZoomFunction = () => {
			// selectedObject!.setBaseZoomLevel(window.map.getView().getZoom());
			closeTextEditor(selectedObject, ckeditorObject, ckeUI);
		};
	}

	/**
	 * 클릭된 요소가 CKEditor 내의 객체가 아니거나 editor 내부의 요소가 아닐 때 수정을 종료한다고 함
	 */
	document.addEventListener("mousedown", function (e: any) {
		const popupElement = document.getElementById("d2map_popup-text-editor");
		const isPopupElem = popupElement?.contains(e.target);
		console.log("isPopupElem", isPopupElem);
		/// const isCKEElem = e.target.className.indexOf("cke_") >= 0;

		// if (!(isPopupElem || isCKEElem)) closeTextEditor(selectedObject, ckeditorObject, ckeUI);
		const objList = window.graphic.getSelectObjectList();
		if (isPopupElem === false) closeTextEditor(objList[0], ckeditorObject, ckeUI);
	});

	/**
	 * 유저의 키보드 단축키 및 인풋값이 문제가 없는지 체크함
	 * @param event KeyboardEvent
	 */
	const checkUserInputIsQualified = (event: KeyboardEvent) => {
		event.stopPropagation();
		const key = event.key || event.keyCode;
		const target = event.target as HTMLInputElement;
		if (key === "Escape" || key === 27) {
			closeTextEditor(selectedObject, ckeditorObject, ckeUI);
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

	document.addEventListener("keydown", function (e: any) {
		const objList = window.graphic.getSelectObjectList();
		if (objList.length !== 1) return false;
		if (e.keycode === 123) openEditor(objList[0], ckeUI, ckeditorObject);
	});

	window.onresize = throttle(function () {
		const objList = window.graphic.getSelectObjectList();
		closeTextEditor(objList[0], ckeditorObject, ckeUI);
	});

	window.map.getTargetElement().addEventListener(
		"wheel",
		throttle(function () {
			const objList = window.graphic.getSelectObjectList();
			closeTextEditor(objList[0], ckeditorObject, ckeUI);
		}),
	);

	editorElement.addEventListener("keydown", checkUserInputIsQualified);
	editorElement.addEventListener("keypress", checkUserInputIsQualified);
	editorElement.addEventListener("keyup", checkUserInputIsQualified);
	editorElement.addEventListener("paste", checkUserInputIsQualified);

	editorElement.addEventListener("contextmenu", blockBubbling);
	editorElement.addEventListener("wheel", blockBubbling);

	editorElement.addEventListener("drop", (e: Event) => e.preventDefault());

	// 글 상자의 툴바를 lock/unlock 하는 버튼에 대한 이벤트
	document.body.addEventListener("click", (e: Event) => {
		const target = e.target as HTMLElement;
		console.log("target", target.className);

		// if (!target.classList.contains("cke_button__unlock_icon")) return;

		const objList = window.graphic.getSelectObjectList();

		const foundCkeEditor = document.querySelector(`#${ckeditorObject.name}`) as HTMLElement;
		const { backgroundColor, borderColor, borderWidth } = foundCkeEditor.style;
		const lockIcon = document.querySelector(".cke_button__unlock_icon") as HTMLElement;
		const isLocked =
			lockIcon.style.backgroundImage.split(".png")[0].split("/").pop() === "lock"
				? "lock"
				: "unlock";

		if (objList.length > 0 && objList[0]._prop.type === "textEditor") {
			objList[0]._style.fill.color = graphicUtil.hex2rgb(backgroundColor);
			objList[0]._style.line.color = graphicUtil.hex2rgb(borderColor);
			objList[0]._style.line.width = Number(borderWidth.split("px")[0]);
			objList[0]._prop.editorScale = isLocked;

			const data = ckeditorObject.getData();
			objList[0]._prop.editorInfo = data;
			objList[0].updateEditorInfo();

			openEditor(objList[0], ckeUI, ckeditorObject);
		}
	});
};

export const openEditor = (
	object: IGraphicObject,
	ckeUI: ICKEditorUIMethod,
	ckeditorObject: IEditor,
) => {
	const { type } = object._prop;
	if (type === "textEditor") {
		openTextEditor(object, ckeUI, ckeditorObject);
	}
	// if(type === "table"){
	// 	openTableEditor(object);
	// }
};

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
	console.log("value", value);

	ckeditorObject.setData("123");
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

	// document.querySelector(".cke_button__unlock_icon").style.backgroundImage =
	// selectObject._prop.editorScale === "lock"
	//   ? `url("${window.lockPluginPath}icons/lock.png?${
	//       document
	//         .querySelector(`.cke_button__justifyblock_icon`)
	//         .style.backgroundImage.split("?")[1]
	//     }`
	//   : `url("${window.lockPluginPath}icons/unlock.png?${
	//       document
	//         .querySelector(`.cke_button__justifyblock_icon`)
	//         .style.backgroundImage.split("?")[1]
	//     }`;

	object.showTextEditFeature();
	window.graphic._selectObjectManager.clearTracker();
};

// export const openTableEditor = (object: IGraphicObject) => {

// }
