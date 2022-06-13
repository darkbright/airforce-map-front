import create from "zustand";

interface MenuBarState {
	isBarOpen: boolean;
	setIsBarOpen: () => void;
}

const useMenuBarStore = create<MenuBarState>((set) => ({
	isBarOpen: false,
	setIsBarOpen: () =>
		set((state) => {
			return { isBarOpen: !state.isBarOpen };
		}),
}));

export default useMenuBarStore;
