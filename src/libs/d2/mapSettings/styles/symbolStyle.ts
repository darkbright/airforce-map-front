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
export const defaultFeatureLabelTextSize = 1.5;

/**
 * 기본으로 뜨는 원형의 간략부호 형태
 * @param feature 생성된 ol feature객체
 * @param radius  너비/크기
 * @param opacity  투명도
 * @returns 해당 ol 객체의 스타일 객체를 리턴함
 */
export const basicPointStyle = (feature: any, radius: number, opacity: number) => {
	const iconColor: BasicSymbolColorType = feature.get("color");

	const rgbColor = hexToRgba(milColorHandler(iconColor)!);

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
 * @returns 해당 ol 객체의 스타일 객체를 리턴함
 */
export const basicSymbolStyle = (feature: any, symbolSvg: string) => {
	const iconColor: BasicSymbolColorType = feature.get("color");

	const rgbColor = hexToRgba(milColorHandler(iconColor)!);

	const basicSymbol = new ol.style.Style({
		image: new ol.style.Icon({
			opacity: 1,
			color: rgbColor,
			src: "data:image/svg+xml;utf8," + encodeURIComponent(symbolSvg),
			scale: 0.5,
			offset: [0, 0],
			anchor: [0.1, 0.4],
		}),
	});

	return basicSymbol;
};
