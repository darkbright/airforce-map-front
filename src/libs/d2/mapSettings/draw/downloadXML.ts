import { toastShow } from "../../../../components/alert/ToastMessage";
import D2MapModule from "../../D2MapModule";

/**
 * 생성되어 선택된 GraphicBoard(Layer)를 xml 형태로 다운로드하기
 */
export const downloadLayerAsXml = () => {
	const { GraphicUtil } = D2MapModule;

	const layer = window.graphic.getSelectGraphicBoard();
	// 만약 군대부호에 들어있는 모든 태그를 다 집어넣고 싶다면 아래 값을 true로 바꿔줘야 함.
	// 실제 저장 시 어떻게 할지 군과 얘기를 해보든가 해야 함
	const xml = layer.exportStdXML();
	const byteString = '<?xml version="1.0" encoding="UTF-8"?>\n' + xml.outerHTML;

	const byteLength = new Blob([byteString]).size;

	// 2e+6 = 2mb
	if (byteLength > 2e6) {
		return toastShow({
			title: "파일 용량 초과",
			type: "error",
			message: "xml 파일은 2mb를 초과할 수 없습니다.",
		});
	}

	// 실제 다운로드가 이루어지는 곳임.
	// 이것을 서버로 보내려면 별도의 조치 필요함
	// TO_BE_CHECKED
	GraphicUtil.download(
		'<?xml version="1.0" encoding="UTF-8"?>\n' + xml.outerHTML,
		"graphic.xml",
		"text/plain",
	);
};
