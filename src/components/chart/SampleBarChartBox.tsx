import { styled } from "@mui/material";
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";
import useThemeStore from "../../stores/useThemeStore";
import { theme } from "../../styles/theme";

const data = [
	{
		name: "1비",
		전투기: 10,
		파일럿: 40,
	},
	{
		name: "2비",
		전투기: 30,
		파일럿: 36,
	},
	{
		name: "3비",
		전투기: 20,
		파일럿: 19,
	},
	{
		name: "4비",
		전투기: 6,
		파일럿: 20,
	},
	{
		name: "5비",
		전투기: 80,
		파일럿: 59,
	},
	{
		name: "6비",
		전투기: 6,
		파일럿: 8,
	},
	{
		name: "7비",
		전투기: 10,
		파일럿: 40,
	},
	{
		name: "8비",
		전투기: 17,
		파일럿: 3,
	},
	{
		name: "9비",
		전투기: 45,
		파일럿: 20,
	},
	{
		name: "10비",
		전투기: 12,
		파일럿: 42,
	},
	{
		name: "11비",
		전투기: 30,
		파일럿: 45,
	},
	{
		name: "12비",
		전투기: 20,
		파일럿: 22,
	},
	{
		name: "13비",
		전투기: 22,
		파일럿: 33,
	},
	{
		name: "14비",
		전투기: 13,
		파일럿: 14,
	},
	{
		name: "15비",
		전투기: 1,
		파일럿: 3,
	},
];

const SampleBarChartBox = () => {
	const { isDark } = useThemeStore();

	return (
		<Root>
			<BarChart
				width={1040}
				height={280}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
				data={data}
			>
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey="전투기" fill={theme(isDark).palette.primary.main} />
				<Bar dataKey="파일럿" fill={theme(isDark).palette.secondary.main} />
			</BarChart>
		</Root>
	);
};

export default SampleBarChartBox;

const Root = styled("div")(({ theme }) => ({
	background: theme.palette.background.paper,
	marginTop: "2%",
	padding: "2%",
	borderRadius: 6,
	textAlign: "center",
}));
