import D2MapModule from "../../D2MapModule";

const { ol, CoordManager } = D2MapModule;

// 현재 마우스의 위치를 위경도로 표시
export const mousePosition = new ol.control.MousePosition({
	coordinateFormat: (coordinate: any) => {
		const lon = coordinate[0];
		const lat = coordinate[1];
		// MGRS 형식
		const geoMgrs = new CoordManager.Geo2MGRS(lon, lat);
		// UTM 형식
		const { zone, band, easting, northing } = new CoordManager.Geo2UTM_Ex(lon, lat);
		// GeoRef
		// TO_BE_CHECKED 빈 값만 옴
		// const geoRef = new CoordManager.Geo2GeoRef(lat, lon);
		// Gars
		// TO_BE_CHECKED 빈 값만 옴
		// const gars = new CoordManager.Geo2GARS(lat, lon, "5");

		return `Geo: ${lon.toFixed(4)}, ${lat.toFixed(4)} | MGRS: ${geoMgrs} | UTM: ${zone}${band} 
        ${easting} ${northing} | GARS:?`;
	},
	projection: "EPSG:4326",
	undefinedHTML: "",
});
