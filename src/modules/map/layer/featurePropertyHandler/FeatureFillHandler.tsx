import { FormControl, MenuItem, Select, SelectChangeEvent, styled } from "@mui/material";
import { MouseEvent, useState } from "react";
import { Color, useColor } from "react-color-palette";
import BaseBlockTitleBox from "../../../../components/box/textBox/BaseBlockTitleBox";
import D2MapModule from "../../../../libs/d2/D2MapModule";
import { TypesOfShapeType } from "../../../../libs/d2/mapSettings/draw/TypesOfShapes";
import { IGraphicUtil } from "../../../../types/d2/Core/IGraphicUtil";
import {
	IFeatureFillType,
	IGradient,
	IGraphicObject,
	IPatternType,
} from "../../../../types/d2/Graphic";
import FeaturePatternHandler from "./\bcomponents/FeaturePatternHandler";
import FeatureFillTypeHandler from "./\bcomponents/FeatureFillTypeHandler";
import FeatureSimpleColorHandler from "./\bcomponents/FeatureSimpleColorHandler";
import SpaceBetweenTextBox from "../../../../components/box/textBox/SpaceBetweenTextBox";
import { FeatureGradientList } from "../../../../data/constants/gradient";

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
	const {
		color: initialColor,
		patternColor: initialPatternColor,
		type: initialFillType,
		pattern: initialPatternType,
		gradient: initialGradientType,
	} = foundFeature._style.fill;

	const graphicUtil: IGraphicUtil = GraphicUtil;

	// 색상의 타입을 어떤 것으로 할지 설정하는 버튼 핸들링
	// simple, pattern, gradient
	const [alignment, setAlignment] = useState<IFeatureFillType | null>(initialFillType);

	const onFillTypeChange = (event: MouseEvent<HTMLElement>, newAlignment: IFeatureFillType) => {
		setAlignment(newAlignment);
		// 신규 값으로 바뀌면 fill의 type(IFeatureFillType - 단색이냐, 그라디언트냐 )도 그에 맞추어 변경됨.
		objectList.map((obj) => {
			if (foundFeature!._prop.guid === obj._prop.guid) {
				obj._style.fill.type = newAlignment;
				graphicUtil.setFeatureStyle(obj);
			}
		});
	};

	// 생성된 단색 도형의 채움(fill) 색상을 변경함
	const [fillColor, setFillColor] = useColor("hex", GraphicUtil.rgb2hex(initialColor));
	// const [openColorPicker, setOpenColorPicker] = useState(false);
	const changeFillColor = (color: Color) => {
		setFillColor(color);
		objectList.map((obj) => {
			if (foundFeature!._prop.guid === obj._prop.guid) {
				obj._style.fill.color = graphicUtil.hex2rgb(color.hex);
				graphicUtil.setFeatureStyle(obj);
			}
		});
	};

	// 생성된 단색 도형의 채움 불투명도 설정
	const [fillOpacity, setFillOpacity] = useState(initialColor[3] * 100);
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

	// 생성된 도형이 패턴일 때, 패턴의 타입 설정
	const [fillPattern, setFillPattern] = useState<IPatternType>(initialPatternType);
	const handleFillPattern = (event: SelectChangeEvent) => {
		setFillPattern(event.target.value as IPatternType);
		objectList.map((obj) => {
			if (foundFeature!._prop.guid === obj._prop.guid) {
				obj._style.fill.pattern = event.target.value as IPatternType;
				graphicUtil.setFeatureStyle(obj);
			}
		});
	};

	// 생성된 도형이 패턴일 때, 패턴의 배경 색상 설정
	const [fillPatternBgColor, setFillPatternBgColor] = useColor(
		"hex",
		GraphicUtil.rgb2hex(initialPatternColor[0]),
	);
	const changePatternBgColor = (color: Color) => {
		setFillPatternBgColor(color);
		objectList.map((obj) => {
			if (foundFeature!._prop.guid === obj._prop.guid) {
				obj._style.fill.patternColor[0] = graphicUtil.hex2rgb(color.hex);
				graphicUtil.setFeatureStyle(obj);
			}
		});
	};

	// 생성된 도형이 패턴일 때, 패턴의 배경 불투명도 설정
	const [patternBgOpacity, setPatternBgOpacity] = useState(initialPatternColor[0][3] * 100);
	const handlePatternBgOpacity = (event: Event, newValue: number | number[]) => {
		const opacityNumber = Number(((newValue as number) / 100).toFixed(1));
		objectList.map((obj) => {
			if (foundFeature!._prop.guid === obj._prop.guid) {
				obj._style.fill.patternColor[0][3] = opacityNumber;
				graphicUtil.setFeatureStyle(obj);
			}
		});
		setPatternBgOpacity(newValue as number);
	};

	// 생성된 도형이 패턴일 때, 패턴의 전경 색상 설정
	const [fillPatternFgColor, setFillPatternFgColor] = useColor(
		"hex",
		GraphicUtil.rgb2hex(initialPatternColor[1]),
	);
	const changePatternFgColor = (color: Color) => {
		setFillPatternFgColor(color);
		objectList.map((obj) => {
			if (foundFeature!._prop.guid === obj._prop.guid) {
				obj._style.fill.patternColor[1] = graphicUtil.hex2rgb(color.hex);
				graphicUtil.setFeatureStyle(obj);
			}
		});
	};

	// 생성된 도형이 패턴일 때, 패턴의 배경 불투명도 설정
	const [patternFgOpacity, setPatternFgOpacity] = useState(initialPatternColor[1][3] * 100);
	const handlePatternFgOpacity = (event: Event, newValue: number | number[]) => {
		const opacityNumber = Number(((newValue as number) / 100).toFixed(1));
		objectList.map((obj) => {
			if (foundFeature!._prop.guid === obj._prop.guid) {
				obj._style.fill.patternColor[1][3] = opacityNumber;
				graphicUtil.setFeatureStyle(obj);
			}
		});
		setPatternFgOpacity(newValue as number);
	};

	// 생성된 도형이 그라데이션일 때, 그라데이션의 유형을 설정
	const [gradientType, setGradientType] = useState(initialGradientType.type);
	const handleGradientType = (event: SelectChangeEvent) => {
		setGradientType(event.target.value as IGradient["type"]);
		objectList.map((obj) => {
			if (foundFeature!._prop.guid === obj._prop.guid) {
				obj._style.fill.gradient.type = event.target.value as IGradient["type"];
				graphicUtil.setFeatureStyle(obj);
			}
		});
	};

	return (
		<Root>
			<BaseBlockTitleBox title="채움 속성" />
			<FeatureFillTypeHandler alignment={alignment} onFillTypeChange={onFillTypeChange} />
			{/* 단색일 경우 */}
			{alignment === "simple" && (
				<FeatureSimpleColorHandler
					title="채움(Fill)색상"
					color={fillColor}
					opacity={fillOpacity}
					handleOpacityRate={handleOpacityRate}
					changeColor={changeFillColor}
				/>
			)}
			{/* 패턴일 경우 */}
			{alignment === "pattern" && (
				<FeaturePatternHandler
					fillPattern={fillPattern}
					handleFillPattern={handleFillPattern}
					fillPatternBgColor={fillPatternBgColor}
					patternBgOpacity={patternBgOpacity}
					handlePatternBgOpacity={handlePatternBgOpacity}
					fillPatternFgColor={fillPatternFgColor}
					patternFgOpacity={patternFgOpacity}
					handlePatternFgOpacity={handlePatternFgOpacity}
					changePatternBgColor={changePatternBgColor}
					changePatternFgColor={changePatternFgColor}
				/>
			)}
			{/* 그라디언트일 경우 */}
			{alignment === "gradient" && (
				<SpaceBetweenTextBox title="그라데이션 유형" marginBottom={16}>
					<FormControl fullWidth>
						<Select
							size="small"
							labelId="fill-pattern-select"
							id="fill-pattern-select"
							value={gradientType}
							onChange={handleGradientType}
						>
							{FeatureGradientList.map((g) => (
								<MenuItem key={g.value} value={g.value}>
									{g.kName}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</SpaceBetweenTextBox>
			)}
		</Root>
	);
};

export default FeatureFillHandler;

const Root = styled("div")(() => ({
	width: "100%",
}));
