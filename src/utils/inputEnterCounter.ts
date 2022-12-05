export const inputEnterCounter = (textArea: string) => {
	return textArea.split(/\r|\r\n|\n/).length;
};
