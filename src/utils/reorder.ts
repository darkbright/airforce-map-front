/**
 * 숫자 배열의 순서를 바꿔주는 함수
 * @param list
 * @param startIndex
 * @param endIndex
 * @returns 배열
 */
export const reorder = <T>(list: T[], startIndex: number, endIndex: number): T[] => {
	const result = Array.from(list);
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);

	return result;
};
