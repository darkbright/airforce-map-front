/**
 * Slope, 즉 기복 또는 높낮이 측정
 */
export const measureSlope = () => {
	window.eventManager.setMapMode("terrainAnalysis");
	window.slopeDistance.createSlopeDistance();
};
