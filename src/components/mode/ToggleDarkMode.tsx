import { IconButton } from "@mui/material";
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
				<SunIcon color={theme(isDark).palette.text.secondary} />
			) : (
				<MoonIcon color={theme(isDark).palette.text.secondary} />
			)}
		</IconButton>
	);
};

export default ToggleDarkMode;
