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

/**
 * 지도 중심선 설정 시 생성되는 중심선의 스타일 인터페이스
 */
interface CenterLineType {
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

/**
 * 지도에 중심선을 표시하는 함수로, 표시할 좌표의 형식, 색상 및 크기 등 스타일 조율이 가능함.
 * @param visible boolean
 */

export const setupCenterline = (visible: boolean): void => {
	// 스타일 객체를 가져옴
	const centerLineStyle: CenterLineType = window.postComposeCtrl.getCenterLineStyle();
	// 여기서 스타일 객체의 세부사항 수정
	centerLineStyle.text.outlineWidth = 2;
	centerLineStyle.text.fontSize = 15;

	// 수정 후 스타일 업데이트
	window.postComposeCtrl.setCenterLineUpdateStyle();
	// 생성된 객체를 지도에 표시할지 말지 여부
	window.postComposeCtrl.setCenterLineVisible(!visible, !visible);
};
