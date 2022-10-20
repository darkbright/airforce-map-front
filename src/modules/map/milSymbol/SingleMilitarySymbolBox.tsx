import { alpha, IconButton, styled, Tooltip, Typography } from "@mui/material";
import { getMilSymbolImage } from "../../../libs/d2/mapSettings/milSymbols/getMilSymbolImage";
import useFavoriteMilSymbolStore from "../../../stores/useFavoriteMilSymbolStore";
import { ModifiedMilSymboListType } from "./MilitarySymbolListTreeDrawer";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

interface SingleMilitarySymbolBoxProps {
	symbol: ModifiedMilSymboListType;
	onClick?: () => void;
	simplified?: boolean;
}

/**
 * 군대부호 검색 시, 또는 군대부호 나열 시 개별 군대부호를 표시해주는 작은 박스임
 *
 * @param SingleMilitarySymbolBoxProps SingleMilitarySymbolBoxProps
 * @returns {JSX.Element} React Component
 */
const SingleMilitarySymbolBox = ({
	symbol,
	onClick,
	simplified = false,
}: SingleMilitarySymbolBoxProps) => {
	const symbolImage = getMilSymbolImage(symbol.cd);
	const { favoriteSymbols, addToFavoriteSymbols, removeFavoriteSymbol } =
		useFavoriteMilSymbolStore();
	const checkCurrentSymbolIsFavorite = favoriteSymbols.find((fav) => fav.cd === symbol.cd);

	return (
		<Root>
			<HeaderWrapper>
				<Typography variant={simplified ? "subtitle2" : "body2"} sx={{ fontWeight: 600 }}>
					{symbol.name}
				</Typography>
				{checkCurrentSymbolIsFavorite ? (
					<Tooltip title="즐겨찾기에서 제거">
						<IconButton
							color="primary"
							aria-label="removeFavoriteSymbol"
							component="label"
							onClick={() => removeFavoriteSymbol(symbol.cd)}
							sx={{
								padding: 0,
							}}
						>
							<StarOutlinedIcon fontSize="small" />
						</IconButton>
					</Tooltip>
				) : (
					<Tooltip title="즐겨찾기에 추가">
						<IconButton
							color="inherit"
							aria-label="addToFavoriteSymbol"
							component="label"
							onClick={() => addToFavoriteSymbols(symbol)}
							sx={{
								padding: 0,
								opacity: 0.5,
								"&:hover": { opacity: 1, color: (theme) => theme.palette.primary.main },
							}}
						>
							<StarOutlineOutlinedIcon fontSize="small" />
						</IconButton>
					</Tooltip>
				)}
			</HeaderWrapper>

			<Typography variant="subtitle2" color="secondary" onClick={onClick}>
				{symbol.cd}
			</Typography>
			<SymbolWrapper onClick={onClick}>
				<img
					style={{ width: simplified ? 38 : 55, height: simplified ? 38 : 55 }}
					src={symbolImage?.imgURL}
				/>
				{!simplified && (
					<Typography variant="subtitle2" sx={{ opacity: 0.6 }}>
						{symbol.eName}
					</Typography>
				)}
			</SymbolWrapper>
		</Root>
	);
};

export default SingleMilitarySymbolBox;

const Root = styled("div")(({ theme }) => ({
	width: "31.32%",
	backgroundColor: theme.palette.background.default,
	marginTop: 10,
	marginRight: "2%",
	padding: 10,
	display: "flex",
	flexDirection: "column",
	// alignItems: "center",
	borderRadius: 6,
	"&:hover": {
		backgroundColor: alpha(theme.palette.background.default, 0.5),
		cursor: "pointer",
	},
}));

const HeaderWrapper = styled("div")(() => ({
	display: "flex",
	width: "100%",
	justifyContent: "space-between",
	alignItems: "center",
}));

const SymbolWrapper = styled("div")(() => ({
	textAlign: "center",
}));
