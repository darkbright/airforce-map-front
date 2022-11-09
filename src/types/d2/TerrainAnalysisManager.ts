export type TerrainAnalysisMode =
	| "None"
	| "Area"
	| "ClipboardCoordinate"
	| "Distance"
	| "DistanceElapseTime"
	| "Radar"
	| "RadiusCircle"
	| "SlopeDistance"
	| "CrossSection"
	| "HeightBillboard"
	| "LineOfSight"
	| "ViewShed";

/**
 * 자형분석 관리 도구
 */
export interface TerrainAnalysisManager {
	/**
	 * 지형분석 객체 초기화. 지도 위에 만들어진 거 다 지우는 기능
	 *
	 */
	clear: () => void;
	/**
	 * 지형분석 관리 객체 모드 반환
	 */
	getOperationMode: () => TerrainAnalysisMode;
	/**
	 * 지형분석 관리 객체 모드 설정
	 */
	setOperationMode: (mode: TerrainAnalysisMode) => void;
}
