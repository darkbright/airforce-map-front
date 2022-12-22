import { symbolListByCoord } from "../../../../data/constants/symbolListByCoord";
import { MilSymbolImageType } from "../../../../types/d2/MilSymbolObjectOptions";
import D2MapModule from "../../D2MapModule";
import { getMilSymbolImage } from "../milSymbols/getMilSymbolImage";
import { getMilSymbolType } from "../milSymbols/getMilSymbolType";
import { basicTextStyle, defaultFeatureLabelTextSize } from "./symbolStyle";

const { ol } = D2MapModule;

/**
 * OL 내 군대부호 스타일 지정
 * @param symbol MilSymbolImageType
 * @returns ol.style.Style
 */
export const militarySymbolStyle = (symbol: MilSymbolImageType) => {
	const symbolStyle = new ol.style.Style({
		image: new ol.style.Icon({
			scale: 0.2,
			anchor: symbol?.anchor,
			src: symbol?.imgURL,
			imgSize: [symbol?.size.width, symbol?.size.height],
		}),
	});

	return symbolStyle;
};

export const defaultMilitarySymbolStyle = function (feature: any) {
	const symbol = symbolListByCoord.find((sym) => sym.baseCoord === feature.values_.originLonlat);
	const textStyle = basicTextStyle(feature, defaultFeatureLabelTextSize);

	const matchedSymbol = symbol?.milSymbol || "SFZ*------*****";

	const isSymbolType1 = getMilSymbolType(matchedSymbol) === 1;
	if (isSymbolType1) {
		const symbolImage = getMilSymbolImage(matchedSymbol);
		if (symbolImage) {
			const symbolStyle = militarySymbolStyle(symbolImage);

			feature.setStyle([symbolStyle, textStyle]);
		}
	}
};
