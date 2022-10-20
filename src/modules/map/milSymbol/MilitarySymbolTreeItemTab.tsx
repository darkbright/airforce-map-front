import { styled, Typography } from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { MilSymbolTreeType } from "./MilitarySymbolTreeTab";
import { Dispatch, SetStateAction, useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";

interface TreeProps {
	tree: MilSymbolTreeType;
	setSelectedSymbol: Dispatch<SetStateAction<MilSymbolTreeType | null>>;
}

/**
 * 군대부호 찾기 Drawer에서 군대부호 트리 검색 시 개별 항목들을 로드하는 모듈로 Recurrsive하게 보여줌
 * @param TreeProps TreeProps
 * @returns {JSX.Element} JSX.Element(div)
 */

const MilitarySymbolTreeItemTab = ({ tree, setSelectedSymbol }: TreeProps) => {
	const [isExpanded, toggleExpanded] = useState(false);

	if (tree && tree.children?.length > 0) {
		return (
			<>
				<Root onClick={() => toggleExpanded(!isExpanded)}>
					{isExpanded ? (
						<IndeterminateCheckBoxIcon fontSize="small" color="secondary" />
					) : (
						<AddBoxIcon fontSize="small" color="secondary" />
					)}
					<DirName>{tree.name}</DirName>
				</Root>
				{isExpanded &&
					tree.children?.map((sub) => (
						<div key={sub.id} style={{ paddingLeft: 15 }}>
							<MilitarySymbolTreeItemTab tree={sub} setSelectedSymbol={setSelectedSymbol} />
						</div>
					))}
			</>
		);
	}

	return (
		<PageItem>
			<CircleOutlinedIcon color="disabled" sx={{ fontSize: "0.7rem" }} />
			<Typography
				variant="body1"
				style={{
					paddingLeft: 6,
					paddingBottom: 1.2,
					cursor: "pointer",
					// cursor: isAlreadyChecked ? "not-allowed" : "pointer",
					// color: isAlreadyChecked ? "#8e9091" : "",
				}}
				onClick={() => setSelectedSymbol(tree)}
			>
				{tree.name}
			</Typography>
		</PageItem>
	);
};

export default MilitarySymbolTreeItemTab;

const Root = styled("div")(() => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	cursor: "pointer",
}));

const DirName = styled("div")(({ theme }) => ({
	fontWeight: 600,
	paddingLeft: 5,
	paddingBottom: 2.5,
	"&:hover": {
		color: theme.palette.secondary.main,
	},
}));

const PageItem = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	paddingLeft: 10,
	"&:hover": {
		color: theme.palette.secondary.main,
		fontWeight: 600,
	},
}));
