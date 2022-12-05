import { IFeaturePointType } from "../../types/d2/Graphic";

interface FeaturePointTypeListProps {
	value: IFeaturePointType;
	name: string;
}

/**
 * 투명도에서 도형의 타입 중 "점(Point)"인 경우, 가능한 점의 종류를 나열한 리스트임
 */
export const featurePointTypeList: FeaturePointTypeListProps[] = [
	{
		value: "circle",
		name: "원",
	},
	{
		value: "rectangle",
		name: "사각형",
	},
	{
		value: "rhombus",
		name: "마름모",
	},
	{
		value: "triangle",
		name: "삼각형",
	},
	{
		value: "invertTriangle",
		name: "역삼각형",
	},
];
