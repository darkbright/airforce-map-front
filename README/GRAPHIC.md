## 궁금한거(여기는 소스코드에 옮겨담지 마세요)

- 현재 보드(layer) 불러오기

```ts
const board: IGraphicBoard = window.graphic.getSelectGraphicBoard();
const objectList = board.getObjectList();
```

또는

```ts
const board: IGraphicBoard = window.graphic.getSelectGraphicBoard();
const objList = board.getParentObjectList();
```

이때, getSelectObjectList()는 뭘 말하는가?

```ts
// "선택된 그래픽 객체를 배열로 반환함" 이렇게 설명이 되어 있는데, 그렇다면
// 위의 getObjectList() 또는 getParentObjectList()랑 같은거를 리턴한다는건가?
// 실제로는 아무것도 반환되지를 않음 현재
//
const objList = window.graphic.getSelectObjectList();
// 여기에 설명을 보면
// "그룹 객체와 그룹 객체 내 자식 객체를 포함한 모든 객체를 반환한다."
// 그러면 이거는 그룹일 경우에만 가능한건가?
const foundObjList = graphicUtil.getObject(objList);
```
