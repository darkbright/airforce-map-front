import urlInfo from "../../libs/d2/mapSettings/urlInfo";
import aerial1m from "../../assets/images/mapSample/aerial1m.png";
import aerial2m from "../../assets/images/mapSample/aerial2m.png";
import aerial250k from "../../assets/images/mapSample/aerial250k.png";
import aerial500k from "../../assets/images/mapSample/aerial500k.png";
import aerialAuto from "../../assets/images/mapSample/aerialAuto.png";
import baseWorldMap from "../../assets/images/mapSample/baseWorldMap.png";
import land1m from "../../assets/images/mapSample/land1m.png";
import land50k from "../../assets/images/mapSample/land50k.png";
import land100k from "../../assets/images/mapSample/land100k.png";
import land250k from "../../assets/images/mapSample/land250k.png";
import landAuto from "../../assets/images/mapSample/landAuto.png";
import satelliteMap from "../../assets/images/mapSample/satelliteMap.png";
import vectors from "../../assets/images/mapSample/vectors.png";
import cop from "../../assets/images/mapSample/cop.png";
import navyRaster from "../../assets/images/mapSample/navyRaster.png";

// 로드할 수 있는 각종 지도의 종류 배열.
// 지도를 추가하거나 삭제하고자 하는 경우, 아래와 같은 형식으로 배열에 해당 객체를 추가/삭제 할 것.
// 기본적으로 아래의 배열에 객체를 추가/삭제함으로써 모든 맵 불러오기/삭제/핸들링등 기능이 자동구현됨.

export interface MapLayerListType {
	// openLayers의 Layer 리스트에 쌓일 이름값
	name: string;
	// 유저를 위한 한글 이름
	title: string;
	// 최초 사이트 로드 시 해당 지도를 default로 로드할지 여부 (Default로 로드되면 해당 맵은 유저가 임의로 삭제할 수 없도록 되어있음)
	default: boolean;
	// 지도 썸네일 이미지
	thumbnail: string;
	/* 
    mapType은 XYZ와  MVT(Mapbox Vector Tiles)로 크게 나눌 수 있음.
    XYZ 인 경우 일반 Tile을 의미하므로 Openlayers layer 설정 시 new ol.layer.Tile의 형태로 설정.
    MVT인 경우 Vector이므로 OpenLayers layer 설정 시 new ol.layer.VectorTile로 설정됨. 
	libs/d2/mapSettings/addLayers/addMapLayer.ts 파일 참조
    */
	mapType: "XYZ" | "MVT";
	category: "세계지도" | "육도" | "공도" | "해도";
	// D2MapServer에서 가져올 지도 데이터 소스 url
	url: string;
	// MVT일 경우에만 필요
	mvtUrl?: string;
	// 최소 줌 레벨 - 해당 레벨은 Map Server에서 해당 지도의 실제 줌이 가능한 비율을 확인하고 넣을 것
	minZoom?: number;
	// 최대 줌 레벻 - 해당 레벨은 Map Server에서 해당 지도의 실제 줌이 가능한 비율을 확인하고 넣을 것
	maxZoom?: number;
	// 육도 공도 벡터에만 쓰이는 것으로 파악
	extent?: number[];
}

// 한번도 경계좌표, 해당 맵이 어디까지 표기가 되는 건지 나타냄.
const koreaExtent = [13468850, 3748096, 15026241, 5349302];

