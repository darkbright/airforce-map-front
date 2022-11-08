export type DistanceUnit = "meter" | "mile" | "nauticalmile";

/**
 * 거리 측정 관련 인터페이스
 */
export interface Distance {
	/**
	 * 경위도 좌표값을 인자로 받아 거리 측정 결과 표시
	 */
	addCoordinates: (geoCoordinate: number[]) => void;
	/**
	 * 거리 측정 상태 활성화 및 측정 시작
	 */
	createDistance: () => boolean;
	/**
	 * 방위각 표시 상태 여부
	 */
	getBearing: () => boolean;
	/**
	 * 거리 측정 결과 표시
	 */
	getDistance: () => string;
	/**
	 * 거리 측정 선 색상 설정값 반환
	 */
	getLineColor: () => string;
	/**
	 * 거리 측정 시 표시여부 상태값 반환
	 */
	getLineVisible: () => boolean;
	/**
	 * 거리 측정 시 선 두께 값 반환
	 */
	getLineWidth: () => number;
	/**
	 * 거리 측정 시 세그먼트 갯수 반환
	 */
	getSegmentLength: () => number;
	/**
	 * 거리 측정 시 구간 거리 표시여부 상태값 반환
	 */
	getSegmentTextVisible: () => boolean;
	/**
	 * 현재 속도 반환(km/h)
	 */
	getSpeed: () => number;
	/**
	 * 측정 거리와 속도를 입력하여 소요시간 반환
	 */
	getTakeTime: (distance: number, speed: number) => string;
	/**
	 * 거리 측정 시 텍스트 표시여부 상태값 반환
	 */
	getTextVisible: () => boolean;
	/**
	 * 거리 측정 단위 반환
	 */
	getUnit: () => DistanceUnit;
	/**
	 * 방위각 표시 여부
	 */
	setBearing: (value: boolean) => void;
	/**
	 * 거리측정 선 색상 설정
	 * 만약, 이미 정해져있는 색상이 아닌 사용자가 직접 선색상을 정한 후 호출하기 위해서는 해당 함수를 createDistance()를 호출하기 전에 미리 호출해야 함.
	 * 만약 거리 측정이 완료된 상태에서 해당 함수를 호출하면 기존 생성된 객체의 모든 선 색상이 변경되며, 거리 측정 모드가 초기화 되므로 거리 측정 메뉴를 다시 선택하여 처리해야 함.
	 * @param: color hex 또는 rgba ('#ff0000' 또는 'rgba(255, 255, 0, 0.8)')
	 */
	setLineColor: (color: string) => void;
	/**
	 * 거리 측정 시 선 표시여부 설정.
	 * 만약, 이미 정해져있는 선 측정여부가 아닌 사용자가 직접 선 측정여부를 설정한다면 해당 함수를 createDistance()를 호출핳기 전에 미리 호출해야 함. 그렇지 않으면 기존값들이 모두 초기화됨.
	 */
	setLineVisible: (value: boolean) => void;
	/**
	 * 거리 측정 시 선 두께 설정
	 */
	setLineWidth: (value: number) => void;
	/**
	 * 거리 측정 객체들 중 특정(인덱스값) 세그먼트만을 삭제함.
	 */
	setSegmentRemove: (index: number) => void;
	/**
	 * 거리 측정 시 모든 세그먼트 삭제
	 */
	setSegmentRemoveAll: () => void;
	/**
	 * 거리 측정 시 구간 거리 표시여부 설정
	 * 미리 정해진 값이 아닌 해당 함수를 사용자가 설정하여 호출하려면 createDistance를 호출하기 이전 설정해야 함. 안그러면 모두 초기화 됨
	 */
	setSegmentTextVisible: (value: boolean) => void;
	/**
	 * 속도(km/h) 설정. 설정한 속도를 기준으로 구간 소요시간이 계산됨
	 * 속도가 0이면 소요시간은 표시되지 않음.
	 * @example window.distance.setSpeed(60)
	 */
	setSpeed: (value: number) => void;
	/**
	 * 거리 측정 시 텍스트 표시 여부 설정. 정해진 값이 아닌 해당 함수를 사용자가 호출하려면 creaetDistance()하기 이전에 설정해야 함. 안그러면 모두 초기화 됨
	 * 뭐여 number라고?
	 */
	setTextVisible: (value: boolean) => void;
	/**
	 * 거리 측정 단위 설정
	 */
	setUnit: (unit: DistanceUnit) => void;
}
