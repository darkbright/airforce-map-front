import { toastShow } from "../../../../components/alert/ToastMessage";
import { MilSymbolObjectOptions } from "../../../../types/d2/MilSymbolObjectOptions";
import D2MapModule from "../../D2MapModule";
import { getMilSymbolType } from "../milSymbols/getMilSymbolType";

interface AddMilSymbolOnMapProps {
	/**
	 * 군대부호 코드명
	 */
	cd: string;
}

/**
 * 선택한 군대부호를 지도 위에 등록하는 함수로, 부호명을 인자로 받으면, 해당 심볼의 종류를 찾고, 이에 맞게 렌더링하여 지도 위에 표시됨
 * @param AddMilSymbolOnMapProps
 * @returns 군대부호 on Map
 */
export const addMilSymbolOnMap = ({ cd }: AddMilSymbolOnMapProps) => {
	const graphic = window.graphic;

	window.eventManager.setMapMode("graphic");

	const { GraphicObjectProp, MSTacticalLineGraphics, MSTacticalPolygonGraphics } = D2MapModule;

	const milSymbolType = getMilSymbolType(cd);

	// 점형 객체의 기본 옵션
	const symbolOptions: MilSymbolObjectOptions = {
		SIDC: cd,
		size: 7,
		frame: true,
		strokeWidth: 4,
		fill: true,
	};

	switch (milSymbolType) {
		case 0: {
			// 부호가 유효하지 않은 경우
			toastShow({
				title: "올바른 부호가 아닙니다",
				message: "해당하는 군대부호의 모양이 존재하지 않습니다.",
				type: "error",
			});
			return null;
		}
		case 1: {
			// 기본부호, 전술기호
			const tacticalSymbol = new GraphicObjectProp("milSymbol");
			tacticalSymbol.options = symbolOptions;
			tacticalSymbol.msType = "msPoint";

			return graphic.createMode(tacticalSymbol);
		}
		case 2: {
			// 기본부호, 전술기호인듯
			const tacticalSymbol = new GraphicObjectProp("milSymbol");
			tacticalSymbol.options = symbolOptions;
			tacticalSymbol.msType = "msPoint";

			return graphic.createMode(tacticalSymbol);
		}
		case 3: {
			// 전술도식(작전활동부호) 선형
			const createdGraphics = new MSTacticalLineGraphics();
			const tacticalGraphics = createdGraphics.getMSObject(cd);
			return graphic.createMode(tacticalGraphics.graphicObjProp, tacticalGraphics.graphicObjStyle);
		}
		case 4: {
			//전술도식(작전활동부호) 면형
			const createdGraphics = new MSTacticalPolygonGraphics();
			const tacticalGraphics = createdGraphics.getMSObject(cd);
			return graphic.createMode(tacticalGraphics.graphicObjProp, tacticalGraphics.graphicObjStyle);
		}
	}
};
