import { styled } from "@mui/material";
// import WidgetTitleBox from "../box/textBox/WidgetTitleBox";
import { ProgressTable } from "../dataGrid/simpleTable/SimpleTableExamples";

/**
 * 화면 맨 오른쪽의 아이콘으로 구성된 Vertical Tab 내의 테이블을 쌀 Wrapper 형태의 Div
 *
 * 현재는 하드코딩된 샘플 테이블이 들어가 있음.
 * @returns {JSX.Element} React Component
 */

const DataTab = () => {
	return (
		<Root>
			{/* <WidgetTitleBox title="퍼센트 표시 바 형태 예시" /> */}
			<ProgressTable />
			{/* <Divider sx={{ marginBottom: 1 }} />
			<WidgetTitleBox title="..." /> */}
		</Root>
	);
};

export default DataTab;

const Root = styled("div")(({ theme }) => ({
	marginTop: "2.5%",
	height: 280,
	borderRadius: 6,
	padding: "2.5%",
	background: theme.palette.background.paper,
}));
