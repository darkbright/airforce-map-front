import { notApplicableSymbol } from "../../../../assets/symbols/basicSymbols";
import { toastShow } from "../../../../components/alert/ToastMessage";
import { symbolListByCoord } from "../../../../data/constants/symbolListByCoord";
import { MapSymbolType } from "../../../../types/army/symbolType";
import { findFeaturesByPixel } from "../interactions/findFeatures";
import { getMilSymbolImage } from "../milSymbols/getMilSymbolImage";
import { getMilSymbolType } from "../milSymbols/getMilSymbolType";
import { militarySymbolStyle } from "./militarySymbolStyle";
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
		const properties = feature.getProperties();
		// 매칭되는 심볼을 symbolListByCoord 내의 DB에서 받은 좌표값으로 찾음
		const symbol = symbolListByCoord.find((sym) => sym.baseCoord === properties.originLonlat);
		if (type === "simplified") {
			const symbolStyle = basicPointStyle(feature, 10, 1);
			feature.setStyle([symbolStyle, textStyle]);
		}
		if (type === "basic") {
			const matchedSymbol = symbol?.basicSymbol;
			// 매칭되는 심볼이 존재하지 않는다면 N/A로 표기
			const foundSymbol = matchedSymbol ? matchedSymbol : notApplicableSymbol;
			const symbolStyle = basicSymbolStyle(feature, foundSymbol, 1, 0.55);
			feature.setStyle([symbolStyle, textStyle]);
		}
		if (type === "military") {
			// 심볼이 없으면 미식별 군대부호를 표출
			const matchedSymbol = symbol?.milSymbol || "SFZ*------*****";

			const isSymbolType1 = getMilSymbolType(matchedSymbol) === 1;
			if (isSymbolType1) {
				const symbolImage = getMilSymbolImage(matchedSymbol);
				if (symbolImage) {
					const symbolStyle = militarySymbolStyle(symbolImage);

					feature.setStyle([symbolStyle, textStyle]);

					window.MilSymbol.loadMilsymbolTree();
				} else {
					toastShow({
						title: "해당 심볼이 아닙니다",
						message: `심볼을 찾을 수 없습니다`,
						type: "error",
					});
				}
			}
		}
	}
};
