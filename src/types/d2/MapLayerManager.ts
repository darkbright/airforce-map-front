export interface MapLayerManager {
	mapLayers: any;
	mapMVTLayers: any;
	mapOverviewLayers: any;
	mapSymbolPath: any;
	overviewMapControl: any;
	interacation: any;
	/**
	 * mapLayerManager에 맵 레이어를 등록함.
	 * - name: 레이어 이름 (string)
	 * - addOverview: 오버뷰(인덱스에 등록할지 여부)
	 * - layer: 생성된 레이어 객체
	 */
	addLayer: (name: string, addOverview: boolean, layer: any) => void;
	/**
	 * mapLayerManager에 맵 레이어를 등록함.
	 * - name: 레이어 이름 (string)
	 * - styleUrl: 벡터레이어의 스타일 주소
	 * - addOverview: 오버뷰(인덱스에 등록할지 여부)
	 * - layer: 생성된 레이어 객체
	 */
	addMVTLayer: (
		name: string,
		styleUrl: string | undefined,
		addOverview: boolean,
		layer: any,
	) => void;
	addMVTSymbolPath: (name: string, symbolPath: string) => void;
	/**
	 * name: 레이어 이름
	 */
	getLayer: (name: string) => any;
	getMVTLayer: (name: string) => any;
	removeLayer: (name: string) => any;
	createOverview: () => void;
	destroyOverview: () => void;
	getPickingStyle: (name: string) => any;
	getSelectStyle: (name: string) => any;
	handleClear: () => void;
	clearSelectFeature: () => void;
	initialAnlysis: () => void;
}
