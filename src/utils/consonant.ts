import * as Hangul from "hangul-js";

/**
 * 한글 단어의 조사를 받침 여부에 따라 표기해주는 함수
 * @param {string} el 넣을 한글 단어
 * @param {string} param "을를" | "이가" | "은는" | "으로" 중 택 1
 * @returns {string}  "을를"일 경우 "el" + "을" OR "를" 로 리턴함
 */

const consonant = (el: string, param: "을를" | "이가" | "은는" | "으로") => {
	switch (param) {
		case "을를": {
			if (Hangul.endsWithConsonant(el)) {
				return `${el}을`;
			}
			return `${el}를`;
		}
		case "이가": {
			if (Hangul.endsWithConsonant(el)) {
				return `${el}이`;
			}
			return `${el}가`;
		}
		case "은는": {
			if (Hangul.endsWithConsonant(el)) {
				return `${el}은`;
			}
			return `${el}는`;
		}
		case "으로": {
			if (Hangul.endsWithConsonant(el)) {
				return `${el}으로`;
			}
			return `${el}로`;
		}
	}
};

export default consonant;
