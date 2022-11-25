/**
 * 투명도 관련 모든 속성으로, 레이어 설정 및 feature 값들을 저장 관리 수정 등 모든 것을 관할함
 * - GraphicBoard: n개의 Board가 합쳐진 개념으로, 이 Board들의 zIndex 등을 바꿀 수 있음.
 * - Board: 하나의 Layer 개념으로 n개의 feature들을 가지고 있움. (말하자면 파워포인트에서 슬라이드 한장, 일러스트레이터에서의 그룹의 개념이라고 간력하게 이해할 수도 있겠음 - 여기서 파워포인트와 다른 것은, 파워포인트에서 한 장의 슬라이드의 투명도를 50%로 낮춘다고 다음 슬라이드 위에 중첩되어 보이진 않으나, 여기서는 가능함. 즉, 여러 개의 Board는 중첩된 채로 실제 "LAYER"를 구성하여 Stack되고 그것들이 화면에 모두 보여질 수 있다는 의미임)
 * - ObjectProp / Object / Feature: 서로 다르게 부르고 있지만 모두 하나의 Board 안에 종속된  개별 도형/군대부호들을 나타냄. Board 내에 List로 저장되며 도형들의 ZIndex를 변경하여 표시된 순서를 바꿀 수 있음. 따라서 앞으로/뒤로/맨뒤로/맨앞으로 등의 순서 조절이 가능해짐.
 */
export interface Graphic {
	_graphicBoard: IGraphicBoard[];
	/**
	 * 그래픽 App보드 (레이어 추가)
	 * @returns App보드의 인덱스를 반환함
	 */
	addGraphicAppBoard: () => number;
	/**
	 * 그래픽 보드(레이어) 추가
	 * @returns 그래픽 보드 인덱스를 반환함
	 */
	addGraphicBoard: () => number;
	/**
	 * 그래픽 보드의 순서를 변경함
	 * @param srcIndex source 내 Index (출발 인덱스)
	 * @param dstIndex destination Index (도착 인덱스)
	 * @param bBack destination index가 앞(front)인지, 뒤(back)인지 여부
	 */
	changeGraphicBoardOrder: (srcIndex: number, dstIndex: number, bBack: boolean) => void;
	/**
	 * 선택된 객체를 클립보드에 복사
	 */
	copyObject: () => void;
	/**
	 * 그래픽(투명도) 내 객체 생성 모드로 설정. 입력된 prop.type에 따라 사용자의 입력을 받아 특정한 그래픽 객체를 생성함.
	 * style이 undefined인 경우, 기본 스타일을 적용함
	 *
	 * @example
	 * const objProp = new GraphicObjectProp("rectangle");
	 * const objStyle = new GraphicObjectStyle();
	 * objStyle.fill.color[3] = [0];
	 * window.graphic.createMode(objProp, objStyle);
	 */
	createMode: (prop: any, style?: any) => void;
	/**
	 * 사용된 리소스 모두 삭제
	 */
	destroy: () => void;
	/**
	 * 기본 스타일 정보 반환 (ObjectStyle)
	 */
	getDefaultStyle: () => any;
	/**
	 * 그래픽 App 보드를 반환함
	 * @param index 그래픽 보드의 인덱스 번호
	 * @returns Appboard 오브젝트
	 */
	getGraphicAppBoard: (index: number) => any;
	/**
	 * 선택한 그래픽 보드를 반환함
	 */
	getGraphicBoard: (index: number) => any;
	/**
	 * 그래픽 보드의 개수를 반환함
	 */
	getGraphicBoardCount: () => number;
	/**
	 * 선택된 그래픽 보드를 반환함
	 * @returns GraphicBoard
	 */
	getSelectGraphicBoard: () => any;
	/**
	 * 선택된 그래픽 객체를 배열로 반환함
	 */
	getSelectObjectList: () => any[];
	/**
	 * 투명도 표준 XSD(스키마) 파일의 URL을 설정함.
	 * 표준 XML을 열거나 저장 시 스키마 정보로 기본값을 설정함
	 */
	loadStdXSD: (standardXSDUrl: string) => void;
	/**
	 * 그래픽(투명도)를 비활성 모드로 설정
	 */
	muteMode: () => void;
	/**
	 * 클립보드에 복사된 객체를 붙여넣음
	 */
	pasteObject: () => void;
	/**
	 * 특정 그래픽 App 보드(레이어) 제거
	 * @param index 그래픽 보드의 인덱스
	 */
	removeGraphicAppBoard: (index: number) => void;
	/**
	 * 그래픽 보드(레이어) 제거
	 * @param index 그래픽 보드의 인덱스
	 */
	removeGraphicBoard: (index: number) => void;
	/**
	 * 선택된 객체가 그룹이 가능한 것인지 확인함.
	 * 지리좌표 객체와 화면좌표 객체는 그룹이 불가능함.
	 */
	selectedObjectIsGrouping: () => boolean;
	/**
	 * 선택된 그래픽 객체를 뒤로 설정함
	 */
	selectedObjectToBackward: () => void;
	/**
	 * 선택된 그래픽 객체를 맨 뒤로 설정
	 */
	selectedObjectToBottom: () => void;
	/**
	 * 선택된 그래픽 객체를 앞으로 설정
	 */
	selectedObjectToForward: () => void;
	/**
	 * 선택된 그래픽 객체를 맨 앞으로 설정
	 */
	selectedObjectToTop: () => void;
	/**
	 * 선택된 그래픽 객체를 그룹화함
	 */
	selectedObjectToGroup: () => void;
	/**
	 * 선택된 그래픽 객체의 그룹 해제
	 */
	selectedObjectToUnGroup: () => void;
	/**
	 * 그래픽(투명도) 객체의 선택 모드로 설정함. 선택된 객체는 편집과 이동 등이 가능해짐
	 */
	selectMode: () => void;
	/**
	 * 선택된 객체를 삭제함
	 */
	selectObjectRemove: () => void;
	/**
	 * 그래픽(투명도) 커서 설정
	 */
	setCursor: (cursor: GraphicCursor) => void;
	/**
	 * 그래픽 보드 설정. 그래픽 객체 생성, 편집, 삭제를 수행할 경우 반드시 그래픽 보드를 설정해야 함
	 * @param index 그래픽 보드의 인덱스
	 */
	setSelectGraphicBoard: (index: number) => void;
	/**
	 * 선택된 그래픽 객체의 선택 해제
	 */
	unSelect: () => void;
}

