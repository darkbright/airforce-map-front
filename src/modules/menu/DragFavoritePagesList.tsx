import useFavoritePageStore, { FavoritePageState } from "../../stores/useFavoritePageStore";
import DraggablePageItem from "./DraggablePageItem";
import { DragDropContext, Droppable, OnDragEndResponder } from "react-beautiful-dnd";

interface DragFavoritePagesListProps {
	onDragEnd: OnDragEndResponder;
	favoritePages: FavoritePageState[];
}

/**
 * 측 메뉴에서 즐겨찾기 Tab을 누르면 나오는 "즐겨찾기 설정"을 눌렀을 때 나오는 모달인 FaveoritePagesModal을 누르면 우측에 뜨는 메뉴 모음 배열.
 * 선택된 메뉴를 드래그앤드랍하여 순서를 바꿀 수 있음
 * @param {DragFavoritePagesListProps } DragFavoritePagesListProps
 * @returns {JSX.Element} JSX.Element(div)
 */

const DragFavoritePagesList = ({ favoritePages, onDragEnd }: DragFavoritePagesListProps) => {
	const { removeFavoritePage } = useFavoritePageStore();
	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable droppableId="favPage-list">
				{(provided) => (
					<div ref={provided.innerRef} {...provided.droppableProps}>
						{favoritePages.map((fav: FavoritePageState, index: number) => (
							<DraggablePageItem
								deleteItem={() => removeFavoritePage(fav.fullPath)}
								id={fav.fullPath}
								index={index}
								key={fav.fullPath}
								name={fav.koreanName}
							/>
						))}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
};

export default DragFavoritePagesList;
