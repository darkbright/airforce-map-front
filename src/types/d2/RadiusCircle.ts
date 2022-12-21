/**
 * 측정에서 동심원 측정 시 사용하는 인터페이스
 */
export interface RadiusCircle {
	endRadius: number;
	feature: any;
	interaction: any;
	/**
	 * 동심원의 내부 원들의 간격을 얼마로 할 것인지
	 */
	interval: number;
	lineString: any;
	vectorLayer: any;
	vectorSource: any;
	/**
	 * 동심원의 측정 상태를 활성화하고 측정을 시작함
	 * @param endRadius 동심원 반경(미터 단위)
	 * @param interval 내부 동심원의 간격(미터 단위)
	 * @returns
	 */
	createRadiusCircle: (endRadius: number, interval: number) => void;
}
