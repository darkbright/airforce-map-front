import { IconButton, Toolbar, Tooltip } from "@mui/material";
import MoonIcon from "../../assets/icons/MoonIcon";
import SunIcon from "../../assets/icons/SunIcon";
import useThemeStore from "../../stores/useThemeStore";
import { theme } from "../../styles/theme";

/**
 * 화면의 다크모드/ 라이트여부를 핸들링하는 토글 버튼
 *
 * 다크모드면 해모양으로 바뀔 수 있게 되고, 반대면 달 모양이 됨
 * @returns {JSX.Element} React Component
 */

const ToggleDarkMode = () => {
	const { isDark } = useThemeStore();

	return (
		<IconButton aria-label="dark-mode-handler" onClick={useThemeStore((state) => state.setIsDark)}>
			{isDark === "dark" ? (
				<Tooltip title="라이트모드로 전환">
					<div>
						<SunIcon color={theme(isDark).palette.text.secondary} />
					</div>
				</Tooltip>
			) : (
				<Tooltip title="라이트모드로 전환">
					<div>
						<MoonIcon color={theme(isDark).palette.text.secondary} />
					</div>
				</Tooltip>
			)}
		</IconButton>
	);
};

export default ToggleDarkMode;
