import { Typography } from "@mui/material";
import BaseButton from "../../components/button/BaseButton";
import BaseModal from "../../components/modal/BaseModal";

interface YesNoSelectionModal {
	open: boolean;
	setOpen: (value: boolean) => void;
	title: string;
	question: string;
	onYes: () => void;
	onNo: () => void;
}

const YesNoSelectionModal = ({
	open,
	setOpen,
	title,
	question,
	onYes,
	onNo,
}: YesNoSelectionModal) => {
	return (
		<BaseModal open={open} setOpen={setOpen}>
			<Typography gutterBottom variant="h5">
				{title}
			</Typography>
			<Typography variant="body1">{question}</Typography>
			<div style={{ marginTop: 20, textAlign: "right" }}>
				<BaseButton title="네" onClick={onYes} />
				<BaseButton
					title="아니요"
					color="inherit"
					sx={{ ml: 1 }}
					onClick={() => {
						setOpen(!open);
						onNo();
					}}
				/>
			</div>
		</BaseModal>
	);
};

export default YesNoSelectionModal;
