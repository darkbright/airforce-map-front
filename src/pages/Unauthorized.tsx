import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BaseButton from "../components/button/BaseButton";

const Unauthroized = () => {
	const navigate = useNavigate();
	const goBack = () => navigate(-1);

	return (
		<div>
			<Typography variant="h2">권한이 없습니다.</Typography>
			<BaseButton title="돌아가기" type="button" onClick={goBack} />
		</div>
	);
};

export default Unauthroized;
