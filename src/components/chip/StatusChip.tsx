import { styled } from "@mui/material";

import { SeverityType, statusColorHandler } from "../../types/army/statusType";

interface StatusChipProps {
	severity: SeverityType;
}

const StatusChip = ({ severity }: StatusChipProps) => {
	return (
		<Root
			sx={{
				backgroundColor: statusColorHandler(severity)?.bgColor,
				color: statusColorHandler(severity)?.color,
			}}
		>
			{statusColorHandler(severity)?.title}
		</Root>
	);
};

export default StatusChip;

const Root = styled("div")(() => ({
	borderRadius: 4,
	fontWeight: 600,
	padding: 5,
	width: "fit-content",
}));
