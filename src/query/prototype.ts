import axios from "axios";
import { useQuery } from "react-query";
import { OpenLayersStandardDataTypes } from "../types/openlayers";
import { DMSConverter } from "../utils/coordConversion";

const API_URL = process.env.REACT_APP_BACKEND_SERVER_URL;

export interface PrototypeAllType {
	testCd: number;
	testNm: string;
	testPercent: number;
	testColor: "B" | "G";
	testCoord: string;
}

/**
 * 백엔드 API 테스트용 ProtoType URL API
 * @returns {useQuery} useQuery
 */

export const usePrototypesAll = () => {
	const getPrototypes = async (): Promise<OpenLayersStandardDataTypes> => {
		const { data } = await axios.get(`${API_URL}/prototype`);

		const convertedData = await data.map((proto: PrototypeAllType) => ({
			type: "Feature",
			properties: {
				id: proto.testCd,
				name: proto.testNm,
				color: proto.testColor,
			},
			geometry: {
				type: "Point",
				coordinates: DMSConverter({ dms: proto.testCoord, type: "toScreenCoord" }),
			},
		}));

		return { type: "FeatureCollection", features: convertedData };
	};
	return useQuery("prototypes", getPrototypes);
};
