import { Chip, styled, Typography } from "@mui/material";
import useThemeStore from "../../stores/useThemeStore";
import { theme } from "../../styles/theme";

interface MapTypeCardProps {
	title: string;
	category: string;
	imgSrc: string;
	onSelect: () => void;
}

/**
 * 지도 Toolbar에서 배경지도를 선택했을 때 우측에 뜨는 Drawer 내 우측 상단에 위치한 "지도 추가" 버튼을 누르면 나오는 SelectMapTypeModal의 개별 지도를 표시해쥬는 Div
 *
 * 개별 지도의 이미지와 이름, 타입 등을 data/constants/mapLayerList 에서 불러와 Looping되는 구조임
 *
 * @param {MapTypeCardProps}  MapTypeCardProps
 * @returns {JSX.Element} React Component(div)
 */
const MapTypeCard = ({ title, category, imgSrc, onSelect }: MapTypeCardProps) => {
	const { isDark } = useThemeStore();
	const { navy, land, airforce } = theme(isDark).palette.armyColor;

	const selectBgColor = (type: string) => {
		switch (type) {
			case "공도":
				return airforce;
			case "해도":
				return navy;
			case "육도":
				return land;
			case "세계지도":
				return "black";
		}
	};

	return (
		<Root onClick={onSelect}>
			<ThumbnailWrapper>
				<Thumbnail src={imgSrc} />
			</ThumbnailWrapper>
			<Body>
				<Typography gutterBottom variant="body1" sx={{ fontWeight: 600 }}>
					{title}
				</Typography>
				<Chip
					label={category}
					size="small"
					sx={{
						backgroundColor: selectBgColor(category),
						height: 18,
						mt: 1,
						padding: "0px 2px",
						color: "#fff",
					}}
				/>
			</Body>
		</Root>
	);
};

export default MapTypeCard;

const Root = styled("div")(() => ({
	cursor: "pointer",
	marginBottom: 20,
}));

const ThumbnailWrapper = styled("div")(() => ({
	overflow: "hidden",
}));

const Thumbnail = styled("img")(() => ({
	width: 160,
	height: 80,
	objectFit: "cover",
	borderTopLeftRadius: 6,
	borderTopRightRadius: 6,

	transition: "0.5s all ease-in-out",
	"&:hover": {
		transform: "scale(1.3)",
	},
}));

const Body = styled("div")(({ theme }) => ({
	width: 160,
	backgroundColor: theme.palette.background.default,
	padding: 10,
	borderBottomLeftRadius: 6,
	borderBottomRightRadius: 6,
}));
