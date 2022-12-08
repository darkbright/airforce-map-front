/**
 * Textarea를 사용할 때, 줄 바꿈(\n)이 몇 번이 이루어졌는지 세어봐야 할 경우가 있음. 그럴 때 textArea값을 넣으면 몇 개의 줄바꿈이 일어났는지 알려줌
 * @param textArea textarea
 * @returns 엔터횟수 카운트 number
 */
export const inputEnterCounter = (textArea: string): number => {
	return textArea.split(/\r|\r\n|\n/).length;
};
