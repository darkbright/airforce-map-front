import { BasicSymbolColorType, milColorHandler } from "../../../../utils/milColorHandler";
import D2MapModule from "../../D2MapModule";

const { ol } = D2MapModule;

/**
 * 지도 Feature로 뿌리는 기본 간략부호 형태
 *
 * API Call로 받아온 데이터를 기본 심볼인 작은 동그라미 형태로 표출해 줌
 * @param {BasicSymbolShape} BasicSymbolShape
 * @returns ol.Circle Object
 */
export const simplifiedSymbolStyle = function (feature: any) {
	const featureId = feature.get("name");
	const iconColor: BasicSymbolColorType = feature.get("color");
	const convertedColor = milColorHandler(iconColor);

	// 기본으로 뜨는 간략부호에 같이 붙어 있는 텍스트 (일반적으로 기지 이름이나 도시 이름 같은 것을 씀)
	const textStyle = new ol.style.Style({
		text: new ol.style.Text({
			text: String(featureId),
			scale: 1.5,
			fill: new ol.style.Fill({
				color: [255, 255, 255, 1],
			}),
			stroke: new ol.style.Stroke({
				color: [0, 0, 0, 1],
				width: 1,
			}),
		}),
	});

	const pointStyle = new ol.style.Style({
		image: new ol.style.Circle({
			radius: 8,
			fill: new ol.style.Fill({ color: convertedColor }),
			// stroke: new ol.style.Stroke({
			// 	color: [0, 0, 0],
			// 	width: 1,
			// }),
		}),
	});

	// 간략부호 도형의 모양. 간략부호는 일반적으로 동그라미로 표기하므로 동그라미를 만들어주고
	// 거기에 API에서 받은 값에 따라 컬러를 렌더링해준다.

	feature.setStyle([pointStyle, textStyle]);
};