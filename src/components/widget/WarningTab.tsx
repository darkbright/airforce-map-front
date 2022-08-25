import { Divider, styled } from "@mui/material";
import StatusBox from "../../modules/widget/StatusBox";
import DefaultBox from "../box/DefaultBox";
import WidgetTitleBox from "../box/textBox/WidgetTitleBox";

// Widget에서 현재 전체 상황을 보여주는 블록
/**
 * 화면 맨 오른쪽의 아이콘으로 구성된 Vertical Tab 내의 테이블을 쌀 Wrapper 형태의 Div로 상태바를 구현한 예시임
 * @returns {JSX.Element} React Component
 *
 */
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
