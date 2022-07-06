import { Divider, styled } from "@mui/material";
import StatusBox from "../../modules/widget/StatusBox";
import DefaultBox from "../box/DefaultBox";
import WidgetTitleBox from "../box/textBox/WidgetTitleBox";

// Widget에서 현재 전체 상황을 보여주는 블록
const WarningTab = () => {
	return (
		<Root>
			<WidgetTitleBox title="현황" />
			<StatusBox severity="danger" title="진돗개" desc="왕왕 50%" />
			<StatusBox severity="normal" title="공역" desc="crystal clear" />
			<StatusBox severity="warn" title="서버" desc="35% Operation Rate " />
			<Divider sx={{ marginBottom: 1 }} />
			<WidgetTitleBox title="Total Balance" />
			<DefaultBox isBackgroundPaper={false}>암거나 넣고싶은거</DefaultBox>
		</Root>
	);
};

export default WarningTab;

const Root = styled("div")(() => ({
	padding: 5,
}));
