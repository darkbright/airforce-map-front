import { FormControlLabel, FormGroup, Slider, styled, Switch, Typography } from "@mui/material";
import DefaultBox from "../../components/box/DefaultBox";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { ChangeEvent, useEffect, useState } from "react";
import YesNoSelectionModal from "../modal/YesNoSelectionModal";
import consonant from "../../utils/consonant";
import TextButton from "../../components/button/TextButton";
import { Draggable } from "react-beautiful-dnd";

interface MapListItemOnDrawerProps {
	title: string;
	index: number;
	layerName: string;
	isDefaultMap: boolean;
	handleRemoveLayer: () => void;
}

// 배경지도 선택하기에서 Drawer에 뜬 개별 지도의 항목들을 컨트롤할 수 있는 Map Card
/**
 * 지도 Toolbar에서 배경지도를 선택했을 때 우측에 뜨는 Drawer인 MapTypeDrawer 내에 위치한
 * 개별 Map 항목에 대한 컨트롤를 할 수 있는 Div 요소임
 *
 * - 선택된 맵 레이어의 투명도(opacity) 조절
 * - 선택된 맵의 display를 할지 말지 토글
 * - 선택된 맵을 map.layers 배열에서 삭제하여, 해당 맵을 보이지 않게 함
 * @param {MapListItemOnDrawerProps}  MapListItemOnDrawerProps
 * @returns {JSX.Element} React Component(div)
 */

const MapListItemOnDrawer = ({
	title,
	layerName,
	handleRemoveLayer,
	isDefaultMap,
	index,
}: MapListItemOnDrawerProps) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [selectedLayer, setSelectedLayer] = useState({} as any);
	const [opacityRate, setOpacityRate] = useState(100);
	const [visible, setVisible] = useState(true);
	const [deleteModalOpen, setDeleteModalOpen] = useState(false);

	// 해당 카드의 dropdown을 열때마다 그 카드의 layerName을 가져옴.
	useEffect(() => {
		window.map.getLayers().forEach((element: any) => {
			if (element.get("name") === layerName) {
				setSelectedLayer(element);
				setOpacityRate(element.getOpacity() * 100);
				setVisible(element.getVisible());
			}
		});
	}, [dropdownOpen]);

	// 해당 Layer의 불투명도를 조절함
	const handleOpacityRate = (event: Event, newValue: number | number[]) => {
		// slider의 value 값은 0~100까지이고, css opacity는 0~1 까지이므로 0.1 단위로 변환하여 지도에 적용해야 함.
		const opacityNumber = Number(((newValue as number) / 100).toFixed(1));
		selectedLayer.setOpacity(opacityNumber);
		setOpacityRate(newValue as number);
	};

	// 해당 Layer의 표시 여부를 조절함
	const handleVisibility = (event: ChangeEvent<HTMLInputElement>) => {
		selectedLayer.setVisible(event.target.checked);
		setVisible(event.target.checked);
	};

	return (
		<>
			<Draggable draggableId={layerName} index={index}>
				{(provided) => (
					<div ref={provided.innerRef} {...provided.draggableProps}>
						<DefaultBox isBackgroundPaper={false} marginBottom={10}>
							<Wrapper>
								<GrabBox {...provided.dragHandleProps}>
									<DragIndicatorIcon color="action" sx={{ opacity: 0.4 }} />
									<Typography sx={{ ml: 1, opacity: visible ? 1 : 0.4 }} variant="body1">
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
								</IconBox>
							</Wrapper>
							{dropdownOpen && (
								<DropdownBox>
									<FormGroup sx={{ mb: 2 }}>
										<FormControlLabel
											control={
												<Switch
													checked={visible}
													color="secondary"
													size="small"
													onChange={handleVisibility}
												/>
											}
											label={visible ? "표시" : "숨김"}
										/>
									</FormGroup>
									<Typography variant="body2">불투명도 설정</Typography>
									<Slider
										value={opacityRate}
										aria-label="layer opacity"
										size="small"
										color="secondary"
										onChange={handleOpacityRate}
										valueLabelDisplay="auto"
									/>
									<TextButton
										type="button"
										disabled={isDefaultMap}
										title="제거"
										onClick={() => setDeleteModalOpen(true)}
									/>
								</DropdownBox>
							)}
						</DefaultBox>
					</div>
				)}
			</Draggable>
			<YesNoSelectionModal
				open={deleteModalOpen}
				setOpen={() => setDeleteModalOpen(true)}
				title={`정말로 ${consonant(title, "을를")} 지울까요?`}
				question="해당 지도를 리스트에서 지웁니다. 지워진 지도는 언제든 지도 추가 버튼에서 추가할 수 있습니다."
				onYes={handleRemoveLayer}
				onNo={() => setDeleteModalOpen(false)}
			/>
		</>
	);
};

export default MapListItemOnDrawer;

const Wrapper = styled("div")(() => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
}));

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
