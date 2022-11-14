/**
 * 생성가능한 그래픽 오브젝트의 종류
 */
export type GraphicObjectType =
	| "point"
	| "polyline"
	| "rectangle"
	| "text"
	| "ellipse"
	| "triangle"
	| "arc"
	| "milSymbol";

/**
 * 그래픽 객체 속성 관리용 클래스 (투명도에 올라가는 각종 도형 및 군대부호 등, 개별 shape 들의 상태를 정의함.)
 */
export interface IGraphicObjectProp {
	/**
	 * polyline 채움 여부
	 * - 0: 미채움
	 * - 1: 채움
	 */
	close: 0 | 1;
	/**
	 * arc 채움 여부
	 * - 0: 미채움
	 * - 1: 채움
	 * lineType 2, 3일 경우 fillType 상관없이 채움으로 설정?
	 */
	fillType: 0 | 1 | 2 | 3;
	/**
	 * 이미지 데이터
	 */
	imgDataURL: string | ArrayBuffer | null;
	/**
	 * polyline 라인 타입
	 * - 0: 일반
	 * - 1: 스플라인
	 */
	lineType: 0 | 1;
	/**
	 * milSymbol 도시 옵션 (d2ms 참고)
	 */
	msType: any;
	/**
	 * rectangle 모서리 설정 값
	 */
	radius: number;
	/**
	 * 각의 개수
	 */
	angleCount: number;
	/**
	 * name 객체 이름
	 */
	type: GraphicObjectType;
}
