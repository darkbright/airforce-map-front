import { alpha, IconButton, styled, Tooltip, Typography } from "@mui/material";
import { getMilSymbolImage } from "../../../libs/d2/mapSettings/milSymbols/getMilSymbolImage";
import useFavoriteMilSymbolStore from "../../../stores/useFavoriteMilSymbolStore";
import { ModifiedMilSymboListType } from "./MilitarySymbolListTreeDrawer";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import { MouseEvent, useState } from "react";
import MilitarySymbolSettingModal from "./MilitarySymbolSettingModal";
import { getMilSymbolType } from "../../../libs/d2/mapSettings/milSymbols/getMilSymbolType";

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

	/**
	 * 군대부호가 점인지 선 또는 면 등인지에 따라 image를 로드하는 방식이 다름.
	 * 만약 군대부호가 점이라면 생성된 군대부호의 모양 그대로 렌더링해도 상관없지만,
	 * 면형이거나 선인 경우 자원을 소모하므로, 미리 따로 만들어진 간략화 버전을 가져와서 보여주는 것이 좋음.
	 * 따라서 여기서는 해당 군대부호가 면 또는 선인지 확인하는 함수임.
	 */
	const checkIsGraphics = getMilSymbolType(symbol.cd);

	// 기존 군대부호에 들어간 *표시를 모두 -로 바꿔 맵서버에 미리보기를 위해 따로 제작되어 있는 전술도식 선형, 면형의 형태를 가져올 수 있게 됨.
	const sanitizedCd = symbol.cd.replace(/\*/gi, "-");

	const { favoriteSymbols, addToFavoriteSymbols, removeFavoriteSymbol } =
		useFavoriteMilSymbolStore();
	const checkCurrentSymbolIsFavorite = favoriteSymbols.find((fav) => fav.cd === symbol.cd);

	// 군대부호 세부조작 모달 오픈
	const [milSymbolSettingOpen, setMilSymbolSettingOpen] = useState(false);

	const handleRightClick = (event: MouseEvent<HTMLDivElement>) => {
		event.preventDefault();
		setMilSymbolSettingOpen(true);
	};

	return (
		<>
			<Root onContextMenu={handleRightClick}>
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
						src={
							checkIsGraphics > 2
								? `${window.D2MapManager.D2MS_IMAGE}${sanitizedCd}.svg `
								: symbolImage?.imgURL
						}
					/>

					{!simplified && (
						<Typography variant="subtitle2" sx={{ opacity: 0.6 }}>
							{symbol.eName}
						</Typography>
					)}
				</SymbolWrapper>
			</Root>
			<MilitarySymbolSettingModal
				open={milSymbolSettingOpen}
				setOpen={() => setMilSymbolSettingOpen(false)}
				symbol={symbol}
			/>
		</>
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
