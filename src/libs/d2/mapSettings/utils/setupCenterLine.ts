import { CenterLineType } from "../../../../types/d2/PostComposeCtrl";
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
