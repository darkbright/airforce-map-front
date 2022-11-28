import { Slider, styled, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import { Color, useColor } from "react-color-palette";
import BaseBlockTitleBox from "../../../../components/box/textBox/BaseBlockTitleBox";
import SpaceBetweenTextBox from "../../../../components/box/textBox/SpaceBetweenTextBox";
import {
	BaseColorPicker,
	BaseColorPickerShowDot,
} from "../../../../components/colorPicker/BaseColorPicker";
import D2MapModule from "../../../../libs/d2/D2MapModule";
import { TypesOfShapeType } from "../../../../libs/d2/mapSettings/draw/TypesOfShapes";
import { IGraphicUtil } from "../../../../types/d2/Core/IGraphicUtil";
import { IFeatureFillType, IGraphicObject } from "../../../../types/d2/Graphic";
import SquareIcon from "@mui/icons-material/Square";
import TextureIcon from "@mui/icons-material/Texture";
import GradientIcon from "@mui/icons-material/Gradient";

interface FeatureFillHandlerProps {
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
/**
 * 도형(Feature)의 채움을 관리할 수 있도록 하는 모달 내 요소
 * @returns {JSX.Element} div
 */
const FeatureFillHandler = ({ foundFeature, objectList }: FeatureFillHandlerProps) => {
	const { color: initialColor } = foundFeature._style.fill;

	const graphicUtil: IGraphicUtil = GraphicUtil;

	// 색상의 타입을 어떤 것으로 할지 설정하는 버튼 핸들링
	// simple, pattern, gradient
	const [alignment, setAlignment] = useState<IFeatureFillType | null>("simple");

	const [fillColor, setFillColor] = useColor("hex", GraphicUtil.rgb2hex(initialColor));
	const [openColorPicker, setOpenColorPicker] = useState(false);

	// 생성된 단색 도형의 채움(fill) 색상을 변경함
	const changeLineColor = (color: Color) => {
		setFillColor(color);
		objectList.map((obj) => {
			if (foundFeature!._prop.guid === obj._prop.guid) {
				obj._style.fill.color = graphicUtil.hex2rgb(color.hex);
				graphicUtil.setFeatureStyle(obj);
			}
		});
	};

	const [fillOpacity, setFillOpacity] = useState(100);

	// 생성된 단색 도형의 채움 불투명도 설정
	const handleOpacityRate = (event: Event, newValue: number | number[]) => {
		// slider의 value 값은 0~100까지이고, css opacity는 0~1 까지이므로 0.1 단위로 변환하여 지도에 적용해야 함.
		const opacityNumber = Number(((newValue as number) / 100).toFixed(1));
		objectList.map((obj) => {
			if (foundFeature!._prop.guid === obj._prop.guid) {
				obj._style.fill.color[3] = opacityNumber;
				graphicUtil.setFeatureStyle(obj);
			}
		});
		setFillOpacity(newValue as number);
	};

	return (
		<Root>
			<BaseBlockTitleBox title="채움 속성" />
			<ToggleButtonGroup
				sx={{
					mb: 2,
				}}
				size="small"
				exclusive
				color="primary"
				value={alignment}
				onChange={(event, newAlignment: IFeatureFillType) => setAlignment(newAlignment)}
			>
				<ToggleButton value="simple" aria-label="simple">
					<SquareIcon fontSize="small" sx={{ mr: 1 }} />
					단색
				</ToggleButton>
				<ToggleButton value="pattern" aria-label="pattern">
					<TextureIcon fontSize="small" sx={{ mr: 1 }} />
					패턴
				</ToggleButton>
				<ToggleButton value="gradient" aria-label="gradient">
					<GradientIcon fontSize="small" sx={{ mr: 1 }} />
					그라디언트
				</ToggleButton>
			</ToggleButtonGroup>
			{/* 단색일 경우 */}
			{alignment === "simple" && (
				<>
					<SpaceBetweenTextBox title="채움(Fill) 색상" marginBottom={14}>
						<BaseColorPickerShowDot
							color={fillColor.hex}
							clickable
							circleSize="large"
							onClick={() => setOpenColorPicker(true)}
						/>
					</SpaceBetweenTextBox>
					<SpaceBetweenTextBox title="불투명도" childrenWidth="50%" marginBottom={10}>
						<Slider
							sx={{ mt: 1, width: "95%" }}
							value={fillOpacity}
							aria-label="fill opacity"
							size="small"
							color="secondary"
							onChange={handleOpacityRate}
							valueLabelDisplay="auto"
						/>
					</SpaceBetweenTextBox>
				</>
			)}
			{/* 패턴일 경우 */}
			{/* 그라디언트일 경우 */}
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
