import { IGraphicObject } from "./Graphic";

export interface MilSymbol {
	/**
	 * 군대부호 탐색기 트리 객체로 군대부호 분류기준 데이터를 파싱하여 군대부호 탐색기(tree)를 생성함
	 */
	loadMilsymbolTree: () => void;
	getMilSymbolPropertiesObject: () => MilSymbolProperties;
	getMilitarySymbol: () => any;
	translateTree: () => void;
	showTranslateBtn: (show: boolean) => void;
	/**
	 * 군대부호 상세보기 클릭 시 뜨는 언어를 설정하는 부분으로 localStorage에 "lang"이 "ko"로 설정되어 있어야 한글로 보임
	 */
	translateMilsymbolProperties: () => void;
	getMilsymbolName: () => any;
	/**
	 *
	 * @param cd 군대부호 코드
	 * @returns
	 * - -1 : 유효하지 않음
	 * - 0: 점형
	 * - 1: 선형, 면형
	 */
	getTacticalSymbol: (cd: string) => number;
}

export interface MilSymbolProperties {
	msMap: any;
	selectedObjectList: any;
	/**
	 * default: 3
	 */
	_msMinSize: number;
	/**
	 * default: 7
	 */
	_msDefaultSize: number;
	/**
	 * default: 14
	 */
	_msMaxSize: number;
	_prop: any;
	initialize: () => void;
	/**
	 * 이게 정확하게 뭘하느건지 모르겟음. 확인 필요
	 * @returns
	 */
	initMilsymbolPropData: () => void;
	popupStyleSetTacticalSymbol: () => void;
	/**
	 * 현재 object가 군대부호인지 확인함. 만약 군대부호(MSPointObject, MSPolylineObject, MSCPointCircleObject)라면 true 아니면 false
	 * @param IGraphicObject
	 * @returns boolean
	 */
	activateMilSymbolPopup: (obj: IGraphicObject) => boolean;
	/**
	 * 현재 군대부호의 종류에 따라 (선형인지 점형인지 등) 군대부호 속성정보의 어떠한 내용을 담을 것인지 판단하여 그 팝업창 ui를 보여주는 함수임.
	 * @param cd 군대부호 심볼 부호 (예: selectedObject._prop.msOriginKey)
	 * @returns void
	 */
	setMSStyle: (cd: string) => void;
}
