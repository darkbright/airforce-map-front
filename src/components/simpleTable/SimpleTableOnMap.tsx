import {
	Paper,
	Table,
	TableHead,
	TableCell,
	TableContainer,
	TableRow,
	TableBody,
} from "@mui/material";
import { dummyArmyStatus } from "../../data/constants/dummyData";
import CircleIcon from "@mui/icons-material/Circle";
import useThemeStore from "../../stores/useThemeStore";
import { theme } from "../../styles/theme";

const dummyDataHead = ["구분", "현재", "현재원", "충원율", "상태"];

const SimpleTableOnMap = () => {
	const { isDark } = useThemeStore();
	const { high, middleHigh, middle, verylow } = theme(isDark).palette.percentageRemarks;

	const dummyData = dummyArmyStatus.map((army) => {
		const rate = Math.round((army.plan / army.current) * 100);
		const color = () => {
			switch (true) {
				case rate >= 90: {
					return high;
				}
				case rate >= 75 && rate < 90: {
					return middleHigh;
				}
				case rate >= 50 && rate < 74: {
					return middle;
				}
				case rate < 50: {
					return verylow;
				}
			}
		};

		return {
			type: army.type,
			current: army.current,
			plan: army.plan,
			rate,
			status: color,
		};
	});

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
						<TableRow key={row.type} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
							<TableCell component="th" scope="row">
								{row.type}
							</TableCell>
							<TableCell align="center">{row.current}</TableCell>
							<TableCell align="center">{row.plan}</TableCell>
							<TableCell align="center">{row.rate}%</TableCell>
							<TableCell align="center">
								<CircleIcon fontSize="small" sx={{ color: row.status }} />
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default SimpleTableOnMap;
