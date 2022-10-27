import { IconButton, Tooltip } from "@mui/material";
import useFullScreenStore from "../../stores/useFullScreenStore";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";

/**
 * 화면의 풀스크린 형태(지도로 모두 채움)을 결정하는 토글
 *
 * @returns {JSX.Element} React Component
 */

const ToggleFullScreenMode = () => {
	const { isFullScreenOpen, setIsFullScreenOpen } = useFullScreenStore();

	return (
		<IconButton
			aria-label="fullscreen-mode-handler"
			// onClick={useFullScreenStore((state) => {
			// 	return state.setIsFullScreenOpen;
			// })}
			onClick={() => {
				setIsFullScreenOpen();
			}}
		>
			{isFullScreenOpen === "f" ? (
				<Tooltip title="일반메뉴로 전환">
					<div>
						<FullscreenExitIcon color="inherit" />
					</div>
				</Tooltip>
			) : (
				<Tooltip title="지도모드로 전환">
					<div>
						<FullscreenIcon color="inherit" />
					</div>
				</Tooltip>
			)}
		</IconButton>
	);
};

export default ToggleFullScreenMode;
