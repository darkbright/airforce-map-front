import { styled, Typography } from "@mui/material";
import ReportStyleTextBox from "../../box/textBox/ReportStyleTextBox";
import BaseModal from "../../modal/BaseModal";

interface ReportModalExmapleProps {
	open: boolean;
	setOpen: (value: boolean) => void;
}

const ReportModalExample = ({ open, setOpen }: ReportModalExmapleProps) => {
	return (
		<BaseModal open={open} setOpen={setOpen}>
			<Typography variant="h6">정보통신 장애 보고</Typography>
			<Root>
				<FlexBox>
					<ReportStyleTextBox title="부대">공군본부</ReportStyleTextBox>
					<ReportStyleTextBox title="관련업무">정보통신망(AFCCS)</ReportStyleTextBox>
					<ReportStyleTextBox title="피해발생일시">2022-09-03 12:00:00</ReportStyleTextBox>
				</FlexBox>
			</Root>
		</BaseModal>
	);
};

export default ReportModalExample;

const Root = styled("div")(({ theme }) => ({
	marginTop: "3%",
	marginBottom: "5%",
	padding: 16,
	border: `1px solid ${theme.palette.divider}`,
	borderRadius: 6,
}));

const FlexBox = styled("div")(() => ({
	display: "flex",
	justifyContent: "space-between",
}));
