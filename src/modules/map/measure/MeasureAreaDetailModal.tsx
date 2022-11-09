import BaseModal from "../../../components/modal/BaseModal";
import BaseBlockTitleBox from "../../../components/box/textBox/BaseBlockTitleBox";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, styled } from "@mui/material";
import { useState } from "react";
import ShortAlert from "../../../components/alert/ShortAlert";
import BaseButton from "../../../components/button/BaseButton";
import { AreaUnit } from "../../../types/d2/Area";
import { measureExtent } from "../../../libs/d2/mapSettings/measurement/measureExtent";

interface MeasureDistanceDetailModalProps {
	open: boolean;
	setOpen: (open: boolean) => void;
}
/**
 * 툴바에서 측정을 누르고, 면적 측정을 더블 클릭 했을 때 뜨는 모달
 * @param MeasureDistanceDetailModalProps MeasureDistanceDetailModalProps
 * @returns {JSX.Element} modal
 */
const MeasureAreaDetailModal = ({ open, setOpen }: MeasureDistanceDetailModalProps) => {
	const [unit, setUnit] = useState<AreaUnit>(window.area.getUnit());

	const handleRefinedSetting = () => {
		measureExtent({
			unit,
		});
		setOpen(false);
	};

	return (
		<>
			<BaseModal open={open} setOpen={setOpen}>
				<BaseBlockTitleBox
					title="거리 측정 옵셥"
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
						onChange={(event) => setUnit(event.target.value as AreaUnit)}
					>
						<FormControlLabel value="meter" control={<Radio />} label="미터(m)" />
						<FormControlLabel value="mile" control={<Radio />} label="마일(mi)" />
						{/* 이 부분은 현재 옵션에 없는데 원래 지도엔 해리가 디폴트라서 d2에 해달라고 요청해야됨 */}
						{/* <FormControlLabel value="nauticalmile" control={<Radio />} label="해리(nm)" /> */}
					</RadioGroup>
				</FormControl>
				<ButtonWrapper>
					<BaseButton type="submit" onClick={handleRefinedSetting} title="반영하여 측정" />
				</ButtonWrapper>
			</BaseModal>
		</>
	);
};

export default MeasureAreaDetailModal;

const ButtonWrapper = styled("div")(() => ({
	display: "flex",
	justifyContent: "flex-end",
}));
