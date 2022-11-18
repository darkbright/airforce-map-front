/**
 * 투명도 관련 모든 속성으로, 레이어 설정 및 값들
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
	getSelectObjectList: () => [];
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
	_selectObjectManager: any;
	_selectorLayer: any;
	_selectorSource: any;
	_shiftPosition: any;
	_si: boolean;
	_source: string;
	_trackerLayer: any;
	_trackerLineLayer: any;
	_trackerLineSource: any;
	_undoRedo: any;
	getVisible: () => boolean;
	setVisible: (visible: boolean) => void;
	getName: () => string;
	setName: (name: string) => void;
	getCreateTime: () => string;
	getParentObjectList: () => IGraphicObject[];
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
	_selectObjectManager: any;
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
	_selectObjectManager: any;
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
		};
		pattern: string;
		patternColor: number[][];
		type: string;
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
	_visiblity: any;
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
