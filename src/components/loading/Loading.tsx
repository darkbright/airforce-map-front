import { LinearProgress, styled } from "@mui/material";
import F15Icon from "../../assets/icons/F15Icon";

/**
 * 데이터를 불러오고 있을 때(loading 중일 때) 보여주는 화면으로, 전체 화면을 뒤덮는 반투명 Shadow 및 Progress Bar와 F15 전투기 모양이 뜸
 * @returns {JSX.Element} React Component
 */

const Loading = () => {
	return (
		<Root>
			<Center>
				<IconWrapper>
					<F15Icon />
				</IconWrapper>
				<LinearProgress color="primary" />
			</Center>
		</Root>
	);
};

export default Loading;

const Root = styled("div")(() => ({
	width: "100%",
	height: "100%",
	position: "fixed",
	top: 0,
	zIndex: 4000,
	left: 0,
	overflowY: "scroll",
	background: "rgba(0, 0, 0, 0.84)",
}));

const Center = styled("div")(() => ({
	position: "absolute",
	top: "50%",
	left: "50%",
	zIndex: 4000,
	transform: "translate(-50%, -50%)",
	display: "flex",
	flexDirection: "column",
	width: "20%",
}));

const IconWrapper = styled("div")(() => ({
	marginBottom: "10%",
	textAlign: "center",
}));
