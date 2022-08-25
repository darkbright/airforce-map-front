import create from "zustand";
import { PaletteMode } from "../styles/theme";
import { setLocalStorage } from "./localStorageSetting";

interface DarkModeState {
	isDark: PaletteMode;
	setIsDark: () => void;
}

const mode = window.localStorage.getItem("darkMode");

/**
 * 현재 화면이 다크모드인지 라이트모드인지 확인하고 핸들링하는 전역 Context
 *
 * - isDark: 다크라면 "dark" 아니라면 "light"
 * - setIsDark: 현재 다크라면 "dark" 아니라면 "light"로 isDark의 상태 변경 및 LocalStorage 저장
 */
const useThemeStore = create<DarkModeState>((set) => ({
	isDark: typeof mode === "string" ? JSON.parse(mode || "") : "dark",
	setIsDark: () =>
		set((state) => {
			setLocalStorage("darkMode", String(state.isDark === "dark" ? "light" : "dark"));
			return { isDark: state.isDark === "dark" ? "light" : "dark" };
		}),
}));

export default useThemeStore;
