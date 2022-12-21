import { FormGroup, FormLabel, InputAdornment, styled, Typography } from "@mui/material";
import { useState } from "react";
import ShortAlert from "../../../components/alert/ShortAlert";
import { toastShow } from "../../../components/alert/ToastMessage";
import BaseBlockTitleBox from "../../../components/box/textBox/BaseBlockTitleBox";
import BaseButton from "../../../components/button/BaseButton";
import TextInput from "../../../components/form/TextInput";
import BaseModal from "../../../components/modal/BaseModal";
import { measureRadius } from "../../../libs/d2/mapSettings/measurement/measureRadius";

interface MeasureRadiusDetailModalProps {
	open: boolean;
	setOpen: (open: boolean) => void;
}

/**
 * 툴바에서 측정을 누르고, 동심원 측정을 더블 클릭 했을 때 뜨는 모달
 * @param  MeasureRadiusDetailModalProps MeasureRadiusDetailModalProps
 * @returns {JSX.Element} modal
 */
const MeasureRadiusDetailModal = ({ open, setOpen }: MeasureRadiusDetailModalProps) => {
	console.log(window.radiusCircle);
	const [endRadius, setEndRadius] = useState(window.radiusCircle.endRadius);
	const [interval, setInterval] = useState(window.radiusCircle.interval);

	const handleRefinedSetting = () => {
		if (interval > endRadius) {
			return toastShow({
				type: "error",
				title: "잘못된 입력값",
				message: "동심원의 전체 크기보다 간격이 클 수는 없습니다.",
			});
		}
		measureRadius({
			endRadius,
			interval,
		});
		window.eventManager.setMapMode("terrainAnalysis");
		console.log(window.radiusCircle);
		setOpen(false);
	};

	return (
		<BaseModal open={open} setOpen={setOpen}>
			<BaseBlockTitleBox title="동심원 측정 옵션" subtitle="동심원 측정 값을 설정합니다." />
			<ShortAlert
				severity="warning"
				title="세팅 전 주의"
				text="이미 맵에 측정이 그려진 상태에서 동심원 측정 세팅값을 바꾸면 기존 세팅이 초기화될 수도 있음"
			/>
			<FormGroup sx={{ mt: 2, mb: 3 }}>
				<FormLabel id="end-radius">동심원 최대 범위</FormLabel>
				<Typography variant="subtitle2" sx={{ opacity: 0.9 }}>
					표시할 동심원의 최대 반경을 미터 단위로 입력하세요
				</Typography>
				<div style={{ marginTop: 15 }}>
					<TextInput
						variant="outlined"
						size="small"
						value={endRadius}
						InputProps={{
							endAdornment: <InputAdornment position="end">m</InputAdornment>,
						}}
						onChange={(event) => setEndRadius(Number(event.target.value))}
						type="number"
					/>
				</div>
			</FormGroup>
			<FormGroup sx={{ mt: 2, mb: 3 }}>
				<FormLabel id="end-radius">간격</FormLabel>
				<Typography variant="subtitle2" sx={{ opacity: 0.9 }}>
					표시할 동심원의 내부 원 간 거리(간격)을 m 단위로 설정해주세요
				</Typography>
				<div style={{ marginTop: 15 }}>
					<TextInput
						variant="outlined"
						size="small"
						value={interval}
						InputProps={{
							endAdornment: <InputAdornment position="end">m</InputAdornment>,
						}}
						onChange={(event) => setInterval(Number(event.target.value))}
						type="number"
					/>
				</div>
			</FormGroup>
			<ButtonWrapper>
				<BaseButton type="submit" onClick={handleRefinedSetting} title="반영하여 측정" />
			</ButtonWrapper>
		</BaseModal>
	);
};

export default MeasureRadiusDetailModal;

const ButtonWrapper = styled("div")(() => ({
	display: "flex",
	justifyContent: "flex-end",
}));
