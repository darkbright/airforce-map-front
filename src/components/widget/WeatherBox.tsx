import { Divider, styled, Typography } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SpaceBetweenTextBox from "../box/textBox/SpaceBetweenTextBox";

/**
 * 오늘 날짜 출력하는 박스로  대시보드 메인에 쓰임
 * @returns {JSX.Element} div
 */
const WeatherBox = () => {
	return (
		<Root>
			<AcUnitIcon fontSize="large" color="primary" />
			<Typography variant="body1">눈이 와용</Typography>
			<Divider sx={{ mt: 1, mb: 1 }} />
			<SpaceBetweenTextBox variant="subtitle1" fontSize={11} title="기온">
				-10도
			</SpaceBetweenTextBox>
			<SpaceBetweenTextBox variant="subtitle1" fontSize={11} title="습도">
				59%
			</SpaceBetweenTextBox>
			<SpaceBetweenTextBox variant="subtitle1" fontSize={11} title="풍속">
				1m/s
			</SpaceBetweenTextBox>
		</Root>
	);
};

export default WeatherBox;

const Root = styled("div")(({ theme }) => ({
	padding: "6%",
	borderRadius: 4,
	background: theme.palette.background.paper,
	textAlign: "center",
	marginBottom: 10,
}));
