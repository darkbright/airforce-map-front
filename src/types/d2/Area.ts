export type AreaUnit = "meter" | "mile";

/**
 * 사용자가 지도위에 설정한 영역의 면적을 측정하고 관리하는 인터페이스
 */
export interface Area {
	/**
	 * 경위도 좌표 배열값으로 면적 측정 결과 표시
	 * setUnit 함수를 호출을 해야 화면에 표시됨.
	 *
	 */
	addCoordinates: (coords: number[][]) => void;
	/**
	 * 삭제
	 */
	clear: () => void;
	/**
	 * 면적 측정 활성화 및 측정 시작
	 */
	createArea: () => void;
	/**
	 * 면적 측정 강제 종료
	 */
	forcedCompletion: () => void;
	/**
	 * 면적 측정 결과값을 리턴함.
	 * 측정 면적은 1,000,000 m² 보다 클경우 km²로 환산되며 측정 단위는 meter와 mile을 지원
	 */
	getArea: () => string;
	/**
	 * 면적측정 채움색상 설정값을 반환
	 */
	getFillColor: () => string;
	/**
	 * 면적 측정 선 색상 설정값을 반환함
	 */
	getLineColor: () => string;
	/**
	 * 면적 측정 시 세그먼트 갯수를 반환함
	 */
	getSegmentLength: () => number;
	/**
	 * 면적 측정 시 텍스트 표시여부 상태값을 반환함
	 */
	getTextVisible: () => boolean;
	/**
	 * 면적 측정 단위를 리턴함
	 */
	getUnit: () => AreaUnit;
	/**
	 * 면적 측정 시 표시여부값을 반환?
	 */
	getVisible: () => void;
	/**
	 * 면적측정 채움색상을 설정
	 * @example  window.area.setFillColor('rgba(255, 255, 0, 0.1)')
	 */
	setFillColor: (value: string) => void;
	/**
	 * 면적측정 선 색상 설정
	 * @param value hex 또는 rgba
	 * @example window.area.setLineColor('rgba(255, 255, 0, 0.8)')
	 */
	setLineColor: (value: string) => void;
	/**
	 * 면적 측정 객체들 중 해당 세그먼트만 삭제
	 */
	setSegmentRemove: (index: number) => number;
	/**
	 * 면적 측정 시 모든 세그먼트 삭제
	 */
	setSegmentRemoveAll: () => void;
	/**
	 * 면적 측정 시 텍스트 표시여부 설정
	 */
	setTextVisible: (value: boolean) => void;
	/**
	 * 면적 측정 단위 설정
	 */
	setUnit: (unit: AreaUnit) => void;
	/**
	 * 면적측정 시 보임 여부 설정
	 */
	setVisible: (value: boolean) => void;
}
