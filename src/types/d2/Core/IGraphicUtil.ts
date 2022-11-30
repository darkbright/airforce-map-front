import { IGraphicFeature } from "../Graphic";

export interface IGraphicUtil {
	cursor: {
		default: "default";
		move: "move";
		edit: "crosshair";
		add: "copy";
		rotate: "default";
		lock: "not-allowed";
	};
	/**
	 * 선택된 객체 외각선 스타일 반환
	 * @returns style
	 */
	getSelectorLineStyle: (emptyStyle: boolean) => any;
	/**
	 * 트래커 스타일 반환
	 * @returns style
	 */
	getTrackerStyle: (emptyStyle: boolean) => any;
	/**
	 * 잠금 트랙커 스타일 반환
	 * @returns style
	 */
	getLockTrackerStyle: (emptyStyle: boolean) => any;
	/**
	 * 회전 트래커 스타일
	 * @returns style
	 */
	getRotateTrackerStyle: (angle: number, emptyStyle: boolean) => any;
	/**
	 * 잠금 회전 트래커 스타일
	 * @returns style
	 */
	getLockRotateTrackerStyle: (angle: number, emptyStyle: boolean) => any;
	/**
	 * 점 편집 트래커 스타일 반환
	 * @returns style
	 */
	getTrackerSelectStyle: () => any;
	getEmptyRotateImage: (angle: number) => any;
	/**
	 * 그래픽 객체의 스타일 설정
	 */
	setFeatureStyle: (obj: any) => void;
	/**
	 * 화살표 생성, 폴리라인 안으로 이동 고려
	 */
	createLineArrow: (obj: IGraphicFeature) => void;
	/**
	 * 화살표 위치 이동
	 */
	moveLineArrow: (obj: IGraphicFeature, inputPoints: any[]) => void;
	/**
	 * 스플라인 곡선 반환
	 */
	getCurvePoints: (olPoints: any, close: any, tension: any, numOfSeg: number) => void;
	/**
	 * 배열요소에 중복된 값을 제거
	 */
	arrayUnique: (arr: any[]) => any[];
	/**
	 * 점과 라인 상에 가장 가까운 점을 반환함
	 */
	IsPtNearLine: (LinePt1: any, LinePt2: any, Pt: any) => any[];
	/**
	 * IE 크롬 반영 파일 다운로드
	 */
	download: (data: any, strFileName: string, strMimeType: string) => boolean;
	/**
	 * degree를 radian으로 변환하여 반환
	 */
	degToRad: (degree: number) => number;
	/**
	 * radian을 degree로 변환하여 반환
	 */
	radToDeg: (radian: number) => number;
	/**
	 * 두 점의 진북방향의 degree를 반환함
	 */
	getBearing: (pt1: any, pt2: any) => number;
	/**
	 * 주어진 좌표열에 대한 MBR 계산
	 */
	calculateBound: (coordinates: number[], bound: { maxY: number; minY: number }) => void;
	/**
	 * 180도 반대방향 계산
	 * @returns [x, y] // y가 180도 반대방향임
	 */
	getOppositePosition: (coordinates: number[]) => number[];
	/**
	 * 두 점 사이의 일정 간격으로 나뉘어진 점을 리턴함
	 * @param start 시작점 좌표
	 * @param end 종점 좌표
	 * @param nDivide 구간 분할 수
	 */
	getLinePositions: (start: number[], end: number[], nDivide: number) => number[];
	/**
	 * 입력좌표에서 offset만큼 떨어진 좌표값들을 리턴함
	 */
	offsetCoords: (coords: number[], offset: number, oppositePosition: boolean) => number[];
	/**
	 * 기본 도형의 입력좌표에서 offset만큼 떨어진 좌표값들을 리턴함
	 */
	baseObjectOffsetCoords: (coords: number[], offset: number, correction: boolean) => number[];
	/**
	 * 겹선 지오메트를 계산 후 콜백 함수 호출
	 */
	calculateDoubleLine: (
		geometry: any,
		doubleLineInfo: number[],
		width: number,
		isPolygon: boolean,
		callBack_drowLine: (endPath: any, subWidth: any) => void,
	) => void;
	isCCW: (coords: number[]) => boolean;
	/**
	 * 두 점이 주어졌을 때 버퍼만큼 떨어진 지점에 좌표를 구함
	 * @param coordinates: 두 지점 좌표 배열
	 * @param origin 시작점 좌표
	 * @param dist 버퍼 크기(m) 단위
	 * @param degree 회전 각도(진북 기준, 0-360도)
	 */
	getPosition: (coordinates: number[], origin: number[], dist: number, degree: number) => void;
	/**
	 * 한 점이 주어졌을 때 각도와 거리만큼 떨어진 지점에 좌표룰 구함
	 *  @param coordinate: 임의지점 좌표
	 * @param dist 거리(m) 단위
	 * @param degree 회전 각도(진북 기준, 0-360도)
	 */
	getTargetPosition: (coordinate: number[], dist: number, degree: number) => void;
	/**
	 * 두 점 사이의 각도를 구함 (배열)
	 * @returns number array
	 */
	getAngleArray: (p1: number[], p2: number[]) => number[];
	/**
	 * 두 점 사이의 각도를 구함 (좌표값)
	 * @returns number array
	 */
	getAngle: (x0: number, y0: number, x1: number, y1: number) => number;
	/**
	 * 3점 사이의 각도를 구함
	 * @param A 시작점
	 * @param B 중감점
	 * @param C 종점
	 */
	getAngle3Points: (A: number[], B: number[], C: number[]) => number;
	/**
	 * 가독성 있는 텍스트 각도 계산
	 */
	getReadableAngle: (angle: number) => number;
	/**
	 * p1과 p2를 이은 직선과 p3와 p4를 이은 직선의 교차점을 구함
	 * @returns [x, y]
	 */
	getIntersectionPoint: (p1: number[], p2: number[], p3: number[], p4: number[]) => number[];
	/**
	 * circle과 line의 교차점 구하기
	 */
	interectCircleLine: (
		circle: { center: { x: number; y: number }; radius: number },
		line: { p1: { x: number; y: number }; p2: { x: number; y: number } },
	) => any[];
	bezier: (t: number, p0: number, p1: number, p2: number, p3: number) => number[][];
	/**
	 * 두 점 사이의 중점을 구함
	 */
	center: (p1: number[], p2: number[]) => number[];
	/**
	 * 두 점 사이의 거리를 구함
	 */
	dist2d: (p1: number[], p2: number) => number;
	/**
	 * 두 점이 동일한 값인지 검사
	 */
	equal: (p1: number[], p2: number) => boolean;
	/**
	 * 중복된 배열 제거
	 */
	removeDuplicateArray: (coordinates: any[]) => any[];
	/**
	 * 현재 시간 반환
	 */
	getTimeDTG: () => string;
	/**
	 * hex2rgb
	 */
	hex2rgb: (hex: string) => number[];
	/**
	 * rgb to hex
	 */
	rgb2hex: (color: number[]) => string;
	/**
	 * 그룹 객체와 그룹 객체 내 자식 객체를 포함한 모든 객체를 반환한다.
	 */
	getObject: (objList: any) => any[];
	/**
	 * 선택된 객체의 잠금상태를 반환함
	 */
	getObjectLock: () => boolean;
	/**
	 * 맵 스케일 계산
	 */
	getMapScale: (resolution?: number) => number;
	/**
	 * 객체의 최상위 부모 그룹 리턴
	 */
	getObjParent: (obj: any) => any;
	/**
	 * 그룹 객체 내 모든 객체를 반환
	 */
	getAllChildObject: (obj: any) => any[];
	/**
	 * 빈 스타일 반환
	 */
	getEmptyStyle: (isFill: boolean) => any;
	toXml: (json: string, stdXSDManager: any) => any;
	toJson: (xml: string, stdXSDManager: any, callbacks: () => void) => any;
	/**
	 * 모니터 해상도에 따른 픽셀값을 고려하여 화면좌표값을 처리
	 */
	coordinateFromPixel: (map: any, pixels: number[], anchor: number[], positions: number[]) => void;
	/**
	 * 모니터 해상도에 따른 화면 좌표값을 픽셀로 변환
	 */
	pixelFromCoordinate: (map: any, positions: number[], anchor: number[], pixels: number[]) => void;
	isSame: (a: number, b: number, epsilon: number) => boolean;
	getPatternImageData: (type: string) => any;
	/**
	 * 줄바꿈 문자열을 포함하여 입력된 문자열 중 가장 긴 길이를 찾아 구함
	 */
	getTextWidth: (style: any, text: string) => number;
	/**
	 * feature 정보를 GEoJSON으로 저장
	 */
	exportGeoJSON: (features: any) => string;
	/**
	 * 2차원 배열값을 1차원 배열값으로 재정의
	 * @examaple [ [127,37], [128,39] ] ===> [ 127,37,128,39 ]
	 */
	get1DArray: (array: number[][]) => number[];
	getGradientColor: (context: any, style: any, bound: GradientBound) => any;
	getGradient: (bound: GradientBound, type: GradientType) => any;
	/**
	 * 아이콘 이미지 상태가 Idel인 경우 Load를 호출
	 */
	styleIconLoad: (style: any) => void;
}

interface GradientBound {
	min: {
		x: number;
		y: number;
	};
	max: {
		x: number;
		y: number;
	};
}

type GradientType =
	| "horizontal"
	| "forwardDigonal"
	| "vertical"
	| "backwardDiagonal"
	| "path"
	| "radial";
