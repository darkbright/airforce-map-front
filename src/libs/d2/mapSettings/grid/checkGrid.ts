import { mapGridLayerListType } from "../../../../data/constants/mapGridLayerList";

/**
 * 특정한 그리드가 현재 맵에 반영되어 있는지 확인
 * @param grid  mapGridLayerListType에 맞추어 Grid 객체를 선택하여 등록
 * @returns { boolean } 그리드가 이미 map.layers에 등록되어 있으면 true
 */
export const isGridOnMap = (grid: mapGridLayerListType): boolean => {
	let isOn = false;
	window.map.getLayers().forEach((element: any) => {
		if (element.get("name") === grid.name) {
			isOn = true;
		}
	});
	return isOn;
};

/**
 * 선택된 그리드의 색상 정보를 hex로 가져옴
 * @param grid mapGridLayerListType에 맞추어 Grid 객체를 선택하여 등록
 * @returns { string } 그리드의 현재 hex 값
 */
export const getGridColor = (grid: mapGridLayerListType): string => {
	let color = "#ffffff";
	window.map.getLayers().forEach((element: any) => {
		if (element.get("name") === grid.name) {
			color = element.styleProperty.getGridColor();
		}
	});
	return color;
};

/**
 * 선택된 그리드의 너비(굵기)를 가져옴
 * @param grid mapGridLayerListType에 맞추어 Grid 객체를 선택하여 등록
 * @returns { number } 굵기 px값
 */
export const getGridWidth = (grid: mapGridLayerListType): number => {
	let width = 1;
	window.map.getLayers().forEach((element: any) => {
		if (element.get("name") === grid.name) {
			width = element.styleProperty.getGridWidth();
		}
	});
	return width;
};

/**
 * 선택된 그리드의 선의 종류를 가져옴
 *
 * 선은 일반적인 LineDash의 숫자 배열 형태를 가짐.
 * @param grid mapGridLayerListType에 맞추어 Grid 객체를 선택하여 등록
 * @returns {number[]} line이 solid인 경우 빈 배열 [], 이외는 n개 이상의 숫자 배열
 *
 * LineDash 구성에 관한 정보는 여기를 참고해보세요.
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash LineDash의 정의}
 */
export const getGridLineType = (grid: mapGridLayerListType): number[] => {
	let type: number[] = [];
	window.map.getLayers().forEach((element: any) => {
		if (element.get("name") === grid.name) {
			type = element.styleProperty.getGridLineType();
		}
	});
	return type;
};

/**
 * 선택된 그리드의 라벨(좌표 등 그리드 관련 정보가 Text로 표기된 형태)를 그리드에 표시할지 여부를 정하기 위하여 현재의 상태를 가져옴
 * @param grid mapGridLayerListType에 맞추어 Grid 객체를 선택하여 등록
 * @returns {boolean} 라벨이 있으면 true
 */
export const getGridLabel = (grid: mapGridLayerListType): boolean => {
	let type = true;
	window.map.getLayers().forEach((element: any) => {
		if (element.get("name") === grid.name) {
			type = element.styleProperty.getLabelVisible();
		}
	});
	return type;
};
