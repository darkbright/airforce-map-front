import { Box, LinearProgress, LinearProgressProps, TableCell, Typography } from "@mui/material";
import { BasicSymbolColorType, milColorHandler } from "../../../utils/milColorHandler";
import CircleIcon from "@mui/icons-material/Circle";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

interface CircleCellColorDisplayProps {
	color: BasicSymbolColorType;
	onClick?: () => void;
}

interface SimpleTableCellTextProps {
	text: string;
	onClick?: () => void;
	pointer?: boolean;
}

/**
 * 데이터 표출 표에서 숫자에 따라 퍼센티지를 색상으로 표현할 수 있게 해주는 Table Cell Component
 * @param CircleCellColorDisplayProps CircleCellColorDisplayProps
 * @returns React.Element(TableCell)
 */

export const SimpleTableCircleCellByColor = ({ color, onClick }: CircleCellColorDisplayProps) => {
	return (
		<TableCell align="center" onClick={onClick}>
			{color === "X" ? (
				<HorizontalRuleIcon sx={{ color: "black" }} fontSize="small" />
			) : (
				<CircleIcon sx={{ color: milColorHandler(color) }} fontSize="small" />
			)}
		</TableCell>
	);
};

/**
 * 데이터 표출 표에서 글자를 표시해주는 Table Cell Component
 * @param SimpleTableTextProps SimpleTableTextProps
 * @returns React.Element(TableCell)
 */
export const SimpleTableCellText = ({
	text,
	onClick,
	pointer = false,
}: SimpleTableCellTextProps) => {
	return (
		<TableCell
			component="th"
			scope="row"
			align="center"
			sx={{
				cursor: pointer ? "pointer" : "default",
				color: pointer ? (theme) => theme.palette.primary.main : "inherit",
				"&:hover": pointer ? { fontWeight: 600 } : "",
			}}
			onClick={onClick}
		>
			{text}
		</TableCell>
	);
};

/**
 * Linear Progress 형태에 라벨이 더해진 것의 원형
 * @param param0
 * @returns
 */

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
	return (
		<Box sx={{ display: "flex", alignItems: "center" }}>
			<Box sx={{ width: "100%", mr: 1 }}>
				<LinearProgress variant="determinate" {...props} />
			</Box>
			<Box sx={{ minWidth: 35 }}>
				<Typography variant="body2" color="text.secondary">{`${Math.round(
					props.value,
				)}%`}</Typography>
			</Box>
		</Box>
	);
}

/**
 * Simple Table의 셀 항목 중 퍼센트를 바 그래프 형태로 효시해주는 형태의 셀
 *
 * 퍼센트에 해당하는 숫자를 입력해주면 표출됨
 * @param param0
 * @returns
 */

export const SimpleTableCellProgress = ({ percent }: { percent: number }) => {
	return (
		<TableCell component="th" scope="row" align="center">
			<LinearProgressWithLabel variant="determinate" value={percent} />
		</TableCell>
	);
};
