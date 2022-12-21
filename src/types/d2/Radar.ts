/**
 * 레이더 측정
 */
export interface Radar {
	endAngle: number;
	feature: any;
	interaction: any;
	interval: any;
	lineString: any;
	offsetAngle: number;
	outerRadius: number;
	startAngle: number;
	vectorLayer: any;
	vectorSource: any;
	/**
	 * 레이더 측정 상태를 활성화하고 측정을 시작함
	 * @param startAngle 레이더 시작각도 (북족 방향이 0도)
	 * @param endAngle 레이더 종점각도
	 * @param outerRadius 레이더 반경 (미터 단위)
	 * @param interval 레이더 내부 동심원의 간격(미터 단위)
	 * @returns void
	 */
	createRadar: (
		startAngle: number,
		endAngle: number,
		outerRadius: number,
		interval: number,
	) => void;
}
