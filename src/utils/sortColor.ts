/**
 * DB에서 주어진 컬러의 순서. G for Green, Y for Yellow, R for Red, B for Black
 * G가 가장 숫자가 높고, 그 순서대로 진행하여 "B"가 가장 작은 값이 됨.
 */
const colorOrder = ["G", "Y", "R", "B"];

/**
 * 원하는 컬러의 대문자 값을 배열로 제공하면, 그 값이 colorOrder에 존재하는지 찾고, 존재하는 값 중 가장 큰 값 또는 작은 값을 뱉어줌
 * @param array 컬러의 대문자값 string array. 원래는 정해진 값인 BasicSymbolColorType을 넣어주어야 하지만, 일단은 string으로 처리함. 추후 001 이런 값들이 오면 추가할 예정.
 * @param sortBy maximum : 최대값으로 할 건지, minimum: 최소값으로 할 건지
 * @returns string
 */
export const orderByColorArray = (array: string[], sortBy: "maximum" | "minimum") => {
	const sorted = array.sort((a, b) => colorOrder.indexOf(a) - colorOrder.indexOf(b));

	if (sortBy === "minimum") {
		return sorted[sorted.length - 1];
	} else {
		return sorted[0];
	}
};
