interface MeasureRadiusProps {
	endRadius: number;
	interval: number;
}

/**
 * 동심원의 간격을 측정함
 * @param MeasureRadiusProps MeasureRadiusProps
 * - endRadius: 동심원 전체 반경 미터
 * - interval: 원별 간격 미터 (1km(1000미터) 단위로 라벨이 표시됨)
 */
export const measureRadius = ({ endRadius, interval }: MeasureRadiusProps): void => {
	window.eventManager.setMapMode("terrainAnalysis");
	window.radiusCircle.endRadius = endRadius;
	window.radiusCircle.interval = interval;
	window.radiusCircle.createRadiusCircle(endRadius, interval);
};
