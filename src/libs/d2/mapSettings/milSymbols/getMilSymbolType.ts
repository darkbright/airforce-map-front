import D2MapModule from "../../D2MapModule";

const { MilSymbol } = D2MapModule;

/**
 * 군대부호를 입력하였을 때 그에 해당하는 타입을 출력함
 * - 0: 유효하지 않은 부호
 * - 1: 기본부호
 * - 2: 작전활동부호 점형
 * - 3: 작전활동부호 선형
 * - 4: 작전활동부호 면형
 */
type MilSymbolType = 0 | 1 | 2 | 3 | 4;

/**
 * 군대부호를 조회하여 제대로 된 군대부호인지 검증하고(만약 제대로 된 군대부호가 아니면 0을 리턴함), 해당하는 군대부호의 종류를 뱉어줌
 * @param symbolName 군대부호명 string
 * @returns MilSymbolType
 */
export const getMilSymbolType = (symbolName: string) => {
	const symbolType: MilSymbolType = MilSymbol.getMilSymbolType(symbolName);
	return symbolType;
};
