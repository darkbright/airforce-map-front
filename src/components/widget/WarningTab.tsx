import { styled } from "@mui/material";
import DefaultBox from "../box/DefaultBox";
import BaseBlockTitleBox from "../box/textBox/BaseBlockTitleBox";

const WarningTab = () => {
	return (
		<Root>
			<BaseBlockTitleBox title="상황표" />
			<DefaultBox isBackgroundPaper={false}>dfsd</DefaultBox>
		</Root>
	);
};

export default WarningTab;

const Root = styled("div")(() => ({
	padding: 5,
}));
