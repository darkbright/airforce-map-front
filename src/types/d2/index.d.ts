import { MGRSType, UTMType } from "./Coords";
import { d2Constants } from "./d2Constants";
import { d2MapManager } from "./d2MapManager";

export {};

export type Color = number[];

declare global {
	interface Window {
		// tslint:disable-next-line

		// d2Core를 통해 생성된 객체
		D2_CONSTANTS: d2Constants;
		map: any;
		D2MapManager: d2MapManager;
		MilSymbol: any;
		mapLayerManager: any;
		graphic: any;
		postComposeCtrl: any;
		exportImage: {
			downloadPNG: () => void;
		};
		spatialMath: {
			getMapScale: any;
		};
		CoordManager: any;

		// d2Map.min.js 에서 추출된 값
		D2: {
			Core: {
				CesiumManager: any;
				CoordManager: {
					CartographicRadian2Cartesian: any;
					DMS2Geo: (lon: string, lat: string) => string;
					GARS2Geo: any;
					Geo2DMS: any;
					Geo2GARS: (lat: number, lon: number, option: string) => string;
					Geo2GeoRef: (lat: number, lon: number) => string;
					Geo2KCGRS: any;
					Geo2MGRS: (lon: number, lat: number) => MGRSType;
					Geo2UTM: any;
					Geo2UTM_Ex: (lon: number, lat: number) => UTMType;
					GeoRef2Geo: any;
					KCGRS2Geo: any;
					MGRS2Geo: (obj: MGRSType) => { lon: number; lat: number };
					UTM2Geo: (
						zone: UTMType.zone,
						band: UTMType.band,
						easting: UTMType.easting,
						northing: UTMType.northing,
					) => { lon: number; lat: number };
					UTM2Geo_Ex: any;
					getGeoCenter: any;
					getOLProj: any;
					setGeoAnimatedMoveCenter: any;
					setGeoMoveCenter: any;
				};
				Coordinate: any;
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
