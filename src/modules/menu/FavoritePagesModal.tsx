import { styled, Typography } from "@mui/material";
import BaseModal from "../../components/modal/BaseModal";
import { menu } from "../../data/constants/menu";
import PageStructureTree from "./PageStructureTree";
import StarBorderIcon from "@mui/icons-material/StarBorder";

interface FavoritePagesModalProps {
	setOpen: (value: boolean) => void;
	open: boolean;
}

const Root = styled("div")(() => ({
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	paddingTop: 20,
}));

const PageStructureWrapper = styled("div")(({ theme }) => ({
	minWidth: 240,
	padding: 20,
	background: theme.palette.background.default,
	borderRadius: 6,
}));

const FavoritePagesModal = ({ open, setOpen }: FavoritePagesModalProps) => {
	return (
		<BaseModal open={open} setOpen={setOpen}>
			<div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
				<StarBorderIcon sx={{ mb: "4px" }} />
				<Typography sx={{ pl: 1 }} variant="h6" gutterBottom>
					즐겨찾기 페이지 선택
				</Typography>
			</div>
			<Typography variant="subtitle2" color="GrayText">
				디렉토리 구조에서 페이지를 선택해주세요
			</Typography>
			<Root>
				<PageStructureWrapper>
					{menu.map((m) => (
						<PageStructureTree menu={m} key={m.id} />
					))}
				</PageStructureWrapper>
				<div>test</div>
			</Root>
		</BaseModal>
	);
};

export default FavoritePagesModal;
