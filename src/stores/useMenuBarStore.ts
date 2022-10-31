import create from "zustand";

interface MenuBarState {
	isBarOpen: boolean;
	setIsBarOpen: () => void;
}

/**
 * 현재 메뉴바가 열려있는지 닫혀있는지 확인하기 위한 전역 Context
 *
 * 현재 사용의 의미는 없으나, 추후 필요할 수도 있겠음 (아이프레임에 맵만 로드한다든지 하는 것들용으로)
 */
const useMenuBarStore = create<MenuBarState>((set) => ({
	isBarOpen: true,
	setIsBarOpen: () =>
		set((state) => {
			return { isBarOpen: !state.isBarOpen };
		}),
}));

export default useMenuBarStore;
