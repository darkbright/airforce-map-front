import { InputAdornment, styled, ToggleButton, ToggleButtonGroup, Tooltip } from "@mui/material";
import { ChangeEvent, MouseEvent, useState } from "react";
import { Color, useColor } from "react-color-palette";
import DashDotDotLineIcon from "../../../../assets/icons/lineTypes/DashDotDotLineIcon";
import DashDotLineIcon from "../../../../assets/icons/lineTypes/DashDotLineIcon";
import DashLineIcon from "../../../../assets/icons/lineTypes/DashLineIcon";
import OneLineIcon from "../../../../assets/icons/lineTypes/OneLineIcon";
import BaseBlockTitleBox from "../../../../components/box/textBox/BaseBlockTitleBox";
import SpaceBetweenTextBox from "../../../../components/box/textBox/SpaceBetweenTextBox";
import {
	BaseColorPicker,
	BaseColorPickerShowDot,
} from "../../../../components/colorPicker/BaseColorPicker";
import TextInput from "../../../../components/form/TextInput";
import D2MapModule from "../../../../libs/d2/D2MapModule";
import { TypesOfShapeType } from "../../../../libs/d2/mapSettings/draw/TypesOfShapes";
import { IGraphicUtil } from "../../../../types/d2/Core/IGraphicUtil";
import { IDashLineType, IGraphicObject } from "../../../../types/d2/Graphic";
import { isArrayEqual } from "../../../../utils/compareArray";

interface FeatureLineHandlerProps {
	// 리액트 상태 관리용
	feature?: IGraphicObject;
	// window.graphic 내의 객체
	foundFeature: IGraphicObject;
	// 도형의 종류
	typeOfFeature?: TypesOfShapeType;
	// 전체 objectList
	objectList: IGraphicObject[];
}

const { GraphicUtil } = D2MapModule;

// dashLine 종류
const dashLineTypes: { id: string; type: IDashLineType }[] = [
	{ id: "dot", type: [10, 10] },
	{ id: "dash dot", type: [10, 10, 0, 10] },
	{ id: "dash dot dot", type: [10, 10, 0, 10, 0, 10] },
];

/**
 * 도형(Feature)의 선을 관리할 수 있도록 하는 모달 내 요소
 * @returns {JSX.Element} div
 */
