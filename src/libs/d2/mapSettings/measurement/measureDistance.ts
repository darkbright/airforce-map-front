/**
 * 거리 재기
 */
export const measureDistance = () => {
	window.eventManager.setMapMode("terrainAnalysis");
	window.distance.createDistance();
	window.distance.setSpeed(20);
	window.distance.setBearing(true);
	window.distance.setUnit("nauticalmile");
};
