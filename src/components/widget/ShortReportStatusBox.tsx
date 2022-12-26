import { LinearProgress, styled, Typography } from "@mui/material";
import useThemeStore from "../../stores/useThemeStore";
import { theme } from "../../styles/theme";
import CircleIcon from "@mui/icons-material/Circle";

interface ShortReportStatusBoxProps {
	isBgDefault?: boolean;
	title: string;
	color: string;
	subtitle: string;
	mainNumber: number;
	suffix: string;
	percent: number;
}

/**
 * 메인화면에 띄울 위젯으로 각종 지표에 대한 정보를 요약해서 보여줌
 * @param ShortReportStatusBoxProps ShortReportStatusBoxProps
 * @returns {JSX.Element} div
 */
const ShortReportStatusBox = ({
	isBgDefault,
	title,
	color,
	subtitle,
	mainNumber,
	suffix,
	percent,
}: ShortReportStatusBoxProps) => {
	const { isDark } = useThemeStore();

	return (
		<Root
			style={{
				background: isBgDefault
					? theme(isDark).palette.background.default
					: theme(isDark).palette.background.paper,
			}}
		>
			<HeaderWrapper>
				<Typography variant="h6">{title}</Typography>
				<CircleIcon sx={{ color }} />
			</HeaderWrapper>

			<MainWrapper>
				<Typography variant="body1" gutterBottom sx={{ opacity: 0.8 }}>
					{subtitle}
				</Typography>
				<Typography variant="h4">
					{mainNumber}
					<Typography variant="subtitle2" component="span" sx={{ ml: 1 }}>
						{suffix}
					</Typography>
				</Typography>
				<LinearProgress sx={{ mt: 2 }} variant="determinate" value={percent} />
			</MainWrapper>
		</Root>
	);
};

export default ShortReportStatusBox;

const Root = styled("div")(() => ({
	padding: "6%",
	borderRadius: 4,
}));

const HeaderWrapper = styled("div")(() => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
}));

const MainWrapper = styled("div")(() => ({
	paddingTop: "6%",
}));
