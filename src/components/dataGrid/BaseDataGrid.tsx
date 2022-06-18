import Grid from "@toast-ui/react-grid";
import TuiGrid from "tui-grid";
import "tui-grid/dist/tui-grid.css";
import "../../styles/dataGrid/index.css";
import { useEffect, useState } from "react";

import useThemeStore from "../../stores/useThemeStore";
import { theme } from "../../styles/theme";
import DataGridToolbar from "./DataGridToolbar";
import { useLocation } from "react-router-dom";
import YesNoSelectionModal from "../../modules/modal/YesNoSelectionModal";

const BaseDataGrid = () => {
	TuiGrid.setLanguage("ko");

	const { isDark } = useThemeStore();
	const { background, text, divider, action, primary } = theme(isDark).palette;
	const styles = {
		selection: {
			background: background.paper,
		},
		scrollbar: {
			background: background.paper,
			border: divider,
			emptySpace: background.paper,
			// thumb?: string;
			// active?: string;
		},
		row: {
			hover: {
				background: background.default,
			},
		},
		area: {
			header: {
				border: divider,
				background: background.paper,
			},
			body: {
				background: background.paper,
			},
			// summary: {},
		},
		cell: {
			normal: {
				background: background.paper,
				text: text.primary,
				border: divider,
				showVerticalBorder: true,
			},
			disabled: {
				background: action.disabledBackground,
			},
			header: {
				background: background.paper,
				border: divider,
				text: text.primary,
				showVerticalBorder: true,
				showHorizontalBorder: true,
			},
			rowHeader: {
				background: background.paper,
				border: divider,
				text: text.primary,
			},
			editable: {
				background: background.paper,
			},
			focused: {
				background: primary.main,
			},
		},
		frozenBorder: {
			border: divider,
		},
		heightResizeHandle: {
			background: background.paper,
			border: divider,
		},
		pagination: {},
		outline: {
			border: divider,
			showVerticalBorder: false,
		},
	};

	// export interface OptTableCellStyle {
	//     normal?: OptCellStyle;
	//     header?: OptCellStyle;
	//     selectedHeader?: OptBasicCellStyle;
	//     rowHeader?: OptCellStyle;
	//     selectedRowHeader?: OptBasicCellStyle;
	//     summary?: OptCellStyle;
	//     focused?: OptCellFocusedStyle;
	//     focusedInactive?: OptCellFocusedStyle;
	//     required?: OptBasicCellStyle;
	//     editable?: OptBasicCellStyle;
	//     disabled?: OptBasicCellStyle;
	//     invalid?: OptBasicCellStyle;
	//     // deprecated
	//     currentRow?: OptBasicCellStyle;
	//     evenRow?: OptBasicCellStyle;
	//     oddRow?: OptBasicCellStyle;
	//     dummy?: OptCellDummyStyle;
	//   }

	//   export interface OptPreset {
	//     outline?: OptTableOutlineStyle;
	//     selection?: OptSelectionLayerStyle;
	//     scrollbar?: OptScrollbarStyle;
	//     frozenBorder?: OptFrozenBorderStyle;
	//     area?: OptTableAreaStyle;
	//     cell?: OptTableCellStyle;
	//     heightResizeHandle?: OptHeightResizeHandleStyle;
	//     pagination?: OptPaginationStyle;
	//   }

	TuiGrid.applyTheme("default", styles);

	const initialData = [
		{
			type: "F-15K",
			second: 100,
			loss: 4,
			hold: 10,
			notWorking: 5,
			working: 10,
			workingRate: "2",
			editedDate: "2020-01-03",
			editedBy: "19-000223",
			_attributes: {
				disabled: true,
			},
		},
		{
			type: "F-19K",
			second: 200,
			loss: 4,
			hold: 10,
			notWorking: 5,
			working: 10,
			workingRate: "1",
			editedDate: "2020-01-03",
			editedBy: "19-000223",
			_attributes: {
				checked: false,
				className: {
					row: ["red"],
				},
			},
		},
		{
			type: "F-16K",
			second: 100,
			loss: 4,
			hold: 10,
			notWorking: 5,
			working: 10,
			workingRate: "2",
			editedDate: "2020-01-03",
			editedBy: "19-000223",
			_attributes: {
				checked: true,
				className: {
					column: {
						type: ["blue"],
						genre: ["blue"],
					},
				},
			},
		},
		{},
	];

	const columns = [
		{
			name: "type",
			header: "기종",
			sortable: true,
		},
		{ name: "second", header: "초도" },
		{ name: "loss", header: "손실" },
		{ name: "hold", header: "보유" },
		{ name: "notWorking", header: "불가동" },
		{ name: "working", header: "가동" },
		{
			name: "workingRate",
			header: "가동률",
			formatter: "listItemText",
			editor: {
				type: "select",
				options: {
					listItems: [
						{ text: "Deluxe", value: "1" },
						{ text: "EP", value: "2" },
						{ text: "Single", value: "3" },
					],
				},
			},
		},
		{ name: "editedDate", header: "수정일시" },
		{ name: "editedBy", header: "수정자" },
	];

	const [data, setData] = useState(initialData);

	const appendRow = () => {
		setData((data) => [...data, {}]);
	};

	const location = useLocation();
	const [checkToSaveOpen, setCheckToSaveOpen] = useState(false);

	// Page 전환 시, data 내용이 변경된 경우 저장할 것인지 묻는 Hook 만들기
	useEffect(() => {
		console.log("location changed");
		// 길이가 같은지 확인
		if (data.length !== initialData.length) {
			setCheckToSaveOpen(true);
		}

		// 데이터 내용이 바뀐게 있는지 확인
	}, [location]);

	return (
		<>
			<DataGridToolbar addNewRow={appendRow} refresh={() => setData(initialData)} />
			<Grid
				data={data}
				columns={columns}
				rowHeight={30}
				bodyHeight={200}
				heightResizable={true}
				width={1200}
				rowHeaders={["rowNum", "checkbox"]}
				draggable={true}
			/>
			<YesNoSelectionModal
				open={checkToSaveOpen}
				setOpen={setCheckToSaveOpen}
				title="바뀐 내용 저장"
				onYes={() => console.log("저장")}
				question="바뀐 내용이 있네요. 저장하실?"
			/>
		</>
	);
};

export default BaseDataGrid;
