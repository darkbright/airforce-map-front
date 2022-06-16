import useFavoritePageStore, { FavoritePageState } from "../../stores/useFavoritePageStore";
import DraggablePageItem from "./DraggablePageItem";
import { DragDropContext, Droppable, OnDragEndResponder } from "react-beautiful-dnd";

interface DragFavoritePagesListProps {
	onDragEnd: OnDragEndResponder;
	favoritePages: FavoritePageState[];
}

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
