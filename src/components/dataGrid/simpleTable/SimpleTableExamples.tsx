import { TableRow } from "@mui/material";
import SimpleTable from "./SimpleTable";
import { SimpleTableCellProgress, SimpleTableCellText } from "./SimpleTableCellDisplay";

/**
 * 테이블 형태 중, 프로그레스 바를 통해 퍼센트를 그래피컬하게 표현해주는 예시 테이블임.
 * 해당 테이블을 보고 실제 표를 구현하면 됨
 * @returns
 */

export const ProgressTable = () => {
	const data = [
		{
			name: "시설자재",
			percent: 100,
		},
		{
			name: "복구장비",
			percent: 91,
		},
		{
			name: "시설병력",
			percent: 0,
		},
	];

	return (
		<SimpleTable head={["항목", "현황"]}>
			{data.map((d) => (
				<TableRow key={d.name}>
					<SimpleTableCellText text={d.name} />
					<SimpleTableCellProgress percent={d.percent} />
				</TableRow>
			))}
		</SimpleTable>
	);
};
