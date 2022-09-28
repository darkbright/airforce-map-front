import create from "zustand";

interface RightClickState {
	rightClickEnabled: boolean;
	setRightClickEnabled: (enabled: boolean) => void;
}

/**
 * 우클릭 핸들링 모드 작동 시키기
 *
 * - rightClickEnabled: window.map이 로드되고, 특정 페이지를 진입하여 feature들이 생겼을 때 이 기능을 수행할 수 있으므로 기본은 false임
 * - setRightClickEnabled: 만약 페이지 내에서 feature들이 지도 위에 로드되면 해당 기능을 활성화 시킴
 */
const useRightClickStore = create<RightClickState>((set) => ({
	rightClickEnabled: false,
	setRightClickEnabled: (enabled: boolean) =>
		set(() => {
			return { rightClickEnabled: enabled };
		}),
}));

export default useRightClickStore;
