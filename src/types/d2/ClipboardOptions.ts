/**
 * createClipboard(options, callback)에 사용되는 사용할 클립보드의 좌표 형식 지정
 */
export interface ClipboardOptions {
	type: "MGRS" | "Geographic";
	visibleGuideLine: boolean;
}
