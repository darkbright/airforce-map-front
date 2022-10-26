import { styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import TextButton from "../../../components/button/TextButton";
import { addMilSymbolOnMap } from "../../../libs/d2/mapSettings/draw/addMilSymbolOnMap";
import useFavoriteMilSymbolStore from "../../../stores/useFavoriteMilSymbolStore";
import { ModifiedMilSymboListType } from "./MilitarySymbolListTreeDrawer";
import SingleMilitarySymbolBox from "./SingleMilitarySymbolBox";

interface MilitarySymbolFavoriteTabProps {
	onClickSymbol: () => void;
}

/**
 * 군대부호 찾기 Drawer 내에서 군대부호 즐겨찾기를 핸들링하는 모듈
 * @param MilitarySymbolFavoriteTabProps MilitarySymbolFavoriteTabProps
 * @returns {JSX.Element} JSX.Element(div)
 */
const MilitarySymbolFavoriteTab = ({ onClickSymbol }: MilitarySymbolFavoriteTabProps) => {
	const { favoriteSymbols, removeAllFavoriteSymbols } = useFavoriteMilSymbolStore();

	const [selectedMilSymbol, setSelectedMilSymbol] = useState<ModifiedMilSymboListType | null>(null);

	useEffect(() => {
		if (selectedMilSymbol) addMilSymbolOnMap({ cd: selectedMilSymbol?.cd });
	}, [selectedMilSymbol, setSelectedMilSymbol]);

	return (
		<Root>
			<TitleWrapper>
				<Typography variant="body1" sx={{ fontWeight: 600 }}>
					자주쓰는 군대부호
				</Typography>
				<TextButton
					title="모두 지우기"
					disabled={favoriteSymbols.length === 0}
					onClick={() => removeAllFavoriteSymbols()}
				/>
			</TitleWrapper>

			{favoriteSymbols.length === 0 ? (
				<Centered>
					<Typography variant="body2" sx={{ fontWeight: 600 }} gutterBottom>
						즐겨찾는 군대부호가 아직 없습니다.
					</Typography>
					<Typography variant="subtitle2">
						군대부호를 찾은 뒤 별 모양을 눌러 자주쓰는 군대부호를 추가해주세요.
					</Typography>
				</Centered>
			) : (
				<SymbolsWrapper>
					{favoriteSymbols.map((s) => (
						<SingleMilitarySymbolBox
							onClick={() => {
								setSelectedMilSymbol(s);
								onClickSymbol();
							}}
							simplified
							symbol={s}
							key={s.cd}
						/>
					))}
				</SymbolsWrapper>
			)}
		</Root>
	);
};

export default MilitarySymbolFavoriteTab;

const Root = styled("div")(() => ({
	marginTop: 10,
}));

const Centered = styled("div")(() => ({
	textAlign: "center",
	marginTop: "3%",
}));

const SymbolsWrapper = styled("div")(() => ({
	marginTop: "3%",
	display: "flex",
	flexFlow: "wrap",
}));

const TitleWrapper = styled("div")(() => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
}));
