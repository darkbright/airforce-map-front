import { alpha, styled, Typography } from "@mui/material";
import { getMilSymbolImage } from "../../../libs/d2/mapSettings/milSymbols/getMilSymbolImage";
import { ModifiedMilSymboListType } from "./MilitarySymbolListTreeDrawer";

interface SingleMilitarySymbolBoxProps {
	symbol: ModifiedMilSymboListType;
	onClick?: () => void;
}

const SingleMilitarySymbolBox = ({ symbol, onClick }: SingleMilitarySymbolBoxProps) => {
	const symbolImage = getMilSymbolImage(symbol.cd);

	console.log(symbolImage);

	return (
		<Root onClick={onClick}>
			<Typography variant="body1" sx={{ fontWeight: 600 }} gutterBottom>
				{symbol.name}
			</Typography>
			<Typography variant="body2" color="secondary">
				{symbol.cd}
			</Typography>
			<img style={{ width: 55, height: 55 }} src={symbolImage?.imgURL} />
			<Typography variant="subtitle2" sx={{ opacity: 0.6 }}>
				{symbol.eName}
			</Typography>
		</Root>
	);
};

export default SingleMilitarySymbolBox;

const Root = styled("div")(({ theme }) => ({
	width: "fit-content",
	backgroundColor: theme.palette.background.default,
	padding: 15,
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	borderRadius: 6,
	"&:hover": {
		backgroundColor: alpha(theme.palette.background.default, 0.5),
		cursor: "pointer",
	},
}));
