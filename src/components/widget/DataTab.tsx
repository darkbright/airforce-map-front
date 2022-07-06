import { Divider, styled } from "@mui/material";
import WidgetTitleBox from "../box/textBox/WidgetTitleBox";
import SimpleTable from "../simpleTable/SimpleTable";

// Widget에서 테이블 셈플 블록
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
