/**
 * 2개의 배열을 비교하여 그 안의 값과 순서가 모두 같은지 비교
 * @param {number[]} a
 * @param {number[]} b
 * @returns {boolean} boolean
 */

export const isArrayEqual = (a: number[], b: number[]) => {
	return (
		Array.isArray(a) &&
		Array.isArray(b) &&
		a.length === b.length &&
		a.every((val, index) => val === b[index])
	);
};
