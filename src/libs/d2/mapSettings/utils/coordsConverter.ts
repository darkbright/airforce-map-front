import { MGRSType, UTMType } from "../../../../types/d2/Coords";
import D2MapModule from "../../D2MapModule";
const { CoordManager } = D2MapModule;

/**
 * 일반 LonLat 좌표를 dms, utm, mgrs, geoRef, gars의 형식으로 리턴하는 인터페이스
 */
interface fromLonLatToVariousCoordsType {
	lon: number;
	lat: number;
	/**
	 * DMS(도분초) 경도
	 *
	 * 127°01′39″E와 같은 모양
	 */
	dmsLon: string;
	/**
	 * DMS 위도(도분초)  3
	 *
	 * 7°29′53″N 와 같은 모양
	 */
	dmsLat: string;
	utm: UTMType;
	mgrs: MGRSType;
	geoRef: string;
	gars: string;
}

/**
 * 데이터베이스에서 받은 DMS 좌표 타입을 Lonlat 또는 스크린 Coord로 바꾸는 인터페이스
 */
interface DMSConverterProps {
	dms: string;
	/**
	 * - toLonlat으로 선택 시 [경도, 위도]의 형태
	 * - toScreenCoord로 선택 시 ol 스크린Coord 객체로 변환됨
	 */
	type: "toLonlat" | "toScreenCoord";
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

	return { lon, lat, dmsLon: dms[0], dmsLat: dms[1], utm, mgrs, geoRef, gars };
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

const { ol } = D2MapModule;

/**
 * DMS 좌표( Degree, Minutes, Second로 구성된 DMS 좌표를 LonLat 좌표로 변환하거나, Screen 좌표로 변환하는 함수.
 *
 * Backend에서 받은 coord는 반드시 아래의 함수를 통해 screen Coord로 변환해주어야 Openlayers에 표시 됨.
 * @param {DMSConverterProps} DMSConverterProps
 * @returns {[number, number]} [경도, 위도] 또는 Screen 좌표
 */

export const DMSConverter = ({ dms, type }: DMSConverterProps) => {
	const splitByLonLat = dms.split("N");
	const parsedDMSLat = splitByLonLat[0].match(/.{1,2}/g) || "";
	const convertedLat =
		Number(parsedDMSLat[0]) + Number(parsedDMSLat[1]) / 60 + Number(parsedDMSLat[2]) / 3600;

	const parsedDMSLonDegree = splitByLonLat[1].slice(0, 3);
	const parsedDMSLonMinute = splitByLonLat[1].slice(3, 5);
	const parsedDMSLonSecond = splitByLonLat[1].slice(5, 7);

	const convertedLon =
		Number(parsedDMSLonDegree) +
		Number(parsedDMSLonMinute) / 60 +
		Number(parsedDMSLonSecond) / 3600;

	// console.log(new ol.proj.fromLonLat(geojsonObject.features[1].geometry.coordinates));
	if (type === "toScreenCoord") {
		return new ol.proj.fromLonLat([convertedLon, convertedLat]);
	}

	return [convertedLon, convertedLat];
};
