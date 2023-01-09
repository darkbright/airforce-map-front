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
import { mapLayerList } from "../../../data/constants/mapLayerList";
import { addMapLayer } from "./addLayers/addMapLayer";
import { KOREA_CENTER_LAT, KOREA_CENTER_LON } from "../../../data/constants/baseCoord";
import { loadMVTLayerTree } from "./mvtLayerHandling/MVTLayerTree";
import { GraphicCursor } from "../../../types/d2/Graphic";
import { setLocalStorage } from "../../../stores/localStorageSetting";

/**
 * 최초 맵 객체를 init하면서, 각종 default Controls(풀스크린, 줌버튼, 마우스포지션)을 입혀주고,  최초 맵 객체 형성과 관련된 D2에서 만든 함수들을 init 시킴
 */
export default async () => {
	const { ol, Coordinate, MilSymbol, MapLayerManager, Graphic } = D2MapModule;

	/**
	 * 초기 로딩 시 중심좌표를 어디로 잡을 것인지 설정. 현재는 대한민국 중심좌표로 설정되어 있음.
	 */
	const olCenter = ol.proj.fromLonLat([KOREA_CENTER_LON, KOREA_CENTER_LAT]);

	// fullScreen Button Load
	const fullScreen = new ol.control.FullScreen();

	// 최초 맵 객체 생성
	window.map = await new ol.Map({
		controls: ol.control
			.defaults({
				// 좌측상단 zoom용 plus minus 버튼 보이게 할 것인지 여부
				zoom: true,
			})
			// 만약 OL에서 제공하는 기본 scaleLine(축적표시)을 사용하고 싶다면 setScaleLine({})을 extend array에 추가할 것.
			.extend([fullScreen, setMousePosition({})]),
		target: "map", // 지도 id
		// 기본으로 뜨는 맵을 없앴음.
		// 구조가 ol에 맵을 등록하고 d2 mapLayerManager에 등록을 해줘야하는데, mapLayerManager를 생성하려면 ol map이 필요해짐. 상호참조를 하고 있으니 미리 레이어를 달아주면 안되겠음.
		// layers: defaultMapToLoad,
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
	// Digital Elevation Model 생성을 통해 고도 관련 자료를 받아옴
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

	// 군대부호와 관련된 D2 생성 ui 및 개별 군대부호 properties를 표현하는 언어를 영어로 할지 한글로 할지 설정하는 부분
	// 여기서는 모두 한글로 표현하겠음
	setLocalStorage("lang", "ko");

	// 군대부호 모듈 및 미리보기 트리 생성
	window.MilSymbol = MilSymbol;
	window.MilSymbol.loadMilsymbolTree();

	// 레이어 관리 모듈 생성
	window.mapLayerManager = new MapLayerManager(window.map);

	/**
	 * Default로 로드할 맵을 정하고 map 객체 생성 후 그 layer들을 넣어줌.
	 * Default 선정은 data / constants / mapLayerList에서 관리할 것.
	 */
	await mapLayerList
		.filter((m) => m.default === true)
		.reverse()
		.map((layer) => addMapLayer({ addToMap: true, ...layer }));

	// 투명도 커서 정의
	const cursor: GraphicCursor = {
		default: "default",
		move: "move",
		edit: "crosshair",
		rotate: "url(src/assets/d2/icon/cursor-roate.cur), auto",
	};

	// 투명도 레이어 모듈 설정
	window.graphic = new Graphic(window.map);
	window.graphic.getSelectGraphicBoard().setName("Layer-1");
	window.graphic.loadStdXSD(urlInfo.graphic.overlay); // 투명도 스키마
	window.graphic.setCursor(cursor); // 커서 세팅

	// FDB 벡터용 심볼 이미지를 모아놓은 경로 설정
	window.mapLayerManager.addMVTSymbolPath("MVTSymbolPath", urlInfo.fdbSymbolPath);

	loadMVTLayerTree();

	// 투명도 feature 중 text 관련 핸들링
	// TO_BE_CHECKED
	// window.CKEDITOR_BASEPATH = "src/libs/d2/d2editor";
	// const textEditorUI = new TextEditorPopupUI();
	// console.log("textEditorUI", textEditorUI);
};
