import {
	Divider,
	ListItemText,
	MenuItem,
	MenuList,
	Popover,
	Slider,
	Typography,
} from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import {
	findFeatures,
	findFeaturesByPixel,
} from "../../../libs/d2/mapSettings/interactions/findFeatures";
import { customizeSymbol } from "../../../libs/d2/mapSettings/styles/changeSymbolStyle";
import useRightClickStore from "../../../stores/useRightClickStore";
import { BasicSymbolColorType } from "../../../utils/milColorHandler";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { defaultFeatureLabelTextSize } from "../../../libs/d2/mapSettings/styles/symbolStyle";
import { changeSymbolTypeOnScreen } from "../../../libs/d2/mapSettings/styles/changeSymbolType";
import { MapSymbolType } from "../../../types/army/symbolType";

interface FeaturePropType {
	color: BasicSymbolColorType;
	id: string;
	lonlat: number[];
	name: string;
	geometry: any;
	symbol?: MapSymbolType;
}

/**
 * Feature 우클릭 시 보이는 메뉴 바
 * @returns Popover Div를 띄움
 */
const RightClickFeatureBox = () => {
	const { rightClickEnabled } = useRightClickStore();
	const popupRef = useRef<HTMLDivElement>(null);
	const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
	const [mousePosition, setMousePosition] = useState({
		x: 0,
		y: 0,
	});
	const [featureProp, setFeatureProp] = useState<FeaturePropType | null | undefined>(null);
	const [isSymbolLabelOnScreen, setIsSymbolLabelOnScreen] = useState(defaultFeatureLabelTextSize);
	const [openOpacityHandler, setOpenOpacityHandler] = useState(false);
	const [opacityRate, setOpacityRate] = useState(100);

	const onClickFeatureOnMap = useCallback(
		(event: any) => {
			//우클릭 시 기본으로 뜨는 브라우저 context menu를 가려줌
			document.addEventListener("contextmenu", (e) => {
				e.preventDefault();
			});
			const feature = findFeatures(event);
			if (feature) {
				const result = feature.getProperties();
				setMousePosition({
					x: event.pixel[0],
					y: event.pixel[1],
				});
				if (result.name) {
					// 심볼의 형태가 어떤 것인지 파악하고, 최초에 심볼 property가 feature 객체에 들어가 있지 않다면, 우선적으로 simplified(즉, 간략부호로 설정해줌. 그런 뒤 아래쪽의 버튼을 통하여 해당 feature property의 심볼값을 변경하여 전역으로 저장함)
					if (result.symbol === undefined || null) {
						feature.setProperties({ symbol: "simplified" });
						setFeatureProp({ symbol: "simplified", ...result });
					} else {
						setFeatureProp(result);
					}
					setAnchorEl(popupRef.current);
					const textScaleInfo = feature.getStyle()[1].text_.scale_;
					setIsSymbolLabelOnScreen(textScaleInfo);
				} else {
					setAnchorEl(null);
				}
			}
		},
		[window.map],
	);

	useEffect(() => {
		if (rightClickEnabled) {
			window.map.on("pointerdown", onClickFeatureOnMap);
			return () => window.map.un("pointerdown", onClickFeatureOnMap);
		}
	}, [window.map, onClickFeatureOnMap]);

	const id = anchorEl ? "map-popover" : undefined;

	const handleOpacityRate = (event: Event, newValue: number | number[]) => {
		// slider의 value 값은 0~100까지이고, css opacity는 0~1 까지이므로 0.1 단위로 변환하여 지도에 적용해야 함.
		const opacityNumber = Number(((newValue as number) / 100).toFixed(1));
		setOpacityRate(newValue as number);
		customizeSymbol({
			mousePosition,
			enlarge: "none",
			showText: "none",
			handleOpacity: true,
			opacity: opacityNumber,
		});
	};

	return (
		<>
			<div
				ref={popupRef}
				aria-describedby={id}
				style={{
					position: "absolute",
					left: mousePosition.x + 140,
					top: mousePosition.y + 140,
					opacity: 0,
				}}
			>
				-
			</div>
			<Popover
				id={id}
				open={Boolean(anchorEl)}
				anchorEl={anchorEl}
				onClose={() => setAnchorEl(null)}
				anchorOrigin={{
					vertical: "top",
					horizontal: "left",
				}}
				transformOrigin={{
					vertical: "center",
					horizontal: "left",
				}}
			>
				<div style={{ padding: 5, width: 200 }}>
					<div style={{ padding: 5 }}>
						<Typography variant="body1">{featureProp?.name}</Typography>
						<Typography variant="body2">
							{featureProp?.lonlat[0].toFixed(2)}, {featureProp?.lonlat[1].toFixed(2)}
						</Typography>
					</div>

					<MenuList dense>
						<Divider />
						<MenuItem
							onClick={() =>
								customizeSymbol({ mousePosition, enlarge: "larger", showText: "none" })
							}
						>
							<ListItemText>확대</ListItemText>
						</MenuItem>
						<MenuItem
							onClick={() =>
								customizeSymbol({ mousePosition, enlarge: "smaller", showText: "none" })
							}
						>
							<ListItemText>축소</ListItemText>
						</MenuItem>
						<MenuItem onClick={() => setOpenOpacityHandler(!openOpacityHandler)}>
							<ListItemText>밝기 조절</ListItemText>
							<Typography variant="body2" color="text.secondary">
								{openOpacityHandler ? (
									<KeyboardArrowUpIcon fontSize="small" />
								) : (
									<KeyboardArrowDownIcon fontSize="small" />
								)}
							</Typography>
						</MenuItem>
						{openOpacityHandler && (
							<div style={{ padding: "0px 15px" }}>
								<Slider
									value={opacityRate}
									aria-label="feature opacity"
									size="small"
									color="secondary"
									onChange={handleOpacityRate}
									valueLabelDisplay="auto"
								/>
							</div>
						)}
						{isSymbolLabelOnScreen === defaultFeatureLabelTextSize ? (
							<MenuItem
								onClick={() => {
									customizeSymbol({
										mousePosition,
										enlarge: "none",
										showText: "hide",
									});
									setAnchorEl(null);
								}}
							>
								<ListItemText>심볼명 숨기기</ListItemText>
							</MenuItem>
						) : (
							<MenuItem
								onClick={() => {
									customizeSymbol({
										mousePosition,
										enlarge: "none",
										showText: "show",
									});
									setAnchorEl(null);
								}}
							>
								<ListItemText>심볼명 보이기</ListItemText>
							</MenuItem>
						)}

						<Divider />
						<MenuItem
							disabled={featureProp?.symbol === "simplified"}
							onClick={() => {
								const feature = findFeaturesByPixel(mousePosition);
								if (feature) {
									feature.setProperties({ symbol: "simplified" });
									changeSymbolTypeOnScreen({ mousePosition, type: "simplified" });
									setAnchorEl(null);
								}
							}}
						>
							<ListItemText>간략부호 표시</ListItemText>
						</MenuItem>

						<MenuItem
							disabled={featureProp?.symbol === "basic"}
							onClick={() => {
								const feature = findFeaturesByPixel(mousePosition);
								if (feature) {
									feature.setProperties({ symbol: "basic" });
									changeSymbolTypeOnScreen({ mousePosition, type: "basic" });
									setAnchorEl(null);
								}
							}}
						>
							<ListItemText>기본심볼 표시</ListItemText>
						</MenuItem>

						<MenuItem>
							<ListItemText>군대심볼 표시</ListItemText>
						</MenuItem>
						<Divider />
						<MenuItem>
							<ListItemText>레벨 5 보기</ListItemText>
						</MenuItem>
						<Divider />
						<MenuItem>
							<ListItemText>추가정보 표시</ListItemText>
						</MenuItem>
					</MenuList>
				</div>
			</Popover>
		</>
	);
};

export default RightClickFeatureBox;
