import { GraphicFeaturefavColorProps } from "../../../../stores/useGraphicFeatureColorStore";
import { IGraphicObjectProp } from "../../../../types/d2/Core/IGraphicObjectProp";
import { IGraphicObjectStyle } from "../../../../types/d2/Core/IGraphicObjectStyle";
import D2MapModule from "../../D2MapModule";

/**
 * 맵 툴바에 나타낼 각종 도형의 이름
 */
export type GraphicShapeType =
	| "layer"
	| "select"
	| "point"
	| "straightLine"
	| "straightLineWithOneArrow"
	| "straigntLineWithTwoArrows"
	| "spline"
	| "triangle"
	| "text"
	| "rectangle"
	| "roundedRectangle"
	| "polygon"
	| "BSpline"
	| "pentagon"
	| "hexagon"
	| "circle"
	| "fanShaped"
	| "arc"
	| "sector"
	| "forwardAxis"
	| "multiPointForwardAxis"
	| "FlightForwradAxis"
	| "combatBoundary"
	| "image";

interface ShapesOnToolBarShaperProps {
	tid: GraphicShapeType;
	favColor: GraphicFeaturefavColorProps;
}

/**
 * Map 내 DrawPaanelToolbar의 각종 도형들을 그릴 때 사용하는 함수임.
 * @param tid string 사용할 도형의 이름을 string으로 전달
 */

