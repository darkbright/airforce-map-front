import { Divider, ListItemText, MenuItem, MenuList, Popover, Typography } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import useRightClickStore from "../../../stores/useRightClickStore";
import { BasicSymbolColorType } from "../../../utils/milColorHandler";

interface FeaturePropType {
	color: BasicSymbolColorType;
	id: string;
	lonlat: number[];
	name: string;
	geometry: any;
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

	const onClickFeatureOnMap = useCallback(
		(event: any) => {
			//우클릭 시 기본으로 뜨는 브라우저 context menu를 가려줌
			document.addEventListener("contextmenu", (e) => {
				e.preventDefault();
			});

			const feature = window.map.forEachFeatureAtPixel(
				event.pixel,
				(feature: any) => {
					return feature;
				},
				{
					// 마우스 클릭 시 좌표의 범위를 넓혀주어 대충 클릭해도 팝업이 뜰 수 있도록 조치하는 항목임.
					hitTolerence: 5,
				},
			);
			if (feature) {
				const result = feature.getProperties();
				setMousePosition({
					x: event.pixel[0],
					y: event.pixel[1],
				});
				if (result.name) {
					setFeatureProp(result);
					setAnchorEl(popupRef.current);
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
					<div style={{ padding: 6 }}>
						<Typography variant="body1">{featureProp?.name}</Typography>
						<Typography variant="body2">
							{featureProp?.lonlat[0].toFixed(2)}, {featureProp?.lonlat[1].toFixed(2)}
						</Typography>
					</div>

					<MenuList dense>
						<Divider />
						<MenuItem>
							<ListItemText>확대</ListItemText>
						</MenuItem>
						<MenuItem>
							<ListItemText>축소</ListItemText>
						</MenuItem>
						<MenuItem>
							<ListItemText>밝기 조절</ListItemText>
						</MenuItem>
						<MenuItem>
							<ListItemText>심볼명 숨기기/표시</ListItemText>
						</MenuItem>
						<Divider />
						<MenuItem>
							<ListItemText>간략부호 표시</ListItemText>
						</MenuItem>
						<MenuItem>
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