/**
 * 투명도에서 사용할 커서의 상태를 정의함
 */
export interface GraphicCursor {
	/**
	 * 기본 커서
	 */
	default: "default";
	/**
	 * 이동 커서
	 */
	move: "move";
	/**
	 * 편집 커서
	 */
	edit: "crosshair";
	/**
	 * 회전 커서
	 * @example
	 * cursor.rotate = "url(src/lib/image/icon/cursor-rotate.cur),auto";
	 */
	rotate: string;
}

/**
 * 생성된 그래픽 보드 (투명도 레이어 )
 */
export interface IGraphicBoard {
	editTime: string;
	_attribute: any;
	_author: string;
	_createObject: any;
	_defaultStyle: any;
	_editTime: string;
	_graphic: _IGraphic;
	_graphicLayer: any;
	_graphicSource: any;
	_guid: string;
	_interaction: any;
	_ketState: {
		shift: boolean;
		ctrl: boolean;
	};
	_map: any;
	_mode: string;
	_msObjectCreator: any;
	_name: string;
	_security: number;
	_selectObjectManager: ISelectObjectManager;
	_selectorLayer: any;
	_selectorSource: any;
	_shiftPosition: any;
	_si: boolean;
	_source: string;
	_trackerLayer: any;
	_trackerLineLayer: any;
	_trackerLineSource: any;
	_undoRedo: any;
	/**
	 * 현재 보여지는지 여부 반환
	 */
	getVisible: () => boolean;
	/**
	 * 숨길지 말지 설정
	 */
	setVisible: (visible: boolean) => void;
	/**
	 * 보드 이름 가쟈옴
	 */
	getName: () => string;
	/**
	 * 보드 이름 설정
	 */
	setName: (name: string) => void;
	/**
	 * 생성 시간 로드
	 */
	getCreateTime: () => string;
	/**
	 * 수정 시간 로드
	 */
	getEditTime: () => string;
	/**
	 * 그래픽 객체를 배열로 리턴
	 */
	getObjectList: () => IGraphicObject[];
	/**
	 * 최상위 그래픽 객체(그룹)을 배열로 리턴
	 */
	getParentObjectList: () => IGraphicObject[];
	/**
	 * 그룹 객체 리턴
	 */
	getGroupObjectList: () => IGraphicObject[];
	/**
	 * 모두 삭제
	 */
	destroy: () => void;
	/**
	 * zIndex 설정
	 */
	setIndex: (index: number) => void;
	/**
	 * zIndex 리턴
	 */
	getIndex: () => number;
	/**
	 * 오브젝트 순서 조절 (ZIndex를 변경하는 것임)
	 */
	changeOrder: (
		reference: IGraphicObject,
		forward: boolean,
		srcIndex: number,
		dstIndex: number,
	) => void;
	/**
	 * 객체 정보 로드
	 */
	importJSON: (
		layer: {
			name: string;
			createTime: string;
			editTime: string;
			author: string;
			exercise: any;
			security: any;
			si: any;
			source: any;
			attribute: any;
		},
		sendMsg?: any,
	) => void;
	/**
	 * stdXML 로드
	 */
	importStdXML: (stdXML: any, sendMsg: any) => void;
	/**
	 * 객체정보를 JSON 파일로 변환
	 */
	exportJSON: () => string;
	/**
	 * 표준 xml 형식으로 지정
	 */
	exportStdXML: () => any;
	/**
	 * 해상도 변경 시 객체 업데이트
	 */
	resolutionUpdate: () => any;
	/**
	 * 그래픽 객체의 zIndex 정렬
	 */
	sortZIndex: () => void;
	undo: () => void;
	redo: () => void;
	undoRedoLoad: (layer: any) => void;
	undoRedoSave: (vertexEditingGUID?: string) => void;
	getGUID: () => string;
}

