import {
	FormControl,
	InputAdornment,
	MenuItem,
	Select,
	SelectChangeEvent,
	styled,
	Typography,
} from "@mui/material";
import { ChangeEvent, MouseEvent, useState } from "react";
import { Color, toColor, useColor } from "react-color-palette";
import D2MapModule from "../../../../libs/d2/D2MapModule";

import { IGraphicUtil } from "../../../../types/d2/Core/IGraphicUtil";
import {
	IFeatureFillType,
	IFeatureType,
	IGradient,
	IGraphicObject,
	IPatternType,
} from "../../../../types/d2/Graphic";
import FeaturePatternHandler from "./components/FeaturePatternHandler";
import FeatureFillTypeHandler from "./components/FeatureFillTypeHandler";
import FeatureSimpleColorHandler from "./components/FeatureSimpleColorHandler";
import { toastShow } from "../../../../components/alert/ToastMessage";
import FeatureGradientTypeHandler from "./components/FeatureGradientTypeHandler";
import SpaceBetweenTextBox from "../../../../components/box/textBox/SpaceBetweenTextBox";
import TextInput from "../../../../components/form/TextInput";
import {
	changeFeatureFillColor,
	changeFeatureFillOpacity,
	changeFeatureFillType,
	changeFeaturePatternColor,
	changeFeaturePatternOpacity,
	changeFeaturePatternType,
} from "../../../../libs/d2/mapSettings/draw/changeFeatureStyle";

interface FeatureFillHandlerProps {
	// 리액트 상태 관리용
	feature?: IGraphicObject;
	// window.graphic 내의 객체 (그룹의 속성을 가질 수 있음)
	foundFeature: IGraphicObject;
	// 도형의 종류
	typeOfFeature?: IFeatureType;
	// 전체 objectList
	objectList: IGraphicObject[];
}

const { GraphicUtil } = D2MapModule;
/**
 * 도형(Feature)의 채움을 관리할 수 있도록 하는 모달 내 요소
 * @returns {JSX.Element} div
 */
