interface MeasureRadarProps {
	startAngle: number;
	endAngle: number;
	outerRadius: number;
	interval: number;
}

/**
 * 레이더 측정에 사용함
 * @param MeasureRadarProps MeasureRadarProps
 * - startAngle: 시작각도 (기본은 0 -> 북쪽에서 시작)
 * - endAngle: 종점각도
 * - outerRadius: 외곽반경 (미터)
 * - interval: 반경 내 간격 (미터)
 */
export const measureRadar = ({
	startAngle,
	endAngle,
	outerRadius,
	interval,
}: MeasureRadarProps): void => {
	window.eventManager.setMapMode("terrainAnalysis");
	window.radar.startAngle = startAngle;
	window.radar.endAngle = endAngle;
	window.radar.outerRadius = outerRadius;
	window.radar.interval = interval;
	window.radar.createRadar(startAngle, endAngle, outerRadius, interval);
};
