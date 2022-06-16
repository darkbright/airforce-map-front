import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { IconButton, styled, Tooltip } from "@mui/material";
import useFavoritePageStore from "../../stores/useFavoritePageStore";

interface AddToFavoritePageProps {
	location: string;
	koreanName: string;
	isNotMainPage: boolean;
}

const Root = styled("div")(() => ({
	padding: "0px 10px 2px 10px",
}));

const AddToFavoritePage = ({ location, koreanName, isNotMainPage }: AddToFavoritePageProps) => {
	const { favoritePages, addToFavoritePages, removeFavoritePage } = useFavoritePageStore();
	const isFavoritePage = favoritePages.some((p) => p.fullPath === location);

	return (
		<Root>
			{isNotMainPage ? (
				isFavoritePage ? (
					<Tooltip title="즐겨찾기 페이지 제거">
						<IconButton sx={{ padding: 0 }} onClick={() => removeFavoritePage(location)}>
							<StarIcon fontSize="small" color="primary" />
						</IconButton>
					</Tooltip>
				) : (
					<Tooltip title="즐겨찾기 페이지 추가">
						<IconButton
							sx={{ padding: 0 }}
							onClick={() => addToFavoritePages({ fullPath: location, koreanName })}
						>
							<StarBorderIcon fontSize="small" color="primary" />
						</IconButton>
					</Tooltip>
				)
			) : (
				""
			)}
		</Root>
	);
};

export default AddToFavoritePage;
