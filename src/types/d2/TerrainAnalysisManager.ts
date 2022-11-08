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

export interface TerrainAnalysisManager {
	/**
	 * 지형분석 객체 초기화
	 * 초기화 객체 대상으로는 clipboardCoordinate, distance, distanceElapseTime, slopeDistance, area, radiusCircle, radar, heightBillboard, CrossSection, lineofSight, viewShed 등이 포함된
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
