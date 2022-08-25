import { styled } from "@mui/material";

import { SeverityType, statusColorHandler } from "../../types/army/statusType";

interface StatusChipProps {
	severity: SeverityType;
}

/**
 * 해시태그나, 작은 텍스트 형태의 항목을 보여줄 수 있게 만든 Div Block임.
 * 여기서는 어떠한 상태, 즉 경고, 위험, 정상 등을 유저가 참고할 수 있도록 사용하도록 고안되었음
 * @param {StatusChipProps} StatusChipProps
 * @returns {JSX.Element} React Component
 */

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
