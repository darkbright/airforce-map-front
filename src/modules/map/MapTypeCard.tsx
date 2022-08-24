import { Chip, styled, Typography } from "@mui/material";
import useThemeStore from "../../stores/useThemeStore";
import { theme } from "../../styles/theme";

interface MapTypeCardProps {
	title: string;
	category: string;
	imgSrc: string;
	onSelect: () => void;
}

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
						color: isDark === "light" ? "white" : "black",
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
