import create from "zustand";
import { ModifiedMilSymboListType } from "../modules/map/milSymbol/MilitarySymbolListTreeDrawer";

interface FavoriteMilSymbolState {
	favoriteSymbols: ModifiedMilSymboListType[];
	addToFavoriteSymbols: (favoriteSymbol: ModifiedMilSymboListType) => void;
	removeFavoriteSymbol: (cd: string) => void;
	removeAllFavoriteSymbols: () => void;
}

const mode = window.localStorage.getItem("favSymbols");

/**
 * 즐겨찾는 군대부호 관리 전역 Context로 다음의 기능을 가짐
 * - favoriteSymbols: 즐찬된 군대부호 목록 불러오기
 * - addToFavoriteSymbols: 즐찾 목록에 추가
 * - removeFavoriteSymbol:즐찾에서 제거
 * - removeAllFavoriteSymbols: 모든 즐찾된 내용을 제거
 */
const useFavoriteMilSymbolStore = create<FavoriteMilSymbolState>((set) => ({
	favoriteSymbols: typeof mode === "string" ? JSON.parse(mode) : [],
	addToFavoriteSymbols: (symbol: ModifiedMilSymboListType) => {
		set((state) => {
			const checkSymbolExist = state.favoriteSymbols.find((fav) => fav.cd === symbol.cd);
			const newSymbols = checkSymbolExist
				? state.favoriteSymbols
				: [...state.favoriteSymbols, symbol];
			localStorage.setItem("favSymbols", JSON.stringify(newSymbols));
			return { favoriteSymbols: newSymbols };
		});
	},
	removeFavoriteSymbol: (cd) => {
		set((state) => {
			const filteredSymbols = state.favoriteSymbols.filter((symbol) => symbol.cd !== cd);
			localStorage.setItem("favSymbols", JSON.stringify(filteredSymbols));

			return {
				favoriteSymbols: filteredSymbols,
			};
		});
	},
	removeAllFavoriteSymbols: () => {
		set(() => {
			localStorage.setItem("favSymbols", JSON.stringify([]));

			return {
				favoriteSymbols: [],
			};
		});
	},
}));

export default useFavoriteMilSymbolStore;
