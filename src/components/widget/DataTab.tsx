import { Divider, styled } from "@mui/material";
import WidgetTitleBox from "../box/textBox/WidgetTitleBox";
import SimpleTable from "../simpleTable/SimpleTable";

/**
 * 화면 맨 오른쪽의 아이콘으로 구성된 Vertical Tab 내의 테이블을 쌀 Wrapper 형태의 Div
 *
 * 현재는 하드코딩된 샘플 테이블이 들어가 있음.
 * @returns {JSX.Element} React Component
 */

const DataTab = () => {
	return (
		<Root>
			<WidgetTitleBox title="현황" />
			<SimpleTable />
			<Divider sx={{ marginBottom: 1 }} />
			<WidgetTitleBox title="필요한 테이블" />
			<SimpleTable />
		</Root>
	);
};

export default DataTab;

const Root = styled("div")(() => ({
	padding: 5,
}));
