import { toastShow } from "../../../../components/alert/ToastMessage";
import { MilSymbolObjectOptions } from "../../../../types/d2/MilSymbolObjectOptions";
import D2MapModule from "../../D2MapModule";

const { D2MS } = D2MapModule;

export interface MilSymbolImageType {
	ms: string;
	anchor: number[];
	imgURL: string;
	size: {
		width: number;
		height: number;
	};
}

export const getMilSymbolImage = (symbolName: string): MilSymbolImageType | undefined => {
	if (!symbolName) {
		toastShow({
			title: "군대부호를 찾을 수 없음",
			message: `해당하는 군대부호를 찾을 수 없습니다. 제대로 입력하셨는지 확인해주세요`,
			type: "error",
		});
		return undefined;
	}

	const symbol = new D2MS.ms.Symbol("");

	const options: MilSymbolObjectOptions = {
		SIDC: symbolName,
		size: 25,
	};

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
