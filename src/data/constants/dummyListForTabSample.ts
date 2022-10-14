import { DMSConverter } from "../../libs/d2/mapSettings/utils/coordsConverter";
import { OpenLayersStandardDataTypes } from "../../types/openlayers";

/**
 * 이 파일은 pages/TabSample을 테스트하기 위한 데이터 이므로
 * Tab형 페이지를 다루기 위한 샘플 자료에 불과함. 따라서 Tab으로 만들어진 특정 페이지들을 만들고 나면 나중에 지워야 함.
 */

/**
 * 첫 번째로 받을 데이터
 */
export const dummyListForTabSample1: OpenLayersStandardDataTypes = {
	type: "FeatureCollection",
	features: [
		{
			type: "Feature",
			properties: {
				id: "1",
				color: "G",
				name: "3훈비",
				percent: 30,
				lonlat: DMSConverter({ dms: "350519N1280413E", type: "toLonlat" }),
				originLonlat: "350519N1280413E",
			},
			geometry: {
				type: "Point",
				coordinates: DMSConverter({ dms: "350519N1280413E", type: "toScreenCoord" }),
			},
		},
		{
			type: "Feature",
			properties: {
				id: "2",
				color: "R",
				name: "5비",
				percent: 25,
				lonlat: DMSConverter({ dms: "351426N1285313E", type: "toLonlat" }),
				originLonlat: "351426N1285313E",
			},
			geometry: {
				type: "Point",
				coordinates: DMSConverter({ dms: "351426N1285313E", type: "toScreenCoord" }),
			},
		},
		{
			type: "Feature",
			properties: {
				id: "3",
				color: "R",
				name: "8전비",
				percent: 10,
				lonlat: DMSConverter({ dms: "372617N1275737E", type: "toLonlat" }),
				originLonlat: "372617N1275737E",
			},
			geometry: {
				type: "Point",
				coordinates: DMSConverter({ dms: "372617N1275737E", type: "toScreenCoord" }),
			},
		},
	],
};

/**
 * 두번째
 */
export const dummyListForTabSample2: OpenLayersStandardDataTypes = {
	type: "FeatureCollection",
	features: [
		{
			type: "Feature",
			properties: {
				id: "1",
				color: "G",
				name: "3훈비",
				percent: 20,
				lonlat: DMSConverter({ dms: "350519N1280413E", type: "toLonlat" }),
				originLonlat: "350519N1280413E",
			},
			geometry: {
				type: "Point",
				coordinates: DMSConverter({ dms: "350519N1280413E", type: "toScreenCoord" }),
			},
		},
		{
			type: "Feature",
			properties: {
				id: "2",
				color: "R",
				name: "5비",
				percent: 80,
				lonlat: DMSConverter({ dms: "351426N1285313E", type: "toLonlat" }),
				originLonlat: "351426N1285313E",
			},
			geometry: {
				type: "Point",
				coordinates: DMSConverter({ dms: "351426N1285313E", type: "toScreenCoord" }),
			},
		},
	],
};

/**
 * 3번째
 */
export const dummyListForTabSample3: OpenLayersStandardDataTypes = {
	type: "FeatureCollection",
	features: [
		{
			type: "Feature",
			properties: {
				id: "2",
				color: "R",
				name: "5비",
				percent: 25,
				lonlat: DMSConverter({ dms: "351426N1285313E", type: "toLonlat" }),
				originLonlat: "351426N1285313E",
			},
			geometry: {
				type: "Point",
				coordinates: DMSConverter({ dms: "351426N1285313E", type: "toScreenCoord" }),
			},
		},
		{
			type: "Feature",
			properties: {
				id: "3",
				color: "R",
				name: "8전비",
				percent: 10,
				lonlat: DMSConverter({ dms: "372617N1275737E", type: "toLonlat" }),
				originLonlat: "372617N1275737E",
			},
			geometry: {
				type: "Point",
				coordinates: DMSConverter({ dms: "372617N1275737E", type: "toScreenCoord" }),
			},
		},
	],
};
