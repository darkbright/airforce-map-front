import create from "zustand";
import { IGraphicObject } from "../types/d2/Graphic";

interface GraphicFeatureStore {
	features: IGraphicObject[] | null;
	setFeatures: (features: IGraphicObject[] | null) => void;
}

/**
 * 전역으로 현재 관리되고 있는 그래픽 features(도형류)의 리스트를 관리함
 *
 */
const useGraphicFeatureStore = create<GraphicFeatureStore>((set) => ({
	features: null,
	setFeatures: (features: IGraphicObject[] | null) => set({ features }),
}));

export default useGraphicFeatureStore;
