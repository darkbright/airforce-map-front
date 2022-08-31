import { MGRSType, UTMType } from "../../../types/d2/Coords";
import D2MapModule from "../D2MapModule";
const { CoordManager } = D2MapModule;

/**
 * 일반 LonLat 좌표를 dms, utm, mgrs, geoRef, gars의 형식으로 리턴하는 인터페이스
 */
interface fromLonLatToVariousCoordsType {
	/**
	 * 도분초 형태의 경도와 위도를 Key값이 0인 경우 경도, 1인 경우 위도로 나타냄
	 */

	lon: number;
	lat: number;

	dms: {
		/**
		 * DMS(도분초) 경도
		 *
		 * 127°01′39″E와 같은 모양
		 */
		0: string;
		/**
		 * DMS 위도(도분초)  3
		 *
		 * 7°29′53″N 와 같은 모양
		 */
		1: string;
	};
	utm: UTMType;
	mgrs: MGRSType;
	geoRef: string;
	gars: string;
}

/**
 * 경도와 위도를 입력 시, lon, lat, dms, utm, mgrs, geoRef, gars의 형태로 값을 뱉어줌.
 *
 * @param lon number 경도
 * @param lat number 위도
 * @returns {fromLonLatToVariousCoordsType} fromLonLatToVariousCoordsType
 */
export const fromLonLatToVariousCoords = (
	lon: number,
	lat: number,
): fromLonLatToVariousCoordsType => {
	// 도분초 좌표
	const dms = { ...CoordManager.Geo2DMS(lon, lat).toString("dms").split(",") };
	// UTM 좌표
	const utm: UTMType = CoordManager.Geo2UTM_Ex(lon, lat);
	// MGRS 좌표
	const mgrs: MGRSType = CoordManager.Geo2MGRS(lon, lat);
	// GeoRef
	const geoRef: string = CoordManager.Geo2GeoRef(lat, lon);
	// GARS
	const gars: string = CoordManager.Geo2GARS(lat, lon, "5");

	return { lon, lat, dms, utm, mgrs, geoRef, gars };
};

/**
 * DMS(도분초) 좌표를 LonLat으로 변경 후 lon, lat, dms, utm, mgrs, geoRef, gars의 형태로 값을 뱉어줌.
 *
 * @param lon string `126°07′23″E`와 같은 모양
 * @param lat string ` 37°07′23″N`와 같은 모양
 * @returns {fromLonLatToVariousCoordsType} fromLonLatToVariousCoordsType
 */
export const fromDMSToVariousCoords = (lon: string, lat: string): fromLonLatToVariousCoordsType => {
	const converted = CoordManager.DMS2Geo(lon, lat).split(",");
	return fromLonLatToVariousCoords(Number(converted[0]), Number(converted[1]));
};

/**
 * UTM 좌표를 LonLat으로 변경 후 lon, lat, dms, utm, mgrs, geoRef, gars의 형태로 값을 뱉어줌.
 * @param {UTMType}
 * @returns {fromLonLatToVariousCoordsType} fromLonLatToVariousCoordsType
 */
export const fromUtmToVariousCoords = (utm: UTMType): fromLonLatToVariousCoordsType => {
	const { zone, band, easting, northing } = utm;
	const { lon, lat } = CoordManager.UTM2Geo_Ex(zone, band, easting, northing);
	return fromLonLatToVariousCoords(lon, lat);
};

/**
 * MGRS 좌표를 LonLat으로 변경 후 lon, lat, dms, utm, mgrs, geoRef, gars의 형태로 값을 뱉어줌.
 * @param {MGRSType}
 * @returns {fromLonLatToVariousCoordsType} fromLonLatToVariousCoordsType
 */
export const fromMGRSToVariousCoords = (mgrs: MGRSType): fromLonLatToVariousCoordsType => {
	const { lon, lat } = CoordManager.MGRS2Geo(mgrs);
	return fromLonLatToVariousCoords(lon, lat);
};

/**
 * GeoRef 좌표를 LonLat으로 변경 후 lon, lat, dms, utm, mgrs, geoRef, gars의 형태로 값을 뱉어줌.
 * @param geoRef string `WJHH 01654 29875` 이런 식으로 생김
 * @returns {fromLonLatToVariousCoordsType} fromLonLatToVariousCoordsType
 */

export const fromGeoRefToVariousCoords = (geoRef: string): fromLonLatToVariousCoordsType => {
	const refinedValue = geoRef.replace(/ /g, "");
	const converted = CoordManager.GeoRef2Geo(refinedValue).split(" ");

	return fromLonLatToVariousCoords(Number(converted[0]), Number(converted[1]));
};

/**
 * Gars 좌표를 LonLat으로 변경 후 lon, lat, dms, utm, mgrs, geoRef, gars의 형태로 값을 뱉어줌.
 * @param gars string `"615LQ11"` 이런 식으로 생김
 * @returns {fromLonLatToVariousCoordsType} fromLonLatToVariousCoordsType
 */
export const fromGarsToVariousCoords = (gars: string) => {
	const converted = CoordManager.GARS2Geo(gars).split(",");

	return fromLonLatToVariousCoords(Number(converted[0]), Number(converted[1]));
};
