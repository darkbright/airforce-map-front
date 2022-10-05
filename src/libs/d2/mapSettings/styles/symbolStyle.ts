import { hexToRgba } from "../../../../utils/colorHandler";
import { BasicSymbolColorType, milColorHandler } from "../../../../utils/milColorHandler";
import D2MapModule from "../../D2MapModule";

const { ol } = D2MapModule;

/**
 * 기본으로 뜨는 간략부호에 같이 붙어 있는 텍스트 (일반적으로 기지 이름이나 도시 이름 같은 것을 씀)
 * @param feature
 * @returns ol.style.Style
 */
export const basicTextStyle = (feature: any, scale: number) => {
	// feature의 property 중 이름으로 정함. 만약 이것을 다르게 핸들링하려면 name 값을 다르게 바꿔야 함
	const featureId = feature.get("name");

	const textStyle = new ol.style.Style({
		text: new ol.style.Text({
			text: String(featureId),
			scale,
			offsetX: 5,
			offsetY: 10,
			fill: new ol.style.Fill({
				color: [255, 255, 255, 1],
			}),
			stroke: new ol.style.Stroke({
				color: [0, 0, 0, 1],
				width: 1,
			}),
		}),
	});
	return textStyle;
};

/**
 * 기본 feature Label의 scale 사이즈
 */
export const defaultFeatureLabelTextSize = 1.4;

/**
 * 기본으로 뜨는 원형의 간략부호 형태
 * @param feature 생성된 ol feature객체
 * @param radius  너비/크기
 * @param opacity  투명도
 * @returns 해당 ol 객체의 스타일 객체를 리턴함
 */
export const basicPointStyle = (feature: any, radius: number, opacity: number) => {
	const iconColor: BasicSymbolColorType = feature.get("color");

	// 만약 API에서 컬러값을 보내주지 않는다면, 기본 색상을 화이트로 지정함
	const rgbColor = iconColor ? hexToRgba(milColorHandler(iconColor)!) : [255, 255, 255];

	const pointStyle = new ol.style.Style({
		image: new ol.style.Circle({
			radius,
			fill: new ol.style.Fill({ color: [rgbColor[0], rgbColor[1], rgbColor[2], opacity] }),
			// stroke: new ol.style.Stroke({
			// 	color: [0, 0, 0],
			// 	width: 1,
			// }),
		}),
	});
	return pointStyle;
};

/**
 * ol feature 객체를 생성핳고 이에 해당하는 기본부호를 svg로 생성함
 * @param feature 생성된 ol feature객체
 * @param symbolSvg assets/symbols에 정리된 공군 기본심볼 중 하나를 택일함
 * @param opacity 불투명도 (기본은 1)
 *  @param scale 크기 (기본은 0.55)
 * @returns 해당 ol 객체의 스타일 객체를 리턴함
 */
export const basicSymbolStyle = (
	feature: any,
	symbolSvg: string,
	opacity: number,
	scale: number,
) => {
	const iconColor: BasicSymbolColorType = feature.get("color");

	// 만약 API에서 컬러값을 보내주지 않는다면, 기본 색상을 화이트로 지정함
	const rgbColor = iconColor ? hexToRgba(milColorHandler(iconColor)!) : "#ffffff";

	const basicSymbol = new ol.style.Style({
		image: new ol.style.Icon({
			opacity,
			color: rgbColor,
			src: "data:image/svg+xml;utf8," + encodeURIComponent(symbolSvg),
			// svg 이미지 크기 (기본은 0.55)
			scale,
			// offset 현재 좌표에서 [좌측, 위측] 으로 이동
			offset: [0, 0],
			offsetOrigin: "bottom-left",
			// anchor: Array.<number> (defaults to [0.5, 0.5])	Anchor. Default value is the icon center.
			// anchor 현재 중심에서 [좌측,위측]으로 이동
			// anchorXUnits: "pixels",
			// anchorYUnits: "pixels",
			anchor: [0.1, 0.38],
		}),
	});

	return basicSymbol;
};
