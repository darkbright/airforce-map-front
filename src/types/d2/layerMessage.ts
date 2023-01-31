/**
 * 도형 생성 및 수정 등과 같은 이벤트가 발생했을 때, d2.min.js 내 등록된 핸들러를 호출하여 그 이후 일어나는 일에 대하여 처리할 수 있도록 하는 로직임. 이 내용은 window.graphic._layerCallback에 등록되어 작동하는 것으로 보임
 */
export type ILayerMessage =
	| "CreateObject"
	| "LoadGraphicBoard"
	| "SelectedObjectToGroup"
	| "SelectedObjectToUnGroup"
	| "SelectedObjectRemove"
	| "SelectedObjectToCopy"
	| "SelectedObjectToPaste"
	| "SelectedObjectChange"
	| "ObjectChangeLayer"
	| "ObjectOrderChange"
	| "AddGraphicBoard"
	| "SelectGraphicBoard"
	| "RemoveAllObject"
	| "RemoveGraphicBoard"
	| "EmptyGraphicBoard"
	| "RedoUndoGraphicBoard"
	| "SelectedObjectRename"
	| "SelectedObjectToDClick"
	| "CreateObjectDone";
