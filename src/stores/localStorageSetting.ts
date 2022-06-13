export const setLocalStorage = (key: string, value: string) =>
	window.localStorage.setItem(key, JSON.stringify(value));
