import { findFeaturesByPixel } from "../interactions/findFeatures";
import { basicPointStyle, basicTextStyle } from "./simplifiedSymbolStyle";

interface CustomizeSymbolType {
	mousePosition: {
		x: number;
		y: number;
	};
	enlarge: "larger" | "smaller" | "none";
	showText: "show" | "hide" | "none";
	handleOpacity?: boolean;
	opacity?: number;
}

/**
 * 기본 feature Label의 scale 사이즈
 */
export const defaultFeatureLabelTextSize = 1.5;

/**
 * 개별 Feature의 크기, 심볼 보이기, 투명도 등을 조정하는 기능임.
 *
 *  - mousePosition: event.pixel을 의미하며, 실제 유저가 마우스로 화면에 찍는 좌표값 x, y를 의미함.
 *  - enlarge: 해당 부호의 크기를 키울 것인지 말지 여부, enlarge를 "larger"로 하면 +2만큼 크기가 계속 커지며, "smaller"로 하면 -2 씩 작아지나 그 숫자가 7이되면 더 이상 작아지지 않음. 함수를 다룰 때 enlarge 기능을 사용하지 않으면 "none"으로 표시
 *   - showText: Label(즉, feature에서 보여주는 글자)를 보여줄지 말지 결정하느 기능으로 ol.Text의 scale 기능을 이용하여 사용. 현재 기본 글자크기는 1.5이며, "hide"를 선택할 시 0이 되어 글자가 보이지 않음. (이 때, Text 객체를 이예 지우고, 새로 생성하는 것은 자원소모 및 복잡성을 증대시키므로, 단순히 글자 크기를 줄이는 방식으로 보여줄지 말지를 선택하였음)
 * @param CustomizeSymbolType
 */
export const customizeSymbol = ({
	mousePosition,
	enlarge,
	showText,
	handleOpacity = false,
	opacity,
}: CustomizeSymbolType) => {
	const pixel = [mousePosition.x, mousePosition.y];
	const feature = findFeaturesByPixel(pixel);
	if (feature) {
		//  원래의 모양에 있던 도형의 크기 (원인 경우 radius로 처리한다)
		const originalRadius = feature.getStyle()[0].getImage().getRadius();
		// 원래 모양의 도형 투명도
		const originalFill = feature.getStyle()[0].getImage().getFill().color_;
		const originalOpacity = originalFill[3];
		console.log(originalFill);

		const changedSize = (): number => {
			if (enlarge === "larger") {
				return originalRadius + 2;
			} else if (enlarge === "smaller") {
				return originalRadius - 2;
			}
			return originalRadius;
		};
		// 축소 시 사이즈가 너무 작아지는 것을 방지하기 위하여 7을 기본값을 정했음.
		const preventSizeToZero = changedSize() < 7 ? 7 : changedSize();

		// Label Text를 보여줄지 말지 선택하는 것으로 hide를 선택하면 ol.text의 scale이 0이 되어 글자가 보이지 않음
		const changedTextOpacity = showText === "hide" ? 0 : defaultFeatureLabelTextSize;

		// 도형의 fill 부분 색상을 변경할 것인지 확인 (handleOpacity 유무) 후, opacity를 바꿔주거나, 만약 그렇지 않다면 오리지널 값을 유지
		const adjustedOpacity = handleOpacity ? opacity : originalOpacity;

		// newStyle 지정 시, point 스타일이 먼저 나오고, text 스타일이 나중에 들어가야 함. 이를 어기면 배열이 꼬임
		const newStyle = [
			basicPointStyle(feature, preventSizeToZero, adjustedOpacity),
			basicTextStyle(feature, changedTextOpacity),
		];
		feature.setStyle(newStyle);
	}
};
