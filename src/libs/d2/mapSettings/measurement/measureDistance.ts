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
	window.eventManager.setMapMode("terrainAnalysis");
	window.distance.createDistance();
	window.distance.setSpeed(speed);
	window.distance.setBearing(bearing);
	window.distance.setUnit(unit);
};
