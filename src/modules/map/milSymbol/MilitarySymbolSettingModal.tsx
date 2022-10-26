import { styled, Typography } from "@mui/material";
import BaseBlockTitleBox from "../../../components/box/textBox/BaseBlockTitleBox";
import BaseModal from "../../../components/modal/BaseModal";
import { getMilSymbolImage } from "../../../libs/d2/mapSettings/milSymbols/getMilSymbolImage";
import { ModifiedMilSymboListType } from "./MilitarySymbolListTreeDrawer";

interface MilitarySymbolSettingModalProps {
	open: boolean;
	setOpen: () => void;
	symbol: ModifiedMilSymboListType;
}

const MilitarySymbolSettingModal = ({ open, setOpen, symbol }: MilitarySymbolSettingModalProps) => {
	const symbolImage = getMilSymbolImage(symbol.cd);

	console.log("symbol", symbol);
	return (
		<BaseModal open={open} setOpen={setOpen}>
			<BaseBlockTitleBox title="부호속성 설정" />
			<Root>
				<SymbolWrapper>
					<Typography variant="body1" color="primary" gutterBottom>
						{symbol.cd}
					</Typography>
					<div>
						<img style={{ width: 70, height: 70, margin: 30 }} src={symbolImage?.imgURL} />
					</div>

					<Typography variant="body1" gutterBottom>
						{symbol.name}
					</Typography>

					<Typography variant="subtitle1" gutterBottom>
						{symbol.eName}
					</Typography>
				</SymbolWrapper>
				<TabWrapper>
					<a href="#d2map_popup-graphic-msstyle" className="d2map_popupGraphicMSProperty">
						dsf
					</a>
				</TabWrapper>
			</Root>
		</BaseModal>
	);
};

export default MilitarySymbolSettingModal;

const Root = styled("div")(() => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
}));

const SymbolWrapper = styled("div")(() => ({
	width: "100%",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
}));

const TabWrapper = styled("div")(() => ({
	width: "100%",
	padding: 5,
}));
