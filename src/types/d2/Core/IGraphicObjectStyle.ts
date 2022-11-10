/**
 * 투명도에 올라갈 각종 도형이나 군대부호 등 shape의 스타일을 지정하고 변경할 수 있는 Prop
 * D2.Core.GraphicObjectStyle로 생성하여 관리
 *
 */
export interface IGraphicObjectStyle {
	fill: {
		/**
		 * 채움 타입
		 * - simple: 단순 채움
		 * - pattern: 외부에서 정의한 사용자 패턴으로 채움
		 */
		type: "simple" | "pattern";
		/**
		 * 채움 색상 ([R, G, B, A]), (R, G, B : 0 ~ 255, A : 0 ~ 1.0)
		 */
		color: number[];
		/**
		 * 채움 색상 사용 여부
		 */
		useFillColor: boolean;
	};
	line: {
		/**
		 * 라인의 종류
		 */
		type: "simple" | "dash";
		/**
		 * 선 두께
		 */
		width: number;
		/**
		 * ([R, G, B, A]), (R, G, B : 0 ~ 255, A : 0 ~ 1.0)
		 */
		color: number[];
		/**
		 * @example ([10, 10], [10, 10, 0, 10], [10, 10, 0, 10, 0, 10])
		 */
		dash: number[][];
		/**
		 * 화살표
		 */
		arrow: {
			begin: {
				type: "none" | "openarrow" | "arrow" | "triangle";
				width: number;
				height: number;
			};
			end: {
				type: "none" | "openarrow" | "arrow" | "triangle";
				width: number;
				height: number;
			};
		};
	};
	marker: {
		/**
		 * 	이미지 URL을 설정. (포인트 타입이 'marker'인 경우에 반영)
		 */
		imgUrl: string;
		/**
		 * 포인트 크기
		 */
		size: number;
	};
	point: {
		/**
		 * 포인트 타입
		 */
		type: "circle" | "rectangle" | "rhombus" | "triangle" | "invertTriangle";
		/**
		 * ([R, G, B, A]), (R, G, B : 0 ~ 255, A : 0 ~ 1.0)
		 */
		color: number[];
		/**
		 * 포인트 크기
		 */
		size: number;
	};
	text: {
		/**
		 * 텍스트 색상 ([R, G, B, A]), (R, G, B : 0 ~ 255, A : 0 ~ 1.0)
		 */
		color: number[];
		/**
		 * 외각선 색상 ([R, G, B, A]), (R, G, B : 0 ~ 255, A : 0 ~ 1.0)
		 */
		outlineColor: number[];
		/**
		 * 배경 색상 ([R, G, B, A]), (R, G, B : 0 ~ 255, A : 0 ~ 1.0)
		 */
		backgroundColor: number[];
		font: string;
		fontSize: number;
		/**
		 * 배경 도시 유무
		 */
		showBackground: boolean;
		outlineWidth: number;
		/**
		 * 텍스트 정렬 ('point' : 도형중심위치, 'line' : 도형선에 위치)
		 */
		placement: "point" | "line";
		/**
		 * 텍스트 회전각도 (radian)
		 */
		rotation: number;
		textAlign: "left" | "center" | "right";
		textBaseline: "bottom" | "top" | "middle" | "alphabetic" | "hanging" | "ideographic";
		bold: boolean;
		italic: boolean;
	};
}