interface _IGraphic {
	_autoCreateBoard: boolean;
	_defaultStyle: any;
	_graphicAppBoard: any[];
	_graphicBoard: any[];
	_graphicIndex: number;
	_ketState: {
		ctrl: boolean;
		shift: boolean;
	};
	_layerCallback: any;
	_map: any;
	_mapScale: number;
	_mode: string;
	_msObjectCreator: any;
	_postComposeCtrl: any;
	_selectGraphicBoard: any;
	_selectObjectManager: ISelectObjectManager;
	_selectorLayer: any;
	_selectorSource: any;
	_stdXSDManager: any;
	_styleCallback: any;
	_trackerLayer: any;
	_trackerLineLayer: any;
	_trackerLineSource: any;
	_trackerSource: any;
}

/**
 * 생성된 레이어 내 개별 Feature(도형, 군대부호 등)의 속성값
 */
export interface IGraphicFeature {
	dispatching_: any;
	disposed: boolean;
	eventTarget: any;
	geometryChangeKey_: any;
	geometryName_: string;
	graphicObj: IGraphicObject;
}

export interface IGraphicObject {
	_edit: {
		bound: {
			minX: number;
			maxX: number;
			minY: number;
			maxY: number;
		};
		pixelPositions: any[];
		positions: any[];
	};
	_feature: any;
	_graphic: _IGraphic;
	_graphicBoard: IGraphicBoard;
	_graphicLayer: any;
	_graphicSource: any;
	_interaction: any;
	_map: any;
	_parent: any;
	_prop: {
		attribute: any;
		bound: {
			maxX: number;
			maxY: number;
			minX: number;
			minY: number;
		};
		createTime: string;
		editTime: string;
		guid: string;
		links: any;
		lock: boolean;
		name: string;
		pixelPositions: number[][];
		positions: number[][];
		radius: number;
		rotate: number;
		sameRatio: boolean;
		scaleLimit: boolean;
		scaleLower: number;
		scaleUpper: number;
		screenAnchor: number[];
		screenMode: boolean;
		text: string;
		trackerRotate: any[];
		type: string;
	};
	_rotateCtrlPt: number[];
	_selectObjectManager: ISelectObjectManager;
	_showTracker: boolean;
	_style: {
		fill: {
			/**
			 * rgba
			 */
			color: number[];
			gradient: IGradient;
			stopPoint: number[];
			type: string;
			pattern: string;
			patternColor: number[][];
			useFillColor: boolean;
		};
		line: {
			alphaHex: any;
			arrow: {
				begin: {
					type: string;
					width: number;
					height: number;
				};
				end: {
					type: string;
					width: number;
					height: number;
				};
			};
			color: number[];
			dash: any;
			dashOffset: number;
			doubleLine: any;
			fill: {
				gradient: IGradient;
				pattern: string;
				patternColor: number[][];
				type: string;
			};
			lineCap: string;
			lineJoin: string;
			type: string;
			useLinColor: boolean;
			width: number;
		};
		marker: {
			imgUrl: string | null;
			size: number;
		};
		point: {
			type: string;
			size: number;
		};
		text: {
			backgroundColor: number[];
			bold: boolean;
			color: number[];
			directionRightToLeft: boolean;
			directionVertical: boolean;
			font: string;
			fontSize: number;
			italic: boolean;
			offsetX: number;
			offsetY: number;
			outlineColor: number[];
			outlineWidth: number;
			placement: string;
			rotation: number;
			showBackground: boolean;
			textAlign: "left" | "center" | "right";
			textBaseline: "top" | "bottom" | "middle" | "aphabetic" | "hanging" | "ideographic";
			zIndex: number;
		};
		zIndex: number;
	};

