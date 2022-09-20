import { OpenLayersStandardDataTypes } from "../types/openlayers";
import axios from "axios";
import { useQuery } from "react-query";
import { DMSConverter } from "../libs/d2/mapSettings/utils/coordsConverter";
import { API_URL } from ".";
import { BasicSymbolColorType } from "../utils/milColorHandler";

interface WhaterverAllType {
	testCd: number;
	testNm: string;
	testNumber: number;
	todayOnboard: number;
	todayInjured: number;
	yesterdayOnboard: number;
	yesterdayInjured: number;
	testColor: BasicSymbolColorType;
	testCoord: string;
}

/**
 * API Testing을 위한 두 번째 샘플 쿼리
 * @returns {useQuery} useQuery
 */

export const useWhateverAll = () => {
	const getWhatevers = async (): Promise<OpenLayersStandardDataTypes> => {
		const { data } = await axios.get(`${API_URL}/whatever`);

		const convertedData = await data.map((proto: WhaterverAllType) => ({
			type: "Feature",
			properties: {
				id: proto.testCd,
				name: proto.testNm,
				percent: proto.testNumber,
				color: proto.testColor,
				todayOnboard: proto.todayOnboard,
				todayInjured: proto.todayInjured,
				yesterdayOnboard: proto.yesterdayOnboard,
				yesterdayInjured: proto.yesterdayInjured,
				lonlat: DMSConverter({ dms: proto.testCoord, type: "toLonlat" }),
			},
			geometry: {
				type: "Point",
				coordinates: DMSConverter({ dms: proto.testCoord, type: "toScreenCoord" }),
			},
		}));

		return { type: "FeatureCollection", features: convertedData };
	};
	return useQuery(["whatevers"], getWhatevers);
};
