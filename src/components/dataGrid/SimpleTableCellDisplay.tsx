import { TableCell } from "@mui/material";
import { BasicSymbolColorType, milColorHandler } from "../../utils/milColorHandler";
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
			sx={{ cursor: pointer ? "pointer" : "default" }}
			onClick={onClick}
		>
			{text}
		</TableCell>
	);
};
