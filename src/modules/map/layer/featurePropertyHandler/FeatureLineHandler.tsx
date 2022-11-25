import { styled } from "@mui/material";
import { useState } from "react";
import { Color, useColor } from "react-color-palette";
import BaseBlockTitleBox from "../../../../components/box/textBox/BaseBlockTitleBox";
import SpaceBetweenTextBox from "../../../../components/box/textBox/SpaceBetweenTextBox";
import {
	BaseColorPicker,
	BaseColorPickerShowDot,
} from "../../../../components/colorPicker/BaseColorPicker";
import D2MapModule from "../../../../libs/d2/D2MapModule";
import { IGraphicUtil } from "../../../../types/d2/Core/IGraphicUtil";
import { IGraphicBoard, IGraphicObject } from "../../../../types/d2/Graphic";

interface FeatureLineHandlerProps {
	feature: IGraphicObject;
}

const { GraphicUtil } = D2MapModule;
/**
 * 도형(Feature)의 선을 관리할 수 있도록 하는 모달 내 요소
 * @returns {JSX.Element} div
 */
const FeatureLineHandler = ({ feature }: FeatureLineHandlerProps) => {
	const board: IGraphicBoard = window.graphic.getSelectGraphicBoard();
	const objectList = board.getObjectList();
	const initialColor = objectList.find((obj) => obj._prop.guid === feature._prop.guid)!._style.line
		.color;

	const graphicUtil: IGraphicUtil = GraphicUtil;

	const [lineColor, setLineColor] = useColor("hex", graphicUtil.rgb2hex(initialColor));
	const [openColorPicker, setOpenColorPicker] = useState(false);

	// 생성된 도형의 선 색상을 변경함
	const changeLineColor = (color: Color) => {
		setLineColor(color);

		objectList.map((obj) => {
			const sameIndex = objectList.find((re) => re._prop.guid === feature._prop.guid);
			if (sameIndex) {
				obj._style.line.color = graphicUtil.hex2rgb(color.hex);
				graphicUtil.setFeatureStyle(obj);
			}
		});
	};

	return (
		<Root>
			<BaseBlockTitleBox title="선 속성" />
			<SpaceBetweenTextBox title="선 색상">
				<BaseColorPickerShowDot
					color={lineColor.hex}
					clickable
					circleSize="large"
					onClick={() => setOpenColorPicker(true)}
				/>
			</SpaceBetweenTextBox>
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