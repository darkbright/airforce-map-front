import { styled } from "@mui/material";
import KoreaAirForceLetterLogo from "../../assets/logos/KoreaAirForceLetterLogo";

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
