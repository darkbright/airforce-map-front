import { styled } from "@mui/material";
import { yellow } from "@mui/material/colors";
import { Area, AreaChart, Legend, XAxis, YAxis } from "recharts";
import useThemeStore from "../../stores/useThemeStore";
import { theme } from "../../styles/theme";

const data = [
	{
		month: "2022.06",
		애기: 4000,
		장병: 2400,
		간부: 2400,
	},
	{
		month: "2022.07",
		애기: 3000,
		장병: 1398,
		간부: 2210,
	},
	{
		month: "2022.08",
		애기: 2000,
		장병: 9800,
		간부: 2290,
	},
	{
		month: "2022.09",
		애기: 2780,
		장병: 3908,
		간부: 2000,
	},
	{
		month: "2022.10",
		애기: 1890,
		장병: 4800,
		간부: 2181,
	},
	{
		month: "2022.11",
		애기: 2390,
		장병: 3800,
		간부: 2500,
	},
	{
		month: "2022.12",
		애기: 3490,
		장병: 4300,
		간부: 2100,
	},
];

const SamplePercentAreaChartBox = () => {
	const { isDark } = useThemeStore();
	const { palette } = theme(isDark);

	const toPercent = (decimal: number) => `${(decimal / 100).toFixed(0)}%`;

	return (
		<Root>
			<AreaChart
				width={500}
				height={250}
				data={data}
				stackOffset="expand"
				margin={{
					top: 8,
					right: 30,
					left: 20,
					bottom: 0,
				}}
			>
				<XAxis dataKey="month" />
				<YAxis tickFormatter={toPercent} />
				<Area
					type="monotone"
					dataKey="애기"
					stroke={palette.primary.dark}
					fill={palette.primary.main}
				/>
				<Area
					type="monotone"
					dataKey="장병"
					stroke={palette.secondary.dark}
					fill={palette.secondary.main}
				/>
				<Area type="monotone" dataKey="간부" stroke={yellow[600]} fill={yellow[500]} />
				<Legend />
			</AreaChart>
		</Root>
	);
};

export default SamplePercentAreaChartBox;

const Root = styled("div")(({ theme }) => ({
	background: theme.palette.background.paper,
	marginTop: "3%",
	padding: "2.5%",
	borderRadius: 6,
	textAlign: "center",
}));
