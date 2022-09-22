import {
	Box,
	LinearProgress,
	LinearProgressProps,
	SxProps,
	TableCell,
	Theme,
	Typography,
} from "@mui/material";
import { BasicSymbolColorType, milColorHandler } from "../../../utils/milColorHandler";
import CircleIcon from "@mui/icons-material/Circle";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

interface CircleCellColorDisplayProps {
	color: BasicSymbolColorType;
	onClick?: () => void;
	pointer?: boolean;
	sx?: SxProps<Theme> | undefined;
}

/**
 * 데이터 표출 표에서 숫자에 따라 퍼센티지를 색상으로 표현할 수 있게 해주는 Table Cell Component
 * @param CircleCellColorDisplayProps CircleCellColorDisplayProps
 * @returns JSX.Element(TableCell)
 */

export const SimpleTableCircleCellByColor = ({
	color,
	onClick,
	sx,
	pointer = false,
}: CircleCellColorDisplayProps) => {
	return (
		<TableCell align="center" onClick={onClick} sx={sx}>
			{color === "X" ? (
				<HorizontalRuleIcon sx={{ color: "black" }} fontSize="small" />
			) : (
				<CircleIcon
					sx={{
						color: milColorHandler(color),
						cursor: pointer ? "pointer" : "default",
						"&:hover": {
							border: pointer ? (theme) => `1px solid ${theme.palette.primary.main}` : "none",
							borderRadius: "50%",
						},
					}}
					fontSize="small"
				/>
			)}
		</TableCell>
	);
};

interface SimpleTableCellTextProps {
	text: string;
	onClick?: () => void;
	pointer?: boolean;
	sx?: SxProps<Theme> | undefined;
}

/**
 * 데이터 표출 표에서 글자를 표시해주는 Table Cell Component
 * @param SimpleTableTextProps SimpleTableTextProps
 * @returns JSX.Element(TableCell)
 */
export const SimpleTableCellText = ({
	text,
	onClick,
	pointer = false,
	sx,
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
				...sx,
			}}
			onClick={onClick}
		>
			{text}
		</TableCell>
	);
};

/**
 * Linear Progress 형태에 라벨이 더해진 것의 원형
 * @param LinearProgressProps LinearProgressProps
 * @returns JSX.Element(box)
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

interface SimpleTableCellProgressProps {
	percent: number;
	sx?: SxProps<Theme> | undefined;
}

/**
 * Simple Table의 셀 항목 중 퍼센트를 바 그래프 형태로 효시해주는 형태의 셀
 *
 * 퍼센트에 해당하는 숫자를 입력해주면 표출됨
 * @param SimpleTableCellProgressProps
 * @returns JSX.Element(TableCell)
 */

export const SimpleTableCellProgress = ({ percent, sx }: SimpleTableCellProgressProps) => {
	return (
		<TableCell component="th" scope="row" align="center" sx={sx}>
			<LinearProgressWithLabel variant="determinate" value={percent} />
		</TableCell>
	);
};

interface SimpleTableBackgroundColorCellProps {
	text: string;
	color: BasicSymbolColorType;
	onClick?: () => void;
	pointer?: boolean;
	sx?: SxProps<Theme> | undefined;
}

/**
 * 데이터 표출 표에서 글씨 표시 시 Cell의 백그라운드 색깔을 표시된 색상으로 바꿔주는 Cell 모양
 * @param SimpleTableTextProps SimpleTableTextProps
 * @returns JSX.Element(TableCell)
 */
export const SimpleTableBackgroundColorCell = ({
	text,
	onClick,
	color,
	pointer = false,
	sx,
}: SimpleTableBackgroundColorCellProps) => {
	return (
		<TableCell
			component="th"
			scope="row"
			align="center"
			sx={{
				cursor: pointer ? "pointer" : "default",
				color: "#fff",
				backgroundColor: milColorHandler(color),
				"&:hover": pointer ? { fontWeight: 600 } : "",
				...sx,
			}}
			onClick={onClick}
		>
			{text}
		</TableCell>
	);
};
