import { Divider, ListItemText, MenuItem, MenuList, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useGraphicFeatureStore from "../../../stores/useGraphicFeatureStore";
import { IGraphicObject } from "../../../types/d2/Graphic";
import FeaturePropertyHandlerModal from "./featurePropertyHandler/FeaturePropertyHandlerModal";

interface FeatureRightclickHandlerProps {
	show: boolean;
	setShow: (show: boolean) => void;
	positionX: number;
	positionY: number;
}

/**
 * 그래픽 (투명도)에서 도형을 우클릭하여 각종 행위들을 컨트롤 할 수 있도록 하는 Popover
 * @param FeatureRightclickHandlerProps FeatureRightclickHandlerProps
 * @returns {JSX.Element} div
 */
const FeatureRightClickHandler = ({
	show,
	setShow,
	positionX,
	positionY,
}: FeatureRightclickHandlerProps) => {
	// 스타일링
	const { innerWidth, innerHeight } = window;
	const [divHeight, setDivHeight] = useState(380);
	const divWidth = 120;

	// 전역 feature 관리
	const { setFeatures } = useGraphicFeatureStore();
	const [feature, setFeature] = useState<IGraphicObject | null>(null);

	useEffect(() => {
		const selectedObject = window.graphic?.getSelectObjectList()[0];
		setFeature(selectedObject);
		selectedObject?._prop?.type === "milSymbol" ? setDivHeight(390) : setDivHeight(380);
	}, [show, setShow]);

	// 선택된 board, 즉 선택된 Layer를 확인하고
	const board = window.graphic.getSelectGraphicBoard();
	// 선택된 board(layer) 내에 들어있는 도형이나 군대부호같은 각종 feature(or object)들의 리스트들을 불러옴.
	const objectList = board.getParentObjectList();
	// 그 중에서 현재 선택된 object가 무엇인지를 찾아야함.
	const foundFeature = objectList.find((obj) => obj._prop.guid === feature?._prop?.guid) ?? null;

	const [openPropertyModal, setOpenPropertyModal] = useState(false);

	useEffect(() => {
		document.addEventListener("click", function (event: Event) {
			const target = event.target as any;
			// d2 map 군대부호 상세 정보창 닫기 handling (총 4가지의 타입이 있고 모두 popup-close-btn으로 닫기를 핸들링함)
			if (target.matches(".d2map_popup-close-btn")) {
				const block: any = document.getElementsByClassName("d2map_ui-popup");
				for (let i = 0; i < block.length; i++) {
					block[i]!.style.display = "none";
				}
			}
			// 군대부호 속성정보 탭 스위칭 (본 프로젝트에 html이 없고 d2map.min.js 에 담겨있어 이렇게 처리할 수 밖에 없음)
			if (target.matches(".d2map_tab-controller li")) {
				const tabName = target.getAttribute("data-tab");
				if (target.parentNode) {
					for (const sibling of target.parentNode.children!) {
						if (sibling !== target) {
							sibling.classList.remove("d2map_selected");
						} else {
							sibling.classList.add("d2map_selected");
						}
						const baseBlock: any = document.getElementsByClassName("d2map_basic-content")[0];
						const extensionBlock: any =
							document.getElementsByClassName("d2map_extension-content")[0];

						if (tabName === "extension-content") {
							baseBlock.style.display = "none";
							extensionBlock!.style.display = "block";
						} else {
							baseBlock.style.display = "block";
							extensionBlock!.style.display = "none";
						}
					}
				}
			}
		});
	}, [document]);

	return (
		// 스타일링: 윈도우 너비 높이를 계산하고, 현재 feature의 position을 잡아서 만약 feature가 화면 너무 아래쪽이나 우측이나 그렇게 됐을 때 메뉴가 나오는 방향을 설정해주도록 함
		<>
			{feature?._prop?.type && (
				<Root
					style={{
						display: show ? "block" : "none",
						top: positionY >= innerHeight - divHeight ? positionY - divHeight : positionY,
						left:
							positionX >= innerWidth - divWidth - 350 ? positionX - divWidth - 20 : positionX + 20,
						height: divHeight,
						width: divWidth,
					}}
				>
					<MenuList dense>
						<MenuItem
							onClick={async () => {
								window.graphic.copyObject();
								window.graphic.pasteObject();
								setShow(false);
							}}
						>
							<ListItemText>복제</ListItemText>
						</MenuItem>
						<MenuItem
							onClick={() => {
								window.graphic.copyObject();
								setShow(false);
							}}
						>
							<ListItemText>복사</ListItemText>
							<Typography variant="subtitle2" color="text.secondary">
								ctrl+c
							</Typography>
						</MenuItem>
						{window.graphic?._selectObjectManager?._copyObjectList?.length ? (
							<MenuItem
								onClick={() => {
									window.graphic.pasteObject();
									setShow(false);
								}}
							>
								<ListItemText>붙여넣기</ListItemText>
								<Typography variant="subtitle2" color="text.secondary">
									ctrl+v
								</Typography>
							</MenuItem>
						) : (
							""
						)}
						<MenuItem
							onClick={() => {
								window.graphic.copyObject();
								window.graphic.selectObjectRemove();
								const board = window.graphic.getSelectGraphicBoard();
								const objList = board.getParentObjectList();
								setFeatures(objList);
								setShow(false);
							}}
						>
							<ListItemText>잘라내기</ListItemText>
							<Typography variant="subtitle2" color="text.secondary">
								ctrl+x
							</Typography>
						</MenuItem>
						<MenuItem
							onClick={() => {
								window.graphic.selectObjectRemove();
								const board = window.graphic.getSelectGraphicBoard();
								const objList = board.getParentObjectList();
								setFeatures(objList);
								setShow(false);
							}}
						>
							<ListItemText>삭제</ListItemText>
							<Typography variant="subtitle2" color="text.secondary">
								del
							</Typography>
						</MenuItem>
						{window.graphic.selectedObjectIsGrouping() && (
							<MenuItem
								onClick={() => {
									window.graphic.selectedObjectToGroup();
									setShow(false);
								}}
							>
								<ListItemText>그룹으로 묶기</ListItemText>
							</MenuItem>
						)}

						{feature?._prop.type === "group" && (
							<MenuItem
								onClick={() => {
									window.graphic.selectedObjectToUnGroup();
									setShow(false);
									const board = window.graphic.getSelectGraphicBoard();
									const objList = board.getParentObjectList();
									setFeatures(objList);
								}}
							>
								<ListItemText>그룹해제</ListItemText>
							</MenuItem>
						)}

						<Divider sx={{ mb: 1, mt: 1 }} />
						<MenuItem
							onClick={() => {
								window.graphic.selectedObjectToTop();
								setShow(false);
							}}
						>
							<ListItemText>맨 앞으로 가져오기</ListItemText>
						</MenuItem>
						<MenuItem
							onClick={() => {
								window.graphic.selectedObjectToBottom();
								setShow(false);
							}}
						>
							<ListItemText>맨 뒤로 보내기</ListItemText>
						</MenuItem>
						<MenuItem
							onClick={() => {
								window.graphic.selectedObjectToForward();
								setShow(false);
							}}
						>
							<ListItemText>앞으로 가져오기</ListItemText>
						</MenuItem>
						<MenuItem
							onClick={() => {
								window.graphic.selectedObjectToBackward();
								setShow(false);
							}}
						>
							<ListItemText>뒤로 보내기</ListItemText>
						</MenuItem>
						<MenuItem
							onClick={() => {
								setShow(false);
								setOpenPropertyModal(true);
							}}
						>
							<ListItemText>속성</ListItemText>
						</MenuItem>
						{feature?._prop.type === "milSymbol" && (
							<MenuItem
								onClick={() => {
									const selectedObject = window.graphic.getSelectObjectList()[0];

									if (
										window.MilSymbol.getMilSymbolPropertiesObject().activateMilSymbolPopup(
											selectedObject,
										)
									) {
										window.MilSymbol.getMilSymbolPropertiesObject().setMSStyle(
											selectedObject._prop.msOriginKey,
										);

										const block = document.getElementById("d2map_ms_prop_container");
										block!.style.zIndex = "1500";
										block!.style.background = "#263238";
										setShow(false);
									}
								}}
							>
								<ListItemText>군대부호 속성</ListItemText>
							</MenuItem>
						)}
					</MenuList>
				</Root>
			)}
			{feature?._prop && foundFeature ? (
				<FeaturePropertyHandlerModal
					open={openPropertyModal}
					setOpen={() => setOpenPropertyModal(false)}
					feature={feature}
				/>
			) : (
				""
			)}
		</>
	);
};

export default FeatureRightClickHandler;

const Root = styled("div")(({ theme }) => ({
	background: theme.palette.background.paper,
	opacity: 0.9,
	position: "absolute",
	zIndex: 600,
	borderRadius: 4,
}));
