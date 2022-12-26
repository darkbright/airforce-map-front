import { styled, Typography } from "@mui/material";
import { dateAndWeekDayFormat } from "../../utils/time";

/**
 * 오늘 날짜 출력하는 박스로  대시보드 메인에 쓰임
 * @returns {JSX.Element} div
 */
const TodayBox = () => {
	const today = dateAndWeekDayFormat(new Date());
	return (
		<Root>
			<Typography variant="body1">{today}</Typography>
		</Root>
	);
};

export default TodayBox;

const Root = styled("div")(({ theme }) => ({
	padding: "6%",
	borderRadius: 4,
	background: theme.palette.background.paper,
	textAlign: "center",
	marginBottom: 10,
}));
