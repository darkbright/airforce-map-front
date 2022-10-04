import { basicPointStyle, basicTextStyle, defaultFeatureLabelTextSize } from "./symbolStyle";

/**
 * 지도 Feature로 뿌리는 기본 간략부호 형태
 *
 * API Call로 받아온 데이터를 기본 심볼인 작은 동그라미 형태로 표출해 줌
 * @param {BasicSymbolShape} BasicSymbolShape
 * @returns ol.Circle Object
 */
export const simplifiedSymbolStyle = function (feature: any) {
	const pointStyle = basicPointStyle(feature, 10, 1);
	const textStyle = basicTextStyle(feature, defaultFeatureLabelTextSize);

	// 간략부호 도형의 모양. 간략부호는 일반적으로 동그라미로 표기하므로 동그라미를 만들어주고
	// 거기에 API에서 받은 값에 따라 컬러를 렌더링해준다.

	feature.setStyle([pointStyle, textStyle]);
};
