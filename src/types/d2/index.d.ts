import { Area } from "./Area";
import { ClipboardOptions, LonLatType, MGRSType, UTMType, UTM_XYType } from "./Coords";
import { d2Constants } from "./d2Constants";
import { d2MapManager } from "./d2MapManager";
import { Distance } from "./distance";
import { EventManager } from "./eventManager";

export {};

export type Color = number[];

declare global {
	// eslint-disable-next-line no-var
	var D2: {
		Core: any;
	};
	interface Window {
		// tslint:disable-next-line

		// d2Core를 통해 생성된 객체
		Cesium: any;
		Coordinate: any;
		D2_CONSTANTS: d2Constants;
		map: any;
		D2MapManager: d2MapManager;
		MilSymbol: any;
		mapLayerManager: {
			mapLayers: any;
			mapMVTLayers: any;
			mapOverviewLayers: any;
			mapSymbolPath: any;
			overviewMapControl: any;
			interacation: any;
			/**
			 * mapLayerManager에 맵 레이어를 등록함.
			 * - name: 레이어 이름 (string)
			 * - addOverview: 오버뷰(인덱스에 등록할지 여부)
			 * - layer: 생성된 레이어 객체
			 */
			addLayer: (name: string, addOverview: boolean, layer: any) => void;
			/**
			 * mapLayerManager에 맵 레이어를 등록함.
			 * - name: 레이어 이름 (string)
			 * - styleUrl: 벡터레이어의 스타일 주소
			 * - addOverview: 오버뷰(인덱스에 등록할지 여부)
			 * - layer: 생성된 레이어 객체
			 */
			addMVTLayer: (
				name: string,
				styleUrl: string | undefined,
				addOverview: boolean,
				layer: any,
			) => void;
			addMVTSymbolPath: (name: string, symbolPath: string) => void;
			/**
			 * name: 레이어 이름
			 */
			getLayer: (name: string) => any;
			getMVTLayer: (name: string) => any;
			removeLayer: (name: string) => any;
			createOverview: () => void;
			destroyOverview: () => void;
			getPickingStyle: (name: string) => any;
			getSelectStyle: (name: string) => any;
			handleClear: () => void;
			clearSelectFeature: () => void;
			initialAnlysis: () => void;
		};
		graphic: any;
		postComposeCtrl: any;
		eventManager: EventManager;
		exportImage: {
			downloadPNG: () => void;
		};
		// spatialMath: {
		// 	getMapScale: () => number;
		// 	getHeight(lon: number, lat: number, callback: (result: number) => void);
		// 	getZoomLevel: () => number;
		// };
		spatialMath: any;
		CoordManager: any;
		distance: Distance;
		area: Area;
		// d2Map.min.js 에서 추출된 값
		D2: {
			Core: {
				/**
				 * 지도 위에 임의 지점을 찍고 해당 지점에 좌표값을 경위도나 MGRS로 클립보드에 저장하는 클래스
				 */
				ClipboardCoordinate: {
					createClipboard: (
						options: ClipboardOptions,
						callback: (result: boolean) => boolean,
					) => void;
				};
				/**
				 * 다양한 좌표계 변환 및 지도 중심 이동 등 좌표계 관련 기능 처리 Class
				 */
				CoordManager: {
					/**
					 * DMS(도분초) 형식을 일반 위경도로 변환
					 */
					DMS2Geo: (lon: string, lat: string) => string;
					/**
					 * Gars 좌표를 [경도, 위도] 형식으로 변환
					 */
					GARS2Geo: (gars: string) => string;
					/**
					 * 경위도 좌표값을 [경도 도분초, 위도 도분초]로 변환
					 */
					Geo2DMS: (lon: number, lat: number) => any;
					/**
					 * 경위도 좌표값을 Gars 좌표로 변환 (param 입력시 순서 주의)
					 */
					Geo2GARS: (lat: number, lon: number, precision: string) => string;
					/**
					 * 경위도 좌표값을 GeoRef 좌표로 변환 (param 입력시 순서 주의)
					 */
					Geo2GeoRef: (lat: number, lon: number) => string;
					/**
					 * 경위도 좌표값을 KCGRS 좌표로 변환 (param 입력시 순서 주의)
					 */
					Geo2KCGRS: (lat: number, lon: number) => string;
					/**
					 * 경위도 좌표값을 MGRS 좌표로 변환
					 */
					Geo2MGRS: (lon: number, lat: number) => MGRSType;
					/**
					 * 경위도 좌표값을 xy 값을 포함한 UTM으로 변환
					 */
					Geo2UTM: (lon: number, lat: number, xy: number[]) => UTM_XYType;
					/**
					 * 경위도값을 UTM 좌표 값으로 변환함.
					 */
					Geo2UTM_Ex: (lon: number, lat: number) => UTMType;
					/**
					 * GeoRef값을 위경도 좌표값으로 변환함
					 *
					 * GeoRef값은 일반 사용 시 값을 사용하면 안되고 공백 제거 후 사용할 것
					 * `const georefVal = georef.replace(/ /g,"");`
					 */
					GeoRef2Geo: (geoRef: string) => string;
					/**
					 * KCGRS 좌표를 위경도 좌표값으로 변환
					 */
					KCGRS2Geo: (kcgrs: string) => LonLatType;
					/**
					 * MGRS 좌표값을 위경도 값으로 변환
					 */
					MGRS2Geo: (obj: MGRSType) => LonLatType;
					/**
					 * UTM 좌표값을 위경도 변환
					 */
					UTM2Geo: (
						zone: UTMType.zone,
						band: UTMType.band,
						easting: UTMType.easting,
						northing: UTMType.northing,
					) => { lon: number; lat: number };
					UTM2Geo_Ex: any;
					/**
					 * 현재 화면 영역에 대한 중심좌표 경위도를 반환
					 */
					getGeoCenter: () => LonLatType;
					/**
					 * OpenLayers olProj 객체를 반환함
					 */
					getOLProj: any;
					/**
					 * 입력한 중심좌표(경도, 위도) 위치로 설정한 이동시간만큼 애니메이션 형식으로 이동됨
					 *
					 * duration은 1초 단위임
					 */
					setGeoAnimatedMoveCenter: (lon: number, lat: number, duration: number) => void;
					/**
					 * 입력한 중심좌표(경도, 위도) 위치로 애니메이션 없이 바로 이동.
					 */
					setGeoMoveCenter: (lon: number, lat: number) => void;
				};
				/**
				 * 고도 서비스 초기화, 그리드 객체 초기화 측정기능 및 지형분석 초기화 등 지도 서비스를 위한 클랙스를 초기화함
				 */
				Coordinate: any;
				/**
				 * 한국군 표준군대부호(MND-STD-2525C) 처리를 위한 기본클래스로 기본부호인 전술기호(Tactical Symbol)와 전술도식(Tactical Grapphic) 정형 부호를 표출하는 전용 클래스
				 */
				D2MS: any;
				D2MapManager: any;

				Graphic: any;
				// Graphic: {
				// 	addGraphicAppBoard: any;
				// 	addGraphicBoard: any;
				// 	changeGraphicBoardOrder: any;
				// 	copyObject: any;
				// 	createMode: any;
				// 	destroy: any;
				// 	getDefaultStyle: any;
				// 	getGraphicAppBoard: any;
				// 	getGraphicBoard: any;
				// 	getGraphicBoardCount: any;
				// 	getSelectObjectList: any;
				// 	layerMessage: any;
				// 	loadStdXSD: any;
				// 	muteMode: any;
				// 	pasteObject: any;
				// 	postRender: any;
				// 	removeGraphicAppBoard: any;
				// 	removeGraphicBoard: any;
				// 	selectMode: any;
				// 	selectObjectRemove: any;
				// 	selectedObjectIsGrouping: any;
				// 	selectedObjectToBackward: any;
				// 	selectedObjectToBottom: any;
				// 	selectedObjectToForward: any;
				// 	selectedObjectToGroup: any;
				// 	selectedObjectToTop: any;
				// 	selectedObjectToUnGroup: any;
				// 	setCursor: () => void;
				// 	setSelectGraphicBoard: any;
				// 	styleMessage: any;
				// 	unSelect: any;
				// };
				GraphicObjectProp: any;
				GraphicObjectStyle: any;
				GraphicPopUpUI: any;
				GraphicUtil: any;
				Grid: any;
				MSTacticalLineGraphics: any;
				MSTacticalPolygonGraphics: any;
				MVTLayerUI: any;
				MapLayerManager: any;
				MilSymbol: any;
				SpatialOperator: any;
				Tracker: any;
				ol: {
					AssertionError: any;
					Collection: any;
					Disposable: any;
					Feature: any;
					Geolocation: any;
					Graticule: any;
					Image: any;
					ImageBase: any;
					ImageCanvas: any;
					ImageTile: any;
					Kinetic: any;
					Map: any;
					style: {
						Circle: any;
						Fill: any;
						Icon: any;
						IconAnchorUnits: any;
						IconImage: any;
						IconImageCache: any;
						IconOrigin: any;
						Image: any;
						RegularShape: any;
						Stroke: any;
						Style: any;
						Text: any;
						TextPlacement: any;
						expressions: any;
						literal: any;
					};
					MapBrowserEvent: any;
					MapBrowserEventHandler: any;
					MapEvent: any;
					Object: any;
					Observable: any;
					Overlay: any;
					PluggableMap: any;
					Tile: any;
					TileCache: any;
					TileQueue: any;
					TileRange: any;
					VERSION: any;
					VectorRenderTile: any;
					VectorTile: any;
					View: any;
					asserts: any;
					centerconstraint: {
						createExtent: any;
						none: any;
					};
					color: {
						asArray(color: Color | string): Color;
						asString(color: Color | string): string;
						fromString: (s: string) => Color;
						isStringColor(s: string): boolean;
						normalize(color: Color): Color;
					};
					colorLike: {
						asColorLike: any;
					};
					control: {
						Attribution: any;
						Control: any;
						FullScreen: any;
						MousePosition: any;
						OverviewMap: any;
						Rotate: any;
						ScaleLine: any;
						Zoom: any;
						ZoomSlider: any;
						ZoomToExtent: any;
						defaults: any;
					};
					coordinate: {
						add: any;
						closestOnCircle: any;
						closestOnSegment: any;
						createStringXY: any;
						degreesToStringHDMS: any;
						distance: any;
						equals: any;
						format: any;
						getWorldsAway: any;
						rotate: any;
						scale: any;
						squaredDistance: any;
						squaredDistanceToSegment: any;
						toStringHDMS: any;
						toStringXY: any;
						wrapX: any;
					};
					dom: {
						createCanvasContext2D: any;
						outerHeight: any;
						outerWidth: any;
					};
					easing: {
						easeIn: any;
						easeOut: any;
						inAndOut: any;
						linear: any;
						upAndDown: any;
					};
					events: {
						listen: any;
						listenOnce: any;
						unlistenByKey: any;
					};
					extent: {
						applyTransform: any;
						approximatelyEquals: any;
						boundingExtent: any;
						buffer: any;
						clone: any;
						cloesetSquaredDistanceXY: any;
						containsCoordinate: any;
						containsExtent: any;
						containsXY: any;
						coordinateRelationship: any;
						createEmpty: any;
						createOrUpdate: any;
						createOrUpdateEmpty: any;
						createOrUpdateFromCoordinate: any;
						createOrUpdateFromCoordinates: any;
						createOrUpdateFromFlatCoordinates: any;
						createOrUpdateFromRings: any;
						equals: any;
						extend: any;
						extendCoordinate: any;
						extendCoordinates: any;
						extendFlatCoordinates: any;
						extendRings: any;
						extendXY: any;
						forEachCorner: any;
						getArea: any;
						getBottomLeft: any;
						getBottomRight: any;
						getCenter: any;
						getCorner: any;
						getEnlargedArea: any;
						getForViewAndSize: any;
						getHeight: any;
						getIntersectionArea: any;
						getMargin: any;
						getSize: any;
						getTopLeft: any;
						getTopRight: any;
						getWidth: any;
						intersects: any;
						intersectsSegment: any;
						isEmpty: any;
						returnOrUpdate: any;
						scaleFromCenter: any;
						wrapX: any;
					};
					featureLoader: {
						loadFeaturesXhr: any;
						setWithCredentials: any;
						xhr: any;
					};
					format: {
						EsriJSON: any;
						GML: any;
						GPX: any;
						GeoJSON: any;
						IGC: any;
						IIIFInfo: any;
						KML: any;
						MVT: any;
						OWS: any;
						Polyline: any;
						TopoJSON: any;
						WFS: any;
						WKT: any;
						WMSCapabilities: any;
						WMSGetFeatureInfo: any;
						WMTSCapabilities: any;
					};
					geom: {
						Circle: any;
						Geometry: any;
						GeometryCollection: any;
						LineString: any;
						LinearRing: any;
						MultiLineString: any;
						MultiPoint: any;
						MultiPolygon: any;
						Point: any;
						Polygon: any;
						SimpleGeometry: any;
					};
					getUid: any;
					interaction: {
						DoubleClickZoom: any;
						DragAndDrop: any;
						DragBox: any;
						DragPan: any;
						DragRotate: any;
						DrageRotateAndZoom: any;
						DragZoom: any;
						Draw: any;
						Extent: any;
						Interaction: any;
						KeyboardPan: any;
						KeyboardZoom: any;
						Modify: any;
						MouseWheelZoom: any;
						PinchRotate: any;
						PinchZoom: any;
						Pointer: any;
						Select: any;
						Snap: any;
						Translate: any;
						defaults: any;
					};

					layer: {
						Graticule: any;
						Group: any;
						Heatmap: any;
						Image: any;
						Layer: any;
						MapboxVector: any;
						Tile: any;
						Vector: any;
						VectorImage: any;
						VectorTile: any;
						WebGLPoints: any;
					};
					proj: {
						METERS_PER_UNIT: any;
						Projection: any;
						addCommon: any;
						addCoordinateTransforms: any;
						addEquivalentProjections: any;
						addEquivalentTransforms: any;
						addProjection: any;
						addProjections: any;
						clearAllProjectsions: any;
						clearUserProjections: any;
						cloneTransform: any;
						createProjection: any;
						createSafeCoordinateTransform: any;
						createTransformFromCoordinateTransform: any;
						equivalent: any;
						fromLonLat: any;
						fromUserCoordinate: any;
						fromUserExtent: any;
						get: any;
						getPointResolution: any;
						getTransform: any;
						getTransformFromProjections: any;
						getUserProjection: any;
						identityTransform: any;
						setUserProjection: any;
						toLonLat: any;
						toUserCoordinate: any;
						toUserExtent: any;
						transform: any;
						transformExtent: any;
						transformWithProjections: any;
						useGeographic: any;
					};
					source: {
						BingMaps: any;
						CartoDB: any;
						Cluster: any;
						IIIF: any;
						Image: any;
						ImageArcGISRest: any;
						ImageCanvas: any;
						ImageMapGuide: any;
						ImageStatic: any;
						ImageWMS: any;
						OSM: any;
						Raster: any;
						Source: any;
						Stamen: any;
						Tile: any;
						TileArcGISRest: any;
						TileDebug: any;
						TileImage: any;
						TileJson: any;
						TileWMS: any;
						UTFGrid: any;
						UrlTile: any;
						Vector: any;
						VectorTile: any;
						WMTS: any;
						XYZ: any;
						Zoomify: any;
					};
				};
			};
		};
	}
}
