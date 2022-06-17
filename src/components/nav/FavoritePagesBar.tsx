import { List, ListItemButton, ListItemText, Typography } from "@mui/material";
import RouteStyleHandler from "../../routes/RouteStyleHandler";
import useFavoritePageStore from "../../stores/useFavoritePageStore";
import BaseButton from "../button/BaseButton";
import CircleIcon from "@mui/icons-material/Circle";
import { useState } from "react";
import FavoritePagesModal from "../../modules/menu/FavoritePagesModal";

const FavoritePagesBar = () => {
	const { favoritePages } = useFavoritePageStore();
	const [openPageHandler, setOpenPageHandler] = useState(false);

	return (
		<>
			<List component="nav" aria-labelledby="afccs-my-favorite-page" sx={{ p: 1 }}>
				<div style={{ textAlign: "right" }}>
					<BaseButton
						title="즐겨찾기 설정"
						variant="text"
						color="secondary"
						type="button"
						onClick={() => setOpenPageHandler(true)}
					/>
				</div>
				{favoritePages.length === 0 ? (
					<div>
						<Typography gutterBottom variant="body2">
							자주찾는 페이지가 없습니다.
						</Typography>
					</div>
				) : (
					favoritePages.map((page) => (
						<RouteStyleHandler key={page.fullPath} to={page.fullPath}>
							<ListItemButton dense>
								<CircleIcon sx={{ fontSize: ".5rem", marginRight: 1, opacity: 0.4 }} />
								<ListItemText primary={page.koreanName} />
							</ListItemButton>
						</RouteStyleHandler>
					))
				)}
			</List>
			<FavoritePagesModal open={openPageHandler} setOpen={() => setOpenPageHandler(false)} />
		</>
	);
};

export default FavoritePagesBar;
