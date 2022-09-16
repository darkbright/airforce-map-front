export interface OpenLayersStandardDataTypes {
	type: "FeatureCollection";
	features: OpenLayersStandardFeatureTypes[] | undefined | null;
}

export interface OpenLayersStandardFeatureTypes {
	type: "Feature";
	properties: any;
	geometry: {
		type: "Point";
		coordinates: string[];
	};
}
