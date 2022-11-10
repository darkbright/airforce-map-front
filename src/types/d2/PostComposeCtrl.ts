/**
 * 화면의 좌표계를 표시하는 모듈
 */
export interface PostComposeCtrl {
	/**
	 * 중심선과 그 라벨을 표시할지 여부 설정
	 */
	setCenterLineVisible: (line: boolean, label: boolean) => void;
	/**
	 * 중심선 스타일을 리턴함
	 */
	getCenterLineStyle: () => CenterLineType;
	/**
	 * 중심선의 스타일을 업데이트 함
	 */
	setCenterLineUpdateStyle: () => void;
}

/**
 * 지도 중심선 설정 시 생성되는 중심선의 스타일 인터페이스
 */
export interface CenterLineType {
	// TO_BE_CHECKED
	// georef인지 geoRef인지 확인 필요
	coordType: "geo" | "utm" | "mgrs" | "georef" | "gars";
	fill: {
		color: number[];
		gradient: GradientType;
		pattern: "horizontal";
		patternColor: number[][];
		type: "simple";
		useFillColor: boolean;
	};
	line: {
		alphaHEX: undefined;
		arrow: {
			begin: ArrowType;
			end: ArrowType;
		};
		color: number[];
		dash: undefined;
		dashOffset: number;
		fill: {
			gradient: GradientType;
			pattern?: "horizontal";
			patternColor: number[][];
		};
		lineCap: "round";
		lineJoin: "round";
		type: "simple";
		useLineColor: boolean;
		width: number;
	};
	marker: {
		imgUrl: string | null;
		size: number;
	};
	point: {
		type: string;
		size: number;
	};
	text: {
		backgroundColor: number[];
		bold: boolean;
		color: number[];
		directionRightToLeft: boolean;
		directionVertical: boolean;
		font: string;
		fontSize: number;
		italic: boolean;
		offsetX: number;
		offsetY: number;
		outlineColor: number[];
		outlineWidth: number;
		placement: string;
		rotation: number;
		showBackground: boolean;
		textAlign: "left" | "center" | "right";
		textBaseline: string;
	};
	zIndex: number;
}

interface ArrowType {
	type: "none";
	width: number;
	height: number;
}

interface GradientType {
	anchor: number[];
	color: number[][];
	stdXML_BlendFactors?: undefined;
	stdXML_FocusScale?: undefined;
	stdXML_InterpolationColors?: undefined;
	stopPoint: number[];
	type: "horizontal";
}
