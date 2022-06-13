import setupMap from "./setupMap";
import setupMapLayer from "./setupMapLayer";

export default async () => {
	await setupMap();
	await setupMapLayer();
};
