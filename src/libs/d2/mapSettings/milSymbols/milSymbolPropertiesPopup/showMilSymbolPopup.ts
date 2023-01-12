import { theme } from "../../../../../styles/theme";

/**
 * 셀렉트된 군대부호를 찾고, 실제 존재하는 군대부호인지를 찾은 뒤, 어떤 종류의 군대부호 속성정보 팝업을 띄울 것인지 결정하여 띄움
 */
export const showMilSymbolPopup = () => {
	const selectedObject = window.graphic.getSelectObjectList()[0];

	if (window.MilSymbol.getMilSymbolPropertiesObject().activateMilSymbolPopup(selectedObject)) {
		window.MilSymbol.getMilSymbolPropertiesObject().setMSStyle(selectedObject._prop.msOriginKey);

		// 이래는 d2 내에서 inline 스타일로 지정한 것이라 이렇게 바꾸게 하였음
		// zIndex가 1500 이상이어야 다른 툴바를 가리지 않게 됨
		// 테마 색상에 맞추어 설정함
		const block = document.getElementById("d2map_ms_prop_container");
		block!.style.zIndex = "1500";
		block!.style.background = theme("dark").palette.background.default;
	}
};
