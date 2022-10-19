import { MilSymbolType } from "../../../../types/d2/MilSymbolObjectOptions";
import D2MapModule from "../../D2MapModule";

const { MilSymbol } = D2MapModule;

/**
 * 군대부호를 조회하여 제대로 된 군대부호인지 검증하고(만약 제대로 된 군대부호가 아니면 0을 리턴함), 해당하는 군대부호의 종류를 뱉어줌
 * @param symbolName 군대부호명 string
 * @returns MilSymbolType
 */
export const getMilSymbolType = (symbolName: string) => {
	const symbolType: MilSymbolType = MilSymbol.getMilSymbolType(symbolName);
	return symbolType;
};
