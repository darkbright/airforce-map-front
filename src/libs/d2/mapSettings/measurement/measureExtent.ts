import { AreaUnit } from "../../../../types/d2/Area";

interface MeasureExtentType {
	unit: AreaUnit;
}

/**
 * 범위(Area), 일반적으로 폴리곤 형태의 면을 가지는 도형 내의 범위를 측정하는데 사용
 */
export const measureExtent = ({ unit }: MeasureExtentType) => {
	window.eventManager.setMapMode("terrainAnalysis");
	window.area.createArea();
	window.area.setUnit(unit);
};
