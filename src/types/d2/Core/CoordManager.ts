/**
 * 위경도의 각종 형식을 변환하거나 리턴해주는 클래스
 */
export interface ICoordManager {
	/**
	 * DMS(도분초) 형식을 일반 위경도로 변환
	 */
	DMS2Geo: (lon: string, lat: string) => string;
	/**
	 * Gars 좌표를 [경도, 위도] 형식으로 변환
	 */
	GARS2Geo: (gars: string) => string;
	/**
	 * 경위도 좌표값을 [경도 도분초, 위도 도분초]로 변환
	 */
	Geo2DMS: (lon: number, lat: number) => any;
	/**
	 * 경위도 좌표값을 Gars 좌표로 변환 (param 입력시 순서 주의)
	 */
	Geo2GARS: (lat: number, lon: number, precision: string) => string;
	/**
	 * 경위도 좌표값을 GeoRef 좌표로 변환 (param 입력시 순서 주의)
	 */
	Geo2GeoRef: (lat: number, lon: number) => string;
	/**
	 * 경위도 좌표값을 KCGRS 좌표로 변환 (param 입력시 순서 주의)
	 */
	Geo2KCGRS: (lat: number, lon: number) => string;
	/**
	 * 경위도 좌표값을 MGRS 좌표로 변환
	 */
	Geo2MGRS: (lon: number, lat: number) => MGRSType;
	/**
	 * 경위도 좌표값을 xy 값을 포함한 UTM으로 변환
	 */
	Geo2UTM: (lon: number, lat: number, xy: number[]) => UTM_XYType;
	/**
	 * 경위도값을 UTM 좌표 값으로 변환함.
	 */
	Geo2UTM_Ex: (lon: number, lat: number) => UTMType;
	/**
	 * GeoRef값을 위경도 좌표값으로 변환함
	 *
	 * GeoRef값은 일반 사용 시 값을 사용하면 안되고 공백 제거 후 사용할 것
	 * `const georefVal = georef.replace(/ /g,"");`
	 */
	GeoRef2Geo: (geoRef: string) => string;
	/**
	 * KCGRS 좌표를 위경도 좌표값으로 변환
	 */
	KCGRS2Geo: (kcgrs: string) => LonLatType;
	/**
	 * MGRS 좌표값을 위경도 값으로 변환
	 */
	MGRS2Geo: (obj: MGRSType) => LonLatType;
	/**
	 * UTM 좌표값을 위경도 변환
	 */
	UTM2Geo: (
		zone: UTMType["zone"],
		band: UTMType["band"],
		easting: UTMType["easting"],
		northing: UTMType["northing"],
	) => { lon: number; lat: number };
	UTM2Geo_Ex: any;
	/**
	 * 현재 화면 영역에 대한 중심좌표 경위도를 반환
	 */
	getGeoCenter: () => LonLatType;
	/**
	 * OpenLayers olProj 객체를 반환함
	 */
	getOLProj: any;
	/**
	 * 입력한 중심좌표(경도, 위도) 위치로 설정한 이동시간만큼 애니메이션 형식으로 이동됨
	 *
	 * duration은 1초 단위임
	 */
	setGeoAnimatedMoveCenter: (lon: number, lat: number, duration: number) => void;
	/**
	 * 입력한 중심좌표(경도, 위도) 위치로 애니메이션 없이 바로 이동.
	 */
	setGeoMoveCenter: (lon: number, lat: number) => void;
}

/**
 * Geo, 즉 경위도 타입
 */
export interface LonLatType {
	/**
	 * 경도
	 */
	lon: number;
	/**
	 * 위도
	 */
	lat: number;
}

/**
 * UTM 좌표 표기 타입
 */
export interface UTMType {
	/**
	 * Grid Zone 이름 01부터 60까지
	 */
	zone: number;
	/**
	 * Grid Zone의 밴드값으로 A - X까지 올 수 있으나, O과 I는 제외됨. Band값은 MGRS 기준으로 적용됨
	 */
	band: string | undefined;
	/**
	 * Easting Value는 100,000 ~ 900,000까지 사이임.
	 */
	easting: number;
	/**
	 * Northing Vaule는 1에서 9,999,999 사이까지임.
	 */
	northing: number;
}

/**
 * MGRS 좌표 표기 타입
 */
export interface MGRSType {
	/**
	 * Grid Zone 이름 01부터 60까지
	 */
	zone: number;
	/**
	 * Grid Zone의 밴드값으로 A - X까지 올 수 있으나, O과 I는 제외됨.
	 */
	band: string | undefined;
	/**
	 * Grid Square Value의 eastern value(A-Z without O and I)
	 */
	e100k: string | undefined;
	/**
	 * Grid Square Value의 northen value(A-V without O and I)
	 */
	n100k: string | undefined;
	/**
	 * Easting Value는 1 ~ 99,999까지 사이임.
	 */
	easting: number;
	/**
	 * Northing Value는 1 ~ 99,999까지 사이임.
	 */
	northing: number;
}

export interface UTM_XYType {
	/**
	 * Grid Zone 이름
	 */
	zone: number;
	/**
	 * 방향 "N" ...
	 */
	hemisphere: "N" | "S";
	/**
	 * xy 좌표
	 */
	xy: number[];
}
