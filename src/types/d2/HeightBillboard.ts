/**
 * 사용자가 설정한 임의 지점이 고도값을 분석하는 클래스로 분석결과는 관측지점과 고도값(m)으로 표시됨.
 * 고도 서비스가 정상적으로 연결되어 있어야 함
 */
export interface HeightBillboard {
	interaction: any;
	vectorLayer: any;
	vectorSource: any;
	/**
	 * 고도값 분석 상태를 활성화하고 분석을 시작함. 분석이 시작되면 고도는 측정모드로 변경되고 관심 지역을 클릭하면 고도값이 표시됨
	 * @returns
	 */
	createBillboard: () => void;
}
