import { Divider, ListItemText, MenuItem, MenuList, Popover, Typography } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import D2MapModule from "../../../libs/d2/D2MapModule";
import {
	findFeatures,
	findFeaturesByPixel,
} from "../../../libs/d2/mapSettings/interactions/findFeatures";
import {
	basicPointStyle,
	basicTextStyle,
} from "../../../libs/d2/mapSettings/styles/simplifiedSymbolStyle";

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
			const feature = findFeatures(event);
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

	// 부호 모양 확대
	const resizeSymbol = ({ enlarge }: { enlarge: boolean }) => {
		const pixel = [mousePosition.x, mousePosition.y];
		const feature = findFeaturesByPixel(pixel);
		if (feature) {
			//  원래의 모양에 있던 도형의 크기 (원인 경우 radius로 처리한다)
			const originalRadius = feature.getStyle()[0].getImage().getRadius();
			// newStyle 지정 시, point 스타일이 먼저 나오고, text 스타일이 나중에 들어가야 함. 이를 어기면 배열이 꼬임
			const changedSize = enlarge ? originalRadius + 2 : originalRadius - 2;
			// 축소 시 사이즈가 너무 작아지는 것을 방지하기 위하여 7을 기본값을 정했음.
			const preventSizeToZero = changedSize < 7 ? 7 : changedSize;
			const newStyle = [basicPointStyle(feature, preventSizeToZero), basicTextStyle(feature)];
			feature.setStyle(newStyle);
		}
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
					<div style={{ padding: 6 }}>
						<Typography variant="body1">{featureProp?.name}</Typography>
						<Typography variant="body2">
							{featureProp?.lonlat[0].toFixed(2)}, {featureProp?.lonlat[1].toFixed(2)}
						</Typography>
					</div>

					<MenuList dense>
						<Divider />
						<MenuItem onClick={() => resizeSymbol({ enlarge: true })}>
							<ListItemText>확대</ListItemText>
						</MenuItem>
						<MenuItem onClick={() => resizeSymbol({ enlarge: false })}>
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
