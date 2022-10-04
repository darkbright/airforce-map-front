import { baseSymbol } from "../../../../assets/symbols/basicSymbols";
import { MapSymbolType } from "../../../../types/army/symbolType";
import { findFeaturesByPixel } from "../interactions/findFeatures";
import {
	basicPointStyle,
	basicSymbolStyle,
	basicTextStyle,
	defaultFeatureLabelTextSize,
} from "./symbolStyle";

interface ChangeSymbolTypeOnScreenType {
	mousePosition: {
		x: number;
		y: number;
	};
	type: MapSymbolType;
}

/**
 * 맵에 뿌려진 부호(심볼)를 간략부호 / 기본부호 / 군대부호의 형태로 바꿔주는 로직
 * 개별 feature에 접근하기 위하여 mousePosition을 넣어주고, 어떤 타입(MapSymbolType)으로 바꿀 것인지 적어줄 것
 * @param MapSymbolType MapSymbolType
 */

export const changeSymbolTypeOnScreen = ({ mousePosition, type }: ChangeSymbolTypeOnScreenType) => {
	const feature = findFeaturesByPixel(mousePosition);

	const textStyle = basicTextStyle(feature, defaultFeatureLabelTextSize);

	if (feature) {
		if (type === "simplified") {
			const symbolStyle = basicPointStyle(feature, 10, 1);
			feature.setStyle([symbolStyle, textStyle]);
		}
		if (type === "basic") {
			const symbolStyle = basicSymbolStyle(feature, baseSymbol);
			feature.setStyle([symbolStyle, textStyle]);
		}
	}
};