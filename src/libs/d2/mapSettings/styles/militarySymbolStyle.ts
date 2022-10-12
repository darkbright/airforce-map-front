import D2MapModule from "../../D2MapModule";
import { MilSymbolImageType } from "../milSymbols/getMilSymbolImage";

const { ol } = D2MapModule;

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
