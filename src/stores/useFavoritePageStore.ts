import create from "zustand";

interface FavoritePagesState {
	favoritePages: FavoritePageState[];
	addToFavoritePages: (favoritePage: FavoritePageState) => void;
	removeFavoritePage: (fullPath: string) => void;
	changePageOrder: (favoritePages: FavoritePageState[]) => void;
}

/**
 * 즐찾에 페이지를 추가할 때 그 페이지를 구성하는 항목을 지정한 인터페이스
 * - fullPath : 전체 URL
 * - koreanName: URL을 찾은 후 BreadCrumb(현재 경로 표시)에서 보여줄 메뉴의 한국어 이름
 */
export interface FavoritePageState {
	fullPath: string;
	koreanName: string;
}

const mode = window.localStorage.getItem("favPages");

/**
 * 즐겨찾기 페이지 관리 전역 Context로 다음의 기능을 가짐
 * - favoritePages: 즐찾 목록 불러오기
 * - addToFavoriatePages: 즐찾 페이지에 추가
 * - removeFavoritePage:즐찾에서 제거
 * - changePageOrder: 즐찾 배열의 순서 변경
 */
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
