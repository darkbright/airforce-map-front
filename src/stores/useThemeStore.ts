import create from "zustand";
import { PaletteMode } from "../styles/theme";
import { setLocalStorage } from "./localStorageSetting";

interface DarkModeState {
	isDark: PaletteMode;
	setIsDark: () => void;
}

const mode = window.localStorage.getItem("darkMode");

const useThemeStore = create<DarkModeState>((set) => ({
	isDark: typeof mode === "string" ? JSON.parse(mode || "") : "dark",
	setIsDark: () =>
		set((state) => {
			setLocalStorage("darkMode", String(state.isDark === "dark" ? "light" : "dark"));
			return { isDark: state.isDark === "dark" ? "light" : "dark" };
		}),
}));

export default useThemeStore;
