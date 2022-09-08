import {
	Paper,
	Table,
	TableHead,
	TableCell,
	TableContainer,
	TableRow,
	TableBody,
} from "@mui/material";
import { ReactNode } from "react";

interface SimpleTableProps {
	head: string[] | undefined;
	children: ReactNode;
}

/**
 * 예시 기본 테이블. API 데이터 내용이 확정되는대로 해당 테이블의 규격은 달라질 예정임.
 * @returns
 */

const SimpleTable = ({ head, children }: SimpleTableProps) => {
	return (
		<TableContainer component={Paper}>
			<Table size="small" aria-label="sample table">
				<TableHead>
					<TableRow>
						{head?.map((h) => (
							<TableCell align="center" key={h}>
								{h}
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>{children}</TableBody>
			</Table>
		</TableContainer>
	);
};

export default SimpleTable;
