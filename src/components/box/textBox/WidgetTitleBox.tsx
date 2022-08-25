import { IconButton, styled, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface WidgetTitleBoxProps {
	title: string;
	showMoreMenu?: boolean;
	handleShowMore?: () => void;
}

/**
 * 우측 위젯용 타이틀 설정 박스
 *
 * 위젯은 전체 화면에서 오른쪽에 위치한 세로 툴바(또는 탭) 내에 로드시킬 Div Block을 의미함. 주로 표 등이 많이 들어가게 됨.
 *
 * 그 Div의 제목을 표현하는 Element임.
 * 좌측에 제목 Text, 맨 오른쪽에 더 보기가 가능한 아이콘 모양이 생성됨. 더보기를 없애고 싶다면 showMoreMenu를 false로 핡 것
 * @param { WidgetTitleBoxProps}  WidgetTitleBoxProps
 * @returns {JSX.Element} React Component
 */

const WidgetTitleBox = ({ title, showMoreMenu = true, handleShowMore }: WidgetTitleBoxProps) => {
	return (
		<Root>
			<Typography variant="h6" color="InactiveCaptionText">
				{title}
			</Typography>
			{showMoreMenu && (
				<IconButton aria-label="showMore" onClick={handleShowMore}>
					<MoreVertIcon color="action" />
				</IconButton>
			)}
		</Root>
	);
};

export default WidgetTitleBox;

const Root = styled("div")(() => ({
	padding: 10,
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
}));
