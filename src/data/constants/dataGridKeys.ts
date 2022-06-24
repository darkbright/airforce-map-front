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

export const dataGridKeys: DataGridKeyProps[] = [
	{
		name: "type",
		header: "기종",
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
		header: "손실",
		sortable: true,
		editor: {
			type: "text",
		},
	},
	{
		name: "hold",
		header: "보유",
		sortable: true,
		editor: {
			type: "text",
		},
	},
	{
		name: "second",
		header: "초도",
		sortable: true,
		editor: {
			type: "text",
		},
	},
	{
		name: "notWorking",
		header: "불가동",
		sortable: true,
		editor: {
			type: "text",
		},
	},
	{
		name: "working",
		header: "가동",
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
		header: "수정자",
		sortable: true,
	},
];
