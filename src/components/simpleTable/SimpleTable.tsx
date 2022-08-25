import {
	Paper,
	Table,
	TableHead,
	TableCell,
	TableContainer,
	TableRow,
	TableBody,
} from "@mui/material";

const dummyDataHead = ["종목", "현재가", "변동%", "볼륨"];

const dummyData = [
	{
		name: "0043212",
		currPrice: 55330,
		changeRate: "21.23%",
		volume: 19222,
	},
	{
		name: "0034232",
		currPrice: 234,
		changeRate: "23.3%",
		volume: 32432,
	},
	{
		name: "0022233",
		currPrice: 34224,
		changeRate: "80.8%",
		volume: 123,
	},
	{
		name: "0234232",
		currPrice: 2232,
		changeRate: "-10.22%",
		volume: 123,
	},
];

/**
 * 예시 기본 테이블. API 데이터 내용이 확정되는대로 해당 테이블의 규격은 달라질 예정임.
 * @returns
 */

const SimpleTable = () => {
	return (
		<TableContainer component={Paper}>
			<Table size="small" aria-label="sample table">
				<TableHead>
					<TableRow>
						{dummyDataHead.map((h) => (
							<TableCell key={h}>{h}</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{dummyData.map((row) => (
						<TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
							<TableCell component="th" scope="row">
								{row.name}
							</TableCell>
							<TableCell align="right">{row.currPrice}</TableCell>
							<TableCell align="right">{row.changeRate}</TableCell>
							<TableCell align="right">{row.volume}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default SimpleTable;
