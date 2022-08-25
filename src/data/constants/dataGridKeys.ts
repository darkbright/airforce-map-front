/**
 * DataGrid를 위해 작성된 더미데이터 인터페이스. 추후 삭제 예정
 */

export interface DataGridKeyProps {
	name: string;
	header: string;
	sortable: boolean;
	formatter?: "listItemText" | "text";
	renderer?: {
		styles?: any;
	};
	editor?: {
		type?: "select" | "text";
		options?: any;
	};
	valditaion?: {
		required?: boolean;
		dataType?: "string" | "number";
		min?: number;
		max?: number;
		regExp?: RegExp;
		unique?: boolean;
	};
}

/**
 * DataGrid 를 위한 더미 데이터 배열
 *
 * 추후 삭제 필요
 */

export const dataGridKeys: DataGridKeyProps[] = [
	{
		name: "type",
		header: "종류",
		sortable: true,
		editor: {
			type: "text",
		},
		valditaion: {
			required: true,
			dataType: "string",
		},
	},
	{
		name: "loss",
		header: "손실률",
		sortable: true,
		editor: {
			type: "text",
		},
	},
	{
		name: "hold",
		header: "보유량",
		sortable: true,
		editor: {
			type: "text",
		},
	},
	{
		name: "second",
		header: "초당거래량",
		sortable: true,
		editor: {
			type: "text",
		},
	},
	{
		name: "notWorking",
		header: "활동여부",
		sortable: true,
		editor: {
			type: "text",
		},
	},
	{
		name: "working",
		header: "거래여부",
		sortable: true,
		editor: {
			type: "text",
		},
	},
	{
		name: "workingRate",
		header: "가동률",
		sortable: true,
		// formatter: "listItemText",
		// renderer: {},
	},
	{
		name: "editedDate",
		header: "수정일시",
		sortable: true,
	},
	{
		name: "editedBy",
		header: "거래아이디",
		sortable: true,
	},
];
