import { styled, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { MouseEvent } from "react";
import BasicSymbolRunwayIcon from "../../../assets/icons/BasicSymbolRunwayIcon";
import CircleIcon from "../../../assets/icons/shapes/CircleIcon";
import MilSymbolIcon from "../../../assets/icons/shapes/MilSymbolIcon";
import ShortAlert from "../../../components/alert/ShortAlert";
import BaseButton from "../../../components/button/BaseButton";
import useFavoriteSymbolStore from "../../../stores/useFavoriteSymbolStore";
import { MapSymbolType } from "../../../types/army/symbolType";

const MapSymbol = () => {
	const { favSymbol, setFavSymbol } = useFavoriteSymbolStore();

	const changeFavSymbol = (event: MouseEvent<HTMLElement>, newAlignment: MapSymbolType) => {
		setFavSymbol(newAlignment);
	};

	return (
		<Root>
			<Typography variant="h6" gutterBottom>
				지도 기본 부호 세팅
			</Typography>
			<Typography variant="body2">
				지도에서 메뉴 로드 시 표시되는 기지 등 각종 부호들 중, 어떤 부호를 기본으로 띄울 것인지를
				선택할 수 있습니다.
			</Typography>
			<Typography variant="body2" sx={{ mb: 2 }}>
				기본으로 뜨는 동그라미 형태를 선호하신다면 간략부호를, 공군에서 사용하는 부호류를
				선호하신다면 기본부호를, 군대부호로 로드하시려면 군대부호를 선택해주세요.
			</Typography>
			<ShortAlert
				severity="warning"
				title="페이지 갱신 시에만 반영됨"
				text="부호를 변경한 직후에도 부호 형태는 API 요청 결과가 보존되어 기존 부호의 형태를 유지합니다. 페이지를 이동하시거나 새로고침 또는 재접속하셔야 변경된 부호가 반영됩니다."
			/>
			<ToggleButtonGroup
				sx={{
					mt: 2,
					mb: 2,
				}}
				size="small"
				exclusive
				color="primary"
				value={favSymbol}
				onChange={changeFavSymbol}
			>
				<ToggleButton value="simplified" aria-label="simple">
					<CircleIcon />
					<Typography variant="body2" sx={{ ml: 1 }}>
						간략부호
					</Typography>
				</ToggleButton>
				<ToggleButton value="basic" aria-label="pattern">
					<BasicSymbolRunwayIcon />
					<Typography variant="body2" sx={{ ml: 1 }}>
						기본부호
					</Typography>
				</ToggleButton>
				<ToggleButton value="military" aria-label="gradient">
					<MilSymbolIcon />
					<Typography variant="body2" sx={{ ml: 1 }}>
						군대부호
					</Typography>
				</ToggleButton>
			</ToggleButtonGroup>

			<div>
				<BaseButton type="submit" disabled title="업데이트" />
			</div>
		</Root>
	);
};

export default MapSymbol;

const Root = styled("div")(() => ({
	width: "80%",
}));
