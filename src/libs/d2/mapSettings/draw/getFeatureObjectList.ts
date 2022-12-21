import { IGraphicBoard, IGraphicObject } from "../../../../types/d2/Graphic";

interface ObjectListValues {
	board: IGraphicBoard;
	groupedList: IGraphicObject[];
	deGroupedList: IGraphicObject[];
}

/**
 * 맵에서 도형을 그리고 나서 어떤 Feature들이 레이어에 등록되어 있는지 확인하고자 할 때 사용
 * @returns
 * - board: 현재 선택된 Board(즉 레이어)를 리턴해줌
 * - groupedList: parentObjectList라고 하는, 특정 Layer 내 feature가 그룹으로 묶인 경우 해당 feature는 "group"이라는 type으로 저장됨. 그리고 그 하위에 해당 그룹 내에 속하는 도형리스트를 볼 수 있음(_prop._objectList틀 통하여). 단 이 경우, 그 그룹 내에 속하는 도형의 속성을 변경하기 위해서는 groupedList에 출력된 feature를 직접 변경할 수 없고, 펼쳐진 형태의 리스트를 이용해야 함.
 * - deGroupedList: groupedList는 도형이 그룹인 경우 그룹 내에 속한 n개 이상의 세부 도형의 속성을 변경할 수 없으므로, group이 없었더라면 일렬로 펼쳐졌을 도형들을 볼 수 있게 해줌. 따라서 그룹 내에 속하는 개별 도형들의 속성을 변경할 때에는 deGroupedList를 사용해야 함.
 */
export const getFeatureObjectList = (): ObjectListValues => {
	const board = window.graphic.getSelectGraphicBoard();
	const groupedList = board.getParentObjectList();
	const deGroupedList = board.getObjectList();

	return { board, groupedList, deGroupedList };
};
