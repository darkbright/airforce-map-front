import { FormGroup, FormLabel, InputAdornment, styled, Typography } from "@mui/material";
import { useState } from "react";
import ShortAlert from "../../../components/alert/ShortAlert";
import { toastShow } from "../../../components/alert/ToastMessage";
import BaseBlockTitleBox from "../../../components/box/textBox/BaseBlockTitleBox";
import BaseButton from "../../../components/button/BaseButton";
import TextInput from "../../../components/form/TextInput";
import BaseModal from "../../../components/modal/BaseModal";
import { measureRadar } from "../../../libs/d2/mapSettings/measurement/measureRadar";

interface MeasureRadarDetailModalProps {
	open: boolean;
	setOpen: (open: boolean) => void;
}

/**
 *  툴바에서 측정을 누르고, 레이더 측정을 더블 클릭 했을 때 뜨는 모달
 * @param MeasureRadarDetailModalProps MeasureRadarDetailModalProps
 * @returns {JSX.Element} modal
 */
const MeasureRadarDetailModal = ({ open, setOpen }: MeasureRadarDetailModalProps) => {
	const { startAngle, endAngle, outerRadius, interval } = window.radar;

	const [radarOptions, setRadarOptions] = useState({
		startAngle,
		endAngle,
		outerRadius,
		interval,
	});

	const handleRefinedSetting = () => {
		if (radarOptions.startAngle >= radarOptions.endAngle) {
			return toastShow({
				type: "error",
				title: "각도 입력 오류",
				message: "시작각도가 종점각도보다 크거나 같을 수 없습니다.",
			});
		}
		if (radarOptions.outerRadius < radarOptions.interval) {
			return toastShow({
				type: "error",
				title: "반경 입력 오류",
				message: "반경 내 간격은 외곽 간격보다 클 수 없습니다.",
			});
		}
		measureRadar(radarOptions);
		setOpen(false);
	};

	return (
		<BaseModal open={open} setOpen={setOpen}>
			<BaseBlockTitleBox title="레이더 측정 옵션" subtitle="레이더 측정 값을 설정합니다." />
			<ShortAlert
				severity="warning"
				title="세팅 전 주의"
				text="이미 맵에 측정이 그려진 상태에서 레이더 측정 세팅값을 바꾸면 기존 세팅이 초기화될 수도 있음"
			/>
			<FormGroup sx={{ mt: 2, mb: 3 }}>
				<FormLabel id="startAngle">시작 각도</FormLabel>
				<Typography variant="subtitle2" sx={{ opacity: 0.9 }}>
					레이더가 시작될 각도를 북쪽을 0 기준으로 작성하세요.
				</Typography>
				<div style={{ marginTop: 15 }}>
					<TextInput
						variant="outlined"
						size="small"
						value={radarOptions.startAngle}
						InputProps={{
							endAdornment: <InputAdornment position="end">도</InputAdornment>,
						}}
						onChange={(event) =>
							setRadarOptions({ ...radarOptions, startAngle: Number(event.target.value) })
						}
						type="number"
					/>
				</div>
			</FormGroup>
			<FormGroup sx={{ mt: 2, mb: 3 }}>
				<FormLabel id="startAngle">종점 각도</FormLabel>
				<Typography variant="subtitle2" sx={{ opacity: 0.9 }}>
					레이더가 끝날 각도를 시작 각도를 중심으로 시계방향으로 설정하여 입력하세요.
				</Typography>
				<div style={{ marginTop: 15 }}>
					<TextInput
						variant="outlined"
						size="small"
						value={radarOptions.endAngle}
						InputProps={{
							endAdornment: <InputAdornment position="end">도</InputAdornment>,
						}}
						onChange={(event) =>
							setRadarOptions({ ...radarOptions, endAngle: Number(event.target.value) })
						}
						type="number"
					/>
				</div>
			</FormGroup>
			<FormGroup sx={{ mt: 2, mb: 3 }}>
				<FormLabel id="startAngle">외각 반경</FormLabel>
				<Typography variant="subtitle2" sx={{ opacity: 0.9 }}>
					레이더가 포괄할 전체 범위의 반경을 미터 단위로 입력하세요.
				</Typography>
				<div style={{ marginTop: 15 }}>
					<TextInput
						variant="outlined"
						size="small"
						value={radarOptions.outerRadius}
						InputProps={{
							endAdornment: <InputAdornment position="end">m</InputAdornment>,
						}}
						onChange={(event) =>
							setRadarOptions({ ...radarOptions, outerRadius: Number(event.target.value) })
						}
						type="number"
					/>
				</div>
			</FormGroup>
			<FormGroup sx={{ mt: 2, mb: 3 }}>
				<FormLabel id="startAngle">반경 내 간격</FormLabel>
				<Typography variant="subtitle2" sx={{ opacity: 0.9 }}>
					레이더가 포괄할 전체 반경 내에서 경계가 될 내부 범위의 간격을 미터 단위로 입력하세요
				</Typography>
				<div style={{ marginTop: 15 }}>
					<TextInput
						variant="outlined"
						size="small"
						value={radarOptions.interval}
						InputProps={{
							endAdornment: <InputAdornment position="end">m</InputAdornment>,
						}}
						onChange={(event) =>
							setRadarOptions({ ...radarOptions, interval: Number(event.target.value) })
						}
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

export default MeasureRadarDetailModal;

const ButtonWrapper = styled("div")(() => ({
	display: "flex",
	justifyContent: "flex-end",
}));
