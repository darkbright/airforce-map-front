import { FormControlLabel, FormGroup, Slider, styled, Switch, Typography } from "@mui/material";
import DefaultBox from "../../components/box/DefaultBox";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import React, { ChangeEvent, useEffect, useState } from "react";

interface MapListItemOnDrawerProps {
	title: string;
	layerName: string;
}

// 배경지도 선택하기에서 Drawer에 뜬 개별 지도의 항목들을 컨트롤할 수 있는 Map Card
const MapListItemOnDrawer = ({ title, layerName }: MapListItemOnDrawerProps) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [selectedLayer, setSelectedLayer] = useState({} as any);
	const [opacityRate, setOpacityRate] = useState(100);
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		window.map.getLayers().forEach((element: any) => {
			if (element.get("name") == layerName) {
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				setSelectedLayer(element);
				setOpacityRate(element.getOpacity() * 100);
			}
		});
	}, []);

	const handleOpacityRate = (event: Event, newValue: number | number[]) => {
		const opacityNumber = Number(((newValue as number) / 100).toFixed(1));
		selectedLayer.setOpacity(opacityNumber);
		setOpacityRate(newValue as number);
	};

	const handleVisibility = (event: ChangeEvent<HTMLInputElement>) => {
		selectedLayer.setVisible(event.target.checked);
		setVisible(event.target.checked);
	};

	return (
		<>
			<div style={{ marginBottom: 10 }}>
				<DefaultBox>
					<Wrapper>
						<GrabBox>
							<DragIndicatorIcon color="action" sx={{ opacity: 0.4 }} />
							<Typography sx={{ ml: 1 }} variant="body1">
								{title}
							</Typography>
						</GrabBox>
						<IconBox>
							{dropdownOpen ? (
								<KeyboardArrowUpIcon
									color="action"
									onClick={() => setDropdownOpen(false)}
									sx={{ ...IconStyle, mr: 0.5 }}
								/>
							) : (
								<KeyboardArrowDownIcon
									color="action"
									onClick={() => setDropdownOpen(true)}
									sx={{ ...IconStyle, mr: 0.5 }}
								/>
							)}

							<HighlightOffIcon
								color="action"
								onClick={() => {
									console.log("sdf");
								}}
								sx={IconStyle}
							/>
						</IconBox>
					</Wrapper>
					{dropdownOpen && (
						<DropdownBox>
							<FormGroup sx={{ mb: 2 }}>
								<FormControlLabel
									control={<Switch checked={visible} size="small" onChange={handleVisibility} />}
									label={visible ? "표시" : "숨김"}
								/>
							</FormGroup>
							<Typography variant="body2">불투명도 설정</Typography>
							<Slider
								value={opacityRate}
								aria-label="layer opacity"
								size="small"
								onChange={handleOpacityRate}
								valueLabelDisplay="auto"
							/>
						</DropdownBox>
					)}
				</DefaultBox>
			</div>
		</>
	);
};

export default MapListItemOnDrawer;

const Wrapper = styled("div")({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
});

const GrabBox = styled("div")(() => ({
	cursor: "grab",
	display: "flex",
	alignItems: "center",
}));

const IconBox = styled("div")(() => ({
	display: "flex",
	alignItems: "right",
}));

const IconStyle = {
	cursor: "pointer",
	opacity: 0.4,
	"&:hover": { opacity: 1 },
};

const DropdownBox = styled("div")(() => ({
	margin: 10,
}));
