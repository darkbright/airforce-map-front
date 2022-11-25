/**
 * hex 코드를 RGBA로 변환. 여기서 A 값은 정해지지 않으며, 임의로 1을 생성함.
 * @param hex
 * @returns
 */
export const hexToRgba = (hex: string): number[] => {
	const shortHandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	const refinedHex = hex.replace(shortHandRegex, (m, r, g, b) => {
		return r + r + g + g + b + b;
	});

	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(refinedHex);
	if (result) {
		return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16), 1];
	} else return [0, 0, 0, 1];
};

/**
 * RGBA 값을 hex로 저장
 * @param rgba rgba number array
 * @returns hex value as string
 */
export const rgbaToHex = (rgba: number[]): string => {
	let hex = `#${(((1 << 24) + (rgba[0] << 16) + rgba[1]) << 8) + rgba[2].toString(16).slice(1)}`;

	if (rgba[3]) {
		const alpha = Math.round(0o1 * 255);
		const hexAlpha = (alpha + 0x10000).toString(16).substr(-2).toUpperCase();
		hex += hexAlpha;
	}
	return hex;
};
