import { Typography, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import KF16Image from "../../assets/images/KF16Image";
import ShortAlert from "../../components/alert/ShortAlert";
import BaseButton from "../../components/button/BaseButton";

const Root = styled("div")(({ theme }) => ({
	paddingTop: "15%",
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-around",
	[theme.breakpoints.down("sm")]: {
		display: "flex",
		flexDirection: "column",
	},
}));

const TitleWrapper = styled("div")(() => ({
	margin: "5% 0px",
}));

const MainHeader = () => {
	const navigate = useNavigate();

	const navigateToLogin = () => {
		navigate("/auth/login");
	};

	return (
		<Root>
			<div>
				<TitleWrapper>
					<Typography variant="h6">대한민국 공군 C4I 체계</Typography>
					<Typography variant="h1">공통 작전 상황도 시스템</Typography>
				</TitleWrapper>

				<BaseButton
					title="로그인"
					color="primary"
					size="large"
					onClick={navigateToLogin}
					sx={{ margin: "10% 0px" }}
				/>
				<ShortAlert title="군사 II급 비밀" severity="error" />
			</div>
			<div>
				<KF16Image width={500} />
			</div>
		</Root>
	);
};

export default MainHeader;
