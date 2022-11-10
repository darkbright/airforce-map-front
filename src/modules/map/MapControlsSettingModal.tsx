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
import {
	isZoomControlOn,
	removeZoomInControls,
	showZoomControl,
} from "../../libs/d2/mapSettings/controls/zoom";

interface MapControlsSettingModaPropsl {
	open: boolean;
	setOpen: () => void;
}

/**
 * 지도 ToolBard의 지도설정을 클릭하면 나오는 모달
 *
 * - 마우스 움직임에 따른 좌표 표시 핸들러
 * - 줌 인아웃 표기 핸들러
 * - 스케일(축적) 표시 여부 핸들러
 * @param { MapControlsSettingModaPropsl} MapControlsSettingModaPropsl
 * @returns {JSX.Element} React Component
 */

const MapControlsSettingModal = ({ open, setOpen }: MapControlsSettingModaPropsl) => {
	// Mouse Controls - 좌측하단 마우스 커서 위치에 따른 좌표 표시 설정
	const [mouseControlChecked, setMouseControlChecked] = useState(isMouseControlOn() || true);
	const [controlEl, setControlEl] = useState({
		geo: true,
		mgrs: true,
		utm: true,
		geoRef: true,
		gars: true,
		scale: true,
	});

	const { scale, geo, mgrs, utm, geoRef, gars } = controlEl;

	// mouseControl 화면 토글
	const handleMouseControl = (event: ChangeEvent<HTMLInputElement>) => {
		setMouseControlChecked(event.target.checked);
		if (isMouseControlOn()) {
			removeMousePositionInControls();
		} else {
			showDefaultMousePosition();
		}
	};

	// state 업데이트
	const handleMouseElChange = (event: ChangeEvent<HTMLInputElement>) => {
		setControlEl({
			...controlEl,
			[event.target.name]: event.target.checked,
		});
	};

	// map.control의 기존 mouseControl을 날리고 새로운 상태로 업데이트해줌.
	const handleSetMouseEl = () => {
		removeMousePositionInControls();
		window.map.addControl(
			setMousePosition({
				showScale: scale,
				showLonLat: geo,
				showMGRS: mgrs,
				showUTM: utm,
				showGeoRef: geoRef,
				showGARS: gars,
			}),
		);
	};

	/*
     Zoom Controls - 좌측 상단 줌 버튼 관련 설정
     */
	const [showZoom, setShowZoom] = useState(isZoomControlOn() || true);

	// zoom Control 화면 토글
	const handleZoomControl = (event: ChangeEvent<HTMLInputElement>) => {
		setShowZoom(event.target.checked);
		if (isZoomControlOn()) {
			removeZoomInControls();
		} else {
			showZoomControl();
		}
	};

	/** 
	 * @deprecated
     Scale Controls - 좌측 우측 하단 중 축적 설정
     */
	// const [showScale, setShowScale] = useState(isScaleControlOn() || true);

	/**
	 * @deprecated
	 * 스케일 화면 토글(OL에서 제공되는 기본 축적을 사용할 때 씀
	 */
	// const handleScaleControl = (event: ChangeEvent<HTMLInputElement>) => {
	// 	setShowScale(event.target.checked);
	// 	if (isScaleControlOn()) {
	// 		removeScaleInControls();
	// 	} else {
	// 		showScaleControl();
	// 	}
	// };

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
					<FormGroup sx={{ display: "flex", flexDirection: "row", mb: 4 }}>
						<FormControlLabel
							control={<Checkbox checked={scale} name="scale" onChange={handleMouseElChange} />}
							label="축적"
						/>
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
						<BaseButton color="secondary" title="확인" type="button" onClick={handleSetMouseEl} />
					</FormGroup>
				</FormControl>
			)}

			<BaseBlockTitleBox
				title="화면 줌 버튼 설정"
				subtitle="화면 좌측 상단의 줌 버튼 표시 여부를 설정합니다"
			/>
			<FormGroup sx={{ mb: 4 }}>
				<FormControlLabel
					control={
						<Switch
							checked={showZoom}
							onChange={handleZoomControl}
							inputProps={{ "aria-label": "mouse-control" }}
						/>
					}
					label={showZoom ? "표시" : "숨김"}
				/>
			</FormGroup>

			{/* <BaseBlockTitleBox title="축적(스케일) 설정" subtitle="축적 표시 여부를 설정합니다" /> */}
			{/* <FormGroup sx={{ mb: 4 }}>
				<FormControlLabel
					control={<Switch checked={showScale} onChange={handleScaleControl} />}
					label={showScale ? "표시" : "숨김"}
				/>
			</FormGroup> */}
		</BaseModal>
	);
};

export default MapControlsSettingModal;
