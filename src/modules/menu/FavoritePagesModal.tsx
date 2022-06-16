import { styled, Typography } from "@mui/material";
import BaseModal from "../../components/modal/BaseModal";
import { menu } from "../../data/constants/menu";
import PageStructureTree from "./PageStructureTree";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import DragFavoritePagesList from "./DragFavoritePagesList";
import useFavoritePageStore from "../../stores/useFavoritePageStore";
import { reorder } from "../../utils/reorder";
import { DropResult } from "react-beautiful-dnd";

interface FavoritePagesModalProps {
	setOpen: (value: boolean) => void;
	open: boolean;
}

const Root = styled("div")(() => ({
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	paddingTop: 20,
	minHeight: 400,
}));

const PageStructureWrapper = styled("div")(({ theme }) => ({
	minWidth: 240,
	padding: 20,
	background: theme.palette.background.default,
	borderRadius: 6,
}));

// 좌측 즐겨찾기 메뉴의 즐겨찾기 설정을 눌렀을 때 나오는 모달로 즐겨찾기 페이지를 추가/삭제, 정렬할 수 있음

const FavoritePagesModal = ({ open, setOpen }: FavoritePagesModalProps) => {
	const { favoritePages, changePageOrder } = useFavoritePageStore();

	const onDragEnd = ({ destination, source }: DropResult) => {
		if (!destination) return;
		const newItems = reorder(favoritePages, source.index, destination.index);

		changePageOrder(newItems);
	};

	return (
		<BaseModal open={open} setOpen={setOpen}>
			<div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
				<StarBorderIcon sx={{ mb: "4px" }} />
				<Typography sx={{ pl: 1 }} variant="h6" gutterBottom>
					즐겨찾기 페이지 선택
				</Typography>
			</div>
			<Typography variant="subtitle2" color="text.secondary">
				디렉토리 구조에서 페이지를 선택해주세요
			</Typography>
			<Root>
				<PageStructureWrapper>
					{menu.map((m) => (
						<PageStructureTree menu={m} key={m.id} />
					))}
				</PageStructureWrapper>
				<div style={{ width: "100%", padding: "0px 20px" }}>
					<DragFavoritePagesList favoritePages={favoritePages} onDragEnd={onDragEnd} />
				</div>
			</Root>
		</BaseModal>
	);
};

export default FavoritePagesModal;
