import axios from "axios";
import { useQuery } from "react-query";

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
		return data;
	};
	return useQuery("prototypes", getPrototypes);
};
