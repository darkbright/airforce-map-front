export interface SlopeDistance {
	coordinates: number[];
	coordinatesList: number[];
	feature: any;
	interaction: any;
	lineString: any;
	mouseStatus: number;
	referenceCount: number;
	segmentDist: number;
	showBearing: false;
	totalDist: number;
	unit: Unit;
	vectorLayer: any;
	vectorSource: any;
	/**
	 * Slope 거리 측정 상태 활성화 및 측정 시작
	 */
	createSlopeDistance: () => void;
	/**
	 * 방위각 표시상태 반환
	 * @returns 방위각이 표시됐는지 여부
	 */
	getBearing: () => boolean;
	getDistance: () => number;
	getUnit: () => string;
	setBearing: (value: boolean) => void;
	setUnit: (unit: Unit) => void;
}

type Unit = "meter" | "mile";
