import { IArrowType } from "../../types/d2/Graphic";

/**
 * polyline에서 선 끝점의 타입을 한글 명칭과 함께 정리한 리스트
 * 상호운용성 평가를 받은 거라고 하니 더 추가하거나 그런건 불가능함.
 */
export const lineArrowList: { kName: string; type: IArrowType }[] = [
	{
		type: "none",
		kName: "없음",
	},
	{
		type: "arrow",
		kName: "화살표",
	},
	{
		type: "arrowL",
		kName: "화살표(좌)",
	},
	{
		type: "arrowR",
		kName: "화살표(우)",
	},
	{
		type: "tail",
		kName: "화살꼬리",
	},
	{
		type: "tailL",
		kName: "화살꼬리(좌)",
	},
	{
		type: "tailR",
		kName: "화살꼬리(우)",
	},
	{
		type: "tailF",
		kName: "화살꼬리채움",
	},
	{
		type: "tailLF",
		kName: "화살꼬리채움(좌)",
	},
	{
		type: "tailRF",
		kName: "화살꼬리채움(우)",
	},
	{
		type: "tentL",
		kName: "텐트(좌)",
	},
	{
		type: "tentR",
		kName: "텐트(우)",
	},
	{
		type: "tentLF",
		kName: "텐트채움(좌)",
	},
	{
		type: "tentRF",
		kName: "텐트채움(우)",
	},
	{
		type: "slashL",
		kName: "사선",
	},
	{
		type: "slashR",
		kName: "역사선",
	},
	{
		type: "cross",
		kName: "가위표",
	},
	{
		type: "triangle",
		kName: "삼각형",
	},
	{
		type: "triangleF",
		kName: "삼각형채움",
	},
	{
		type: "triangleL",
		kName: "삼각형(좌)",
	},
	{
		type: "triangleLF",
		kName: "삼각형채움(좌)",
	},
	{
		type: "triangleR",
		kName: "삼각형(우)",
	},
	{
		type: "triangleRF",
		kName: "삼각형채움(우)",
	},
	{
		type: "rectangle",
		kName: "사각형",
	},
	{
		type: "rectangleF",
		kName: "사각형채움",
	},
	{
		type: "circle",
		kName: "원",
	},
	{
		type: "circleF",
		kName: "원채움",
	},
	{
		type: "diamond",
		kName: "마름모",
	},
	{
		type: "diamondF",
		kName: "마름모채움",
	},
	{
		type: "thick",
		kName: "겹화살표",
	},
	{
		type: "doubleArrow",
		kName: "이중화살표",
	},
	{
		type: "doubleArrowL",
		kName: "이중화살표(좌)",
	},
	{
		type: "doubleArrowR",
		kName: "이중화살표(우)",
	},
	{
		type: "doubleTail",
		kName: "이중화살꼬리",
	},
	{
		type: "doubleTailL",
		kName: "이중화살꼬리(좌)",
	},
	{
		type: "doubleTailR",
		kName: "이중화살꼬리(우)",
	},
];
