import {
	Box,
	Checkbox,
	Divider,
	Drawer,
	FormControlLabel,
	FormGroup,
	Typography,
} from "@mui/material";
import { Fragment } from "react";

interface MapTypeDrawer {
	open: boolean;
	setOpen: (set: boolean) => void;
}

const MapTypeDrawer = ({ open, setOpen }: MapTypeDrawer) => {
	return (
		<Fragment>
			<Drawer sx={{ opacity: 0.95 }} anchor="right" open={open} onClose={() => setOpen(false)}>
				<Box sx={{ width: 280, padding: "20% 10%" }} role="combobox">
					<Typography variant="h5">지도 종류 선택</Typography>
					<Typography variant="subtitle2" gutterBottom>
						선택한 지도가 가장 위로 올라감?
					</Typography>
					<Divider />
					<FormGroup sx={{ padding: "20px 0px" }}>
						<FormControlLabel control={<Checkbox defaultChecked />} label="COP 배경지도" />
						<FormControlLabel control={<Checkbox checked={false} />} label="세계지도" />
						<FormControlLabel control={<Checkbox checked={false} />} label="세계경계" />
						<FormControlLabel control={<Checkbox checked={false} />} label="위성영상" />
					</FormGroup>
				</Box>
			</Drawer>
		</Fragment>
	);
};

export default MapTypeDrawer;
