import { baseSymbol } from "../../../../assets/symbols/basicSymbols";
import { BasicSymbolColorType, milColorHandler } from "../../../../utils/milColorHandler";
import D2MapModule from "../../D2MapModule";
import { basicTextStyle, defaultFeatureLabelTextSize } from "./symbolStyle";

const { ol } = D2MapModule;

/**
 * 지도 Feature로 뿌리는 기본부호(간단한 이미지(기지, 미사일, 레이더 등 미리 저장된 표식) 상태) 형태
 *
 * API Call로 받아온 데이터를 타입에 맞게 특정한 이미지 모양으로 표출해줌
 * @param {BasicSymbolShape} BasicSymbolShape
 * @returns ol.Circle Object
 */
export const basicSymbolStyle = function (feature: any) {
	const iconColor: BasicSymbolColorType = feature.get("color");
	const convertedColor = milColorHandler(iconColor);

	const pointStyle = new ol.style.Style({
		image: new ol.style.Icon({
			opacity: 1,
			color: convertedColor,
			src: "data:image/svg+xml;utf8," + encodeURIComponent(baseSymbol),
			scale: 0.5,
			offset: [0, 0],
			anchor: [0.1, 0.4],
		}),
	});

	const textStyle = basicTextStyle(feature, defaultFeatureLabelTextSize);

	// 기본부호 도형의 모양. 기본부호는 정해진 이미지에 따라 표출해주면 됨.
	// 거기에 API에서 받은 값에 따라 컬러를 렌더링해준다.
	// setStyle시, symbol 스타일을 먼저 배열에 넣고, 그 다음에 text 스타일을 넣을 것. 반대로 하면 속성 변경 시 꼬임

	feature.setStyle([pointStyle, textStyle]);
};
