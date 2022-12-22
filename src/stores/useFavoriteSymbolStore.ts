import create from "zustand";
import { MapSymbolType } from "../types/army/symbolType";

interface FavoriteSymboleStore {
	favSymbol: MapSymbolType;
	setFavSymbol: (favSymbol: MapSymbolType) => void;
}

// sb for symbol
const mode = window.localStorage.getItem("sb");

/**
 * 지도에서 개별 메뉴로 진입하여 api를 통해 각종 심볼들을 지도에 뿌릴 때, 간략부호가 가장 먼저 뜨는데, 이것을 유저가 원하는 부호의 형태로 뜰 수 있게 조정해줌
 */
const useFavoriteSymbolStore = create<FavoriteSymboleStore>((set) => ({
	favSymbol: typeof mode === "string" ? JSON.parse(mode) : "simplified",
	setFavSymbol: (favSymbol: MapSymbolType) =>
		set(() => {
			localStorage.setItem("sb", JSON.stringify(favSymbol));
			return { favSymbol };
		}),
}));

export default useFavoriteSymbolStore;
