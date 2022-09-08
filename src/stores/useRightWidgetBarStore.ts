import create from "zustand";

interface RightWidgetBarState {
	isBarOpen: boolean;
	selectedTab: number;
	setIsBarOpen: (status: boolean) => void;
	setSelectedTab: (tabNumber: number) => void;
}

/**
 * 현재 화면 오른쪽 위젯 바 열려있는지 닫혀있는지 확인하기 위한 전역 Context
 *
 */
const useRightWidgetBarStore = create<RightWidgetBarState>((set) => ({
	isBarOpen: false,
	selectedTab: 0,
	setIsBarOpen: (status) =>
		set(() => {
			return { isBarOpen: status };
		}),
	setSelectedTab(tabNumber) {
		set(() => {
			return { selectedTab: tabNumber };
		});
	},
}));

export default useRightWidgetBarStore;
