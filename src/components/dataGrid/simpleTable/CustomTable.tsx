import { Paper, Table, TableContainer } from "@mui/material";
import { ReactNode } from "react";

interface SimpleTableProps {
	children: ReactNode;
}

/**
 * Head가 복잡한 경우(중첩, 셀병합 등) 본 테이블을 사용. 직접 TableHead와 TableBody를 정의해야 함
 * @returns
 */

const CustomTable = ({ children }: SimpleTableProps) => {
	return (
		<TableContainer
			component={Paper}
			elevation={0}
			sx={{
				border: (theme) => `1px solid ${theme.palette.divider}`,
				borderBottomWidth: 0,
				background: (theme) => theme.palette.table,
				marginBottom: 2,
			}}
		>
			<Table size="small" aria-label="simple table">
				{children}
			</Table>
		</TableContainer>
	);
};

export default CustomTable;
