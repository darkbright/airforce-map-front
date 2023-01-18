import { Area } from "./Area";
import { ClipboardOptions } from "./ClipboardOptions";
import { CoordManager } from "./Core/CoordManager";
import { IGraphicObjectProp } from "./Core/IGraphicObjectProp";
import { IGraphicObjectStyle } from "./Core/IGraphicObjectStyle";
import { IGraphicUtil } from "./Core/IGraphicUtil";
import { ITextEditorPopupUI } from "./Core/ITextEditorPopupUI";
import { ICKEditorUI } from "./Core/ICkEditorUI";
import { CrossSection } from "./CrossSection";
import { d2Constants } from "./d2Constants";
import { d2MapManager } from "./d2MapManager";
import { Distance } from "./distance";
import { EventManager } from "./eventManager";
import { Graphic } from "./Graphic";
import { HeightBillboard } from "./HeightBillboard";
import { MapLayerManager } from "./MapLayerManager";
import { MilSymbol } from "./milSymbol";
import { PostComposeCtrl } from "./PostComposeCtrl";
import { Radar } from "./Radar";
import { RadiusCircle } from "./RadiusCircle";
import { SlopeDistance } from "./SlopeDistance";
import { SpatialMath } from "./SpatialMath";
import { TerrainAnalysisManager } from "./TerrainAnalysisManager";

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
		Coordinate: any;
		CKEDITOR: any;
		D2_CONSTANTS: d2Constants;
		CKEDITOR_BASEPATH: string;
		map: any;
		D2MapManager: d2MapManager;
		MilSymbol: MilSymbol;
		mapLayerManager: MapLayerManager;
		graphic: Graphic;
		postComposeCtrl: PostComposeCtrl;
		eventManager: EventManager;
		exportImage: {
			downloadPNG: () => void;
		};
		spatialMath: SpatialMath;
		CoordManager: any;
		distance: Distance;
		area: Area;
		radiusCircle: RadiusCircle;
		crossSection: CrossSection;
		radar: Radar;
		heightBillboard: HeightBillboard;
		slopeDistance: SlopeDistance;
		TerrainAnalysisManager: TerrainAnalysisManager;
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
				CoordManager: CoordManager;
				/**
				 * 고도 서비스 초기화, 그리드 객체 초기화 측정기능 및 지형분석 초기화 등 지도 서비스를 위한 클랙스를 초기화함
				 */
				Coordinate: any;
				CKEditorUI: typeof ICKEditorUI;
				/**
				 * 한국군 표준군대부호(MND-STD-2525C) 처리를 위한 기본클래스로 기본부호인 전술기호(Tactical Symbol)와 전술도식(Tactical Grapphic) 정형 부호를 표출하는 전용 클래스
				 */
				D2MS: any;
				D2MapManager: any;
				Graphic: any;
				GraphicObjectProp: IGraphicObjectProp;
				GraphicObjectStyle: IGraphicObjectStyle;
				GraphicPopUpUI: any;
				GraphicUtil: IGraphicUtil;
				Grid: any;
				MSTacticalLineGraphics: any;
				MSTacticalPolygonGraphics: any;
				MVTLayerUI: any;
				MapLayerManager: any;
				MilSymbol: any;
				SpatialOperator: any;
				TextEditorPopupUI: ITextEditorPopupUI;
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
