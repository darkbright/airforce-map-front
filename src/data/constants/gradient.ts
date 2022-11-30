import { IGradient } from "../../types/d2/Graphic";

/**
 * 그라디언트로 표현할 수 있는 그라디언트의 종류 및 그것의 한글 이름
 */
export const FeatureGradientList: { kName: string; value: IGradient["type"] }[] = [
	{
		value: "horizontal",
		kName: "수평",
	},
	{
		value: "vertical",
		kName: "수직",
	},
	{
		value: "forwardDiagonal",
		kName: "전방사선",
	},
	{
		value: "backwardDiagonal",
		kName: "후방사선",
	},
	{
		value: "path",
		kName: "경로형",
	},
	{
		value: "radial",
		kName: "방사형",
	},
];
