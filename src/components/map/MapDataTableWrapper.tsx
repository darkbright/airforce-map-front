import { styled, Tooltip } from "@mui/material";
import { Dispatch, ReactNode, SetStateAction } from "react";
import useThemeStore from "../../stores/useThemeStore";
import { theme } from "../../styles/theme";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import useFullScreenStore from "../../stores/useFullScreenStore";
import { getWindowSize } from "../../styles/windowSize";

interface MapDataTableWrapperProps {
	show: boolean;
	width?: string;
	setShow: Dispatch<SetStateAction<boolean>>;
	children: ReactNode;
}

/**
 * 지도 우측에 띄우게 되는  Div를 정의한 것으로 각종 테이블을 지도에 띄울 데이터와 연계하여 보여줄 수 있겠음
 * - show, setShow: useState로 보여줄지 말지를 핸들링함.
 * - width: 기본은 "22vw"인데, 만약 테이블의 너비가 너무 넓어서 시각적으로 보기 어려운 경우 width를 늘릴 수 있겠음
 * @param MapDataTableWrapperProps MapDataTableWrapperProps
 * @returns JSX.Element(div)
 */
const MapDataTableWrapper = ({
	show,
	width = "22vw",
	setShow,
	children,
}: MapDataTableWrapperProps) => {
	const { isDark } = useThemeStore();
	const bgColor = theme(isDark).palette.background.paper;

	const { isFullScreenOpen } = useFullScreenStore();

	const { height: windowHeight } = getWindowSize();

	return (
		<Root>
			<Wrapper
				style={{
					width: show ? width : 0,
					// 35: 맨 아래 좌표 표시 바 높이, 58: 헤더 높이, 32: breadCrumbBar 높이
					height: isFullScreenOpen === "f" ? windowHeight - 35 : windowHeight - 35 - 58 - 32,
					background: bgColor,
					top: isFullScreenOpen === "f" ? 0 : 90,
					right: 0,
				}}
			>
				<ShrinkBtn style={{ background: bgColor }} onClick={() => setShow(!show)}>
					<Centered>
						{show ? (
							<Tooltip title="정보패널 닫기">
								<div>
									<ArrowForwardIosIcon fontSize="small" color="secondary" />
								</div>
							</Tooltip>
						) : (
							<Tooltip title="정보패널 열기">
								<div>
									<ArrowBackIosIcon fontSize="small" color="secondary" />
								</div>
							</Tooltip>
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
	// height: "96.5vh",
	paddingTop: "1.3em",
	position: "absolute",
	zIndex: 1000,
	transition: "width ease-out 0.2s",
	// overflowY: "scroll",
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
