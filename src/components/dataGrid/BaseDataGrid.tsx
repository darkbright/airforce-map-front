import Grid from "@toast-ui/react-grid";
import { OptPreset } from "tui-grid/types/options";
import TuiGrid from "tui-grid";
import "tui-grid/dist/tui-grid.css";
import { createRef, useEffect, useState } from "react";
import useThemeStore from "../../stores/useThemeStore";
import { theme } from "../../styles/theme";
import DataGridToolbar from "./DataGridToolbar";
import { useLocation } from "react-router-dom";
import YesNoSelectionModal from "../../modules/modal/YesNoSelectionModal";
import TableHelperText from "./TableHelperText";
import TableSettingModal from "./TableSettingModal";
import "../../styles/dataGrid/index.css";

const BaseDataGrid = () => {
	TuiGrid.setLanguage("ko");

	const { isDark } = useThemeStore();
	const { background, text, divider, action, primary } = theme(isDark).palette;
	const styles: OptPreset = {
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
			selectedHeader: {
				background: background.default,
			},
			selectedRowHeader: {
				background: background.default,
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
		{
			name: "notWorking",
			header: "불가동",
			// renderer: {
			// 	styles: {
			// 		backgroundColor: "yellow",
			// 		margin: "0",
			// 	},
			// },
		},
		{
			name: "working",
			header: "가동",
			editor: {
				type: "text",
			},
		},
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
	const [tableSettingOpen, setTableSettingOpen] = useState(false);

	// Page 전환 시, data 내용이 변경된 경우 저장할 것인지 묻는 Hook 만들기
	useEffect(() => {
		console.log("location changed");
		// 길이가 같은지 확인
		if (data.length !== initialData.length) {
			setCheckToSaveOpen(true);
		}

		// 데이터 내용이 바뀐게 있는지 확인
	}, [location]);

	const ref = createRef<Grid>();
	useEffect(() => {
		console.log(ref.current?.props);
	}, []);

	return (
		<>
			<TableHelperText type="percentage" />
			<DataGridToolbar
				addNewRow={appendRow}
				refresh={() => setData(initialData)}
				openTableSetting={() => setTableSettingOpen(true)}
			/>
			<Grid
				ref={ref}
				data={data}
				columns={columns}
				columnOptions={{ resizable: true }}
				rowHeight={30}
				bodyHeight={400}
				heightResizable={true}
				width={1200}
				rowHeaders={["rowNum", "checkbox"]}
				draggable={true}
				scrollX={true}
				scrollY={true}
			/>
			<YesNoSelectionModal
				open={checkToSaveOpen}
				setOpen={setCheckToSaveOpen}
				title="바뀐 내용 저장"
				onYes={() => console.log("저장")}
				onNo={() => setData(initialData)}
				question="바뀐 내용이 있네요. 저장하실?"
			/>
			<TableSettingModal
				open={tableSettingOpen}
				setOpen={setTableSettingOpen}
				setTableWidth={(value) => ref.current?.getInstance().setWidth(value)}
				setTableHeight={(value) => ref.current?.getInstance().setHeight(value)}
				setTableFontSize={(value) => {
					data.map((d, i) => {
						// fontSize를 className으로 밖에 접근할 수 밖에 없는데, 제시된 함수가 기존 className에 추가하는 형식이라 우선적으로 이렇게 조치함.
						ref.current?.getInstance().removeRowClassName(i, `tui-grid-container-${value - 1}`);
						ref.current?.getInstance().removeRowClassName(i, `tui-grid-container-${value + 1}`);
						ref.current?.getInstance().addRowClassName(i, `tui-grid-container-${value}`);
					});
				}}
			/>
			<button
				onClick={() => {
					data.map((d, i) => ref.current?.getInstance().addRowClassName(i, "tui-grid-container1"));
				}}
			>
				click
			</button>
		</>
	);
};

export default BaseDataGrid;
