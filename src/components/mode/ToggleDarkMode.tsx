import { IconButton } from "@mui/material";
import MoonIcon from "../../assets/icons/MoonIcon";
import SunIcon from "../../assets/icons/SunIcon";
import useThemeStore from "../../stores/useThemeStore";
import { theme } from "../../styles/theme";

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
