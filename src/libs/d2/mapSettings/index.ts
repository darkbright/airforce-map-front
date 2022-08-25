import setupMap from "./setupMap";
import setupOverviewMap from "./setupOverviewMap";

export default async () => {
	await setupMap();
	await setupOverviewMap();
};
