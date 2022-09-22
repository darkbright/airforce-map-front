import { styled, Typography } from "@mui/material";
import StatusChip from "../../components/chip/StatusChip";
import { SeverityType } from "../../types/army/statusType";

interface StatusBoxProps {
	title: string;
	severity: SeverityType;
	desc: string;
}

/**
 * 위젯 내에서 사용하는 현재 상태(안보지수가 어떻다, 진돗개가 어떻다 등등의 수위)를 표시해주는 div
 * 추후 사용 여부 결정
 * @param {StatusBoxProps} StatusBoxProps
 * @returns {JSX.Element} JSX Element(div)
 */

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
