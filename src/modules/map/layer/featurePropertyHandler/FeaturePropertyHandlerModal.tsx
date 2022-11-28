import { Box, styled, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import BaseModal from "../../../../components/modal/BaseModal";
import TabPanel from "../../../../components/tab/TabPanel";
import { typesOfShape } from "../../../../libs/d2/mapSettings/draw/TypesOfShapes";
import { IGraphicObject } from "../../../../types/d2/Graphic";
import FeatureFillHandler from "./FeatureFillHandler";
import FeatureLineHandler from "./FeatureLineHandler";

interface FeaturePropertyHandlerModalProps {
	open: boolean;
	setOpen: () => void;
	feature: IGraphicObject;
}

/**
 * 개별 feature에서 마우스 오른쪽 버튼을 누르면 나오는 속성 변경을 누르면 나오는 모달로 해당 feature의 선, 채움, 텍스트, 기타 속성 등을 변경할 수 있음
 * 나중에 이거 drag 가능하게 해야 할 듯
 * TO_BE_CHECKED
 * @param FeaturePropertyHandlerModalProps FeaturePropertyHandlerModalProps
 * @returns {JSX.Element} Modal
 */
const FeaturePropertyHandlerModal = ({
	open,
	setOpen,
	feature,
}: FeaturePropertyHandlerModalProps) => {
	const [tabValue, setTabValue] = useState(0);
	function a11yProps(index: number) {
		return {
			id: `tabpanel-${index}`,
			"aria-controls": `tab-${index}`,
			sx: {
				width: 100,
			},
		};
	}

	// 선택된 board, 즉 선택된 Layer를 확인하고
	const board = window.graphic.getSelectGraphicBoard();
	// 선택된 board(layer) 내에 들어있는 도형이나 군대부호같은 각종 feature(or object)들의 리스트들을 불러옴.
	const objectList = board.getObjectList();
	// 그 중에서 현재 선택된 object가 무엇인지를 찾아야함.
	// 왜냐하면 react 내에서 찾은 feature는 window.graphic의 복제품이기 때문임.
	// 이렇게 한 이유는 window 객체를 context화 했을 때 D2 라이브러리와의 충돌이 가능할 수도 있어서 그렇게 할 수 밖에 없었던 것임.
	const foundFeature = objectList.find((obj) => obj._prop.guid === feature._prop.guid)!;

	//현재 선택된 도형의 종류를 찾아옴.
	// 선택된 도형의 종류에 따라 설정 가능한 tab 및 바꿀 수 있는 property가 바뀌기 때문임.(예를 들어 선 종류인 "polyline"일 경우에만 양쪽 끝점에 화살표가 생김)
	const typeOfFeature = typesOfShape.find((shape) => shape.id === feature._prop.type)!.type;

	return (
		<BaseModal open={open} setOpen={setOpen}>
			<Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
				{feature._prop.name} 속성 관리
			</Typography>
			<Box sx={{ flexGrow: 1, bgColor: "background.paper", display: "flex", height: 400 }}>
				<Tabs
					orientation="vertical"
					variant="scrollable"
					value={tabValue}
					aria-label="feature-proertyHandler"
					onChange={(event, newValue: number) => setTabValue(newValue)}
					sx={{ borderRight: 1, borderColor: "divider" }}
				>
					<Tab label="선" {...a11yProps(0)} />
					<Tab label="채움" {...a11yProps(1)} />
					{typeOfFeature === "polyline" && <Tab label="화살표" {...a11yProps(2)} />}

					<Tab label="텍스트" {...a11yProps(3)} />
					<Tab label="속성" {...a11yProps(4)} />
				</Tabs>
				<TabPanel value={tabValue} index={0}>
					<TabPanelRoot>
						<FeatureLineHandler
							feature={feature}
							typeOfFeature={typeOfFeature}
							foundFeature={foundFeature}
							objectList={objectList}
						/>
					</TabPanelRoot>
				</TabPanel>
				<TabPanel value={tabValue} index={1}>
					<TabPanelRoot>
						<FeatureFillHandler
							feature={feature}
							typeOfFeature={typeOfFeature}
							foundFeature={foundFeature}
							objectList={objectList}
						/>
					</TabPanelRoot>
				</TabPanel>
				<TabPanel value={tabValue} index={2}>
					<TabPanelRoot>ddd</TabPanelRoot>
				</TabPanel>
				{typeOfFeature === "polyline" && (
					<TabPanel value={tabValue} index={3}>
						<TabPanelRoot></TabPanelRoot>
					</TabPanel>
				)}
				<TabPanel value={tabValue} index={4}>
					<TabPanelRoot></TabPanelRoot>
				</TabPanel>
			</Box>
		</BaseModal>
	);
};

export default FeaturePropertyHandlerModal;

const TabPanelRoot = styled("div")(() => ({
	padding: "0px 20px",
}));
