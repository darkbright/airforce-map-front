import { Color } from "react-color-palette";
import { IGraphicUtil } from "../../../../types/d2/Core/IGraphicUtil";
import { IFeatureFillType, IGraphicObject, IPatternType } from "../../../../types/d2/Graphic";
import D2MapModule from "../../D2MapModule";

const { GraphicUtil } = D2MapModule;
const graphicUtil: IGraphicUtil = GraphicUtil;

/**
 * Fill 속성
 * ---------------------------------------------------------------------------------
 */

/**
 * feature의 fill 타입을 바꿈 (일반인지, 그라디언트인지, 패턴인지 유형으로)
 * @param obj IGraphicObject IGraphicObject 속성을 변경할 대상
 * @param type IFeatureFillType 바꿀 타입 이름
 */
export const changeFeatureFillType = (obj: IGraphicObject, type: IFeatureFillType): void => {
	obj._style.fill.type = type;
	obj.updateStyle(true);
	window.graphic.getSelectGraphicBoard().undoRedoSave();
};

/**
 * feature의 fill 색상 바꾸기
 * @param obj IGraphicObject 속성을 변경할 대상
 * @param color Color 바꿀 컬러
 */
export const changeFeatureFillColor = (obj: IGraphicObject, color: Color): void => {
	obj._style.fill.color = graphicUtil.hex2rgb(color.hex);
	obj.updateStyle(true);
	window.graphic.getSelectGraphicBoard().undoRedoSave();
};

/**
 * feature의 fill 불투명도값 바꾸기
 *  @param obj IGraphicObject 속성을 변경할 대상
 * @param opacity number (0 ~ 1)
 */
export const changeFeatureFillOpacity = (obj: IGraphicObject, opacity: number): void => {
	obj._style.fill.color[3] = opacity;
	obj.updateStyle(true);
	window.graphic.getSelectGraphicBoard().undoRedoSave();
};

/**
 * feature가 pattern 타입일 때, 어떤 타입으로 할지 설정함
 * @param obj IGraphicObject 속성을 변경할 대상
 * @param pattern IPatternType 선택한 패턴의 종류
 */
export const changeFeaturePatternType = (
	obj: IGraphicObject,
	pattern: IPatternType | string,
): void => {
	obj._style.fill.pattern = pattern as IPatternType;
	obj.updateStyle(true);
	window.graphic.getSelectGraphicBoard().undoRedoSave();
};

/**
 * feature가 패턴타입일 때, 패턴의  색상을 무엇으로 할지 설정, 전경이면 "fg", 배경이면 "bg"
 * @param obj IGraphicObject 속성을 변경할 대상
 * @param bgFg "bg": 배경 | "fg" : 전경,
 * @param color Color 바꿀 컬러
 */
export const changeFeaturePatternColor = (
	obj: IGraphicObject,
	bgFg: "bg" | "fg",
	color: Color,
): void => {
	obj._style.fill.patternColor[bgFg === "bg" ? 0 : 1] = graphicUtil.hex2rgb(color.hex);
	obj.updateStyle(true);
	window.graphic.getSelectGraphicBoard().undoRedoSave();
};

/**
 * feature가 패턴일 때, 패턴의 불투명도를 무엇으로 할지 설정, 전경이면 "fg", 배경이면 "bg"
 *  @param obj IGraphicObject 속성을 변경할 대상
 * @param bgFg "bg": 배경 | "fg" : 전경,
 * @param opacity number (0 ~ 1)
 */
export const changeFeaturePatternOpacity = (
	obj: IGraphicObject,
	bgFg: "bg" | "fg",
	opacity: number,
): void => {
	obj._style.fill.patternColor[bgFg === "bg" ? 0 : 1][3] = opacity;
	obj.updateStyle(true);
	window.graphic.getSelectGraphicBoard().undoRedoSave();
};

/**
 * Line 속성
 * ---------------------------------------------------------------------------------
 */

/**
 * feature의 Line 타입을 바꿈 (일반인지, 그라디언트인지, 패턴인지 유형으로)
 * @param obj IGraphicObject IGraphicObject 속성을 변경할 대상
 * @param type IFeatureFillType 바꿀 타입 이름
 */
export const changeFeatureLineType = (obj: IGraphicObject, type: IFeatureFillType): void => {
	obj._style.line.fill.type = type;
	obj.updateStyle(true);
	window.graphic.getSelectGraphicBoard().undoRedoSave();
};

/**
 * feature의 Line 색상 바꾸기
 * @param obj IGraphicObject 속성을 변경할 대상
 * @param color Color 바꿀 컬러
 */
export const changeFeatureLineColor = (obj: IGraphicObject, color: Color): void => {
	obj._style.line.color = graphicUtil.hex2rgb(color.hex);
	obj.updateStyle(true);
	window.graphic.getSelectGraphicBoard().undoRedoSave();
};

/**
 * feature의 Line 굵기(width) 바꾸기
 * @param obj IGraphicObject 속성을 변경할 대상
 * @param width 변경할 굵기 값
 */
export const changeFeatureLineWidth = (obj: IGraphicObject, width: number | number[]): void => {
	obj._style.line.width = width as number;
	obj.updateStyle(true);
	window.graphic.getSelectGraphicBoard().undoRedoSave();
};

/**
 * feature의 line 불투명도값 바꾸기
 *  @param obj IGraphicObject 속성을 변경할 대상
 * @param opacity number (0 ~ 1)
 */
export const changeFeatureLineOpacity = (obj: IGraphicObject, opacity: number): void => {
	obj._style.line.color[3] = opacity;
	obj.updateStyle(true);
	window.graphic.getSelectGraphicBoard().undoRedoSave();
};

/**
 * feature의 Line이 pattern 타입일 때, 어떤 타입으로 할지 설정함
 * @param obj IGraphicObject 속성을 변경할 대상
 * @param pattern IPatternType 선택한 패턴의 종류
 */
export const changeFeatureLinePatternType = (
	obj: IGraphicObject,
	pattern: IPatternType | string,
): void => {
	obj._style.line.fill.pattern = pattern as IPatternType;
	obj.updateStyle(true);
	window.graphic.getSelectGraphicBoard().undoRedoSave();
};

/**
 * feature의 Line이 패턴타입일 때, 패턴의  색상을 무엇으로 할지 설정, 전경이면 "fg", 배경이면 "bg"
 * @param obj IGraphicObject 속성을 변경할 대상
 * @param bgFg "bg": 배경 | "fg" : 전경,
 * @param color Color 바꿀 컬러
 */
export const changeFeatureLinePatternColor = (
	obj: IGraphicObject,
	bgFg: "bg" | "fg",
	color: Color,
): void => {
	obj._style.line.fill.patternColor[bgFg === "bg" ? 0 : 1] = graphicUtil.hex2rgb(color.hex);
	obj.updateStyle(true);
	window.graphic.getSelectGraphicBoard().undoRedoSave();
};

/**
 * feature의 Line이 패턴타입일 때, 패턴의 불투명도를 무엇으로 할지 설정, 전경이면 "fg", 배경이면 "bg"
 *  @param obj IGraphicObject 속성을 변경할 대상
 * @param bgFg "bg": 배경 | "fg" : 전경,
 * @param opacity number (0 ~ 1)
 */
export const changeFeatureLinePatternOpacity = (
	obj: IGraphicObject,
	bgFg: "bg" | "fg",
	opacity: number,
): void => {
	obj._style.line.fill.patternColor[bgFg === "bg" ? 0 : 1][3] = opacity;
	obj.updateStyle(true);
	window.graphic.getSelectGraphicBoard().undoRedoSave();
};
