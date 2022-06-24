import Grid from "@toast-ui/react-grid";
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
import HeaderSettingModal from "./HeaderSettingModal";
import { DataGridKeyProps, dataGridKeys } from "../../data/constants/dataGridKeys";
import { dummyAirplaneStatus } from "../../data/constants/dummyData";
import { gridStyles } from "./grigStyle";

const BaseDataGrid = () => {
	// grid styles
	const { isDark } = useThemeStore();
	const { palette } = theme(isDark);
	TuiGrid.applyTheme("default", gridStyles(palette));

	// grid language
	TuiGrid.setLanguage("ko");

	const ref = createRef<Grid>();

	// 처음에 띄울 데이터. 추후 API에서 받아올 것
	const initialData = dummyAirplaneStatus;

	// Column Setting
	// API에서 받아온 값들의 키를 찾아서 한글화 해주고, 해당 설정에 따라 column값을 제작하는 모듈.
	// TO_BE_CHECKED
	// 1. 만약 새로운 열을 추가하거나 수정하는 것을 가능하게 하려면 최초에 받아온 값들의 키값이 required인지 무엇인지 등의 값들이 추가적으로 들어와야 함. 백엔드와 협의
	const filteredColumns = () => {
		const dataKeys = Object.keys(initialData[0]);
		// -7은 기본 값들에 추가적으로 붙는 ['rowKey', 'sortKey', 'uniqueKey', '_attributes', '_disabledPriority', 'rowSpanMap', '_relationListItemMap']값을 제외한 값임.
		const filteredKeys = dataKeys.slice(0, dataKeys.length - 7);
		const columns: DataGridKeyProps[] = [];
		const matchedKeys = () =>
			filteredKeys.map((fKey) => columns.push(dataGridKeys.find((gkey) => gkey.name === fKey)!));
		matchedKeys();
		return columns;
	};

	const location = useLocation();
	const [containerWidth, setContainerWidth] = useState(1200 + 10);
	const [checkToSaveOpen, setCheckToSaveOpen] = useState(false);
	const [tableSettingOpen, setTableSettingOpen] = useState(false);
	const [headerSettingOpen, setHeaderSettingOpen] = useState(false);
	const [frozenCount, setFrozenCount] = useState(1);

	// Page 전환 시, data 내용이 변경된 경우 저장할 것인지 묻는 Hook 만들기
	useEffect(() => {
		console.log("location changed");
		// isModified 참조
	}, [location]);

	// useEffect(() => {
	// 	console.log(ref.current?.getInstance().getModifiedRows());
	// }, []);

	// 행 추가
	const appendRow = () => {
		ref.current?.getInstance().appendRow({});
	};

	return (
		<div style={{ width: containerWidth }}>
			<TableHelperText type="percentage" />
			<DataGridToolbar
				addNewRow={appendRow}
				refresh={() => console.log("refresh")}
				// refresh={() => ref.current?.getInstance().resetData(initialData)}
				openTableSetting={() => setTableSettingOpen(true)}
				openHeaderSetting={() => setHeaderSettingOpen(true)}
			/>
			<Grid
				ref={ref}
				data={initialData}
				columns={filteredColumns()}
				columnOptions={{ resizable: true, frozenCount }}
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
				onNo={() => console.log("no")}
				// onNo={() => ref.current?.getInstance().resetData(initialData)}
				question="바뀐 내용이 있네요. 저장하실?"
			/>
			<TableSettingModal
				open={tableSettingOpen}
				setOpen={setTableSettingOpen}
				setTableWidth={(value) => {
					setContainerWidth(value + 10);
					ref.current?.getInstance().setWidth(value);
				}}
				setTableHeight={(value) => ref.current?.getInstance().setHeight(value)}
				// setTableFontSize={(value) => {
				// 	initialData.map((_, i) => {
				// 		// fontSize를 className으로 밖에 접근할 수 밖에 없는데, 제시된 함수가 기존 className에 추가하는 형식이라 우선적으로 이렇게 조치함.
				// 		ref.current?.getInstance().removeRowClassName(i, `tui-grid-container-${value - 1}`);
				// 		ref.current?.getInstance().removeRowClassName(i, `tui-grid-container-${value + 1}`);
				// 		ref.current?.getInstance().addRowClassName(i, `tui-grid-container-${value}`);
				// 	});
				// }}
			/>
			<HeaderSettingModal
				open={headerSettingOpen}
				setOpen={setHeaderSettingOpen}
				headerData={filteredColumns()}
				tableRef={ref}
				frozenCount={frozenCount}
				setFrozenCount={(value) => setFrozenCount(value)}
			/>
			<button
				onClick={() => {
					console.log(ref.current?.getInstance().getModifiedRows());
				}}
			>
				click
			</button>
		</div>
	);
};

export default BaseDataGrid;
