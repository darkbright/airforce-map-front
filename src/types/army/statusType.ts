import { lightGreen, orange, purple, red } from "@mui/material/colors";

// 군대에서 쓰는 위험 관련 status 표기
export type SeverityType = "danger" | "warn" | "normal" | "adhoc";

export const statusColorHandler = (severity: SeverityType) => {
	switch (severity) {
		case "danger": {
			return {
				title: "위험",
				color: red[700],
				bgColor: red[100],
			};
		}
		case "warn": {
			return {
				title: "경고",
				color: orange[800],
				bgColor: orange[50],
			};
		}
		case "normal": {
			return {
				title: "정상",
				color: lightGreen[700],
				bgColor: lightGreen[100],
			};
		}
		case "adhoc": {
			return {
				title: "특이",
				color: purple[700],
				bgColor: purple[100],
			};
		}
	}
};
