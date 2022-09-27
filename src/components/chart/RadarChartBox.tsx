import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from "recharts";

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
			B: 80,
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
		<div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
			<RadarChart outerRadius={90} width={250} height={250} data={dummyData}>
				<PolarGrid />
				<PolarAngleAxis
					dataKey="subject"
					stroke="#fff"
					strokeOpacity={0.2}
					color="#fff"
					fontSize={11}
				/>
				<PolarRadiusAxis angle={30} domain={[0, 150]} />
				<Radar name="재경단" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
				<Radar name="대구" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
				<Legend />
			</RadarChart>
		</div>
	);
};

export default RadarChartBox;
