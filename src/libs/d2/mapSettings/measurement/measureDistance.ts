import { DistanceUnit } from "../../../../types/d2/distance";

interface MeasureDistanceType {
	speed: number;
	bearing: boolean;
	unit: DistanceUnit;
}

/**
 * 거리 재기
 */
export const measureDistance = ({ speed, bearing, unit }: MeasureDistanceType) => {
	console.log(window.distance.getLineColor());

	window.eventManager.setMapMode("terrainAnalysis");
	window.distance.createDistance();
	window.distance.setSpeed(speed || 0);
	window.distance.setBearing(bearing || true);
	window.distance.setUnit(unit || "nauticalmile");
};
