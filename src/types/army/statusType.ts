import { blue, lightGreen, orange, purple, red } from "@mui/material/colors";

// 군대에서 쓰는 위험 관련 status 표기
export type SeverityType =
	| "danger"
	| "warn"
	| "normal"
	| "adhoc"
	| "inProgress"
	| "fail"
	| "delayed"
	| "done";

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
		case "inProgress": {
			return {
				title: "진행중",
				color: blue[700],
				bgColor: blue[100],
			};
		}
		case "fail": {
			return {
				title: "실패",
				color: red[700],
				bgColor: red[100],
			};
		}
		case "delayed": {
			return {
				title: "실패",
				color: orange[800],
				bgColor: orange[50],
			};
		}
		case "done": {
			return {
				title: "완료",
				color: lightGreen[700],
				bgColor: lightGreen[100],
			};
		}
	}
};
