import { D2Constants } from "../../../types/d2/D2Constants";
import D2MapModule from "../D2MapModule";
import urlInfo from "./urlInfo";
import {
	billboard,
	billboardTerrain,
	marker,
	trackerRotate,
} from "../../../assets/d2/embeddedImages";
import { setMousePosition } from "./controls/mousePosition";
import { setScaleLineControl } from "./controls/scale";
import { mapLayerList } from "../../../data/constants/mapLayerList";
import { addMapLayer } from "./addLayers/addMapLayer";
import { KOREA_CENTER_LAT, KOREA_CENTER_LON } from "../../../data/constants/baseCoord";

/**
 * 최초 맵 객체를 init하면서, 각종 default Controls(풀스크린, 줌버튼, 마우스포지션)을 입혀주고,  최초 맵 객체 형성과 관련된 D2에서 만든 함수들을 init 시킴
 */
export default async () => {
	const { ol, Coordinate } = D2MapModule;

	/**
	 * 초기 로딩 시 중심좌표를 어디로 잡을 것인지 설정. 현재는 대한민국 중심좌표로 설정되어 있음.
	 */
	const olCenter = ol.proj.fromLonLat([KOREA_CENTER_LON, KOREA_CENTER_LAT]);

	// fullScreen Button Load
	const fullScreen = new ol.control.FullScreen();

	/**
	 * Default로 로드할 맵을 정하고 map 객체 생성 시 그 layer들을 넣어줌.
	 * Default 선정은 data / constants / mapLayerList에서 관리할 것.
	 */
	const defaultMapToLoad = mapLayerList
		.filter((m) => m.default === true)
		.reverse()
		.map((layer) => addMapLayer({ addToMap: false, ...layer }));

	// 최초 맵 객체 생성
	window.map = new ol.Map({
		controls: ol.control
			.defaults({
				// 좌측상단 zoom용 plus minus 버튼 보이게 할 것인지 여부
				zoom: true,
			})
			.extend([fullScreen, setMousePosition({}), setScaleLineControl()]),
		target: "map", // 지도 id
		layers: defaultMapToLoad,
		view: new ol.View({
			center: olCenter,
			zoom: 7,
			minZoom: 0,
			maxZoom: 17,
		}),
		intersections: ol.interaction.defaults({
			doubleClickZoom: false,
			altShiftDragRotate: true,
			shiftDragZoom: false,
			pinchRotate: false,
			pinchZoom: false,
		}),
	});

	// 좌표 관리 모듈 생성
	window.Coordinate = new Coordinate(urlInfo.dem);

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
