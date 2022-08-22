import urlInfo from "../../libs/d2/mapSettings/urlInfo";

export interface mapGridLayerListType {
	// grid 속성을 로드할 url로 Map Server에서 가져옴
	url: string;
	// grid의 이름. 전체 Layer에서 해당 항목을 찾을 수 있도록 하는 좌표가 됨
	name: string;
	// 유저에게 보여줄 유저 친화적 이름 또는 한글로 표기
	title: string;
	// zoomLevel
	maxZoom: number;
	// zoomLevel
	minZoom: number;
}

// 지도 위에 나타내는 격자 선인 Grid의 종류를 정의함.

export const mapGridLayerList: mapGridLayerListType[] = [
	{
		// Geographic(경위도) Grid
		url: urlInfo.grid.geographic,
		name: "geographic-grid",
		title: "경위도",
		minZoom: 0,
		maxZoom: 12,
	},
	{
		// GeoRef Grid
		url: urlInfo.grid.georef,
		name: "georef-grid",
		title: "GeoRef",
		minZoom: 0,
		maxZoom: 12,
	},
	{
		// MGRS Grid 20km
		url: urlInfo.grid.mgrs20,
		name: "mgrs20-grid",
		title: "MGRS 20km",
		minZoom: 1,
		maxZoom: 17,
	},
	{
		// MGRS Grid 10km
		url: urlInfo.grid.mgrs10,
		name: "mgrs10-grid",
		title: "MGRS 10km",
		minZoom: 1,
		maxZoom: 12,
	},
	{
		// MGRS Grid 5Km
		url: urlInfo.grid.mgrs5,
		name: "mgrs5-grid",
		title: "MGRS 5km",
		minZoom: 1,
		maxZoom: 14,
	},
	{
		// MGRS Grid 1km
		url: urlInfo.grid.mgrs1,
		name: "mgrs1-grid",
		title: "MGRS 1km",
		minZoom: 1,
		maxZoom: 14,
	},
	{
		// Gars Grid
		url: urlInfo.grid.gars,
		name: "gars-grid",
		title: "GARS",
		minZoom: 0,
		maxZoom: 13,
	},
	{
		// UTM Grid 20Km
		url: urlInfo.grid.utm20,
		name: "utm20-grid",
		title: "UTM 20Km",
		minZoom: 1,
		maxZoom: 12,
	},
	{
		//  UTM Grid 10Km
		url: urlInfo.grid.utm10,
		name: "utm10-grid",
		title: "UTM 10Km",
		minZoom: 1,
		maxZoom: 10,
	},
	{
		// UTM Grid 5Km
		url: urlInfo.grid.utm5,
		name: "utm5-grid",
		title: "UTM 5Km",
		minZoom: 1,
		maxZoom: 14,
	},
	{
		// UTM Grid 1Km
		url: urlInfo.grid.utm1,
		name: "utm1-grid",
		title: "UTM 1km",
		minZoom: 1,
		maxZoom: 14,
	},
];
