import { Box, styled, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import useThemeStore from "../../stores/useThemeStore";
import { theme } from "../../styles/theme";

interface TableHelperTextProps {
	type: "percentage" | "text";
}

const ColorPercentage = () => {
	const { isDark } = useThemeStore();
	const { high, middleHigh, middle, verylow } = theme(isDark).palette.percentageRemarks;

	const percentType = [
		{ title: "100 - 75% 그린", color: high },
		{ title: "74 - 60% 옐로우", color: middleHigh },
		{ title: "59 - 50% 레드", color: middle },
		{ title: "49% 이하 블랙", color: verylow },
	];

	return (
		<ColorWrapper>
			{percentType.map((p) => (
				<ColorWrapper key={p.color}>
					<CircleIcon sx={{ color: p.color }} fontSize="small" />
					<Typography sx={{ pl: 1 }} variant="subtitle2">
						{p.title}
					</Typography>
				</ColorWrapper>
			))}
		</ColorWrapper>
	);
};

const TableHelperText = ({ type }: TableHelperTextProps) => {
	const helperType = (value: string) => {
		switch (value) {
			case "percentage": {
				return <ColorPercentage />;
			}
			default:
				return;
		}
	};

	return <HelperWrapper sx={{ mb: 1 }}>{helperType(type)}</HelperWrapper>;
};

export default TableHelperText;

const ColorWrapper = styled("div")(() => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	paddingRight: 10,
}));

const HelperWrapper = styled(Box)(({ theme }) => ({
	padding: 6,
	borderRadius: 4,
	width: "fit-content",
	border: `1px solid ${theme.palette.divider}`,
}));
