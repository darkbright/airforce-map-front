/**
 * 지도의 서비스 모드 설정
 * - default : 사용자 정의 모드 설정 시 적용되며 측정기능/지형분석/투명도는 비활성화 처리
 * - terrainAnalysis : 측정관리와 지형분석 설정 시 적용
 * - mapAnalysis : 벡터 타일맵 객체에 대한 속성 조회 시 적용하며 측정기능/지형분석/투명도는 비활성화 처리
 * - graphic : 투명도 작성 및 편집 설정 시 적용되며 측정기능/지형분석 서비스는 비활성화 처리
 * - cop : 사용자 정의 모드로 상황도 구성 및 설정시 지도/투명도 관련 기능은 모드 비활성화 처리
 */

export type MapMode = "default" | "terrainAnalysis" | "mapAnalysis" | "graphic" | "cop";

/**
 * 지도, 지형분석, 투명드 등 지도 위에서 일어나는 이벤트들의 서비스 모드를 관리
 */
export interface EventManager {
	/**
	 * 지도의 현재 모드를 반환함. 특정한 모드에 따라 마우스 이벤트에 따른 지도위에서의 인터렉션(작동방식)이 달라짐.
	 */
	getMapMode: () => MapMode;
	/**
	 * 지도의 현재 모드를 설정함. (특정 모드가 되면 특정 이벤트를 위한 마우스가 활성화됨). 특정 이벤트를 위한 지도의 모드를 종료시키려면 mapMode를 default로 변경
	 */
	setMapMode: (mode: MapMode) => void;
}
