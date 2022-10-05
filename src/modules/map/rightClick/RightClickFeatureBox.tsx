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
import YesNoSelectionModal from "../../modal/YesNoSelectionModal";
import useMenuBarStore from "../../../stores/useMenuBarStore";

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
	const [hideEverythingOpen, setHideEverythingOpen] = useState(false);

	// 화면 좌측에 메뉴바가 열려 있으면 feature 클릭 시 맵의 라벨과 심볼을 가리므로, 열려있는지 여부를 확인 후 anchor를 다르게 가져가기 위하여 사용
	const { isBarOpen } = useMenuBarStore();

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
				console.log(event.pixel);
				if (result.name) {
					// 심볼의 형태가 어떤 것인지 파악하고, 최초에 심볼 property가 feature 객체에 들어가 있지 않다면, 우선적으로 simplified(즉, 간략부호로 설정해줌. 그런 뒤 아래쪽의 버튼을 통하여 해당 feature property의 심볼값을 변경하여 전역으로 저장함)
					if (result.symbol === undefined || null) {
						feature.setProperties({ symbol: "simplified" });
						setFeatureProp({ symbol: "simplified", ...result });
					} else {
						setFeatureProp(result);
					}
					setAnchorEl(popupRef.current);
					console.log(popupRef.current);
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
			symbolType: featureProp?.symbol,
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
				sx={{ opacity: 0.95 }}
				open={Boolean(anchorEl)}
				anchorEl={anchorEl}
				onClose={() => setAnchorEl(null)}
				anchorOrigin={{
					vertical: "top",
					horizontal: isBarOpen ? "right" : "left",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: isBarOpen ? "right" : "left",
				}}
			>
				<div style={{ padding: 5, width: 200 }}>
					<div style={{ padding: 5 }}>
						<Typography variant="body1">{featureProp?.name}</Typography>
						<Typography variant="subtitle2" sx={{ opacity: 0.7 }}>
							{featureProp?.lonlat[0].toFixed(2)}, {featureProp?.lonlat[1].toFixed(2)}
						</Typography>
					</div>

					<MenuList dense>
						<Divider />
						<MenuItem
							onClick={() =>
								customizeSymbol({
									mousePosition,
									enlarge: "larger",
									showText: "none",
									symbolType: featureProp?.symbol,
								})
							}
						>
							<ListItemText>확대</ListItemText>
						</MenuItem>
						<MenuItem
							onClick={() =>
								customizeSymbol({
									mousePosition,
									enlarge: "smaller",
									showText: "none",
									symbolType: featureProp?.symbol,
								})
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
										symbolType: featureProp?.symbol,
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
										symbolType: featureProp?.symbol,
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

						<MenuItem
							disabled={featureProp?.symbol === "military"}
							onClick={() => {
								const feature = findFeaturesByPixel(mousePosition);
								if (feature) {
									feature.setProperties({ symbol: "military" });
									changeSymbolTypeOnScreen({ mousePosition, type: "military" });
									setAnchorEl(null);
								}
							}}
						>
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
						<MenuItem onClick={() => setHideEverythingOpen(true)}>
							<ListItemText>심볼/심볼명 숨기기</ListItemText>
						</MenuItem>
					</MenuList>
				</div>
			</Popover>
			<YesNoSelectionModal
				open={hideEverythingOpen}
				setOpen={() => setHideEverythingOpen(false)}
				title="심볼과 심볼명을 모두 숨기시겠어요?"
				question={`심볼과 라벨을 모두 숨기면 다시 클릭할 수 없습니다.\n만약 다시 심볼과 라벨을 보시려면 페이지 새로고침 또는 초기화를 하세요.`}
				onNo={() => setHideEverythingOpen(false)}
				onYes={() => {
					customizeSymbol({
						mousePosition,
						enlarge: "none",
						showText: "none",
						handleOpacity: false,
						opacity: 0,
						symbolType: featureProp?.symbol,
						hideEverything: true,
					});
					setAnchorEl(null);
					setHideEverythingOpen(false);
				}}
			/>
		</>
	);
};

export default RightClickFeatureBox;
