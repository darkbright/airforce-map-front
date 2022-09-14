import { styled } from "@mui/material";
import { Dispatch, ReactNode, SetStateAction } from "react";
import useThemeStore from "../../stores/useThemeStore";
import { theme } from "../../styles/theme";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface MapDataTableWrapperProps {
	show: boolean;
	setShow: Dispatch<SetStateAction<boolean>>;
	children: ReactNode;
}

const MapDataTableWrapper = ({ show, setShow, children }: MapDataTableWrapperProps) => {
	const { isDark } = useThemeStore();
	const bgColor = theme(isDark).palette.background.paper;

	return (
		<Root>
			<Wrapper
				style={{
					width: show ? "22vw" : 0,
					background: bgColor,
				}}
			>
				<ShrinkBtn style={{ background: bgColor }} onClick={() => setShow(!show)}>
					<Centered>
						{show ? (
							<ArrowForwardIosIcon fontSize="small" color="secondary" />
						) : (
							<ArrowBackIosIcon fontSize="small" color="secondary" />
						)}
					</Centered>
				</ShrinkBtn>
				<ContentArea style={{ display: show ? "block" : "none" }}>{children}</ContentArea>
			</Wrapper>
		</Root>
	);
};

export default MapDataTableWrapper;

const Root = styled("div")(() => ({
	display: "flex",
}));

const Wrapper = styled("div")(() => ({
	height: "100vh",
	position: "absolute",
	top: 0,
	right: 0,
	zIndex: 200,
	transition: "width ease-out 0.1s",
}));

const ShrinkBtn = styled("div")(() => ({
	position: "absolute",
	left: -30,
	top: "40%",
	width: 40,
	height: 60,
	padding: 5,
	borderTopLeftRadius: 8,
	borderBottomLeftRadius: 8,
	cursor: "pointer",
}));

const Centered = styled("div")(() => ({
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: "translate(-50%, -50%)",
}));

const ContentArea = styled("div")(() => ({
	padding: 15,
}));
