import { IFeatureType } from "../../../../types/d2/Graphic";

/**
 * hasLine: 선이 존재하는가 (거의 모든 도형이 그러함)
 * hasFill: 채움이 존재하는가
 * hasText: 도형위에 글씨를 쓸 수 있는가
 * hasArrow: polyline은 화살표가 가능함
 * hasOthers: 기타 속성. 모든 도형에 다 들어감
 * isPoint: 점 종류인가
 * isArc: 원호 종류인가
 * isRectangle: 사각형인가. 사각형인 경우 모서리를 둥글게 할 수 있음.
 */
interface TypesOfShapeProp {
	id: IFeatureType;
	hasLine: boolean;
	hasFill: boolean;
	hasText: boolean;
	hasArrow: boolean;
	hasOthers: boolean;
	isPoint: boolean;
	isArc: boolean;
	isRectangle: boolean;
}

/**
 * 개별 도형들은 그 도형을 컨트롤할 수 있는 style의 범위가 제한적임.
 * 예를 들어 동그라미는 내부를 색상으로 채울 수 있지만, 선은 그렇지 않음.
 * 또한 군대부호나 이미지는 일반적인 도형의 style로 제어할 수 없음.
 * 따라서 아래와 같이 개별 도형의 종류에 따른 구분체계를 수립하여, 개별 도형의 property 변경 시 사용할 예정임.
 */
export const typesOfShape: TypesOfShapeProp[] = [
	{
		id: "point",
		hasLine: true,
		hasFill: true,
		hasText: true,
		hasOthers: true,
		hasArrow: false,
		isPoint: true,
		isArc: false,
		isRectangle: false,
	},
	/**
	 * 폴리라인은 꽉 채워진 도형인데, 투명도가 0일 뿐임
	 * - 일반 선, 형태가 명확하지 않은 splash 류 다각형이 포함됨
	 */
	{
		id: "polyline",
		hasLine: true,
		hasFill: true,
		hasText: true,
		hasOthers: true,
		hasArrow: true,
		isPoint: false,
		isArc: false,
		isRectangle: false,
	},
	{
		id: "rectangle",
		hasLine: true,
		hasFill: true,
		hasText: true,
		hasOthers: true,
		hasArrow: false,
		isPoint: false,
		isArc: false,
		isRectangle: true,
	},
	{
		id: "triangle",
		hasLine: true,
		hasFill: true,
		hasText: true,
		hasOthers: true,
		hasArrow: false,
		isPoint: false,
		isArc: false,
		isRectangle: false,
	},
	{
		id: "ellipse",
		hasLine: true,
		hasFill: true,
		hasText: true,
		hasOthers: true,
		hasArrow: false,
		isPoint: false,
		isArc: false,
		isRectangle: false,
	},
	{
		id: "regularPolygon",
		hasLine: true,
		hasFill: true,
		hasText: true,
		hasOthers: true,
		hasArrow: false,
		isPoint: false,
		isArc: false,
		isRectangle: false,
	},
	{
		id: "arc",
		hasLine: true,
		hasFill: true,
		hasText: true,
		hasOthers: true,
		hasArrow: false,
		isPoint: false,
		isArc: true,
		isRectangle: false,
	},
	{
		id: "milSymbol",
		hasLine: false,
		hasFill: false,
		hasText: false,
		hasOthers: true,
		hasArrow: false,
		isPoint: false,
		isArc: false,
		isRectangle: false,
	},
	{
		id: "image",
		hasLine: false,
		hasFill: false,
		hasText: false,
		hasOthers: true,
		hasArrow: false,
		isPoint: false,
		isArc: false,
		isRectangle: false,
	},
];