export const ShapesOnToolbarShaper = ({ tid, favColor }: ShapesOnToolBarShaperProps) => {
	window.eventManager.setMapMode("graphic");
	const graphic = window.graphic;
	const { GraphicObjectProp, GraphicObjectStyle, MSTacticalLineGraphics } = D2MapModule;
	const { fc: fillColor, lc: lineColor, lw: lineWidth } = favColor;

	// const { favColor } = useGraphicFeatureColorStore();

	switch (tid) {
		case "layer":
			break;
		case "select": {
			graphic.muteMode();
			graphic.selectMode();
			break;
		}
		/**
		 * 점
		 */
		case "point": {
			const objProp: IGraphicObjectProp = new GraphicObjectProp("point");
			const objStyle: IGraphicObjectStyle = new GraphicObjectStyle();
			objStyle.fill.color = fillColor;
			objStyle.line.color = lineColor;
			objStyle.line.width = lineWidth;
			graphic.createMode(objProp, objStyle);
			break;
		}
		/**
		 * 직선
		 */
		case "straightLine": {
			const objProp: IGraphicObjectProp = new GraphicObjectProp("polyline");
			const objStyle: IGraphicObjectStyle = new GraphicObjectStyle();
			// polyline의 형태는 원래 채움 색을 가지고 있어, 그것을 투명하게 처리함으로써 직선을 구현하고 있음
			objStyle.fill.color[3] = 0;
			objStyle.line.color = lineColor;
			objStyle.line.width = lineWidth;
			graphic.createMode(objProp, objStyle);

			break;
		}
		/**
		 * 한쪽 화살표가 있는 직선
		 */
		case "straightLineWithOneArrow": {
			const objProp: IGraphicObjectProp = new GraphicObjectProp("polyline");
			const objStyle: IGraphicObjectStyle = new GraphicObjectStyle();
			// polyline의 형태는 원래 채움 색을 가지고 있어, 그것을 투명하게 처리함으로써 직선을 구현하고 있음
			objStyle.fill.color[3] = 0;
			objStyle.line.color = lineColor;
			objStyle.line.width = lineWidth;
			// 시작 부분에 화살표 형태로 넣기
			objStyle.line.arrow.begin.type = "arrow";
			graphic.createMode(objProp, objStyle);
			break;
		}
		/**
		 * 양쪽 화살표가 있는 직선
		 */
		case "straigntLineWithTwoArrows": {
			const objProp: IGraphicObjectProp = new GraphicObjectProp("polyline");
			const objStyle: IGraphicObjectStyle = new GraphicObjectStyle();
			objStyle.fill.color[3] = 0;
			objStyle.line.color = lineColor;
			objStyle.line.width = lineWidth;
			objStyle.line.arrow.begin.type = "arrow";
			objStyle.line.arrow.end.type = "arrow";
			graphic.createMode(objProp, objStyle);
			break;
		}
		/**
		 * 연결선
		 */
		case "spline": {
			const objProp: IGraphicObjectProp = new GraphicObjectProp("polyline");
			const objStyle: IGraphicObjectStyle = new GraphicObjectStyle();
			objStyle.fill.color[3] = 0;
			objProp.lineType = 1;
			objStyle.line.color = lineColor;
			objStyle.line.width = lineWidth;
			graphic.createMode(objProp, objStyle);
			break;
		}
		/**
		 * 삼각형
		 */
		case "triangle": {
			const objProp: IGraphicObjectProp = new GraphicObjectProp("triangle");
			const objStyle: IGraphicObjectStyle = new GraphicObjectStyle();
			objStyle.fill.color = fillColor;
			objStyle.line.color = lineColor;
			objStyle.line.width = lineWidth;
			graphic.createMode(objProp, objStyle);
			break;
		}
		/**
		 * 글자
		 */
		case "text": {
			const objProp: IGraphicObjectProp = new GraphicObjectProp("textEditor");
			graphic.createMode(objProp);
			break;
		}
		/**
		 * 사각형
		 */
		case "rectangle": {
			const objProp: IGraphicObjectProp = new GraphicObjectProp("rectangle");
			const objStyle: IGraphicObjectStyle = new GraphicObjectStyle();
			objStyle.fill.color = fillColor;
			objStyle.line.color = lineColor;
			objStyle.line.width = lineWidth;
			graphic.createMode(objProp, objStyle);
			break;
		}
		/**
		 * 모서리가 둥근 사각형
		 *  */
		case "roundedRectangle": {
			const objProp: IGraphicObjectProp = new GraphicObjectProp("rectangle");
			const objStyle: IGraphicObjectStyle = new GraphicObjectStyle();
			objStyle.fill.color = fillColor;
			objStyle.line.color = lineColor;
			objStyle.line.width = lineWidth;
			objProp.radius = 50;
			graphic.createMode(objProp, objStyle);
			break;
		}
		/**
		 * 폴리곤(다각형)
		 */
		case "polygon": {
			const objProp: IGraphicObjectProp = new GraphicObjectProp("polyline");
			const objStyle: IGraphicObjectStyle = new GraphicObjectStyle();
			objProp.close = 1;
			objStyle.fill.color = fillColor;
			objStyle.line.color = lineColor;
			objStyle.line.width = lineWidth;
			graphic.createMode(objProp, objStyle);
			break;
		}
		/**
		 *  곡선으로 만든 도형(퍼거슨 스플라인, B-Spline) 형태의 아이콘
		 */
		case "BSpline": {
			const objProp: IGraphicObjectProp = new GraphicObjectProp("polyline");
			const objStyle: IGraphicObjectStyle = new GraphicObjectStyle();
			objStyle.fill.color = fillColor;
			objStyle.line.color = lineColor;
			objStyle.line.width = lineWidth;
			objProp.lineType = 1;
			graphic.createMode(objProp, objStyle);
			break;
		}
		/**
		 *  오각형(5각형) 펜타곤
		 */
		case "pentagon": {
			const objProp: IGraphicObjectProp = new GraphicObjectProp("regularPolygon");
			const objStyle: IGraphicObjectStyle = new GraphicObjectStyle();
			objStyle.fill.color = fillColor;
			objStyle.line.color = lineColor;
			objStyle.line.width = lineWidth;
			objProp.angleCount = 5;
			graphic.createMode(objProp, objStyle);
			break;
		}
		/**
		 * 육각형(6각형) 헥사곤
		 */
		case "hexagon": {
			const objProp: IGraphicObjectProp = new GraphicObjectProp("regularPolygon");
			const objStyle: IGraphicObjectStyle = new GraphicObjectStyle();
			objStyle.fill.color = fillColor;
			objStyle.line.color = lineColor;
			objStyle.line.width = lineWidth;
			objProp.angleCount = 6;
			graphic.createMode(objProp, objStyle);
			break;
		}
		/**
		 * 원, 동그라미
		 */
		case "circle": {
			const objProp: IGraphicObjectProp = new GraphicObjectProp("ellipse");
			const objStyle: IGraphicObjectStyle = new GraphicObjectStyle();
			objStyle.fill.color = fillColor;
			objStyle.line.color = lineColor;
			objStyle.line.width = lineWidth;
			graphic.createMode(objProp, objStyle);
			break;
		}
		/**
		 * 부채꼴 형태의 아이콘
		 */
		case "fanShaped": {
			const objProp: IGraphicObjectProp = new GraphicObjectProp("arc");
			const objStyle: IGraphicObjectStyle = new GraphicObjectStyle();
			objStyle.fill.color = fillColor;
			objStyle.line.color = lineColor;
			objStyle.line.width = lineWidth;
			objProp.lineType = 1;
			objProp.fillType = 3;
			graphic.createMode(objProp, objStyle);
			break;
		}
		/**
		 * 원호(arc) 모양
		 */
		case "arc": {
			const objProp: IGraphicObjectProp = new GraphicObjectProp("arc");
			const objStyle: IGraphicObjectStyle = new GraphicObjectStyle();
			objStyle.fill.color = fillColor;
			objStyle.line.color = lineColor;
			objStyle.line.width = lineWidth;
			objProp.lineType = 1;
			objProp.fillType = 3;
			graphic.createMode(objProp, objStyle);
			break;
		}
		/**
		 * 섹터(부채꼴) 모양으로 inner 부분도 휘어있음
		 */
		case "sector": {
			const MSTacticalObjProp = new MSTacticalLineGraphics();
			const milSymbolObject = MSTacticalObjProp.getMSObject("G*G*AAA---****X");
			graphic.createMode(milSymbolObject.graphicObjProp, milSymbolObject.graphicObjStyle);
			break;
		}
		/**
		 * 일반 "전진축"이라는 말은 없음 지상전진축으로 사용
		 * 지상전진축 - 화살표 모양의 전진 Line 모양
		 */
		case "forwardAxis": {
			const MSTacticalObjProp = new MSTacticalLineGraphics();
			const milSymbolObject = MSTacticalObjProp.getMSObject("G*G*OLAGS-****X");
			graphic.createMode(milSymbolObject.graphicObjProp, milSymbolObject.graphicObjStyle);
			break;
		}
		/**
		 * 다점전진축이라는 말은 없음 방위호형인듯
		 * 방위호형 - 다점전진축 - 화살표 모양의 전진 Line 모양
		 */
		case "multiPointForwardAxis": {
			const MSTacticalObjProp = new MSTacticalLineGraphics();
			const milSymbolObject = MSTacticalObjProp.getMSObject("G*G*AAA---****X");
			graphic.createMode(milSymbolObject.graphicObjProp, milSymbolObject.graphicObjStyle);
			break;
		}
		/**
		 * 원래 비행전진축이라고 했는데 군대부호에는 그러한 것은 없음. 가장 비슷한 아군항공전진축으로 설정
		 * 아군항공전진축 - 화살표 모양의 전진 Line 모양
		 */
		case "FlightForwradAxis": {
			const MSTacticalObjProp = new MSTacticalLineGraphics();
			const milSymbolObject = MSTacticalObjProp.getMSObject("G*G*OLAV--****X");
			graphic.createMode(milSymbolObject.graphicObjProp, milSymbolObject.graphicObjStyle);
			break;
		}
		/**
		 * 전투지경선 - 라인이 이리저리 꼬인 모양
		 */
		case "combatBoundary": {
			const MSTacticalObjProp = new MSTacticalLineGraphics();
			const milSymbolObject = MSTacticalObjProp.getMSObject("G*G*GL4---****X");
			milSymbolObject.graphicObjProp.textExt = "Down";
			milSymbolObject.graphicObjProp.textExt2 = "Up";
			milSymbolObject.graphicObjProp.textExt4 = "I";
			graphic.createMode(milSymbolObject.graphicObjProp, milSymbolObject.graphicObjStyle);
			break;
		}
		// 이미지 인자를 받기 위해 별도로 DrawPanelToolbar에서 처리하겠음
		// case "image": {
		// 	break;
		// }
	}
};