export const mapLayerList: MapLayerListType[] = [
	{
		// COP Map, 분홍색으로 뜨는 맵 vector임
		name: "COPMap",
		title: "COP배경지도",
		category: "세계지도",
		mapType: "MVT",
		default: true,
		url: urlInfo.map.backgroundLayer,
		minZoom: 1,
		maxZoom: 10,
		mvtUrl: urlInfo.mvtStyle.background,
		thumbnail: cop,
	},
	{
		// 기본 지도인 세계지도 (위성지도처럼 생겼고 바다색이 남색인 지도)
		// 이 지도는 바탕에 항상 깔리는 식으로 생각하면 됨
		name: "baseWorldMap",
		title: "기본세계지도",
		category: "세계지도",
		mapType: "XYZ",
		default: true,
		url: urlInfo.map.baseLayer,
		minZoom: 0,
		maxZoom: 10,
		thumbnail: baseWorldMap,
	},

	{
		// 위성영상 또는 위성지도, 여기서는 일단 아리랑을 썼음
		name: "satelliteMap",
		title: "아리랑 위성영상",
		category: "세계지도",
		mapType: "XYZ",
		default: false,
		url: urlInfo.map.arirang,
		minZoom: 0,
		maxZoom: 16,
		thumbnail: satelliteMap,
	},
	{
		name: "land50k",
		title: "육도 5만",
		category: "육도",
		mapType: "XYZ",
		url: urlInfo.map.land50kLayer,
		default: false,
		minZoom: 0,
		maxZoom: 15,
		thumbnail: land50k,
	},
	{
		name: "land100k",
		title: "육도 10만",
		category: "육도",
		mapType: "XYZ",
		url: urlInfo.map.land100kLayer,
		default: false,
		minZoom: 0,
		maxZoom: 13,
		thumbnail: land100k,
	},
	{
		name: "land250k",
		title: "육도 25만",
		category: "육도",
		mapType: "XYZ",
		url: urlInfo.map.land250kLayer,
		default: false,
		minZoom: 0,
		maxZoom: 12,
		thumbnail: land250k,
	},
	{
		name: "land500k",
		title: "육도 50만",
		category: "육도",
		mapType: "XYZ",
		url: urlInfo.map.land500kLayer,
		default: false,
		minZoom: 0,
		maxZoom: 11,
		thumbnail: land50k,
	},
	{
		name: "land1m",
		title: "육도 100만",
		category: "육도",
		mapType: "XYZ",
		url: urlInfo.map.land1m,
		default: false,
		minZoom: 0,
		maxZoom: 10,
		thumbnail: land1m,
	},
	{
		name: "landAuto",
		title: "육도 자동 축척",
		category: "육도",
		mapType: "XYZ",
		url: urlInfo.map.landAuto,
		default: false,
		minZoom: 0,
		maxZoom: 13,
		thumbnail: landAuto,
	},
	{
		name: "aerial250k",
		title: "공도 25만",
		category: "공도",
		mapType: "XYZ",
		url: urlInfo.map.aerial250kLayer,
		default: false,
		minZoom: 0,
		maxZoom: 12,
		thumbnail: aerial250k,
	},
	{
		name: "aerial500k",
		title: "공도 50만",
		category: "공도",
		mapType: "XYZ",
		url: urlInfo.map.aerial500kLayer,
		default: false,
		minZoom: 0,
		maxZoom: 11,
		thumbnail: aerial500k,
	},
	{
		name: "aerial1m",
		title: "공도 100만",
		category: "공도",
		mapType: "XYZ",
		url: urlInfo.map.aerial1mLayer,
		default: false,
		minZoom: 0,
		maxZoom: 10,
		thumbnail: aerial1m,
	},
	{
		name: "aerial2m",
		title: "공도 200만",
		category: "공도",
		mapType: "XYZ",
		url: urlInfo.map.aerial2mLayer,
		default: false,
		minZoom: 0,
		maxZoom: 10,
		thumbnail: aerial2m,
	},
	{
		name: "aerialAuto",
		title: "공도자동축척",
		category: "공도",
		mapType: "XYZ",
		url: urlInfo.map.aerialAuto,
		default: false,
		minZoom: 0,
		maxZoom: 12,
		thumbnail: aerialAuto,
	},
	{
		name: "navyK1",
		title: "해도 K1",
		category: "해도",
		mapType: "XYZ",
		url: urlInfo.map.rasterKR1,
		default: false,
		minZoom: 0,
		maxZoom: 7,
		thumbnail: navyRaster,
	},
	{
		name: "navyK2",
		title: "해도 K2",
		category: "해도",
		mapType: "XYZ",
		url: urlInfo.map.rasterKR2,
		default: false,
		minZoom: 0,
		maxZoom: 9,
		thumbnail: navyRaster,
	},
	{
		name: "navyK3",
		title: "해도 K3",
		category: "해도",
		mapType: "XYZ",
		url: urlInfo.map.rasterKR3,
		default: false,
		minZoom: 0,
		maxZoom: 10,
		thumbnail: navyRaster,
	},
	{
		name: "navyK4",
		title: "해도 K4",
		category: "해도",
		mapType: "XYZ",
		url: urlInfo.map.rasterKR4,
		default: false,
		minZoom: 0,
		maxZoom: 12,
		thumbnail: navyRaster,
	},
	{
		name: "navyK5",
		title: "해도 K5",
		category: "해도",
		mapType: "XYZ",
		url: urlInfo.map.rasterKR5,
		default: false,
		minZoom: 0,
		maxZoom: 14,
		thumbnail: navyRaster,
	},

	////////// 여기서부터 Vector 지도 //////////////////

	{
		name: "mvtG25K",
		title: "육도 2.5만 벡터",
		category: "육도",
		mapType: "MVT",
		url: urlInfo.map.mvtG25k,
		default: false,
		extent: koreaExtent,
		minZoom: 14,
		maxZoom: 17,
		mvtUrl: urlInfo.mvtStyle.g25K,
		thumbnail: vectors,
	},
	{
		name: "mvtA250K",
		title: "공도 25만 벡터",
		category: "공도",
		mapType: "MVT",
		url: urlInfo.map.mvtA250K,
		default: false,
		extent: koreaExtent,
		minZoom: 10,
		maxZoom: 13,
		mvtUrl: urlInfo.mvtStyle.a250k,
		thumbnail: vectors,
	},
	{
		name: "mvtNavyK1",
		title: "해도 KR1 벡터",
		category: "해도",
		mapType: "MVT",
		url: urlInfo.map.mvtKR1,
		default: false,
		minZoom: 7,
		maxZoom: 10,
		// 여기엔 왜 extent가 업슬까?
		mvtUrl: urlInfo.mvtStyle.kr1,
		thumbnail: vectors,
	},
	{
		name: "mvtNavyK2",
		title: "해도 KR2 벡터",
		category: "해도",
		mapType: "MVT",
		url: urlInfo.map.mvtKR2,
		default: false,
		minZoom: 9,
		maxZoom: 11,
		mvtUrl: urlInfo.mvtStyle.kr2,
		thumbnail: vectors,
	},
	{
		name: "mvtNavyK3",
		title: "해도 KR3 벡터",
		category: "해도",
		mapType: "MVT",
		url: urlInfo.map.mvtKR3,
		default: false,
		minZoom: 10,
		maxZoom: 13,
		mvtUrl: urlInfo.mvtStyle.kr3,
		thumbnail: vectors,
	},
	{
		name: "mvtNavyK4",
		title: "해도 KR4 벡터",
		category: "해도",
		mapType: "MVT",
		url: urlInfo.map.mvtKR4,
		default: false,
		minZoom: 12,
		maxZoom: 14,
		mvtUrl: urlInfo.mvtStyle.kr4,
		thumbnail: vectors,
	},
	{
		name: "mvtNavyK5",
		title: "해도 KR5 벡터",
		category: "해도",
		mapType: "MVT",
		url: urlInfo.map.mvtKR5,
		default: false,
		minZoom: 14,
		maxZoom: 16,
		mvtUrl: urlInfo.mvtStyle.kr5,
		thumbnail: vectors,
	},
];

// {
// 	// openStreetMap
// 	// 부대 내에선 작동안하므로 지워야댐.
// 	id: 1,
// 	name: "openStreetMap",
// 	title: "오픈스트리트맵",
// 	category: "세계지도",
// 	mapType: "XYZ",
// },
