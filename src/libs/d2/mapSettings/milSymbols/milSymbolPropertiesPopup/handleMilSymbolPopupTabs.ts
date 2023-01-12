/**
 * document의 event click 시, d2 군대부호 상세 정보창 닫기 버튼 및 탭 핸들링
 *
 * d2에서 제작하여 d2.map.min.js에 담긴  UI는 리액트가 아니고, html이 존재하지 않으므로 ref등을 이용하여 직접 컨트롤 할 수 없으므로
 * 해당 함수를 통해 attribute를 찾아 핸들링하는 방식으로 함
 * @param event
 */
export const handleMilSymbolPopupTabs = (event: Event) => {
	const target = event.target as any;
	// d2 map 군대부호 상세 정보창 닫기 handling (총 4가지의 타입이 있고 모두 popup-close-btn으로 닫기를 핸들링함)
	if (target.matches(".d2map_popup-close-btn")) {
		const block: any = document.getElementsByClassName("d2map_ui-popup");
		for (let i = 0; i < block.length; i++) {
			block[i]!.style.display = "none";
		}
	}
	// 군대부호 속성정보 탭 스위칭 (본 프로젝트에 html이 없고 d2map.min.js 에 담겨있어 이렇게 처리할 수 밖에 없음)
	if (target.matches(".d2map_tab-controller li")) {
		// data-tab attribute의 이름에 따라 tab을 핸들링함
		const tabName = target.getAttribute("data-tab");
		if (target.parentNode) {
			for (const sibling of target.parentNode.children!) {
				if (sibling !== target) {
					sibling.classList.remove("d2map_selected");
				} else {
					sibling.classList.add("d2map_selected");
				}
				/**
				 * 점형 부호에서 기본으로 뜨는 "기본정보" 텝
				 */
				const baseBlock: any = document.getElementsByClassName("d2map_basic-content")[0];
				/**
				 * 점형 부호에서 부가로 뜨는 "수식정보" 텝
				 */
				const extensionBlock: any = document.getElementsByClassName("d2map_extension-content")[0];
				/**
				 * 면형 부호에서 기본으로 뜨는 "기본정보" 텝
				 */
				const sidcBlock: any = document.getElementsByClassName("d2map_sidc-content")[0];
				/**
				 * 면형 부호에서 부가로 뜨는 "수식정보" 텝
				 */
				const sidcExtendBlock: any = document.getElementsByClassName("d2map_extend-content")[0];

				switch (tabName) {
					case "extension-content": {
						baseBlock.style.display = "none";
						extensionBlock!.style.display = "block";
						break;
					}
					case "basic-content": {
						baseBlock.style.display = "block";
						extensionBlock!.style.display = "none";
						break;
					}
					case "sidc-content": {
						sidcBlock.style.display = "block";
						sidcExtendBlock.style.display = "none";
						break;
					}
					case "extend-content": {
						sidcBlock.style.display = "none";
						sidcExtendBlock.style.display = "block";
						break;
					}
				}
			}
		}
	}
};
