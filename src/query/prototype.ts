import axios from "axios";
import { useQuery } from "react-query";
import { OpenLayersStandardDataTypes } from "../types/openlayers";
import { DMSConverter } from "../utils/coordConversion";
import { BasicSymbolColorType } from "../utils/milColorHandler";

const API_URL = process.env.REACT_APP_BACKEND_SERVER_URL;

export interface PrototypeAllType {
	testCd: number;
	testNm: string;
	testPercent: number;
	testColor: "B" | "G";
	testCoord: string;
}

export interface PrototypeByIdType {
	testCd: number;
	id: number;
	testTroop: string;
	testAColor: BasicSymbolColorType;
	testBColor: BasicSymbolColorType;
	testCColor: BasicSymbolColorType;
	resultString: BasicSymbolColorType;
}

/**
 * 백엔드 API 테스트용 ProtoType URL API
 * @returns {useQuery} useQuery
 */

export const usePrototypesAll = () => {
	const getPrototypes = async (): Promise<OpenLayersStandardDataTypes> => {
		const { data } = await axios.get(`${API_URL}/prototypes`);

		const convertedData = await data.map((proto: PrototypeAllType) => ({
			type: "Feature",
			properties: {
				id: proto.testCd,
				name: proto.testNm,
				color: proto.testColor,
				lonlat: DMSConverter({ dms: proto.testCoord, type: "toLonlat" }),
			},
			geometry: {
				type: "Point",
				coordinates: DMSConverter({ dms: proto.testCoord, type: "toScreenCoord" }),
			},
		}));

		return { type: "FeatureCollection", features: convertedData };
	};
	return useQuery(["prototypes"], getPrototypes);
};

/**
 * 백엔드 API 테스트용 ProtoType 데이터를 Id별로 가져옴
 * @returns {useQuery} useQuery
 */

export const usePrototypeById = (id: string) => {
	const getPrototypeById = async (id: string): Promise<PrototypeByIdType[]> => {
		const { data } = await axios.get(`${API_URL}/prototype/${id}`);
		return data;
	};
	return useQuery(["prototypeById", id], () => getPrototypeById(id), {
		enabled: false,
	});
};
