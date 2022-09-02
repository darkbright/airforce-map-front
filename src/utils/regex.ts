/**
 * 방향각인 "W", "E", "N", "S"만 허용
 */
export const directionRegex = /[WENS]/;

/**
 * mgrs 및 utm의 Band 값으로 "O", "I", "Y", "Z" 빼고 대문자만 허용됨
 */
export const mgrsBandRegex = /[^a-zOIYZ]/;

/**
 * mgrs의 e100k, n100k 값으로 "O", "I" 빼고 대문자만 허용됨
 */
export const mgrsSquareIdRegex = /[^a-zOI]/;
