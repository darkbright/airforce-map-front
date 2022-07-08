import D2MapModule from "../../D2MapModule";

const { CoordManager } = D2MapModule;

export const initCoordinateControls = async () => {
	const manager = CoordManager;
	window.CoordManager = manager;
};
