import { Grid } from "@mui/material";
import useFullScreenStore from "../stores/useFullScreenStore";
import StatusBox from "../modules/widget/StatusBox";
import ShortReportStatusBox from "../components/widget/ShortReportStatusBox";
import TodayBox from "../components/widget/TodayBox";
import SampleBarChartBox from "../components/chart/SampleBarChartBox";
import WeatherBox from "../components/widget/WeatherBox";
import SamplePercentAreaChartBox from "../components/chart/SamplePercentAreaChartBox";
import DataTab from "../components/widget/DataTab";

/**
 * 메인 페이지 (프로토타입 샘플)
 * @returns JSX.Element(Page)
 */
const Main = () => {
	const { isFullScreenOpen } = useFullScreenStore();

	const { innerWidth } = window;

	return (
		<div
			style={{
				padding: isFullScreenOpen === "f" ? "4% 3%" : "2% 3%",
				position: "absolute",
				top: isFullScreenOpen === "f" ? "0.8em" : "8.3em",
				left: isFullScreenOpen === "f" ? "0.8em" : "16em",
				width: isFullScreenOpen === "f" ? innerWidth : innerWidth - 200,
			}}
		>
			<Grid container spacing={2}>
				<Grid item xs={10}>
					<Grid container spacing={2}>
						<Grid item xs={3}>
							<ShortReportStatusBox
								title="인사"
								color="yellow"
								subtitle="어제 부상자 수"
								mainNumber={30}
								suffix="명"
								percent={20}
							/>
						</Grid>
						<Grid item xs={3}>
							<ShortReportStatusBox
								title="시설"
								color="green"
								subtitle="활주로 운용률"
								mainNumber={90}
								suffix="%"
								percent={90}
							/>
						</Grid>
						<Grid item xs={3}>
							<ShortReportStatusBox
								title="시설"
								color="orange"
								subtitle="전투기 운용율"
								mainNumber={40}
								suffix="%"
								percent={40}
							/>
						</Grid>
						<Grid item xs={3}>
							<ShortReportStatusBox
								title="코로나"
								color="green"
								subtitle="신규 확진자"
								mainNumber={20}
								suffix="명"
								percent={10}
							/>
						</Grid>
					</Grid>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<SampleBarChartBox />
						</Grid>
					</Grid>
					<Grid container spacing={2}>
						<Grid item xs={6}>
							<SamplePercentAreaChartBox />
						</Grid>
						<Grid item xs={6}>
							<DataTab />
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={2}>
					<TodayBox />
					<StatusBox severity="danger" title="진돗개" desc="왕왕 50%" />
					<StatusBox severity="normal" title="공역" desc="crystal clear" />
					<StatusBox severity="warn" title="서버" desc="35% Operation Rate " />
					<WeatherBox />
				</Grid>
			</Grid>
		</div>
	);
};

export default Main;
