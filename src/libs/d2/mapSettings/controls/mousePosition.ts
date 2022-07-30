import D2MapModule from "../../D2MapModule";

const { ol, CoordManager } = D2MapModule;

interface MousePositionProps {
	showLonLat?: boolean;
	showMGRS?: boolean;
	showGeoRef?: boolean;
	showUTM?: boolean;
	showGARS?: boolean;
}

// 현재 마우스의 위치를 위경도로 표시, optional하게 보여줄 좌표의 형식을 컨트롤 할 수 있음.
export const setMousePosition = ({
	showLonLat = true,
	showMGRS = true,
	showGeoRef = true,
	showUTM = true,
	showGARS = true,
}: MousePositionProps) => {
	const mousePosition = new ol.control.MousePosition({
		coordinateFormat: (coordinate: number[]) => {
			const lon = coordinate[0];
			const lat = coordinate[1];
			// MGRS 형식
			const geoMgrs = new CoordManager.Geo2MGRS(lon, lat);
			// UTM 형식
			const { zone, band, easting, northing } = new CoordManager.Geo2UTM_Ex(lon, lat);
			// GeoRef
			// TO_BE_CHECKED 빈 값만 옴
			// const geoRef = new CoordManager.Geo2GeoRef(lon, lat);
			// Gars
			// TO_BE_CHECKED 빈 값만 옴
			// const gars = new CoordManager.Geo2GARS(lon, lat, "5");

			const lonlatString = showLonLat ? `Geo: ${lon.toFixed(4)}, ${lat.toFixed(4)} |` : "";
			const mgrsString = showMGRS ? `MGRS: ${geoMgrs} |` : "";
			const utmString = showUTM ? `UTM: ${zone}${band} ${easting} ${northing} |` : "";
			const geoRefString = showGeoRef ? `GeoRef: |` : "";
			const garsString = showGARS ? `GARS:?` : "";

			return `${lonlatString} ${mgrsString} ${utmString} ${geoRefString} ${garsString}`;
		},
		projection: "EPSG:4326",
		undefinedHTML: "",
	});

	return mousePosition;
};

// 지도 내 좌표 표시 controls를 ol controls array에서 지움.
// 좌표 표시 형식을 바꾸고자 할 때 (예: mgrs를 빼고 보여준다든지), controls array에서 지운 뒤에 재생성해야 함.
export const removeMousePositionInControls = () =>
	window.map?.getControls().forEach(function (control: any) {
		if (control instanceof ol.control.MousePosition) {
			window.map.removeControl(control);
		}
	}, this);

// 좌표를 보여주고 싶지 않아서 상기의 removeMousePositionInControls를 지웠을 때, 다시 최초 설정으로 살리고 싶을 때 쓸 수 있음.
export const showDefaultMousePosition = () => {
	window.map.addControl(setMousePosition({}));
};

// 좌표 설정이 controls array에 있는지 확인
export const isMouseControlOn = () => {
	let isOn;
	window.map?.getControls().forEach(function (control: any) {
		if (control instanceof ol.control.MousePosition) {
			isOn = true;
		}
	});

	return isOn;
};
