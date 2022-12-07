import { ChangeEvent } from "react";
import { toastShow } from "../../../../components/alert/ToastMessage";

interface UploadLayerAsXMLProps {
	event: ChangeEvent<HTMLInputElement>;
}

interface UploadedLayerProps {
	size: number;
	boardIndex: number;
}

/**
 * XML 상태의 투명도를 맵 위에 업로드하는 기능으로
 * 로컬에서 불러오기가 가능해야하며, 그렇지 않은 경우 database에서 가져온 blob 데이터를 컨버젼하는 것으로 기능 대체 또는 function 추가 필요함
 * TO_BE_CHECKED
 */
export const uploadLayerAsXML = ({ event }: UploadLayerAsXMLProps) => {
	const { graphic } = window;

	toastShow({
		title: "테스트용 기능입니다",
		message:
			"본 기능은 테스트용입니다. 로컬에서 불러오기가 보안모듈과 관련이 있다면 추후 지우시든지 하세요.",
		type: "warning",
	});
	const files = event?.target.files;

	if (files && files.length > 0) {
		const file = files[0];

		const reader = new FileReader();
		return new Promise<UploadedLayerProps>((resolve, reject) => {
			reader.onload = (event) => {
				try {
					const index = graphic.addGraphicBoard();
					const board = graphic.getGraphicBoard(index);
					graphic.setSelectGraphicBoard(index);
					if (event.target !== null) {
						const stringifiedXML = String(event.target.result);
						const xml = new DOMParser().parseFromString(stringifiedXML, "text/xml");
						if (board !== null) {
							board.importStdXML(xml);
						}
					}
					resolve({ size: file.size, boardIndex: index });
				} catch (error) {
					console.log(error);
					return toastShow({
						type: "error",
						title: "업로드 실패",
						message: `사유: ${error}`,
					});
				}
			};
			reader.readAsText(file);
			reader.onerror = () => {
				reject(new DOMException("xml 업로드 에러"));
			};
		});
	}
};
