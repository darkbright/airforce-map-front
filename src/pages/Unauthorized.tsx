import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CenteredDiv from "../components/box/CenteredDiv";
import BaseButton from "../components/button/BaseButton";

const Unauthroized = () => {
	const navigate = useNavigate();
	const goBack = () => navigate(-1);

	return (
		<CenteredDiv>
			<Typography variant="h2">권한이 없습니다.</Typography>
			<BaseButton title="돌아가기" type="button" onClick={goBack} />
		</CenteredDiv>
	);
};

export default Unauthroized;
