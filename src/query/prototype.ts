import axios from "axios";
import { useQuery } from "react-query";
import { API_URL } from ".";
import { toastShow } from "../components/alert/ToastMessage";
import { DMSConverter } from "../libs/d2/mapSettings/utils/coordsConverter";
import { OpenLayersStandardDataTypes } from "../types/openlayers";
import { BasicSymbolColorType } from "../utils/milColorHandler";

export interface PrototypeAllType {
	testCd: number;
	testNm: string;
	testCat: string;
	testPercent: number;
	testColor: BasicSymbolColorType;
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
	const getPrototypes = async (): Promise<OpenLayersStandardDataTypes | undefined> => {
		try {
			const { data } = await axios.get(`${API_URL}/prototypes`);

			const convertedData = await data.map((proto: PrototypeAllType) => ({
				type: "Feature",
				properties: {
					id: proto.testCd,
					name: proto.testNm,
					color: proto.testColor,
					category: proto.testCat,
					lonlat: DMSConverter({ dms: proto.testCoord, type: "toLonlat" }),
				},
				geometry: {
					type: "Point",
					coordinates: DMSConverter({ dms: proto.testCoord, type: "toScreenCoord" }),
				},
			}));

			return { type: "FeatureCollection", features: convertedData };
		} catch (error: any) {
			toastShow({
				title: "네트워크 에러",
				message: `서버에 연결할 수 없습니다. ${error.message}`,
				type: "error",
			});
		}
	};
	return useQuery(["prototypes"], getPrototypes);
};

/**
 * TO_BE_CHECKED 파람값 가져오는 로직 다시 살펴보고 enabled 처리 하기
 * 백엔드 API 테스트용 ProtoType 데이터를 Id별로 가져옴
 * @param id 가져올 id 값. 여기서는 testCd값
 * @returns {useQuery} useQuery
 */
export const usePrototypeById = (id?: string | undefined) => {
	const getPrototypeById = async (id: string): Promise<PrototypeByIdType[] | undefined> => {
		try {
			const { data } = await axios.get(`${API_URL}/prototype/${id}`);
			return data;
		} catch (error: any) {
			if (id !== undefined) {
				toastShow({
					title: "네트워크 에러",
					message: `id를 찾을 수 없어 서버에 연결할 수 없습니다. ${error.message}`,
					type: "error",
				});
			}
		}
	};
	return useQuery(["prototypeById", id], () => getPrototypeById(id!), {
		enabled: Boolean(id),
	});
};
