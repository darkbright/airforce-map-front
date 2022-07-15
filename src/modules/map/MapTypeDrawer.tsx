import { Box, Checkbox, Drawer, FormControlLabel, FormGroup } from "@mui/material";
import { useState } from "react";
import BaseBlockTitleBox from "../../components/box/textBox/BaseBlockTitleBox";
import BaseButton from "../../components/button/BaseButton";
import SelectMapTypeModal from "./SelectMapTypeModal";

interface MapTypeDrawer {
	open: boolean;
	setOpen: (set: boolean) => void;
}

const MapTypeDrawer = ({ open, setOpen }: MapTypeDrawer) => {
	const [openSelectMap, setOpenSelectMap] = useState(false);

	return (
		<>
			<Drawer sx={{ opacity: 0.98 }} anchor="right" open={open} onClose={() => setOpen(false)}>
				<Box sx={{ width: 280, padding: "20% 10%" }} role="combobox">
					<BaseBlockTitleBox
						title="지도 레이어 설정"
						subtitle="표시할 지도를 선택하고 배치해주세요"
					/>
					<div style={{ textAlign: "right" }}>
						<BaseButton title="지도 추가" type="button" onClick={() => setOpenSelectMap(true)} />
					</div>
					<FormGroup sx={{ padding: "20px 0px" }}>
						<FormControlLabel control={<Checkbox defaultChecked />} label="COP 배경지도" />
						<FormControlLabel control={<Checkbox checked={false} />} label="세계지도" />
						<FormControlLabel control={<Checkbox checked={false} />} label="세계경계" />
						<FormControlLabel control={<Checkbox checked={false} />} label="위성영상" />
					</FormGroup>
				</Box>
			</Drawer>
			<SelectMapTypeModal open={openSelectMap} setOpen={() => setOpenSelectMap(false)} />
		</>
	);
};

export default MapTypeDrawer;
