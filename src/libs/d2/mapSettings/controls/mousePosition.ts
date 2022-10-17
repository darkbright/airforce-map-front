import { KOREA_CENTER_LAT, KOREA_CENTER_LON } from "../../../../data/constants/baseCoord";
import D2MapModule from "../../D2MapModule";
import { fromLonLatToVariousCoords } from "../utils/coordsConverter";

const { ol } = D2MapModule;

/**
 * 마우스 위치에 따라 좌표를 보여줄 때 특정한 타입(lonlat, MGRS 등)을 보여줄지 말지 선택하는 인터페이스
 */
interface MousePositionProps {
	showLonLat?: boolean;
	showMGRS?: boolean;
	showGeoRef?: boolean;
	showUTM?: boolean;
	showGARS?: boolean;
	showAltitude?: boolean;
}

/**
 * 현재 마우스의 위치를 위경도로 표시, optional하게 보여줄 좌표의 형식을 컨트롤 할 수 있음.
 * 파라미터 값으로 특정 좌표종류를 보여줄지 말지 정하면 됨.
 * @param param0
 * @returns {string} 종류별 마우스 위치에 따른 종류별 좌표를 리턴함.
 */
export const setMousePosition = ({
	showLonLat = true,
	showMGRS = true,
	showGeoRef = true,
	showUTM = true,
	showGARS = true,
}: MousePositionProps): string => {
	const mousePosition = new ol.control.MousePosition({
		coordinateFormat: (coordinate: number[]) => {
			const lon = coordinate[0] || KOREA_CENTER_LON;
			const lat = coordinate[1] || KOREA_CENTER_LAT;

			const { utm, mgrs, geoRef, gars } = fromLonLatToVariousCoords(lon, lat);

			const lonlatString = showLonLat ? `Geo: ${lon.toFixed(4)}, ${lat.toFixed(4)} |` : "";
			const mgrsString = showMGRS
				? `MGRS: ${mgrs.zone} ${mgrs.band} ${mgrs.e100k}${mgrs.n100k} ${mgrs.easting} ${mgrs.northing} |`
				: "";
			const utmString = showUTM
				? `UTM: ${utm.zone}${utm.band} ${utm.easting} ${utm.northing} |`
				: "";
			const geoRefString = showGeoRef ? `GeoRef: ${geoRef} |` : "";
			const garsString = showGARS ? `GARS:${gars}` : "";

			// const altitudeString = showAltitude ? `Altitude: ${getAltitude()}` : "";

			return `${lonlatString} ${mgrsString} ${utmString} ${geoRefString} ${garsString}`;
		},
		projection: "EPSG:4326",
		undefinedHTML: "",
	});

	return mousePosition;
};

/**
 * 지도 내 좌표 표시 controls를 ol.controls array에서 지움에 따라 화면에서 마우스 위치 좌표보기 UI가 사라짐
 * 좌표 표시 형식을 바꾸고자 할 때 (예: mgrs를 빼고 보여준다든지), controls array에서 지운 뒤에 재생성해야 함.
 * @returns void
 */
export const removeMousePositionInControls = (): void =>
	window.map?.getControls().forEach(function (control: any) {
		if (control instanceof ol.control.MousePosition) {
			window.map.removeControl(control);
		}
	}, this);

/**
 * 좌표를 보여주고 싶지 않아서 removeMousePositionInControls를 활용하여 지우고 난 뒤, 다시 최초 설정으로 살리고 싶을 때 쓸 수 있음.
 */
export const showDefaultMousePosition = (): void => {
	window.map.addControl(setMousePosition({}));
};

// 좌표 설정이 controls array에 있는지 확인
/**
 * 마우스 좌표와 관련한 control이 ol controls array에 등록이 돠어 있는지 확인하는 함수
 * @returns {boolean | undefined} boolean
 */
export const isMouseControlOn = () => {
	let isOn;
	window.map?.getControls().forEach(function (control: any) {
		if (control instanceof ol.control.MousePosition) {
			isOn = true;
		}
	});

	return isOn;
};
