/**
 * - 내부를 채울 면적이 있다면 hasFill
 * - 선종류라면 lineOnly
 * - 군대부호 종류라면 milSymbol
 * - 이미지 종류라면 image
 */
export type TypesOfShapeType = "normal" | "polyline" | "milSymbol" | "image";

interface TypesOfShapeProp {
	id: string;
	type: TypesOfShapeType;
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
		type: "normal",
	},
	/**
	 * 폴리라인은 꽉 채워진 도형인데, 투명도가 0일 뿐임
	 * - 일반 선, 형태가 명확하지 않은 splash 류 다각형이 포함됨
	 */
	{
		id: "polyline",
		type: "polyline",
	},
	{
		id: "rectangle",
		type: "normal",
	},
	{
		id: "triangle",
		type: "normal",
	},
	{
		id: "ellipse",
		type: "normal",
	},
	{
		id: "polygon",
		type: "normal",
	},
	{
		id: "regularPolygon",
		type: "normal",
	},
	{
		id: "arc",
		type: "normal",
	},
	{
		id: "milSymbol",
		type: "milSymbol",
	},
	{
		id: "image",
		type: "image",
	},
];
