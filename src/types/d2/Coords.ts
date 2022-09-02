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

/**
 * createClipboard(options, callback)에 사용되는 사용할 클립보드의 좌표 형식 지정
 */
export interface ClipboardOptions {
	type: "MGRS" | "Geographic";
	visibleGuideLine: boolean;
}
