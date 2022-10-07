import { OpenLayersStandardDataTypes } from "../types/openlayers";
import axios from "axios";
import { useQuery } from "react-query";
import { DMSConverter } from "../libs/d2/mapSettings/utils/coordsConverter";
import { API_URL } from ".";
import { BasicSymbolColorType } from "../utils/milColorHandler";
import { toastShow } from "../components/alert/ToastMessage";

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
	const getWhatevers = async (): Promise<OpenLayersStandardDataTypes | undefined> => {
		try {
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
					originLonlat: proto.testCoord,
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
				message: ` 서버에 연결할 수 없습니다. ${error.message}`,
				type: "error",
			});
		}
	};
	return useQuery(["whatevers"], getWhatevers);
};
