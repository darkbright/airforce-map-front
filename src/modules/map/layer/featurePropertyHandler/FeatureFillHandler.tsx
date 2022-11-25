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
import { IGraphicObject } from "../../../../types/d2/Graphic";

interface FeatureLineHandlerProps {
	feature: IGraphicObject;
}

const { GraphicUtil } = D2MapModule;
/**
 * 도형(Feature)의 채움을 관리할 수 있도록 하는 모달 내 요소
 * @returns {JSX.Element} div
 */
const FeatureFillHandler = ({ feature }: FeatureLineHandlerProps) => {
	const board = window.graphic.getSelectGraphicBoard();
	const objectList = board.getObjectList();
	const initialColor = objectList.find((obj) => obj._prop.guid === feature._prop.guid)!._style.fill
		.color;

	const graphicUtil: IGraphicUtil = GraphicUtil;

	const [fillColor, setFillColor] = useColor("hex", GraphicUtil.rgb2hex(initialColor));
	const [openColorPicker, setOpenColorPicker] = useState(false);

	// 생성된 도형의 채움(fill) 색상을 변경함
	const changeLineColor = (color: Color) => {
		setFillColor(color);
		objectList.map((obj) => {
			const sameIndex = objectList.find((re) => re._prop.guid === feature._prop.guid);
			if (sameIndex) {
				obj._style.fill.color = graphicUtil.hex2rgb(color.hex);
				graphicUtil.setFeatureStyle(obj);
			}
		});
	};

	return (
		<Root>
			<BaseBlockTitleBox title="채움 속성" />
			<SpaceBetweenTextBox title="채움(Fill) 색상">
				<BaseColorPickerShowDot
					color={fillColor.hex}
					clickable
					circleSize="large"
					onClick={() => setOpenColorPicker(true)}
				/>
			</SpaceBetweenTextBox>
			<BaseColorPicker
				openColorPicker={openColorPicker}
				setOpenColorPicker={() => setOpenColorPicker(false)}
				color={fillColor}
				onColorChange={changeLineColor}
			/>
		</Root>
	);
};

export default FeatureFillHandler;

const Root = styled("div")(() => ({
	width: "100%",
}));
