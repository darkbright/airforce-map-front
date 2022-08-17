// 지도 레이어 설정
// 보여주고자 하는 맵들을 모두 window.mapLayerManager.addLayer에 담아주면 됨.

export default async () => {
	const URL_HEADER = process.env.REACT_APP_MAP_SERVER_URL;

	// FDB 심볼 이미지 경로 설정
	window.mapLayerManager.addMVTSymbolPath("MVTSymbolPath", `${URL_HEADER}/MVTCONF/GSSSymbol/`);
	// window.mapLayerManager.addLayer("layer-sub-world", true, overViewWorldLayer);

	// 오버뷰 생성 (작은 화면으로 전체 보이기 모드)
	window.mapLayerManager.createOverview();
};
