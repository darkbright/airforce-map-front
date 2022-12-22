import create from "zustand";

interface GraphicFeatureColorStore {
	favColor: GraphicFeaturefavColorProps;
	setFavColor: (favColor: GraphicFeaturefavColorProps) => void;
}

export interface GraphicFeaturefavColorProps {
	/**
	 * fill Color
	 */
	fc: number[];
	/**
	 * line color
	 */
	lc: number[];
	/**
	 * line width
	 */
	lw: number;
}

// fc for favoriteColor
const mode = window.localStorage.getItem("fc");

/**
 * 지도에서 도형 생성 시 기본으로 생성되는 도형의 칠 색상, 선 색상, 선 굵기를 지정하여 저장해둠.
 * 이후 재접속 시에도 그 설정을 유지하도록 localStorage에 저장함
 *
 */
const useGraphicFeatureColorStore = create<GraphicFeatureColorStore>((set) => ({
	favColor:
		typeof mode === "string"
			? JSON.parse(mode)
			: {
					fc: [198, 234, 255, 0.85],
					lc: [0, 178, 255, 0.9],
					lw: 3,
			  },
	setFavColor: (favColor: GraphicFeaturefavColorProps) =>
		set(() => {
			localStorage.setItem("fc", JSON.stringify(favColor));
			return { favColor };
		}),
}));

export default useGraphicFeatureColorStore;
