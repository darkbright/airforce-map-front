/**
 * 단면 분석
 */
export interface CrossSection {
	coordinates: any;
	feature: any;
	gmCoordinates: any;
	heightResolution: number;
	interaction: any;
	lineString: any;
	mouseStatus: number;
	vectorLayer: any;
	vectorLayerRed: any;
	vectorSource: any;
	vectorSourceRed: any;
	/**
	 * 단면 분석 차트 생성
	 */
	createCrossSection: () => void;
	destroy: () => void;
}
