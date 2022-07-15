import { styled, Typography } from "@mui/material";

interface MapTypeCardProps {
	title: string;
	subtitle: string;
	imgSrc: string;
	onSelect: () => void;
}

const MapTypeCard = ({ title, subtitle, imgSrc, onSelect }: MapTypeCardProps) => {
	return (
		<Root onClick={onSelect}>
			<ThumbnailWrapper>
				<Thumbnail src={imgSrc} />
			</ThumbnailWrapper>
			<Body>
				<Typography gutterBottom variant="body1" sx={{ fontWeight: 600 }}>
					{title}
				</Typography>
				<Typography variant="subtitle2">{subtitle}</Typography>
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
