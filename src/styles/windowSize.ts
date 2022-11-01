export const getWindowSize = (): { height: number; width: number } => {
	const height = window.innerHeight;
	const width = window.innerWidth;

	return { height, width };
};
