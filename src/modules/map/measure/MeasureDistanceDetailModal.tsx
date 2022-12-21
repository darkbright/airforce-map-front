import BaseModal from "../../../components/modal/BaseModal";
import BaseBlockTitleBox from "../../../components/box/textBox/BaseBlockTitleBox";
import {
	FormControl,
	FormControlLabel,
	FormGroup,
	FormLabel,
	InputAdornment,
	Radio,
	RadioGroup,
	styled,
	Switch,
	Typography,
} from "@mui/material";
import { useState } from "react";
import { DistanceUnit } from "../../../types/d2/distance";
import ShortAlert from "../../../components/alert/ShortAlert";
import TextInput from "../../../components/form/TextInput";
import BaseButton from "../../../components/button/BaseButton";
import { measureDistance } from "../../../libs/d2/mapSettings/measurement/measureDistance";

interface MeasureDistanceDetailModalProps {
	open: boolean;
	setOpen: (open: boolean) => void;
}

/**
 * 툴바에서 측정을 누르고, 거리 측정을 더블 클릭 했을 때 뜨는 모달
 * @param  MeasureDistanceDetailModalProps MeasureDistanceDetailModalProps
 * @returns {JSX.Element} modal
 */
const MeasureDistanceDetailModal = ({ open, setOpen }: MeasureDistanceDetailModalProps) => {
	const [unit, setUnit] = useState<DistanceUnit>(window.distance.getUnit());
	const [showBearing, setShowBearing] = useState(window.distance.getBearing());
	const [speed, setSpeed] = useState(window.distance.getSpeed());

	const handleRefinedSetting = () => {
		measureDistance({
			unit,
			speed,
			bearing: showBearing,
		});
		setOpen(false);
	};

	return (
		<>
			<BaseModal open={open} setOpen={setOpen}>
				<BaseBlockTitleBox
					title="거리 측정 옵션"
					subtitle="거리 측정에 표시할 내용들을 설정합니다."
				/>
				<ShortAlert
					severity="warning"
					title="세팅 전 주의"
					text="이미 맵에 측정이 그려진 상태에서 거리 측정 세팅값을 바꾸면 기존 세팅이 초기화될 수도 있음"
				/>
				<FormControl sx={{ mt: 2, mb: 3 }}>
					<FormLabel id="unit-type">단위</FormLabel>
					<RadioGroup
						row
						aria-labelledby="unit-type-radio"
						name="unit-type-radio"
						value={unit}
						onChange={(event) => setUnit(event.target.value as DistanceUnit)}
					>
						<FormControlLabel value="meter" control={<Radio />} label="미터(m)" />
						<FormControlLabel value="mile" control={<Radio />} label="마일(mi)" />
						<FormControlLabel value="nauticalmile" control={<Radio />} label="해리(nm)" />
					</RadioGroup>
				</FormControl>
				<FormGroup sx={{ mb: 3 }}>
					<FormLabel id="show-bearing">방위각 표시 여부</FormLabel>
					<FormControlLabel
						control={
							<Switch
								checked={showBearing}
								onChange={() => setShowBearing(!showBearing)}
								inputProps={{ "aria-label": "show-bearing" }}
							/>
						}
						label={showBearing ? "표시" : "숨김"}
					/>
				</FormGroup>
				<FormGroup sx={{ mb: 3 }}>
					<FormLabel id="speed">속도</FormLabel>
					<Typography variant="subtitle2" sx={{ opacity: 0.9 }}>
						구간별 속도(km/h)를 입력하면 소요시간이 출력됨. 0으로 입력하면 결과를 표시하지 않음.
					</Typography>
					<div style={{ width: "30%", marginTop: 15 }}>
						<TextInput
							variant="outlined"
							size="small"
							value={speed}
							InputProps={{
								endAdornment: <InputAdornment position="end">km/h</InputAdornment>,
							}}
							onChange={(event) => setSpeed(Number(event.target.value))}
							type="number"
						/>
					</div>
				</FormGroup>

				<ButtonWrapper>
					<BaseButton type="submit" onClick={handleRefinedSetting} title="반영하여 측정" />
				</ButtonWrapper>
			</BaseModal>
		</>
	);
};

export default MeasureDistanceDetailModal;

const ButtonWrapper = styled("div")(() => ({
	display: "flex",
	justifyContent: "flex-end",
}));
