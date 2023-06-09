import { toastShow } from "../../../../components/alert/ToastMessage";
import {
	MilSymbolImageType,
	MilSymbolObjectOptions,
} from "../../../../types/d2/MilSymbolObjectOptions";
import { BasicSymbolColorType, milColorHandler } from "../../../../utils/milColorHandler";
import D2MapModule from "../../D2MapModule";

const { D2MS } = D2MapModule;

/**
 * 군대부호 기호명으로 해당하는 군대부호를 찾고, 관련 내용을 리턴해줌
 * @param symbolName 군대부호 기호코드(기호명)
 * @param feature api에서 받은 값 (api를 통해 컬러값을 받은 뒤 페이지에 로드하기 위해 쓰는 경우가 아니라면 해당 파람을 적지 말 것)
 * @returns MilSymbolImageType
 */
export const getMilSymbolImage = (
	symbolName: string,
	feature?: any,
): MilSymbolImageType | undefined => {
	if (!symbolName) {
		toastShow({
			title: "군대부호를 찾을 수 없음",
			message: `해당하는 군대부호를 찾을 수 없습니다. 제대로 입력하셨는지 확인해주세요`,
			type: "error",
		});
		return undefined;
	}

	/**
	 * TO_BE_CHECKED symbol은 D2MSProps로 보이나, 설정값을 변경하는 method는 properties 내에 정의되어 있지 않음. 따라서 return 시의 ms 값은 하기에 정의된 symbol값과 일치할 수가 없음. 혼란이 있음
	 */
	const symbol = new D2MS.ms.Symbol("");

	const options: MilSymbolObjectOptions = {
		SIDC: symbolName,
		addSymbolOnly: false,
		size: 25,
		frame: true,
		strokeWidth: 4,
		fill: true,
		fillOpacity: 1,
		areaOfUncertainty: "",
		civilianColor: false,
		deadReckoningTrailer: "",
		icon: true,
		infoFields: false,
		installation: false,
		operationalConditionPoint: 0,
		showCombatEffectivenessLabel: true,
		speedLeaderTrailer: "",
	};
	// api에서 받은 값이 담긴 내용이 들어있는 feature를 파람값으로 넣었다면 아래를 실행
	// api에서 받지 않은 값(예를 들어 군대부호 찾기에서 불러오는 값은 부호명에 따라 기본 색상(적인지 아군인지 등)이 명시되어 있으므로 userDefinedFillColor를 기본적으로 사용하면 안됨.
	// 설정값에 userDefinedFillColor가 string || undefined 이지만, undefined가 되면 에러가 남 - 왜 그런진 d2에 문의하시길
	// 따라서 아래와 같이 추가값으로 설정함
	if (feature) {
		const iconColor: BasicSymbolColorType = feature.get("color");

		const rgbColor = milColorHandler(iconColor);
		options.userDefineFillColor = rgbColor;
	}

	symbol.setOptions(options);

	// 군대부호 중심위치 찾기
	const symbolSize = symbol.getSize();

	// 객체 중심좌표로 Anchor 선정
	let anchorX = symbol.symbolAnchor.x / symbolSize.width;
	let anchorY = symbol.symbolAnchor.y / symbolSize.height;

	if (anchorX < 0.0 || anchorY < 0.0) {
		anchorX = 0.5;
		anchorY = 0.5;
	}

	// 해당 심볼의 SVG를 찾아옴.
	const svg = symbol.asSVG();

	// 만약 svg가 제대로 생성되어 있지 않다면 생성에 실패하였으므로 undefined를 출력
	if (svg.length <= 126) {
		return undefined;
	}

	return {
		ms: symbol,
		anchor: [anchorX, anchorY],
		imgURL: "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg),
		size: symbolSize,
	};
};
