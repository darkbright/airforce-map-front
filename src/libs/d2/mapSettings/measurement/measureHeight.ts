/**
 * 지도 위에 고도값을 표시하는 기능
 */
export const measureHeight = () => {
	window.eventManager.setMapMode("terrainAnalysis");
	window.heightBillboard.createBillboard();
};
