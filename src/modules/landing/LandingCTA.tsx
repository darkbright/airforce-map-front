import { Typography, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import KF16Image from "../../assets/images/KF16Image";
import ShortAlert from "../../components/alert/ShortAlert";
import DefaultBox from "../../components/box/DefaultBox";
import BaseButton from "../../components/button/BaseButton";

const MainHeader = () => {
	const navigate = useNavigate();

	const navigateToLogin = () => {
		navigate("/auth/login");
	};

	return (
		<Root>
			<DefaultBox>
				<TitleWrapper>
					<Typography variant="h6" color="primary">
						이무거나 골라잡아
					</Typography>
					<Typography variant="h1">포켓몬 고 시스템</Typography>
				</TitleWrapper>

				<BaseButton
					title="로그인"
					color="primary"
					size="large"
					onClick={navigateToLogin}
					sx={{ margin: "10% 0px" }}
				/>
				<ShortAlert title="비밀임" severity="error" />
			</DefaultBox>
			<div>
				<KF16Image width={500} />
			</div>
		</Root>
	);
};

export default MainHeader;

const Root = styled("div")(({ theme }) => ({
	paddingTop: "10%",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-around",
	[theme.breakpoints.down("sm")]: {
		display: "flex",
		flexDirection: "column",
	},
}));

const TitleWrapper = styled("div")(() => ({
	margin: "5% 0px",
}));
