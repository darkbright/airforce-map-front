import { D2Constants } from "../../../types/d2/D2Constants";
import D2MapModule from "../D2MapModule";
import urlInfo from "./urlInfo";
import {
	billboard,
	billboardTerrain,
	marker,
	trackerRotate,
} from "../../../assets/d2/embeddedImages";
import { mousePosition } from "./controls/mousePosition";

// 대한민국 중심좌표
const KOREA_CENTER_LON = 127.027583;
const KOREA_CENTER_LAT = 37.497928;

export default async () => {
	const { ol, Coordinate } = D2MapModule;

	// 초기 로딩 시 중심좌표를 어디로 잡을 것인지 설정. 현재는 대한민국 중심좌표로 설정되어 있음.
	const olCenter = ol.proj.fromLonLat([KOREA_CENTER_LON, KOREA_CENTER_LAT]);

	// fullScreen Button Load
	const fullScreen = new ol.control.FullScreen();

	window.map = new ol.Map({
		controls: ol.control
			.defaults({
				// 좌측상단 zoom용 plus minus 버튼 보이게 할 것인지 여부
				zoom: true,
			})
			.extend([fullScreen, mousePosition]),
		target: "map", // 지도 id
		layers: [
			new ol.layer.Tile({
				preload: Infinity,
				source: new ol.source.XYZ({
					// 기본으로 띄울 url 설정
					url: urlInfo.map.baseLayer,
					crossOrigin: "Anonymous",
					minZoom: 0,
					maxZoom: 10,
				}),
			}),
		],
		view: new ol.View({
			center: olCenter,
			zoom: 8,
			minZoom: 0,
			maxZoom: 17,
		}),
		intersections: ol.interaction.defaults({
			doubleClickZoom: false,
			altShiftDragRotate: false,
			shiftDragZoom: false,
			pinchRotate: false,
			pinchZoom: false,
		}),
	});

	// 좌표 관리 모듈 생성
	new Coordinate(urlInfo.dem);

	// 정배율 지도 확대/축소 설정
	window.map.getView().setConstrainResolution(true);

	// 임베디드 이미지 정의
	const D2_CONSTANTS: D2Constants = {
		embeddedImages: {
			billboard,
			billboardTerrain,
			marker,
			trackerRotate,
		},
	};

	window.D2_CONSTANTS = D2_CONSTANTS;

	// URL 관리 모듈 생성 및 군대부호 미리보기 서버 설정
	window.D2MapManager = new D2MapModule.D2MapManager();
	window.D2MapManager = {
		D2MS_IMAGE: urlInfo.d2ms,
		D2MS_PROPERTY: urlInfo.d2ms_property,
	};

	// 군대부호 모듈 및 미리보기 트리 생성
	window.MilSymbol = D2MapModule.MilSymbol;
	window.MilSymbol.loadMilsymbolTree();

	// 레이어 관리 모듈 생성
	window.mapLayerManager = new D2MapModule.MapLayerManager(window.map);

	// 투명도 레이어 모듈 생성
	window.graphic = new D2MapModule.Graphic(window.map);
	window.graphic.getSelectGraphicBoard().setName("Layer-01");
	window.graphic.loadStdXSD(urlInfo.graphic.overlay);

	// TO_BE_CHECKED 좌표 관리 모듈 생성 - 현재 사용 안하고 있음?
	// const coordinate = new D2MapModule.Coordinate(urlInfo.dem);

	// 투명도 커서 정의
	const cursor = {
		default: "default",
		move: "move",
		edit: "crosshair",
		rotate: "url(src/assets/d2/icon/cursor-roate.cur), auto",
	};

	// 투명도 레이어 모듈 설정
	window.graphic = new D2MapModule.Graphic(window.map);
	window.graphic.getSelectGraphicBoard().setName("Layer-01");
	window.graphic.loadStdXSD(urlInfo.graphic.overlay); // 투명도 스키마
	window.graphic.setCursor(cursor); // 커서 세팅
};
