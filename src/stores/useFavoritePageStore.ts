import create from "zustand";

interface FavoritePagesState {
	favoritePages: FavoritePageState[];
	addToFavoritePages: (favoritePage: FavoritePageState) => void;
	removeFavoritePage: (fullPath: string) => void;
	changePageOrder: (favoritePages: FavoritePageState[]) => void;
}

export interface FavoritePageState {
	fullPath: string;
	koreanName: string;
}

const mode = window.localStorage.getItem("favPages");

const useFavoritePageStore = create<FavoritePagesState>((set) => ({
	favoritePages: typeof mode === "string" ? JSON.parse(mode) : [],
	addToFavoritePages: (page: FavoritePageState) => {
		set((state) => {
			const newPages = [...state.favoritePages, page];
			localStorage.setItem("favPages", JSON.stringify(newPages));
			return { favoritePages: newPages };
		});
	},
	removeFavoritePage: (fullPath) => {
		set((state) => {
			const filteredPages = state.favoritePages.filter((path) => path.fullPath !== fullPath);
			localStorage.setItem("favPages", JSON.stringify(filteredPages));

			return {
				favoritePages: filteredPages,
			};
		});
	},
	changePageOrder: (pages: FavoritePageState[]) => {
		set(() => {
			localStorage.setItem("favePages", JSON.stringify(pages));

			return {
				favoritePages: pages,
			};
		});
	},
}));

export default useFavoritePageStore;
