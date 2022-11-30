# 군대부호

<br>
<br>

## 군대부호의 종류

<br>
<br>

군대부호는 크게 `전술기호(tactical symbols) - D2에서는 기본부호`와 `전술도식(tactical graphics) - D2에서는 작전활동부호`로 나눌 수 있고, 이 작전활동부호는 각각의 생김새에 따라 점, 선, 면으로 종류가 표출됩니다.

- 전술기호(Tactical Symbols) - 또는 기본부호:
  기본부호는 점(point)로 이루어진 object로 특정 1개의 좌표(lon, lat)을 가지며, frames, fills, icons 등의 property를 가집니다.

- 전술도식(Tactical Graphics) - 또는 작전활동부호:
  point, line, area의 세 가지로 구분할 수 있으며 icon을 가지며 경우에 따라 modifiers(부가적 수식부호)를 포함할 수도 있습니다.

<br>

군대부호는 지정된 기준(Standard)에 따라 특정 위계(Hierarchy)를 가지게 되는데(이하 `군대부호트리`라고 칭함) 이에 대한 세부 분류는 다음과 같습니다.
이에 대한 상세한 표 목록은 `src/data/constants/milSymbolTreeList.ts`를 참고하세요.

| 군대부호트리 | 영문                                       |
| ------------ | ------------------------------------------ |
| 기본군대부호 | Untis, Equipment, and Installations(UEI)   |
| 작전활동부호 | Military Operations                        |
| 기상 및 해양 | Meteorological and Oceanographic Symbology |
| 신호정보     | Signals Intelligence Symbology             |
| 안정화작전   | Stability Operations Symbology             |
| 비상관리     | Emergency Management Symbols               |

<br>
<br>

코드에서 군대부호의 기호명(15자리 부호)를 입력하면 아래와 같은 표의 값으로 해당 군대부호가 어떠한 종류인지를 확인할 수 있습니다.

<br>
<br>

`src/libs/d2/mapSettings/milSymbols/getMilSymbolType`

```typescript
const { MilSymbol } = D2MapModule;
const getMilSymbolType = (symbolName: string): number => {
	const symbolType: MilSymbolType = MilSymbol.getMilSymbolType(symbolName);
	// 아래의 표와 같이 숫자로 값이 리턴됩니다.
	return symbolType;
};
```

<br>
상기의 코드에서와 같이 특정 군대부호가 어떤 타입인지 숫자로 결과값을 받으면, 이를 Map에 올릴 graphics 객체로 생성해주는 작업을 해야 하는데, 이 때 개별 부호의 종류에 따라 사용되는 D2의 생성 클라스는 다음과 같습니다.
<br>
<br>

| 값  | 부호의 종류        | English Name           | D2 Graphics Class              |
| --- | ------------------ | ---------------------- | ------------------------------ |
| 0   | 유효하지 않은 부호 | -                      | -                              |
| 1   | 기본부호           | tactical symbols       | GraphicObjectProp('milSymbol') |
| 2   | 작전활동부호 점형  | Point Graphics         | ?                              |
| 3   | 작전활동부호 선형  | Boundary Line Graphics | MSTacticalLineGraphics()       |
| 4   | 작전활동부호 면형  | Area Graphics          | MSTacticalPolygonGraphics()    |

<br>
<br>

상기 테이블에서 표현된 D2 GraphicS의 종류란, 특정 군대부호를 선택한 뒤 이를 Map위 특정 좌표 위에 올려 표출하기 위하여 `window.graphic(즉, D2.Core.Graphics를 통해 생성이 완료되어 window 내 저장된 객체)`내 `createMode()`를 통하여 생성할 구체적인 부호의 종류를 의미합니다.

다시 말해, 부호의 종류에 따라 Map에 올릴 군대부호를 만들어 호출할 수 있는 class명은 상기와 같이 표현된 D2 Graphics 종류에 알맞게 찾아 사용되어야 합니다.

> 여기서 이 Graphic의 종류가 명확하게 정의되지 않았습니다. 물음표로 표시된 부분은 뭘로 호출하나요?

<br>
<br>

이를 군대부호트리의 대분류에 따라 보면 그 종류를 파악할 수 있습니다.  
<br>

| 군대부호트리에서의 대분류 | 부호종류                        | D2 Graphics 종류                                      |
| ------------------------- | ------------------------------- | ----------------------------------------------------- |
| 기본군대부호              | tactical symbols                | GraphicObjectProp('milSymbol')                        |
| 작전활동부호              | tactical graphics               | MSTacticalLineGraphics(), MSTacticalPolygonGraphics() |
| 기상 및 해양              | tactical graphics               | MSTacticalLineGraphics(), MSTacticalPolygonGraphics() |
| 신호정보                  | tactical symbols                | GraphicObjectProp('milSymbol')                        |
| 안정화작전                | tactical symbols                | GraphicObjectProp('milSymbol')                        |
| 비상관리                  | tactical symbols(일부 graphics) | GraphicObjectProp('milSymbol')                        |
