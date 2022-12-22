import { Divider, InputAdornment, styled, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { Color, useColor } from "react-color-palette";
import SpaceBetweenTextBox from "../../../components/box/textBox/SpaceBetweenTextBox";
import {
	BaseColorPicker,
	BaseColorPickerShowDot,
} from "../../../components/colorPicker/BaseColorPicker";
import TextInput from "../../../components/form/TextInput";
import D2MapModule from "../../../libs/d2/D2MapModule";
import useGraphicFeatureColorStore from "../../../stores/useGraphicFeatureColorStore";
import { IGraphicUtil } from "../../../types/d2/Core/IGraphicUtil";

const MapLayer = () => {
	const { GraphicUtil } = D2MapModule;
	const graphicUtil: IGraphicUtil = GraphicUtil;
	const { favColor, setFavColor } = useGraphicFeatureColorStore();

	const [openFillColorPicker, setOpenFillColorPicker] = useState(false);
	const [fillColor, setFillColor] = useColor("hex", graphicUtil.rgb2hex(favColor.fc));
	const changeFillColor = (color: Color) => {
		setFillColor(color);
		setFavColor({ ...favColor, fc: graphicUtil.hex2rgb(color.hex) });
	};

	const [openLineColorPicker, setOpenLineColorPicker] = useState(false);
	const [lineColor, setLineColor] = useColor("hex", graphicUtil.rgb2hex(favColor.lc));
	const changeLineColor = (color: Color) => {
		setLineColor(color);
		setFavColor({ ...favColor, lc: graphicUtil.hex2rgb(color.hex) });
	};

	const [lineWidth, setLineWidth] = useState(favColor.lw);
	const changeLineWidth = (event: ChangeEvent<HTMLInputElement>) => {
		setLineWidth(Number(event.target.value));
		setFavColor({ ...favColor, lw: Number(event.target.value) });
	};

	return (
		<>
			<Root>
				<Typography variant="h6" gutterBottom>
					지도 내 도형 그리기 색상 세팅
				</Typography>
				<Typography variant="body2">
					지도에서 도형을 그리실 때 기본으로 설정된 칠 색상, 선 굵기 그리고 선 색상을 선호하시는
					스타일로 미리 설정해두고 사용하실 수 있습니다.
				</Typography>
				<Divider sx={{ mt: 2, mb: 2 }} />
				<ItemWrapper>
					<SpaceBetweenTextBox title="칠(Fill) 색상" marginBottom={14}>
						<BaseColorPickerShowDot
							color={fillColor.hex}
							clickable
							circleSize="large"
							onClick={() => setOpenFillColorPicker(true)}
						/>
					</SpaceBetweenTextBox>
					<SpaceBetweenTextBox title="선(Line) 색상" marginBottom={14}>
						<BaseColorPickerShowDot
							color={lineColor.hex}
							clickable
							circleSize="large"
							onClick={() => setOpenLineColorPicker(true)}
						/>
					</SpaceBetweenTextBox>
					<SpaceBetweenTextBox title="선(Line) 굵기" marginBottom={14}>
						<TextInput
							type="number"
							sx={{ ml: 1 }}
							variant="outlined"
							value={lineWidth}
							size="small"
							onChange={changeLineWidth}
							InputProps={{
								endAdornment: <InputAdornment position="end">px</InputAdornment>,
							}}
						/>
					</SpaceBetweenTextBox>
				</ItemWrapper>
			</Root>
			<BaseColorPicker
				openColorPicker={openFillColorPicker}
				setOpenColorPicker={() => setOpenFillColorPicker(false)}
				color={fillColor}
				onColorChange={changeFillColor}
			/>
			<BaseColorPicker
				openColorPicker={openLineColorPicker}
				setOpenColorPicker={() => setOpenLineColorPicker(false)}
				color={lineColor}
				onColorChange={changeLineColor}
			/>
		</>
	);
};

export default MapLayer;

const Root = styled("div")(() => ({
	width: "80%",
}));

const ItemWrapper = styled("div")(() => ({
	width: "30%",
	marginTop: 40,
}));
