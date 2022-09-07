import { testSymbol } from "../../../../assets/customSymbols/testSymbol";
import { BasicSymbolColorType, milColorHandler } from "../../../../utils/milColorHandler";
import D2MapModule from "../../D2MapModule";

const { ol } = D2MapModule;

/**
 * 지도 Feature로 뿌리는 기본부호(간단한 이미지(기지, 미사일, 레이더 등 미리 저장된 표식) 상태) 형태
 *
 * API Call로 받아온 데이터를 타입에 맞게 특정한 이미지 모양으로 표출해줌
 * @param {BasicSymbolShape} BasicSymbolShape
 * @returns ol.Circle Object
 */
export const basicSymbolStyle = function (feature: any) {
	const featureId = feature.get("name");
	const iconColor: BasicSymbolColorType = feature.get("color");
	const convertedColor = milColorHandler(iconColor);

	// 기본으로 뜨는 간략부호에 같이 붙어 있는 텍스트 (일반적으로 기지 이름이나 도시 이름 같은 것을 씀)
	const textStyle = new ol.style.Style({
		text: new ol.style.Text({
			text: String(featureId),
			scale: 2,
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
		image: new ol.style.Icon({
			opacity: 1,
			color: convertedColor,
			src: "data:image/svg+xml;utf8," + encodeURIComponent(testSymbol),
			scale: 0.5,
			offset: [0, 0],
			anchor: [0.1, 0.4],
		}),
	});

	// 기본부호 도형의 모양. 기본부호는 정해진 이미지에 따라 표출해주면 됨.
	// 거기에 API에서 받은 값에 따라 컬러를 렌더링해준다.

	feature.setStyle([pointStyle, textStyle]);
};
