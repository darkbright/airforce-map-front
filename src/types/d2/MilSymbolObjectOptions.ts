export interface MilSymbolObjectOptions {
	/**
	 * 군대부호 코드값 15자리
	 */
	SIDC: string;
	/**
	 * 기능부호 표시 여부
	 */
	icon?: boolean;
	/**
	 * 외형부호 표시 여부
	 */
	frame?: boolean;
	/**
	 * 외형채움 표시 여부
	 */
	fill?: boolean;
	/**
	 * 민간부호 채움색 설정
	 */
	civilianColor?: boolean;
	/**
	 * 투명도 설정(0.0 - 1.0)
	 */
	fillOpacity?: number;
	/**
	 * 상태(15자리 군대부호 코드 중 4번째 코드값) 대한 운용조건 표시(0 : 미표시, 1 : 중앙, 2 : 하단)
	 */
	operationalConditionPoint?: number;
	/**
	 * 점형 작전활동부호 피아 선색상을 사용자 정의 색상으로 설정(RGB 혹은 RGBA)
	 * 예시: userDefineLineColor : "rgb(255,0,255)"
	 */
	userDefineLineColor?: string;
	/**
	 * 피아 배경색을 사용자 정의 색상으로 설정(RGB 혹은 RGBA)
	 * 예시: userDefineFillColor : "rgb(255,255,0)"
	 */
	userDefineFillColor?: string;
	/**
	 * 피아구분(군대부호 2번째 자리)
	 */
	affiliation?: AffiliationType;
	/**
	 * 상태 (군대부호 4번째 자리)
	 * - A: 예상/계획
	 * - P: 현재
	 * - C: 현재/정상
	 * - D: 현재/손상된
	 * - X: 현재/파괴된
	 * - F: 현재/최대가동
	 */
	status?: "A" | "P" | "C" | "D" | "X" | "F";
	/**심볼크기 */
	size: number;
	/**
	 * 선 두께
	 */
	strokeWidth?: number;
	/**
	 * 수식정보 색상(평가등급코드, 전투력, 적군표시, IFF/SIF을 제외한 나머지에 적용, RGB 혹은 RGBA)
	 */
	infoColor?: string;
	/**
	 * 수식정보 표시여부
	 */
	infoFields?: boolean;
	/**
	 * 부호 밝기 조절
	 */
	colorMode?: "Light" | "Medium" | "Dark";
	/**
	 * 부호 밝기 조절(0 ~ 100사이의 % 값으로 설정)
	 */
	userDefineBrightness?: string;
	/**
	 * 부호 내부에 심볼 추가 표시(작전활동부호 점형만 해당)
	 * 예시: addSymbol : "GMOMP---****X"
	 */
	addSymbol?: string;
	/**
	 * 고유명칭 T
	 */
	uniqueDesignation?: string;
	/**
	 * 고유명칭1 (작전활동부호에서 사용) T1
	 */
	uniqueDesignation1?: string;
	/**
	 * 활동사항 H
	 */
	additionalInformation?: string;
	/**
	 *  활동사항1(작전활동부호에서 적용) H1
	 */
	additionalInformation1?: string;
	/**
	 * 활동시각 W
	 */
	dtg?: string;
	/**
	 * 활동시각1(작전활동부호에서 적용) W1
	 */
	dtg1?: string;
	/**
	 * 적군표시 N
	 */
	hostile?: string;
	/**
	 * 수량 C
	 */
	quantity?: string;
	/**
	 * 위치 Y
	 */
	location?: string;
	/**
	 * 장비명/종류 V
	 */
	type?: string;
	/**
	 * 고도/심도/거리 X
	 */
	altitudeDepth?: string;
	/**
	 * 고도/심도/거리(작전활동부호에서 적용) X1
	 */
	altitudeDepth1?: string;
	/**
	 *  기동부대 표시 D
	 */
	mobileUnit?: boolean;
	/**
	 * 신호정보장비 L
	 */
	signatureEquipment?: string;
	/**
	 * 이동방향각도(자북기준시계방향) Q
	 */
	direction?: string;
	/**
	 * 속도 Z
	 */
	speed?: number;
	/**
	 * 부대증감 F
	 */
	reinforcedReduced?: string;
	/**
	 * 군/국가구분코드 G
	 */
	staffComments?: string;
	/**
	 * 상급부대 M
	 */
	higherFormation?: string;
	/**
	 * 지휘소/실제위치 표시 S
	 */
	headquarters?: boolean;
	/**
	 * 전투력 레이블 표시 여부
	 */
	showCombatEffectivenessLabel?: boolean;
	/**
	 *  수식정보(showCombatEffectivenessLabel : true 일 경우 적용) P
	 */
	iffSif?: string;
	/**
	 *  기동수단 코드(O, P, Q, R, S, T, U, V, W, X, Y 중 설정) R
	 */
	mobilityIndicator?: "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W" | "X" | "Y";
	/**
	 *  이동성 코드(M 혹은 S 혹은 U로 설정, M은 이동가능, S는 고정, U는 불확실을 의미) R2
	 */
	mobilityCode?: "M" | "S" | "U";
	/**
	 * 평가등급코드(showCombatEffectivenessLabel)가 true인 경우 확인 가능) J
	 */
	evaluationRating?: string;
	/**
	 * 전투력(showCombatEffectivenessLabel가 true인 경우 확인 가능), 0 ~ 100 값으로 설정, 녹색(100 ~ 90), 노란색(89 ~ 75), 빨간색(74 ~ 50), 검정색(49 ~ 0)으로 관리) K
	 */
	combatEffectiveness?: number;
	/**
	 * 전투력 물채움 표시
	 */
	showCombatEffectivenessWaterFill?: boolean;
	/**
	 * 사용자 정의 색상으로 물채움 설정(RGB 혹은 RGBA)
	 */
	useDefineColorTocombatEffectiveness?: string;
	/**
	 * 지휘통제소명 AA
	 */
	specialHeadquarters?: string;
	/**
	 * 가장/가상식별부호(1로 설정시 우산모양표시) AB
	 */
	feintDummyIndicator?: string;
	/**
	 * 기반형태(ELNOT 혹은 CENOT로 설정) AD
	 */
	platformType?: "ELNOT" | "CENOT";
	/**
	 * 분해시간 AE
	 */
	equipmentTeardownTime?: string;
	/**
	 * 공통명칭 AF
	 */
	commonIdentifier?: string;
	/**
	 *  보조장비코드(shortSonar 혹은 longSonar로 설정) AG
	 */
	auxiliaryEquipmentIndicator?: "shortSonar" | "longSonar";
	/**
	 * 시설 부대 표시(SIDC 11번째 코드가 H이면 시설부호로 간주)
	 */
	installation?: boolean;
	/**
	 * 불확정영역(AOU) 표시(부대 또는 장비에 대해 객체의 마지막 위치 정보와 센서의 정확도를 고려하여 객체가 있을 것으로 예상되는 영역을 도식으로 표기) AH
	 *
	 * 불확정영역 표시(direction 혹은 ellipse 혹은 rectangle로 설정)
	 */
	areaOfUncertainty?: "direction" | "ellipse" | "rectangle";
	/**
	 * 불확정영역 길이
	 */
	infoAHLineLength?: number;
	/**
	 * 불확정영역 방위각
	 */
	infoAHAzimuth?: number;
	/**
	 * 불확정영역 방위 오차각
	 */
	infoAHAzimuthError?: number;
	/**
	 * 불확정영역 선색상(방향, 타원, 사각형 공통, RGB 혹은 RGBA)
	 */
	infoAHLineColor?: string;
	/**
	 * 불확정영역 선두께(방향, 타원, 사각형 공통)
	 */
	infoAHLineWidth?: number;
	/**
	 * 불확정영역 선스타일(방향, 타원, 사각형 공통)
	 */
	infoAHLineStyle?: string;
	/**
	 * 불확정영역 오차선 선색상(RGB 혹은 RGBA)
	 */
	infoAHLineColorError?: string;
	/**
	 * 불확정영역 오차선 선두께
	 */
	infoAHLineWidthError?: number;
	/**
	 * 불확정영역 오차선 스타일(Dash)
	 */
	infoAHLineStyleError?: string;
	/**
	 * 불확정영역 사각형 폭(가로)
	 */
	infoAHRectWidth?: number;
	/**
	 * 불확정영역 사각형 높이(세로)
	 */
	infoAHRectHeight?: number;
	/**
	 * 불확정영역 채움색상(타원, 사각형)
	 */
	infoAHFillColor?: string;
	/**
	 * [ AI : 선위의 선위의 추측선 표시(부대 또는 장비에 대해 마지막으로 수집된 이동경로와 속도를 고려하여 현재 있을 것으로 추측되는 경로 또는 지역을 도식으로 표기) ]
	 *
	 * AI : 선위의 추측선 표시(circle 혹은 line로 설정)
	 */
	deadReckoningTrailer?: "circle" | "line";
	/**
	 * 선위의 추측선 표시 반경
	 */
	infoAIRadius?: number;
	/**
	 * 선위의 추측선 표시 선색상(RGB 혹은 RGBA)
	 */
	infoAILineColor?: string;
	/**
	 * 선위의 추측선 표시 선두께
	 */
	infoAILineWidth?: number;
	/**
	 * 선위의 추측선 표시 선스타일
	 */
	infoAILineStyle?: string;
	/**
	 * 선위의 추측선 표시 채움색상(RGB 혹은 RGBA)
	 */
	infoAIFillColor?: string;
	/**
	 * 선위의 추측선 표시 중심점 X
	 */
	infoAIStartLineX?: number;
	/**
	 * 선위의 추측선 표시 중심점 Y
	 */
	infoAIStartLineY?: number;
	/**
	 * [ AJ : 속도선 표시(부대 또는 장비에 대해 객체의 속력과 이동 방향을 도식으로 표기) ]
	 *
	 * 속도선 표시(SpeedLeader로 설정) AJ
	 */
	speedLeaderTrailer?: "SpeedLeader";
	/**
	 * 속도선 표시 이동방향
	 */
	infoAJMovingDirection?: number;
	/**
	 * 속도선 표시 속력구간 저속-중간
	 */
	infoAJSpeedRangeLower?: number;
	/**
	 * 속도선 표시 속력구간 중간-고속
	 */
	infoAJSpeedRangeUpper?: number;
	/**
	 * 속도선 표시 속력구간 저속 길이
	 */
	infoAJSpeedRangeLengthLow?: number;
	/**
	 * 속도선 표시 속력구간 중간 길이
	 */
	infoAJSpeedRangeLengthMid?: number;
	/**
	 * 속도선 표시 속력구간 고속 길이
	 */
	infoAJSpeedRangeLengthHigh?: number;
	/**
	 * 속도선 표시 선색상(RGB 혹은 RGBA)
	 */
	infoAJLineColor?: string;
	/**
	 * 속도선 표시 선두께
	 */
	infoAJLineWidth?: number;
	/**
	 * 속도선 표시 선스타일
	 */
	infoAJLineStyle?: string;
	/**
	 * 속도선 표시 가변견인센서열 거리
	 */
	infoAJDynamicLength?: number;
	/**
	 * 속도선 표시 가변견인센서열 크기
	 */
	infoAJDynamicSize?: number;
}

/**
 * 피아식별 코드
 * - "-"" 미지정 *Not Specified"
 * - P 식별보류 (Pending)
 * - U 미식별 (Unknown)
 * - F 아군 (Friend)
 * - H 적군 (Hostile)
 * - N 중립 (Neutral)
 * - A 아군간주 (Assumed Friend)
 * - S 적군간주 (Suspect)
 * - G (훈) 식별보류 (Exercise Pending)
 * - W (훈) 미식별 (Exercise Unknown)
 * - D (훈) 아군 (Exercise Friend)
 * - L (훈) 중립  (Exercise Neutral)
 * - M (훈) 아군간주
 * - J 의심적 (Joker)
 * - K 가상적
 */
export type AffiliationType =
	| "-"
	| "P"
	| "U"
	| "F"
	| "H"
	| "N"
	| "A"
	| "S"
	| "G"
	| "W"
	| "D"
	| "L"
	| "M"
	| "J"
	| "K";
