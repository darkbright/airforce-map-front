import D2MapModule from "../libs/d2/D2MapModule";

interface DMSConverterProps {
	dms: string;
	type: "toLonlat" | "toScreenCoord";
}

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
