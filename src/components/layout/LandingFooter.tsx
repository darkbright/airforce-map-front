import { styled } from "@mui/material";
import KoreaAirForceLetterLogo from "../../assets/logos/KoreaAirForceLetterLogo";

/**
 * 랜딩 페이지의 Footer Component로, "대한민국공군" 레터 로고가 중앙에 붙어있음
 * @returns {JSX.Element } React Component
 */

const LandingFooter = () => {
	return (
		<Root>
			<KoreaAirForceLetterLogo />
		</Root>
	);
};

export default LandingFooter;

const Root = styled("div")(() => ({
	width: "100%",
	textAlign: "center",
	position: "absolute",
	bottom: "5%",
	left: 0,
	right: 0,
}));
