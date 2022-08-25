import {
	PolarAngleAxis,
	PolarGrid,
	PolarRadiusAxis,
	RadarChart,
	ResponsiveContainer,
} from "recharts";

/**
 * n각의 방사형 차트.
 *
 * 예비용으로 준비한 통계 관련 그래프 관련 Component
 * @returns {JSX.Element} React Component
 */

const RadarChartBox = () => {
	const dummyData = [
		{
			subject: "환경",
			A: 120,
			B: 110,
			fullMark: 150,
		},
		{
			subject: "보안",
			A: 98,
			B: 130,
			fullMark: 150,
		},
		{
			subject: "활동성",
			A: 86,
			B: 130,
			fullMark: 150,
		},
		{
			subject: "정보",
			A: 99,
			B: 100,
			fullMark: 150,
		},
		{
			subject: "날씨",
			A: 85,
			B: 90,
			fullMark: 150,
		},
		{
			subject: "우주",
			A: 65,
			B: 85,
			fullMark: 150,
		},
	];

	return (
		<ResponsiveContainer width="100%" height="100%">
			<RadarChart cx="50%" cy="50%" outerRadius={150} width={250} height={250} data={dummyData}>
				<PolarGrid />
				<PolarAngleAxis dataKey="subject" />
				<PolarRadiusAxis />
			</RadarChart>
		</ResponsiveContainer>
	);
};

export default RadarChartBox;
