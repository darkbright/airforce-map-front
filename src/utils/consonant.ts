import * as Hangul from "hangul-js";

const consonant = (el: string, param: string) => {
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
