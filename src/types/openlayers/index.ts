import { BasicSymbolColorType } from "../../utils/milColorHandler";

export interface OpenLayersStandardDataTypes {
	type: "FeatureCollection";
	features: OpenLayersStandardFeatureTypes[] | undefined | null;
}

export interface OpenLayersStandardFeatureTypes {
	type: "Feature";
	properties: {
		id: string;
		color: BasicSymbolColorType;
		name: string;
		lonlat: number[];
		originLonlat: string;
		[key: string]: any;
	};
	geometry: {
		type: "Point";
		coordinates: string[];
	};
}