const FeatureLineHandler = ({ objectList, foundFeature }: FeatureLineHandlerProps) => {
	const {
		color: initialColor,
		width: initialWidth,
		type: initialLineType,
		dash: initialDashLineArray,
	} = foundFeature!._style.line;

	const initialDashLineType =
		(initialDashLineArray &&
			dashLineTypes.find((d) => isArrayEqual(d.type as number[], initialDashLineArray))?.id) ||
		undefined;

	const graphicUtil: IGraphicUtil = GraphicUtil;
	// 선 색상 관련
	const [lineColor, setLineColor] = useColor("hex", graphicUtil.rgb2hex(initialColor));
	const [openColorPicker, setOpenColorPicker] = useState(false);

	// 선 굵기 관련
	const [lineWidth, setLineWidth] = useState(initialWidth);

	// 선 종류 관련
	const [lineType, setLineType] = useState(initialLineType);
	const [dashLineType, setDashLineType] = useState(initialDashLineType);

	// 생성된 도형의 선 색상을 변경함
	const changeLineColor = (color: Color) => {
		setLineColor(color);
		objectList!.map((obj) => {
			if (foundFeature._prop.guid === obj._prop.guid) {
				obj._style.line.color = graphicUtil.hex2rgb(color.hex);
				graphicUtil.setFeatureStyle(obj);
			}
		});
	};

	// 생성된 도형의 선 굵기를 변경함
	const changeLineWidth = (event: ChangeEvent<HTMLInputElement>) => {
		setLineWidth(Number(event.target.value));
		objectList!.map((obj) => {
			if (foundFeature._prop.guid === obj._prop.guid) {
				obj._style.line.width = Number(event.target.value);
				graphicUtil.setFeatureStyle(obj);
			}
		});
	};

	// 생성된 도형의 종류를 변경함
	const changeLineType = (event: MouseEvent<HTMLElement>, selected: "simple" | "dash") => {
		objectList!.map((obj) => {
			if (foundFeature!._prop.guid === obj._prop.guid) {
				obj._style.line.type = selected;
				setLineType(selected);
				if (selected === "dash") {
					obj._style.line.dash = [10, 10];
					setDashLineType("dot");
				}
				graphicUtil.setFeatureStyle(obj);
			}
		});
	};

	// 생성된 도형의 종류가 "dash"일 때, 그 점선의 종류를 결정함
	const changeDashLineType = (
		event: MouseEvent<HTMLElement>,
		selected: "dot" | "dash dot" | "dash dot dot",
	) => {
		objectList!.map((obj) => {
			if (foundFeature._prop.guid === obj._prop.guid) {
				obj._style.line.dash =
					dashLineTypes.find((dash) => dash.id === selected)?.type || undefined;
				setDashLineType(selected);
				graphicUtil.setFeatureStyle(obj);
			}
		});
	};

	return (
		<Root>
			<BaseBlockTitleBox title="선 속성" />
			<SpaceBetweenTextBox title="선 색상" marginBottom={10}>
				<BaseColorPickerShowDot
					color={lineColor.hex}
					clickable
					circleSize="large"
					onClick={() => setOpenColorPicker(true)}
				/>
			</SpaceBetweenTextBox>
			<SpaceBetweenTextBox title="선 굵기" marginBottom={10}>
				<TextInput
					type="number"
					variant="outlined"
					value={lineWidth}
					size="small"
					onChange={changeLineWidth}
					InputProps={{
						endAdornment: <InputAdornment position="end">px</InputAdornment>,
					}}
				/>
			</SpaceBetweenTextBox>
			<SpaceBetweenTextBox title="선 종류" marginBottom={10}>
				<ToggleButtonGroup
					value={lineType}
					exclusive
					onChange={changeLineType}
					aria-label="line-alignment"
					size="small"
				>
					<ToggleButton sx={{ lineHeight: 1 }} value="simple" aria-label="일반">
						<Tooltip title="일반">
							<div>
								<OneLineIcon />
							</div>
						</Tooltip>
					</ToggleButton>

					<ToggleButton sx={{ lineHeight: 1 }} value="dash" aria-label="점선">
						<Tooltip title="점선">
							<div>
								<DashLineIcon />
							</div>
						</Tooltip>
					</ToggleButton>
				</ToggleButtonGroup>
			</SpaceBetweenTextBox>
			{lineType === "dash" && (
				<SpaceBetweenTextBox title="점선 종류" marginBottom={10}>
					<ToggleButtonGroup
						value={dashLineType}
						exclusive
						onChange={changeDashLineType}
						aria-label="dot-line-alignment"
						size="small"
					>
						<ToggleButton sx={{ lineHeight: 1 }} value="dot" aria-label="dot">
							<Tooltip title="점선(dot)">
								<div>
									<DashLineIcon />
								</div>
							</Tooltip>
						</ToggleButton>
						<ToggleButton sx={{ lineHeight: 1 }} value="dash dot" aria-label="dash dot">
							<Tooltip title="일점쇄선(dash dot)">
								<div>
									<DashDotLineIcon />
								</div>
							</Tooltip>
						</ToggleButton>
						<ToggleButton sx={{ lineHeight: 1 }} value="dash dot dot" aria-label="dash dot">
							<Tooltip title="이점쇄선(dash dot dot)">
								<div>
									<DashDotDotLineIcon />
								</div>
							</Tooltip>
						</ToggleButton>
					</ToggleButtonGroup>
				</SpaceBetweenTextBox>
			)}
			<BaseColorPicker
				openColorPicker={openColorPicker}
				setOpenColorPicker={() => setOpenColorPicker(false)}
				color={lineColor}
				onColorChange={changeLineColor}
			/>
		</Root>
	);
};

export default FeatureLineHandler;

const Root = styled("div")(() => ({
	width: "100%",
}));
