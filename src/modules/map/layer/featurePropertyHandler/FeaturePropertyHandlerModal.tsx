import { Box, styled, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import BaseModal from "../../../../components/modal/BaseModal";
import TabPanel from "../../../../components/tab/TabPanel";
import { getFeatureObjectList } from "../../../../libs/d2/mapSettings/draw/getFeatureObjectList";
import { mergedGroupProps, typesOfShape } from "../../../../libs/d2/mapSettings/draw/TypesOfShapes";
import { IGraphicObject } from "../../../../types/d2/Graphic";
import FeatureArrowHandler from "./FeatureArrowHandler";
import FeatureFillHandler from "./FeatureFillHandler";
import FeatureLineHandler from "./FeatureLineHandler";
import FeatureOthersHandler from "./FeatureOthersHandler";
import FeaturePointHandler from "./FeaturePointHandler";
import FeatureTextHandler from "./FeatureTextHandler";

interface FeaturePropertyHandlerModalProps {
	open: boolean;
	setOpen: () => void;
	feature: IGraphicObject;
	/**
	 * 여기서 foundFeature는 parentObjectList에서 추출한 것이므로 "group"의 속성을 가지고 있음
	 */
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

	//현재 선택된 도형의 종류를 찾아옴.
	// 선택된 도형의 종류에 따라 설정 가능한 tab 및 바꿀 수 있는 property가 바뀌기 때문임.(예를 들어 선 종류인 "polyline"일 경우에만 양쪽 끝점에 화살표가 생김)
	// 각각의 도형에 대한 특성은 typesOfShape에 정리되어 있음
	const typeOfFeature = typesOfShape.find((shape) => shape.id === feature._prop.type)!;
	const { isPoint, hasLine, hasFill, hasArrow, hasText, hasOthers } = typeOfFeature;

	const { groupedList: parentObjectList, deGroupedList: objectList } = getFeatureObjectList();

	const foundFeature =
		parentObjectList.find((obj) => obj._prop.guid === feature?._prop?.guid) ?? null;

	const modifiedTitles = (): { id: string; name: string }[] => {
		const tabHeadTitles: { id: string; name: string }[] = [];
		if (typeOfFeature.id === "group") {
			// group 안에 포함된 도형들을 출력
			const objectsInGroup = feature._objectList;

			const sorted = typesOfShape.filter((shape) =>
				objectsInGroup?.some((object) => object._prop.type === shape.id),
			);
			const merged = mergedGroupProps(sorted);
			if (merged.isPoint) tabHeadTitles.push({ id: "point", name: "점" });
			if (merged.hasLine) tabHeadTitles.push({ id: "polyline", name: "선" });
			if (merged.hasFill) tabHeadTitles.push({ id: "fill", name: "채움" });
			if (merged.hasArrow) tabHeadTitles.push({ id: "arrow", name: "화살표" });
			if (merged.hasText) tabHeadTitles.push({ id: "text", name: "텍스트" });
			if (merged.hasOthers) tabHeadTitles.push({ id: "others", name: "속성" });
		} else {
			if (isPoint) tabHeadTitles.push({ id: "point", name: "점" });
			if (hasLine) tabHeadTitles.push({ id: "polyline", name: "선" });
			if (hasFill) tabHeadTitles.push({ id: "fill", name: "채움" });
			if (hasArrow) tabHeadTitles.push({ id: "arrow", name: "화살표" });
			if (hasText) tabHeadTitles.push({ id: "text", name: "텍스트" });
			if (hasOthers) tabHeadTitles.push({ id: "others", name: "속성" });
		}

		return tabHeadTitles;
	};

	return (
		<BaseModal open={open} setOpen={setOpen} padding="2%" minWidth={500}>
			<Box
				sx={{
					flexGrow: 1,
					bgColor: "background.paper",
					display: "flex",
					height: 440,
					pt: 1,
				}}
			>
				<Tabs
					orientation="vertical"
					variant="scrollable"
					value={tabValue}
					aria-label="feature-proertyHandler"
					onChange={(event, newValue: number) => setTabValue(newValue)}
					sx={{ borderRight: 1, borderColor: "divider", width: 110 }}
				>
					{modifiedTitles().map((title, index) => (
						<Tab label={title.name} key={index} {...a11yProps(index)} />
					))}
				</Tabs>
				{isPoint && (
					<TabPanel
						value={tabValue}
						index={modifiedTitles().findIndex((title) => title.id === "point")}
					>
						<TabPanelRoot>
							<FeaturePointHandler
								feature={feature}
								foundFeature={foundFeature!}
								objectList={objectList}
							/>
						</TabPanelRoot>
					</TabPanel>
				)}
				{hasLine && (
					<TabPanel
						value={tabValue}
						index={modifiedTitles().findIndex((title) => title.id === "polyline")}
					>
						<TabPanelRoot>
							<FeatureLineHandler
								feature={feature}
								typeOfFeature={typeOfFeature.id}
								foundFeature={foundFeature!}
								objectList={objectList}
							/>
						</TabPanelRoot>
					</TabPanel>
				)}
				{hasFill && (
					<TabPanel
						value={tabValue}
						index={modifiedTitles().findIndex((title) => title.id === "fill")}
					>
						<TabPanelRoot>
							<FeatureFillHandler
								feature={feature}
								typeOfFeature={typeOfFeature.id}
								foundFeature={foundFeature!}
								objectList={objectList}
							/>
						</TabPanelRoot>
					</TabPanel>
				)}
				{hasArrow && (
					<TabPanel
						value={tabValue}
						index={modifiedTitles().findIndex((title) => title.id === "arrow")}
					>
						<TabPanelRoot>
							<FeatureArrowHandler
								feature={feature}
								foundFeature={foundFeature!}
								objectList={objectList}
							/>
						</TabPanelRoot>
					</TabPanel>
				)}
				{hasText && (
					<TabPanel
						value={tabValue}
						index={modifiedTitles().findIndex((title) => title.id === "text")}
					>
						<TabPanelRoot>
							<FeatureTextHandler
								feature={feature}
								foundFeature={foundFeature!}
								objectList={objectList}
							/>
						</TabPanelRoot>
					</TabPanel>
				)}
				{hasOthers && (
					<TabPanel
						value={tabValue}
						index={modifiedTitles().findIndex((title) => title.id === "others")}
					>
						<TabPanelRoot>
							<FeatureOthersHandler
								feature={feature}
								foundFeature={foundFeature!}
								objectList={objectList}
							/>
						</TabPanelRoot>
					</TabPanel>
				)}
			</Box>
		</BaseModal>
	);
};

export default FeaturePropertyHandlerModal;

const TabPanelRoot = styled("div")(() => ({
	padding: "0px 20px",
}));
