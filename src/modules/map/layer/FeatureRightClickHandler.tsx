import { ListItemText, MenuItem, MenuList, styled } from "@mui/material";

interface FeatureRightclickHandlerProps {
	show: boolean;
	setShow: (show: boolean) => void;
	positionX: number;
	positionY: number;
}

const divHeight = 250;
const divWidth = 120;
const { graphic } = window;

/**
 * 그래픽 (투명도)에서 도형을 우클릭하여 각종 행위들을 컨트롤 할 수 있도록 하는 Popover
 * @param FeatureRightclickHandlerProps FeatureRightclickHandlerProps
 * @returns {JSX.Element} div
 */
const FeatureRightClickHandler = ({
	show,
	setShow,
	positionX,
	positionY,
}: FeatureRightclickHandlerProps) => {
	const { innerWidth, innerHeight } = window;

	return (
		// 스타일링: 윈도우 너비 높이를 계산하고, 현재 feature의 position을 잡아서 만약 feature가 화면 너무 아래쪽이나 우측이나 그렇게 됐을 때 메뉴가 나오는 방향을 설정해주도록 함
		<Root
			style={{
				display: show ? "block" : "none",
				top: positionY >= innerHeight - divHeight ? positionY - divHeight : positionY,
				left: positionX >= innerWidth - divWidth - 350 ? positionX - divWidth - 20 : positionX + 20,
			}}
		>
			<MenuList dense>
				<MenuItem
					onClick={() => {
						graphic.copyObject();
						graphic.pasteObject();
						setShow(false);
					}}
				>
					<ListItemText>복제</ListItemText>
				</MenuItem>
				<MenuItem
					onClick={() => {
						setShow(false);
					}}
				>
					<ListItemText>삭제</ListItemText>
				</MenuItem>

				<MenuItem
					onClick={() => {
						graphic.selectedObjectToTop();
						setShow(false);
					}}
				>
					<ListItemText>맨 앞으로 가져오기</ListItemText>
				</MenuItem>
				<MenuItem
					onClick={() => {
						graphic.selectedObjectToBottom();
						setShow(false);
					}}
				>
					<ListItemText>맨 뒤로 보내기</ListItemText>
				</MenuItem>
				<MenuItem
					onClick={() => {
						graphic.selectedObjectToForward();
						setShow(false);
					}}
				>
					<ListItemText>앞으로 가져오기</ListItemText>
				</MenuItem>
				<MenuItem
					onClick={() => {
						graphic.selectedObjectToBackward();
						setShow(false);
					}}
				>
					<ListItemText>뒤로 보내기</ListItemText>
				</MenuItem>
				<MenuItem
					onClick={() => {
						setShow(false);
					}}
				>
					<ListItemText>속성</ListItemText>
				</MenuItem>
			</MenuList>
		</Root>
	);
};

export default FeatureRightClickHandler;

const Root = styled("div")(({ theme }) => ({
	background: theme.palette.background.paper,
	opacity: 0.9,
	position: "absolute",
	zIndex: 600,
	width: divWidth,
	height: divHeight,
	borderRadius: 4,
}));
