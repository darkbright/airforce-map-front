import create from "zustand";
import { setLocalStorage } from "./localStorageSetting";

interface FullScreenState {
	/**
	 * f: full Screen
	 * nf: not full Screen
	 */
	isFullScreenOpen: "f" | "nf";
	setIsFullScreenOpen: () => void;
}

const mode = window.localStorage.getItem("fs");

/**
 * 좌측 메뉴바와 상단의 헤더를 없애 풀스크린으로 볼 수 있게 하는 Store
 */
const useFullScreenStore = create<FullScreenState>((set) => ({
	isFullScreenOpen: typeof mode === "string" ? JSON.parse(mode || "") : "nf",
	setIsFullScreenOpen: () =>
		set((state) => {
			setLocalStorage("fs", state.isFullScreenOpen === "f" ? "nf" : "f");

			return { isFullScreenOpen: state.isFullScreenOpen === "f" ? "nf" : "f" };
		}),
}));

export default useFullScreenStore;
