import { styled, Typography } from "@mui/material";
import useFavoriteMilSymbolStore from "../../../stores/useFavoriteMilSymbolStore";
import SingleMilitarySymbolBox from "./SingleMilitarySymbolBox";

interface MilitarySymbolFavoriteTabProps {
	onClickSymbol: () => void;
}

const MilitarySymbolFavoriteTab = ({ onClickSymbol }: MilitarySymbolFavoriteTabProps) => {
	const { favoriteSymbols } = useFavoriteMilSymbolStore();

	return (
		<Root>
			<Typography variant="body1" sx={{ fontWeight: 600 }}>
				자주쓰는 군대부호
			</Typography>
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
						<SingleMilitarySymbolBox onClick={onClickSymbol} simplified symbol={s} key={s.cd} />
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
	marginTop: "5%",
}));

const SymbolsWrapper = styled("div")(() => ({
	marginTop: "5%",
	display: "flex",
	flexFlow: "wrap",
}));
