import { styled, Typography } from "@mui/material";
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
		{ percent: "100 - 75%", desc: "정상", color: high },
		{ percent: "74 - 60%", desc: "경고", color: middleHigh },
		{ percent: "59 - 50%", desc: "위험", color: middle },
		{ percent: "49% 이하", desc: "낮음", color: verylow },
	];

	return (
		<Root>
			{percentType.map((p) => (
				<ColorWrapper key={p.color}>
					<CircleIcon sx={{ color: p.color }} fontSize="small" />
					<div>
						<Typography sx={{ pl: 1 }} variant="subtitle2">
							{p.percent}
						</Typography>
						<Typography sx={{ pl: 1 }} variant="subtitle2">
							{p.desc}
						</Typography>
					</div>
				</ColorWrapper>
			))}
		</Root>
	);
};

/**
 * 테이블 표시 시 범례를 표시하는 컴포넌트로, 주로 퍼센티지별 색상 및 범위를 표시함
 * @param TableHelperTextProps TableHelperTextProps
 * @returns React.Element
 */
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

const Root = styled("div")(() => ({
	display: "flex",
	justifyContent: "space-between",
}));

const ColorWrapper = styled("div")(() => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	paddingRight: 10,
}));

const HelperWrapper = styled("div")(({ theme }) => ({
	padding: 6,
	borderRadius: 4,
	border: `1px solid ${theme.palette.divider}`,
}));
