import { Menu, MenuItem, styled, Tooltip, Typography } from "@mui/material";
import { MouseEvent, useState } from "react";
import { IGraphicObject } from "../../../types/d2/Graphic";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Draggable } from "react-beautiful-dnd";
import FeaturePropertyHandlerModal from "./featurePropertyHandler/FeaturePropertyHandlerModal";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { showMilSymbolPopup } from "../../../libs/d2/mapSettings/milSymbols/milSymbolPropertiesPopup/showMilSymbolPopup";

interface SingleFeatureBoxProps {
	feature: IGraphicObject;
	parentVisibility: boolean;
	index: number;
}

/**
 * 레이어 내 개별 도형 또는 군대부호 표시 박스
 * @param SingleFeatureBoxProps SingleFeatureBoxProps
 * @returns {JSX.Element} div
 */
const SingleFeatureBox = ({ feature, parentVisibility, index }: SingleFeatureBoxProps) => {
	const [visible, setVisible] = useState(feature.getVisible());
	const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

	const [isLocked, setIsLocked] = useState(feature.getLock());

	const menuOpen = Boolean(anchorEl);

	const [propertyModalOpen, setPropertyModalOpen] = useState(false);

	const handleRightClick = (event: MouseEvent<HTMLDivElement>) => {
		event.preventDefault();
		setAnchorEl(event.currentTarget);
	};

	// 선택된 board, 즉 선택된 Layer를 확인하고
	const board = window.graphic.getSelectGraphicBoard();
	// 선택된 board(layer) 내에 들어있는 도형이나 군대부호같은 각종 feature(or object)들의 리스트들을 불러옴.
	const objectList = board.getObjectList();
	// 그 중에서 현재 선택된 object가 무엇인지를 찾아야함.

	const foundFeature = objectList.find((obj) => obj._prop.guid === feature._prop.guid)!;

	return (
		<>
			<Draggable draggableId={feature._prop.guid} index={index}>
				{(provided) => (
					<Root
						ref={provided.innerRef}
						{...provided.draggableProps}
						onContextMenu={handleRightClick}
					>
						<AlignWrapper>
							<Wrapper>
								<Tooltip title={visible ? "숨기기" : "보이기"}>
									<VisibilityWrapper
										onClick={() => {
											if (parentVisibility) {
												setVisible(!visible);
												feature.setVisible(!visible);
											}
										}}
									>
										<VisibilityIcon
											sx={{ fontSize: "0.9rem", opacity: visible && parentVisibility ? 1 : 0.2 }}
										/>
									</VisibilityWrapper>
								</Tooltip>

								<Typography sx={{ ml: 1 }} variant="body2" {...provided.dragHandleProps}>
									{feature._prop.name}
								</Typography>
							</Wrapper>
							<Tooltip title={isLocked ? "위치이동가능" : "위치잠그기"}>
								<VisibilityWrapper
									onClick={() => {
										setIsLocked(!isLocked);
										feature.setLock(!isLocked);
									}}
								>
									{isLocked ? (
										<LockIcon sx={{ fontSize: "0.9rem", opacity: 0.7 }} />
									) : (
										<LockOpenIcon sx={{ fontSize: "0.9rem", opacity: 0.2 }} />
									)}
								</VisibilityWrapper>
							</Tooltip>
						</AlignWrapper>
					</Root>
				)}
			</Draggable>
			<Menu
				id="feature-menu"
				open={menuOpen}
				anchorEl={anchorEl}
				onClose={() => setAnchorEl(null)}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				<MenuItem
					dense
					onClick={() => {
						setPropertyModalOpen(true);
						setAnchorEl(null);
					}}
				>
					속성 변경
				</MenuItem>
				{/* <MenuItem
					dense
					onClick={() => {
						objectList.map((obj) => {
							if (foundFeature!._prop.guid === obj._prop.guid) {
								// 전체 graphic 객체 내 ObjectManager라고 하는 것의 _objectList를 모두 지워줌
								window.graphic._selectObjectManager.clear();
								// 거기에 선택한 obj를 추가함
								window.graphic._selectObjectManager.add(obj);
								// 위를 추가하면 그 obj가 선택되어 있는 상태라는 것임. 그래서 그것을 삭제할 수 있게 됨.
								return window.graphic.selectObjectRemove();
								// 아래 주석친 것은 특정 도형을 선택하는 것인데 작동을 하는건지 아닌건지 도대체가 알 수가 없음.
								// window.graphic._selectObjectManager.selectObject();
							}
						});
					}}
				>
					삭제
				</MenuItem> */}
				{foundFeature._prop.type === "milSymbol" && (
					<MenuItem
						dense
						onClick={() => {
							objectList.map((obj) => {
								if (foundFeature!._prop.guid === obj._prop.guid) {
									// 전체 graphic 객체 내 ObjectManager라고 하는 것의 _objectList를 모두 지워줌
									window.graphic._selectObjectManager.clear();
									// 거기에 선택한 obj를 추가함
									window.graphic._selectObjectManager.add(foundFeature);
									window.graphic._selectObjectManager.selectObject();

									showMilSymbolPopup();
								}
							});
						}}
					>
						군대부호 속성
					</MenuItem>
				)}
			</Menu>
			<FeaturePropertyHandlerModal
				open={propertyModalOpen}
				setOpen={() => setPropertyModalOpen(false)}
				feature={feature}
			/>
		</>
	);
};

export default SingleFeatureBox;

const Root = styled("div")(({ theme }) => ({
	background: theme.palette.background.default,
	padding: 8,
	marginBottom: "1%",
}));

const AlignWrapper = styled("div")(() => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
}));

const Wrapper = styled("div")(() => ({
	display: "flex",
	alignItems: "center",
}));

const VisibilityWrapper = styled("div")(() => ({
	height: 14,
	paddingTop: 1,
}));
