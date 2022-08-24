import { mapGridLayerListType } from "../../../../data/constants/mapGridLayerList";

// 특정한 그리드가 현재 맵에 반영되어 있는지 확인
export const isGridOnMap = (grid: mapGridLayerListType): boolean => {
	let isOn = false;
	window.map.getLayers().forEach((element: any) => {
		if (element.get("name") === grid.name) {
			isOn = true;
		}
	});
	return isOn;
};

// 선택된 그리드의 색상을 가져옴
export const getGridColor = (grid: mapGridLayerListType): string => {
	let color = "#ffffff";
	window.map.getLayers().forEach((element: any) => {
		if (element.get("name") === grid.name) {
			color = element.styleProperty.getGridColor();
		}
	});
	return color;
};

// 선택된 그리드의 너비(굵기)를 가져옴
export const getGridWidth = (grid: mapGridLayerListType): number => {
	let width = 1;
	window.map.getLayers().forEach((element: any) => {
		if (element.get("name") === grid.name) {
			width = element.styleProperty.getGridWidth();
		}
	});
	return width;
};

// 선택된 그리드의 선의 종류를 가져옴
export const getGridLineType = (grid: mapGridLayerListType): number[] => {
	let type: number[] = [];
	window.map.getLayers().forEach((element: any) => {
		if (element.get("name") === grid.name) {
			type = element.styleProperty.getGridLineType();
		}
	});
	return type;
};

// 선택된 그리드의 라벨 표시 유무 상태를 가져옴
export const getGridLabel = (grid: mapGridLayerListType): boolean => {
	let type = true;
	window.map.getLayers().forEach((element: any) => {
		if (element.get("name") === grid.name) {
			type = element.styleProperty.getLabelVisible();
		}
	});
	return type;
};
