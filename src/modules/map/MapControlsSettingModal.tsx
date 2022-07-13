import { Checkbox, FormControl, FormControlLabel, FormGroup, Switch } from "@mui/material";
import { ChangeEvent, useState } from "react";
import BaseBlockTitleBox from "../../components/box/textBox/BaseBlockTitleBox";
import BaseButton from "../../components/button/BaseButton";
import BaseModal from "../../components/modal/BaseModal";
import {
	isMouseControlOn,
	removeMousePositionInControls,
	setMousePosition,
	showDefaultMousePosition,
} from "../../libs/d2/mapSettings/controls/mousePosition";

interface MapControlsSettingModal {
	open: boolean;
	setOpen: () => void;
}

const MapControlsSettingModal = ({ open, setOpen }: MapControlsSettingModal) => {
	const [mouseControlChecked, setMouseControlChecked] = useState(isMouseControlOn() || true);
	const [controlEl, setControlEl] = useState({
		geo: true,
		mgrs: true,
		utm: true,
		geoRef: true,
		gars: true,
	});

	const { geo, mgrs, utm, geoRef, gars } = controlEl;

	const handleMouseControl = (event: ChangeEvent<HTMLInputElement>) => {
		setMouseControlChecked(event.target.checked);
		if (isMouseControlOn()) {
			removeMousePositionInControls();
		} else {
			showDefaultMousePosition();
		}
	};

	const handleMouseElChange = (event: ChangeEvent<HTMLInputElement>) => {
		setControlEl({
			...controlEl,
			[event.target.name]: event.target.checked,
		});
	};

	const handleSetMouseEl = () => {
		removeMousePositionInControls();
		window.map.addControl(
			setMousePosition({
				showLonLat: geo,
				showMGRS: mgrs,
				showUTM: utm,
				showGeoRef: geoRef,
				showGARS: gars,
			}),
		);
	};

	return (
		<BaseModal open={open} setOpen={setOpen}>
			<BaseBlockTitleBox
				title="마우스 좌표 설정"
				subtitle="지도 좌측 하단의 마우스 좌표를 설정합니다"
			/>
			<FormGroup>
				<FormControlLabel
					control={
						<Switch
							checked={mouseControlChecked}
							onChange={handleMouseControl}
							inputProps={{ "aria-label": "mouse-control" }}
						/>
					}
					label={mouseControlChecked ? "표시" : "숨김"}
				/>
			</FormGroup>
			{mouseControlChecked && (
				<FormControl>
					<FormGroup sx={{ display: "flex", flexDirection: "row" }}>
						<FormControlLabel
							control={<Checkbox checked={geo} name="geo" onChange={handleMouseElChange} />}
							label="위경도 좌표(GEO)"
						/>
						<FormControlLabel
							control={<Checkbox checked={mgrs} name="mgrs" onChange={handleMouseElChange} />}
							label="MGRS"
						/>
						<FormControlLabel
							control={<Checkbox checked={utm} name="utm" onChange={handleMouseElChange} />}
							label="UTM"
						/>
						<FormControlLabel
							control={<Checkbox checked={geoRef} name="geoRef" onChange={handleMouseElChange} />}
							label="GeoRef"
						/>
						<FormControlLabel
							control={<Checkbox checked={gars} name="gars" onChange={handleMouseElChange} />}
							label="GARS"
						/>
						<BaseButton title="확인" type="button" onClick={handleSetMouseEl} />
					</FormGroup>
				</FormControl>
			)}
		</BaseModal>
	);
};

export default MapControlsSettingModal;