const FeatureFillHandler = ({
	feature,
	foundFeature,
	objectList,
	typeOfFeature,
}: FeatureFillHandlerProps) => {
	const {
		color: initialColor,
		patternColor: initialPatternColor,
		type: initialFillType,
		pattern: initialPatternType,
		gradient: initialGradientType,
	} = foundFeature._style.fill;
	const {
		radius: initialRadius,
		lineType: initialArcLineType,
		fillType: initialArcFillType,
	} = foundFeature._prop;

	const graphicUtil: IGraphicUtil = GraphicUtil;

	// 색상의 타입을 어떤 것으로 할지 설정하는 버튼 핸들링
	// simple, pattern, gradient
	const [alignment, setAlignment] = useState<IFeatureFillType | null>(initialFillType);

	const onFillTypeChange = (event: MouseEvent<HTMLElement>, newAlignment: IFeatureFillType) => {
		setAlignment(newAlignment);
		objectList.map((obj) => {
			if (
				foundFeature!._prop.guid === obj._prop.guid ||
				(obj._parent && obj._parent._prop.guid === foundFeature._prop.guid)
			) {
				changeFeatureFillType(obj, newAlignment);
			}
		});
	};

	// 생성된 단색 도형의 채움(fill) 색상을 변경함
	const [fillColor, setFillColor] = useColor("hex", GraphicUtil.rgb2hex(initialColor));
	const changeFillColor = (color: Color) => {
		setFillColor(color);
		objectList.map((obj) => {
			if (
				foundFeature!._prop.guid === obj._prop.guid ||
				(obj._parent && obj._parent._prop.guid === foundFeature._prop.guid)
			) {
				changeFeatureFillColor(obj, color);
			}
		});
	};

	// 생성된 단색 도형의 채움 불투명도 설정
	const [fillOpacity, setFillOpacity] = useState(initialColor[3] * 100);
	const handleOpacityRate = (event: Event, newValue: number | number[]) => {
		// slider의 value 값은 0~100까지이고, css opacity는 0~1 까지이므로 0.1 단위로 변환하여 지도에 적용해야 함.
		const opacityNumber = Number(((newValue as number) / 100).toFixed(1));
		objectList.map((obj) => {
			if (
				foundFeature!._prop.guid === obj._prop.guid ||
				(obj._parent && obj._parent._prop.guid === foundFeature._prop.guid)
			) {
				changeFeatureFillOpacity(obj, opacityNumber);
			}
		});
		setFillOpacity(newValue as number);
	};

	/**
	 * 아래부터 패턴 핸들링
	 */

	// 생성된 도형이 패턴일 때, 패턴의 타입 설정
	const [fillPattern, setFillPattern] = useState<IPatternType>(initialPatternType);
	const handleFillPattern = (event: SelectChangeEvent) => {
		setFillPattern(event.target.value as IPatternType);
		objectList.map((obj) => {
			if (
				foundFeature!._prop.guid === obj._prop.guid ||
				(obj._parent && obj._parent._prop.guid === foundFeature._prop.guid)
			) {
				changeFeaturePatternType(obj, event.target.value);
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
			if (
				foundFeature!._prop.guid === obj._prop.guid ||
				(obj._parent && obj._parent._prop.guid === foundFeature._prop.guid)
			) {
				changeFeaturePatternColor(obj, "bg", color);
			}
		});
	};

	// 생성된 도형이 패턴일 때, 패턴의 배경 불투명도 설정
	const [patternBgOpacity, setPatternBgOpacity] = useState(initialPatternColor[0][3] * 100);
	const handlePatternBgOpacity = (event: Event, newValue: number | number[]) => {
		const opacityNumber = Number(((newValue as number) / 100).toFixed(1));
		objectList.map((obj) => {
			if (
				foundFeature!._prop.guid === obj._prop.guid ||
				(obj._parent && obj._parent._prop.guid === foundFeature._prop.guid)
			) {
				changeFeaturePatternOpacity(obj, "bg", opacityNumber);
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
			if (
				foundFeature!._prop.guid === obj._prop.guid ||
				(obj._parent && obj._parent._prop.guid === foundFeature._prop.guid)
			) {
				changeFeaturePatternColor(obj, "fg", color);
			}
		});
	};

	// 생성된 도형이 패턴일 때, 패턴의 전경 불투명도 설정
	const [patternFgOpacity, setPatternFgOpacity] = useState(initialPatternColor[1][3] * 100);
	const handlePatternFgOpacity = (event: Event, newValue: number | number[]) => {
		const opacityNumber = Number(((newValue as number) / 100).toFixed(1));
		objectList.map((obj) => {
			if (
				foundFeature!._prop.guid === obj._prop.guid ||
				(obj._parent && obj._parent._prop.guid === foundFeature._prop.guid)
			) {
				changeFeaturePatternOpacity(obj, "fg", opacityNumber);
			}
		});
		setPatternFgOpacity(newValue as number);
	};

	/**
	 * 아래부터 그라데이션 핸들링
	 */

	// 생성된 도형이 그라데이션일 때, 그라데이션의 유형을 설정
	const [gradientType, setGradientType] = useState(initialGradientType.type);
	const handleGradientType = (event: SelectChangeEvent) => {
		setGradientType(event.target.value as IGradient["type"]);
		objectList.map((obj) => {
			if (
				foundFeature!._prop.guid === obj._prop.guid ||
				(obj._parent && obj._parent._prop.guid === foundFeature._prop.guid)
			) {
				obj._style.fill.gradient.type = event.target.value as IGradient["type"];
				obj.updateStyle(true);
				window.graphic.getSelectGraphicBoard().undoRedoSave();
			}
		});
	};

	// 생성된 도형이 그라데이션일 때, 그라데이션으로 표출할 색상들을 선정하여 담아줌
	const [gradientColors, setGradientColors] = useState(initialGradientType.color);
	const [stopPoints, setStopPoints] = useState(initialGradientType.stopPoint);
	const [selectedGradient, setSelectedGradient] = useState(0);

	const handleStopPoint = (event: Event, newValue: number | number[]) => {
		const arr = [...stopPoints];
		arr[selectedGradient] = (newValue as number) / 100;
		setStopPoints(arr);
		objectList.map((obj) => {
			if (
				foundFeature!._prop.guid === obj._prop.guid ||
				(obj._parent && obj._parent._prop.guid === foundFeature._prop.guid)
			) {
				obj._style.fill.gradient.stopPoint = arr;
				obj.updateStyle(true);
				window.graphic.getSelectGraphicBoard().undoRedoSave();
			}
		});
	};

	// 그라디언트 컬러를 더 추가할 때 씀
	const handleAddGradientColor = () => {
		const defaultColor = [0, 0, 0, 0.85];
		setGradientColors((colors) => [...colors, defaultColor]);
		setStopPoints((points) => [...points, 1]);
		objectList.map((obj) => {
			if (
				foundFeature!._prop.guid === obj._prop.guid ||
				(obj._parent && obj._parent._prop.guid === foundFeature._prop.guid)
			) {
				obj._style.fill.gradient.stopPoint.push(1);
				obj._style.fill.gradient.color.push(defaultColor);
				obj.updateStyle(true);
				window.graphic.getSelectGraphicBoard().undoRedoSave();
			}
		});
	};

	// 생성된 그라디언트 칩을 지울 때 사용함
	const handleDeleteGradientColor = () => {
		if (gradientColors.length < 2) {
			return toastShow({
				title: "삭제 불가",
				message: "그라디언트 색상은 최소 한개 이상입니다.",
				type: "error",
			});
		}
		setGradientColors((colors) => colors.filter((s, i) => i !== selectedGradient));
		setStopPoints((points) => points.filter((s, i) => i !== selectedGradient));
		objectList.map((obj) => {
			if (
				foundFeature!._prop.guid === obj._prop.guid ||
				(obj._parent && obj._parent._prop.guid === foundFeature._prop.guid)
			) {
				obj._style.fill.gradient.stopPoint.filter((s, i) => i !== selectedGradient);
				obj._style.fill.gradient.color.filter((s, i) => i !== selectedGradient);
				obj.updateStyle(true);
				window.graphic.getSelectGraphicBoard().undoRedoSave();
			}
		});
	};

	// 선택된 그라디언트의 컬러를 핸들링함
	const [selectedGradientColor, setSelectedGradientColor] = useColor(
		"hex",
		GraphicUtil.rgb2hex(initialGradientType.color[0]),
	);
	const handleGradientColor = (color: Color) => {
		setSelectedGradientColor(color);
		const arr = [...gradientColors];
		arr[selectedGradient] = graphicUtil.hex2rgb(color.hex);
		setGradientColors(arr);

		objectList.map((obj) => {
			if (
				foundFeature!._prop.guid === obj._prop.guid ||
				(obj._parent && obj._parent._prop.guid === foundFeature._prop.guid)
			) {
				obj._style.fill.gradient.color = arr;
				obj.updateStyle(true);
				window.graphic.getSelectGraphicBoard().undoRedoSave();
			}
		});
	};

	// 그라디언트 중 한개의 색상에 대한 불투명도 핸들링
	const [selectedGradientOpacity, setSelectedGradientOpacity] = useState(
		initialGradientType.color[0][3] * 100,
	);
	const handleGradientOpacity = (event: Event, newValue: number | number[]) => {
		const arr = [...gradientColors];
		arr[selectedGradient][3] = (newValue as number) / 100;
		setGradientColors(arr);

		objectList.map((obj) => {
			if (
				foundFeature!._prop.guid === obj._prop.guid ||
				(obj._parent && obj._parent._prop.guid === foundFeature._prop.guid)
			) {
				obj._style.fill.gradient.color = arr;
				obj.updateStyle(true);
				window.graphic.getSelectGraphicBoard().undoRedoSave();
			}
		});
		setSelectedGradientOpacity(newValue as number);
	};

	// 사각형일 때 모서리를 둥글게 함
	const [radius, setRadius] = useState(initialRadius);

	const handleRadius = (event: ChangeEvent<HTMLInputElement>) => {
		setRadius(Number(event.target.value));
		objectList!.map((obj) => {
			if (
				foundFeature!._prop.guid === obj._prop.guid ||
				(obj._parent && obj._parent._prop.guid === foundFeature._prop.guid)
			) {
				obj._prop.radius = Number(event.target.value);
				obj.updateStyle(true);
				window.graphic.getSelectGraphicBoard().undoRedoSave();
			}
		});
	};

	// 도형이 arc 일 때 모양을 지정할 수 있음
	const returnArcValues = [
		{ id: 0, line: 1, fill: 2, name: "Type 1" },
		{ id: 1, line: 1, fill: 3, name: "Type 2" },
		{ id: 2, line: 2, fill: 2, name: "Type 3" },
		{ id: 3, line: 3, fill: 2, name: "Type 4" },
	];

	const [arcType, setArcType] = useState<number>(
		returnArcValues.find((re) => re.line === initialArcLineType && re.fill === initialArcFillType)
			?.id || 0,
	);
	const handleArcType = (event: SelectChangeEvent) => {
		const value = Number(event.target.value);

		const found = returnArcValues.find((re) => re.id === value);
		setArcType(value);
		objectList!.map((obj) => {
			if (
				foundFeature!._prop.guid === obj._prop.guid ||
				(obj._parent && obj._parent._prop.guid === foundFeature._prop.guid)
			) {
				obj._prop.lineType = found?.line;
				obj._prop.fillType = found?.fill;

				obj.updateStyle(true);
				window.graphic.getSelectGraphicBoard().undoRedoSave();
			}
		});
	};

	return (
		<Root>
			<Typography variant="body2" gutterBottom sx={{ mt: 1, mb: 2, fontWeight: 600 }}>
				{feature?._prop.name} 채움 속성
			</Typography>
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
				<FeatureGradientTypeHandler
					gradientType={gradientType}
					handleGradientType={handleGradientType}
					handleAddGradientColor={handleAddGradientColor}
					gradientColors={gradientColors}
					graphicUtil={graphicUtil}
					onClickChip={(index: number) => {
						const colorToShow = toColor("hex", graphicUtil.rgb2hex(gradientColors[index]));
						setSelectedGradientColor(colorToShow);
						setSelectedGradient(index);
						setSelectedGradientOpacity(gradientColors[index][3] * 100);
					}}
					onDeleteChip={(index: number) => {
						setSelectedGradient(index);
						handleDeleteGradientColor();
					}}
					selectedGradient={selectedGradient}
					selectedGradientColor={selectedGradientColor}
					stopPoints={stopPoints}
					handleStopPoint={handleStopPoint}
					selectedGradientOpacity={selectedGradientOpacity}
					handleGradientOpacity={handleGradientOpacity}
					handleGradientColor={handleGradientColor}
				/>
			)}
			{typeOfFeature === "rectangle" && (
				<SpaceBetweenTextBox title="모서리 반경(Radius)" marginBottom={10}>
					<TextInput
						type="number"
						variant="outlined"
						value={radius}
						size="small"
						onChange={handleRadius}
						InputProps={{
							endAdornment: <InputAdornment position="end">px</InputAdornment>,
						}}
					/>
				</SpaceBetweenTextBox>
			)}
			{typeOfFeature === "arc" && (
				<SpaceBetweenTextBox title="원호 모양" marginBottom={16}>
					<FormControl fullWidth>
						<Select
							size="small"
							labelId="arc-type-select"
							id="arc-type-select"
							value={String(arcType)}
							onChange={handleArcType}
						>
							{returnArcValues.map((a) => (
								<MenuItem key={a.id} value={a.id}>
									{a.name}
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
