import axios from "axios";
import { useQuery } from "react-query";
import { DMSConverter } from "../utils/coordConversion";

const API_URL = process.env.REACT_APP_BACKEND_SERVER_URL;

export interface PrototypeAllType {
	testCd: string;
	testNm: string;
	testPercent: number;
	testColor: "B" | "G";
	testCoord: string;
}

export const usePrototypesAll = () => {
	const getPrototypes = async () => {
		const { data } = await axios.get(`${API_URL}/prototype/all`);

		const convertedData = await data.map((proto: PrototypeAllType) => ({
			type: "feature",
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

		return convertedData;
	};
	return useQuery("prototypes", getPrototypes);
};
