/**
 * LocalStoraage에 특정 내용을 저장하는 함수
 * @param {string }key 키밸류 페어의 키
 * @param {string }value 키벨류 페어의 벨류
 * @returns void
 */

export const setLocalStorage = (key: string, value: string) =>
	window.localStorage.setItem(key, JSON.stringify(value));
