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
}

/**
 * Map 내 DrawPaanelToolbar의 각종 도형들을 그릴 때 사용하는 함수임.
 * @param tid string 사용할 도형의 이름을 string으로 전달
 */

export const ShapesOnToolbarShaper = ({ tid }: ShapesOnToolBarShaperProps) => {
	const graphic = window.graphic;
	const { GraphicObjectProp, GraphicObjectStyle, MSTacticalLineGraphics } = D2MapModule;

	window.eventManager.setMapMode("graphic");

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
			const objProp = new GraphicObjectProp("point");
			graphic.createMode(objProp);
			break;
		}
		/**
		 * 직선
		 */
		case "straightLine": {
			const objProp = new GraphicObjectProp("polyline");
			const objStyle = new GraphicObjectStyle();
			objStyle.fill.color[3] = [0];
			graphic.createMode(objProp, objStyle);
			break;
		}
		/**
		 * 한쪽 화살표가 있는 직선
		 */
		case "straightLineWithOneArrow": {
			const objProp = new GraphicObjectProp("polyline");
			const objStyle = new GraphicObjectStyle();
			objStyle.fill.color[3] = [0];
			objStyle.line.arrow.begin.type = "arrow";
			graphic.createMode(objProp, objStyle);
			break;
		}
		/**
		 * 양쪽 화살표가 있는 직선
		 */
		case "straigntLineWithTwoArrows": {
			const objProp = new GraphicObjectProp("polyline");
			const objStyle = new GraphicObjectStyle();
			objStyle.fill.color[3] = [0];
			objStyle.line.arrow.begin.type = "arrow";
			objStyle.line.arrow.end.type = "arrow";
			graphic.createMode(objProp, objStyle);
			break;
		}
		/**
		 * 연결선
		 */
		case "spline": {
			const objProp = new GraphicObjectProp("polyline");
			const objStyle = new GraphicObjectStyle();
			objStyle.fill.color[3] = [0];
			objProp.lineType = 1;
			graphic.createMode(objProp, objStyle);
			break;
		}
		/**
		 * 삼각형
		 * TO_BE_CHECKED
		 * 삼각형 작동 안함.  "graphic.createdMode is not a function"
		 */
		case "triangle": {
			const objProp = new GraphicObjectProp("triangle");
			graphic.createdMode(objProp);
			break;
		}
		/**
		 * 글자
		 */
		case "text": {
			/**
			 * TO_BE_CHECKED
			 */
			break;
		}
		/**
		 * 사각형
		 */
		case "rectangle": {
			const objProp = new GraphicObjectProp("rectangle");
			graphic.createMode(objProp);
			break;
		}
		/**
		 * 모서리가 둥근 사각형
		 *  */
		case "roundedRectangle": {
			const objProp = new GraphicObjectProp("rectangle");
			objProp.radius = 50;
			graphic.createMode(objProp);
			break;
		}
		/**
		 * 폴리곤(다각형)
		 */
		case "polygon": {
			const objProp = new GraphicObjectProp("polyline");
			objProp.close = 1;
			graphic.createMode(objProp);
			break;
		}
		/**
		 *  곡선으로 만든 도형(퍼거슨 스플라인, B-Spline) 형태의 아이콘
		 */
		case "BSpline": {
			/**
			 * TO_BE_CHECKED
			 */
			break;
		}
		/**
		 *  오각형(5각형) 펜타곤
		 */
		case "pentagon": {
			const objProp = new GraphicObjectProp("regularPolygon");
			const objStyle = new GraphicObjectStyle();
			objProp.angleCount = 5;
			graphic.createMode(objProp, objStyle);
			break;
		}
		/**
		 * 육각형(6각형) 헥사곤
		 */
		case "hexagon": {
			const objProp = new GraphicObjectProp("regularPolygon");
			const objStyle = new GraphicObjectStyle();
			objProp.angleCount = 6;
			graphic.createMode(objProp, objStyle);
			break;
		}
		/**
		 * 원, 동그라미
		 */
		case "circle": {
			const objProp = new GraphicObjectProp("ellipse");
			const objStyle = new GraphicObjectStyle();
			graphic.createMode(objProp, objStyle);
			break;
		}
		/**
		 * 부채꼴 형태의 아이콘
		 */
		case "fanShaped": {
			const objProp = new GraphicObjectProp("arc");
			const objStyle = new GraphicObjectStyle();
			objProp.lineType = 1;
			objProp.fillType = 3;
			graphic.createMode(objProp, objStyle);
			break;
		}
		/**
		 * 원호(arc) 모양
		 */
		case "arc": {
			const objProp = new GraphicObjectProp("arc");
			const objStyle = new GraphicObjectStyle();
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
		 * 전진축 - 화살표 모양의 전진 Line 모양
		 */
		case "forwardAxis": {
			const MSTacticalObjProp = new MSTacticalLineGraphics();
			const milSymbolObject = MSTacticalObjProp.getMSObject("G*G*OLAGS-****X");
			graphic.createMode(milSymbolObject.graphicObjProp, milSymbolObject.graphicObjStyle);
			break;
		}
		/**
		 * 다점전진축 - 다점전진축 - 화살표 모양의 전진 Line 모양
		 */
		case "multiPointForwardAxis": {
			const MSTacticalObjProp = new MSTacticalLineGraphics();
			const milSymbolObject = MSTacticalObjProp.getMSObject("G*G*AAA---****X");
			graphic.createMode(milSymbolObject.graphicObjProp, milSymbolObject.graphicObjStyle);
			break;
		}
		/**
		 * 비행전진축 - 화살표 모양의 전진 Line 모양
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
			const milSymbolObject = MSTacticalObjProp.getMSObject("G*G*GLB---****X");
			milSymbolObject.graphicObjProp.textExt = "Down";
			milSymbolObject.graphicObjProp.textExt2 = "Up";
			milSymbolObject.graphicObjProp.textExt4 = "I";
			graphic.createMode(milSymbolObject.graphicObjProp, milSymbolObject.graphicObjStyle);
			break;
		}
		case "image":
			//subPopupMenu(thisId);
			break;
	}
};
