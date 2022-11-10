/**
 * 각종 공간과 관련된 연산을 하는 클래스
 */
export interface SpatialMath {
	/**
	 * 주어진 다각형 좌표값(lon, lat)으로 면적을 계산함
	 * @param positions 다각형 좌표 배열값(positions[0].lat, positions[0].lon으로 관리)
	 * @returns 면적값을 반환함
	 */
	ComputeEllipsoidArea: (positions: number[]) => number;
	/**
	 * 3차원 관련이므로 사용하지 않음
	 * 주어진 구체(Sphere) 내부에 임의 점(x, y, z)가 포함되어 있는지 판단
	 * @param centerx 구체 중심의 x값
	 * @param centery 구체 중심의 y값
	 * @param centerz 구체 중심의 z값
	 * @param radius 구체 반지름
	 * @param x 임의 지점의 x값
	 * @param y 임의 지점의 y값
	 * @param z 임의 지점의 z값
	 * @returns 포함 여부를 반환
	 * - 1: 내부포함
	 * - 0: 구체 표면 존재
	 * - -1: 외부 존재
	 */
	containSphere: (
		centerx: number,
		centery: number,
		centerz: number,
		radius: number,
		x: number,
		y: number,
		z: number,
	) => number;
	/**
	 * 임의지점(lon, lat)과 방위각(degree), 거리(m)가 주어졌을때 목표 지점의 좌표값(lon, lat)을 구함.
	 * 계산 알고리즘은https://www.movable-type.co.uk/scripts/latlong.html Formula가 적용되어 있음.
	 * @param lon 경도(degree)
	 * @param lat 위도(degree)
	 * @param angle 방위각(degree)
	 * @param distance 거리(m)
	 * @example
	 * const  result = window.spatialMath.destGeographic(127.15, 36.15, 135, 10000);
	 * //대상 지점을 Google Mercator 좌표값으로 변환한다.
	 * const mercator = ol.proj.transform([result.lon, result.lat], 'EPSG:4326', 'EPSG:3857'); //Convert geographic to Google Mercator
	 */
	destGeographic: (
		lon: number,
		lat: number,
		angle: number,
		distance: number,
	) => { lon: number; lat: number };
	/**
	 * 임의지점(lon, lat)과 방위각(degree), 거리(m)가 주어졌을때 목표 지점의 좌표값(lon, lat)을 구함.
	 * 계산 알고리즘은 http://www.movable-type.co.uk/scripts/latlong-vincenty.html#direct가 적용되어 있음.
	 * @param lon 경도(degree)
	 * @param lat 위도(degree)
	 * @param brng 방위각(degree)
	 * @param distance 거리(m)
	 */
	destVincenty: (
		lon1: number,
		lat1: number,
		brng: number,
		dist: number,
	) => { lon: number; lat: number };
	/**
	 * 위/경도 형식의 두 점이 주어졌을 때 거리를 구함
	 *  Vincenty's Formula
	 * @param lon1 경도(degree)
	 * @param lat1 위도(degree)
	 * @param lon2 경도(degree)
	 * @param lat2 위도(degree)
	 * @returns 거리(m)
	 */
	distVincenty: (lon1: number, lat1: number, lon2: number, lat2: number) => number;
	/**
	 * 두 지점 간의 각도를 구함
	 * @param x1 임의 지점의 x1값
	 * @param y1 임의 지점의 y1값
	 * @param x2 임의 지점의 x2값
	 * @param y2 임의 지점의 y2값
	 * @returns 각도(Radian)
	 */
	getAngleBetweenPoints: (x1: number, y1: number, x2: number, y2: number) => number;
	/**
	 * 경위도 좌표 기준의 두 지점간의 방위각을 반환
	 * 방위각이란 자신이 서 있는 위치를 중심으로 북쪽을 기준으로 삼고 시계 바늘 방향으로 잰 동, 서, 남, 북의 방위가 있는 각도를 의미
	 * - 정북 방위각: 0 또는 360
	 * - 동 방위각: 90도
	 * - 남 방위각: 180도
	 * - 서 방위각: 270도
	 * @param startGeo 경위도(Degree) 시작점 좌표
	 * @param endGeo 경위도(Degree) 끝점 좌표
	 * @returns 방위각
	 */
	getBearing: (startGeo: number, endGeo: number) => string;
	/**
	 * Google Mercator 좌표 기준의 두 점간의 방위각을 반환
	 * 방위각이란 자신이 서 있는 위치를 중심으로 북쪽을 기준으로 삼고 시계 바늘 방향으로 잰 동, 서, 남, 북의 방위가 있는 각도를 의미
	 * - 정북 방위각: 0 또는 360
	 * - 동 방위각: 90도
	 * - 남 방위각: 180도
	 * - 서 방위각: 270도
	 * @param start Google Mercator 시작점 좌표
	 * @param end Google Mercator 끝점 좌표
	 * @returns 방위각
	 */
	getBearingByMercator: (start: number, end: number) => string;
	/**
	 * 화면 좌표값으로부터 Google Mercator 좌표값을 계산
	 * 모니터 해상도에 따른 픽셀값을 고려하여 화면좌표값을 처리
	 * @param: [lon, lat]
	 */
	getCoordinateFromPixel: (pixel: number[]) => { lon: number; lat: number };
	/**
	 * 입력 지점의 고도값(m)를 callback 형식으로 반환
	 */
	getHeight: (lon: number, lat: number, callback: () => void) => void;
	/**
	 * 현재 축적을 표시
	 */
	getMapScale: () => string;
	/**
	 * 입력값들 중 최대값을 구함
	 * @param 배열값 number인지 확실치 않음 확인 필요(object라고 되어 있음)
	 */
	getMax: (array: number[]) => void;
	/**
	 * 입력값들 중 최소값을 구함
	 * @param 배열값 number인지 확실치 않음 확인 필요(object라고 되어 있음)
	 */
	getMin: (array: number[]) => void;
	/**
	 * x, y 입력값들중 최대/최소값을 반환
	 * @returns Google Mercator 좌표값 기준으로 결과 반환
	 */
	getMinMax: (xArray: number[], yArray: number[]) => { lon: number; lat: number };
	/**
	 * Google Mercator 좌표값을 정규화(전세계 유효범위) 처리
	 * @param mercatorCoordinate Google Mercator 좌표값
	 */
	getNormalizeCoordinate: (mercatorCoordinate: number) => any;
	/**
	 * Google Mercator 입력 좌표값으로부터 화면좌표값을 계산.
	 * 모니터 해상도에 따른 픽셀값을 고려하여 화면좌표값을 처리
	 * @param coordinate lonlat object 인것 같은데 확실치 않음
	 * @returns 화면좌표값 object 인듯
	 */
	getPixelFromCoordinate: (coordinate: any) => any;
	/**
	 * 지도 Zoom 레벨값을 반환
	 *
	 */
	getZoomLevel: () => ScaleLevelType;
	/**
	 * 입력 각도가 360가 넘지 않도록 정규화 처리
	 * @param angle 입력각도(degree)
	 */
	normalizeAngle: (angle: number) => number;
	/**
	 * 현재 축적을 설정
	 * 타일맵 해상도를 기준으로 지도 축척이 정해지므로 입력 축척값은 레벨별 축척 범위에 값으로 자동 전환되어 적용됨
	 */
	setMapScale: (scale: number) => void;
	/**
	 * 현재 지도 Zoom 레벨을 설정.
	 * Zoom 레벨은 3 ~ 19까지 지원한다.
	 */
	setZoomLevel: (value: ScaleLevelType) => void;
	/**
	 * 입력값을 degree로 변환
	 * @example window.spatialMath.toDeg(0.567);
	 */
	toDeg: (n: number) => void;
	/**
	 * 입력값을 radian으로 변환
	 * @example window.spatialMath.toRad(125);
	 */
	toRad: (n: number) => void;
	/**
	 * 주어진 사각형 영역내에 임의 점(a, b)이 포함되는지 여부를 판단
	 * @param minX 사각형 x축 최소값
	 * @param minY 사각형 y축 최소값
	 * @param maxX 사각형 x축 최대값
	 * @param maxY 사각형 y축 최대값
	 * @param x 임의 지점의 x값
	 * @param y 임의 지점의 y값
	 */
	Validate_Point_In_Bound: (
		minX: number,
		minY: number,
		maxX: number,
		maxY: number,
		x: number,
		y: number,
	) => boolean;
	/**
	 * 반경(r)이 주어진 원(x, y)에 임의 점(a, b)이 포함되는지 여부를 판단
	 * @param a 임의 지점의 x값
	 * @param b 임의 지점의 y값
	 * @param x 원 중심의 x값
	 * @param y 원 중심의 y값
	 * @param r 원 반지름
	 */
	Validate_Point_In_Circle: (a: number, b: number, x: number, y: number, r: number) => boolean;
	/**
	 * 주어진 다각형 영역내에 경위도 임의 점(a, b)이 포함되는지 여부를 판단
	 * @param positions 다각형 좌표 배열값(positions[0].latitude, positions[0].longitude로 관리)
	 * @param x 임의 지점의 x값
	 * @param y 임의 지점의 y값
	 */
	ValidatePolygonInPointByCartographic: (positions: number[], x: number, y: number) => boolean;
	/**
	 * 주주어진 다각형 영역내에 직교좌표 임의 점(a, b)이 포함되는지 여부를 판단
	 * @param polygon 다각형 좌표 배열값(polygon[0][0], polygon[0][1]로 관리)
	 * @param x 임의 지점의 x값
	 * @param y 임의 지점의 y값
	 */
	ValidatePolygonInPointByMercator: (polygon: number[][], x: number, y: number) => boolean;
}

/**
 * 지도 스케일이나 줌 레벨 설정 시 가능한 값
 * Zoom 레벨별 서비스 축척
 * - 3: 55,467,893
 * - 4: 27,733,947
 * - 5: 13,866,973
 * - 6: 6,933,487
 * - 7: 3,466,743
 * - 8: 1,733,372
 * - 9: 866,686
 * - 10: 433,343
 * - 11: 216,671
 * - 12: 108,336
 * - 13: 54,168
 * - 14:  27,084
 * - 15: 13,542
 * - 16: 6,771
 * - 17: 3,385
 * - 18: 1,693
 * - 19: 846
 */
export type ScaleLevelType =
	| 3
	| 4
	| 5
	| 6
	| 7
	| 8
	| 9
	| 10
	| 11
	| 12
	| 13
	| 14
	| 15
	| 16
	| 17
	| 18
	| 19;
