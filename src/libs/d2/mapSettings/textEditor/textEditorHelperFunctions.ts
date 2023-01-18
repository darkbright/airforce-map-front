export const throttle = (fc: any, delay?: any) => {
	let throttled = false;
	return (...args: any) => {
		if (!throttled) {
			throttled = true;
			setTimeout(() => {
				fc(...args);
				throttled = false;
			}, delay);
		}
	};
};

/**
 * 허용가능한 키보드 이벤트의 종류
 * @param e KeyboardEvent
 * @returns boolean
 */
export const isAllowedKeys = (e: KeyboardEvent): boolean => {
	const allowedKeys =
		(e.ctrlKey === true && e.code === "KeyC") /* CTRL + C */ ||
		(e.ctrlKey === true && e.code === "KeyX") /* CTRL + X */ ||
		(e.ctrlKey === true && e.code === "KeyA") /* CTRL + A */ ||
		(e.ctrlKey === true && e.code === "KeyZ") /* CTRL + Z */ ||
		e.code === "ControlLeft" /* CTRL */ ||
		e.code === "Backspace" /* BACKSPACE */ ||
		e.code === "Numpad1" /* END */ ||
		e.code === "Numpad7" /* HOME */ ||
		e.code === "ArrowLeft" /* LEFT */ ||
		e.code === "ArrowUp" /* UP */ ||
		e.code === "ArrowRight" /* RIGHT*/ ||
		e.code === "ArrowDown" /* DOWN */ ||
		e.code === "NumpadDecimal"; /* DEL*/

	return allowedKeys;
};

/**
 * 버블링 현상 막기
 * @param e Event
 */
export const blockBubbling = (e: Event) => {
	e.stopPropagation();
};
