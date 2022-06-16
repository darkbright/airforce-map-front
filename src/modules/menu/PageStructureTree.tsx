import { useState } from "react";
import { MenuProps } from "../../data/constants/menu";
import { styled, Typography } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import useFavoritePageStore from "../../stores/useFavoritePageStore";

interface PageStructureTreeProps {
	menu: MenuProps;
}

// 즐겨찾기 설정 선택 시 로드되는 모달 좌측의 전체 메뉴 구조 트리

const PageStructureTree = ({ menu }: PageStructureTreeProps) => {
	const { favoritePages, addToFavoritePages } = useFavoritePageStore();
	const [isExpanded, toggleExpanded] = useState(false);
	const fullPath = `/${menu.parentUrl}/${menu.id}`;
	const isAlreadyChecked = () => {
		return favoritePages.some((f) => f.fullPath === fullPath);
	};

	if (menu.type === "dir") {
		return (
			<>
				<Root
					onClick={() => {
						toggleExpanded(!isExpanded);
					}}
				>
					{isExpanded ? (
						<IndeterminateCheckBoxIcon fontSize="small" color="secondary" />
					) : (
						<AddBoxIcon fontSize="small" color="secondary" />
					)}
					<DirName>{menu.name}</DirName>
				</Root>
				{isExpanded &&
					menu.subMenu?.map((sub) => (
						<div key={sub.id} style={{ paddingLeft: 15 }}>
							<PageStructureTree menu={sub} />
						</div>
					))}
			</>
		);
	}

	return (
		<PageItem>
			<WebAssetIcon fontSize="small" color="disabled" />
			<Typography
				variant="subtitle1"
				style={{
					paddingLeft: 4,
					cursor: isAlreadyChecked() ? "not-allowed" : "pointer",
					color: isAlreadyChecked() ? "#8e9091" : "",
				}}
				onClick={() => {
					isAlreadyChecked() ? null : addToFavoritePages({ fullPath, koreanName: menu.name });
				}}
			>
				{menu.name}
			</Typography>
		</PageItem>
	);
};

export default PageStructureTree;

const Root = styled("div")(() => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	cursor: "pointer",
}));

const DirName = styled("div")(({ theme }) => ({
	fontWeight: 600,
	paddingLeft: 5,
	"&:hover": {
		color: theme.palette.secondary.main,
	},
}));

const PageItem = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	paddingLeft: 20,
	"&:hover": {
		color: theme.palette.secondary.main,
		fontWeight: 600,
	},
}));
