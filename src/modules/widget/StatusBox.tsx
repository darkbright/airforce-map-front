import { styled, Typography } from "@mui/material";
import StatusChip from "../../components/chip/StatusChip";
import { SeverityType } from "../../types/army/statusType";

interface StatusBoxProps {
	title: string;
	severity: SeverityType;
	desc: string;
}

const StatusBox = ({ title, desc, severity }: StatusBoxProps) => {
	return (
		<Root>
			<Header>
				<Typography gutterBottom variant="body1" sx={{ fontWeight: 600 }}>
					{title}
				</Typography>
				<Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
					{desc}
				</Typography>
			</Header>
			<StatusChip severity={severity} />
		</Root>
	);
};

export default StatusBox;

const Root = styled("div")(({ theme }) => ({
	backgroundColor: theme.palette.background.default,
	borderRadius: 6,
	padding: 14,
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	marginBottom: 10,
}));

const Header = styled("div")(() => ({}));
