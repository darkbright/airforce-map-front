import { ToggleButton, ToggleButtonGroup, Tooltip } from "@mui/material";
import { useState } from "react";

import NorthWestIcon from "@mui/icons-material/NorthWest";
import SaveIcon from "@mui/icons-material/Save";
import GridOnIcon from "@mui/icons-material/GridOn";
import CenterFocusWeakIcon from "@mui/icons-material/CenterFocusWeak";
import PublicIcon from "@mui/icons-material/Public";
import MapTypeDrawer from "../../modules/map/MapTypeDrawer";

const MapToolbar = () => {
	const [alignment, setAlignment] = useState("select");

	// 선택된 토글버튼에 강조주기
	const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
		setAlignment(newAlignment);
	};

	const setCenterline = () => {
		console.log("??");
	};

	// 지도 종류 선택하기 Drawer
	const [mapSelectOpen, setMapSelectOpen] = useState(false);

	return (
		<>
			<div style={{ margin: ".5%" }}>
				<ToggleButtonGroup
					sx={{ marginLeft: "10px" }}
					size="small"
					color="primary"
					value={alignment}
					exclusive
					onChange={handleChange}
				>
					<ToggleButton value="select">
						<Tooltip title="기본 선택">
							<NorthWestIcon fontSize="small" />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="save">
						<Tooltip title="지도 저장">
							<SaveIcon fontSize="small" />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="grid">
						<Tooltip title="그리드">
							<GridOnIcon fontSize="small" />
						</Tooltip>
					</ToggleButton>
					<ToggleButton value="center" onClick={setCenterline}>
						<Tooltip title="중심선">
							<CenterFocusWeakIcon fontSize="small" />
						</Tooltip>
					</ToggleButton>
					<ToggleButton
						value="selectMap"
						onClick={() => {
							setMapSelectOpen(true);
							return setAlignment("select");
						}}
					>
						<Tooltip title="지도 선택">
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									justifyContent: "space-between",
									width: 65,
									alignItems: "center",
								}}
							>
								<PublicIcon fontSize="small" />
								배경지도
							</div>
						</Tooltip>
					</ToggleButton>
				</ToggleButtonGroup>
			</div>
			{/* 지도종류선택 Drawer */}
			<MapTypeDrawer open={mapSelectOpen} setOpen={() => setMapSelectOpen(false)} />
		</>
	);
};

export default MapToolbar;
