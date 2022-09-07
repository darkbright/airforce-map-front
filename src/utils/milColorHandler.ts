/**
 * 데이터베이스에 저장된 색상 정보 인터페이스
 *
 * Y B G R 과 같이 대문자 한글자로 되어 있어 변환이 필요함
 * - Y for Yellow
 * - B for Black
 * - G for Green
 * - R for Red
 */
export type BasicSymbolColorType = "Y" | "B" | "G" | "R";

/**
 * 부대 데이터베이스에서 받아 온 대문자 1글자 짜리 색상 정보를 받아서  색상의 HEX 정보를 뽑아주는 함수
 */
export const milColorHandler = (color: BasicSymbolColorType) => {
	switch (color) {
		case "G": {
			return "#43a047";
		}
		case "Y": {
			return "#ffeb3b";
		}
		case "R": {
			return "#f44336";
		}
		case "B": {
			return "#212121";
		}
	}
};