	_textFeature: {
		_dispatching: any;
		disposed: boolean;
		eventTarget: any;
		geometryChangeKey: any;
		graphicObj: IGraphicFeature;
		id_: any;
		listeners: any;
		ol_uid: string;
		pendingRemovals_: any;
		revision_: number;
		styleFunction_: any;
		style_: any;
		values_: any;
	};
	_trackerLayer: any;
	_trackerLineLayer: any;
	_trackerLineSource: any;
	_trackerSource: any;
	_visiblity: boolean;
	setVisible: (visible: boolean) => void;
	getVisible: () => boolean;
	getZIndex: () => number;
	setZIndex: (index: number) => void;
}

/**
 * 그라디언트 속성
 */
interface IGradient {
	type: string;
	/**
	 * rgba array
	 */
	color: number[][];
	stdXML_BlendFactors: any;
	stdXML_FocusScale: any;
	stdXML_InterpolationColors: any;
}

interface ISelectObjectManager {
	_graphic: _IGraphic;
	_map: any;
	_graphicLayer: any;
	_graphicSource: any;
	_trackerLayer: any;
	_trackerSource: any;
	_trackerLineLayer: any;
	_trackerLineSource: any;
	_objectList: any[];
	_copyObjectList: any[];
	_interaction: any;
	_shiftPosition: any;
	/**
	 * 선택된 오브젝트 리스트 반환
	 */
	getSelectObjectList: () => any;
	/**
	 * 추가
	 */
	add: (obj: any) => void;
	/**
	 * 선택된 객체 삭제
	 */
	remove: () => void;
	/**
	 * MBR 좌표로 객체 선택
	 */
	select: (extend: any, objects: any) => void;
	/**
	 *선택된 객체를 선택모드로 설정
	 */
	selectObject: (sendMsg: any) => void;
	/**
	 * 선택된 객체가 맞는지 검사
	 */
	findObject: (findObj: any) => any;
	/**
	 * 객체의 선택여부 반전
	 */
	inverseObject: (obj: any) => void;
	/**
	 * 선택된 객체 이동
	 */
	move: () => void;
	/**
	 * 선택된 객체를 copyObjectList에 복사
	 */
	copy: () => void;
	/**
	 * copyObjectList 를 붙여넣음
	 */
	paste: () => void;
	/**
	 * objectList 갯수 반환
	 */
	getCount: () => number;
	/**
	 * objectList 초기화
	 */
	clear: () => void;
	/**
	 * 트래커 삭제
	 */
	clearTracker: () => void;
	/**
	 * interaction handler 제거
	 */
	handleClear: () => void;
	/**
	 * 선택된 객체를 최상위로 설정
	 */
	selectedObjectToTop: () => void;
	/**
	 * 선택된 객체를 최하위로 설정
	 */
	selectedObjectToBottom: () => void;
	/**
	 * 선택된 객체를 한단계 위로 설정
	 *  */
	selectedObjectToForward: () => void;
	/**
	 * 선택된 객체를 한단계 아래로 설정
	 */
	selectedObjectToBackward: () => void;
	/**
	 * 선택된 객체 그룹화
	 */
	selectedObjectToGroup: () => void;
	/**
	 * 선택된 객체 그룹해제
	 */
	selectedObjectToUnGroup: () => void;
	/**
	 * 그룹 가능 여부 반환
	 */
	selectedObjectIsGrouping: () => boolean;
	/**
	 * 선택된 객체 정렬
	 */
	selectedObjectAlign: (
		alignment: "top" | "middle" | "bottom" | "left" | "center" | "right",
	) => void;
	startScaleEditing: () => void;
	/**
	 * 선택된 도형 확대/축소
	 */
	drawScaleEditing: (index: any, tX: any, tY: any, update: any) => void;
	/**
	 * 선택된 도형 회전
	 */
	drawRotateEditing: (rotateInfo: any, depth: any) => void;
	/**
	 * 스케일 메트릭스 계산
	 */
	makeScaleMatrix: (index: any, tX: any, tY: any, bound: any, sameRatio: any) => void;
	/**
	 * 객체들의 수정일시 수정
	 */
	changeEditTime: () => void;
}
