import {
	Divider,
	InputAdornment,
	SelectChangeEvent,
	styled,
	ToggleButton,
	ToggleButtonGroup,
	Tooltip,
	Typography,
} from "@mui/material";
import { ChangeEvent, MouseEvent, useState } from "react";
import { Color, toColor, useColor } from "react-color-palette";
import DashDotDotLineIcon from "../../../../assets/icons/lineTypes/DashDotDotLineIcon";
import DashDotLineIcon from "../../../../assets/icons/lineTypes/DashDotLineIcon";
import DashLineIcon from "../../../../assets/icons/lineTypes/DashLineIcon";
import OneLineIcon from "../../../../assets/icons/lineTypes/OneLineIcon";
import SpaceBetweenTextBox from "../../../../components/box/textBox/SpaceBetweenTextBox";
import TextInput from "../../../../components/form/TextInput";
import D2MapModule from "../../../../libs/d2/D2MapModule";
import { IGraphicUtil } from "../../../../types/d2/Core/IGraphicUtil";
import {
	IDashLineType,
	IFeatureFillType,
	IFeatureType,
	IGradient,
	IGraphicObject,
	IMultiLineType,
	IPatternType,
} from "../../../../types/d2/Graphic";
import { isArrayEqual } from "../../../../utils/compareArray";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import DensityLargeIcon from "@mui/icons-material/DensityLarge";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import FeatureFillTypeHandler from "./components/FeatureFillTypeHandler";
import FeatureSimpleColorHandler from "./components/FeatureSimpleColorHandler";
import FeaturePatternHandler from "./components/FeaturePatternHandler";
import FeatureGradientTypeHandler from "./components/FeatureGradientTypeHandler";
import { toastShow } from "../../../../components/alert/ToastMessage";
import {
	changeFeatureLineOpacity,
	changeFeatureLinePatternColor,
	changeFeatureLinePatternOpacity,
	changeFeatureLinePatternType,
	changeFeatureLineType,
} from "../../../../libs/d2/mapSettings/draw/changeFeatureStyle";

interface FeatureLineHandlerProps {
	// 리액트 상태 관리용
	feature?: IGraphicObject;
	// window.graphic 내의 객체
	foundFeature: IGraphicObject;
	// 도형의 종류
	typeOfFeature?: IFeatureType;
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

// 겹선 종류
const multiLineTypes: { id: string; type: IMultiLineType }[] = [
	{ id: "line-2", type: [0, 0.3, 0.7, 1] },
	{ id: "line-3", type: [0, 0.5, 0.75, 1] },
	{ id: "line-4", type: [0, 0.25, 0.5, 1] },
	{ id: "line-5", type: [0.0, 0.15, 0.3, 0.7, 0.85, 1.0] },
];

/**
 * 도형(Feature)의 선을 관리할 수 있도록 하는 모달 내 요소
 * @returns {JSX.Element} div
 */
const FeatureLineHandler = ({ feature, objectList, foundFeature }: FeatureLineHandlerProps) => {
	const {
		color: initialColor,
		width: initialWidth,
		type: initialLineType,
		dash: initialDashLineArray,
		doubleLine: initialMultiLine,
		fill: initialFillType,
	} = foundFeature!._style.line;

	const initialDashLineType =
		(initialDashLineArray &&
			dashLineTypes.find((d) => isArrayEqual(d.type as number[], initialDashLineArray))?.id) ||
		undefined;

	const graphicUtil: IGraphicUtil = GraphicUtil;

	// 선의 채움 종류 설정
	// simple, pattern, gradient
	const [alignment, setAlignment] = useState<IFeatureFillType | null>(initialFillType.type);
	const onFillTypeChange = (event: MouseEvent<HTMLElement>, newAlignment: IFeatureFillType) => {
		setAlignment(newAlignment);
		// 신규 값으로 바뀌면 fill의 type(IFeatureFillType - 단색이냐, 그라디언트냐 )도 그에 맞추어 변경됨.
		objectList.map((obj) => {
			if (
				foundFeature!._prop.guid === obj._prop.guid ||
				(obj._parent && obj._parent._prop.guid === foundFeature._prop.guid)
			) {
				changeFeatureLineType(obj, newAlignment);
			}
		});
	};

	// 단색 선 색상 관련
	const [lineColor, setLineColor] = useColor("hex", graphicUtil.rgb2hex(initialColor));

	// 단색 선 불투명도
	const [lineOpacity, setLineOpacity] = useState(initialColor[3] * 100);
	const handleOpacityRate = (event: Event, newValue: number | number[]) => {
		// slider의 value 값은 0~100까지이고, css opacity는 0~1 까지이므로 0.1 단위로 변환하여 지도에 적용해야 함.
		const opacityNumber = Number(((newValue as number) / 100).toFixed(1));
		objectList.map((obj) => {
			if (
				foundFeature!._prop.guid === obj._prop.guid ||
				(obj._parent && obj._parent._prop.guid === foundFeature._prop.guid)
			) {
				changeFeatureLineOpacity(obj, opacityNumber);
			}
		});
		setLineOpacity(newValue as number);
	};

	// 패턴 선 관련

	// 생성된 선의 타입이 패턴일 때, 패턴의 타입 설정
	const [fillPattern, setFillPattern] = useState<IPatternType>(initialFillType.pattern);
	const handleFillPattern = (event: SelectChangeEvent) => {
		setFillPattern(event.target.value as IPatternType);
		objectList.map((obj) => {
			if (
				foundFeature!._prop.guid === obj._prop.guid ||
				(obj._parent && obj._parent._prop.guid === foundFeature._prop.guid)
			) {
				changeFeatureLinePatternType(obj, event.target.value);
			}
		});
	};

	// 생성된 선이 패턴일 때, 패턴의 배경 색상 설정
	const [fillPatternBgColor, setFillPatternBgColor] = useColor(
		"hex",
		GraphicUtil.rgb2hex(initialFillType.patternColor[0]),
	);
	const changePatternBgColor = (color: Color) => {
		setFillPatternBgColor(color);
		objectList.map((obj) => {
			if (
				foundFeature!._prop.guid === obj._prop.guid ||
				(obj._parent && obj._parent._prop.guid === foundFeature._prop.guid)
			) {
				changeFeatureLinePatternColor(obj, "bg", color);
			}
		});
	};

	// 생성된 선이 패턴일 때, 패턴의 배경 불투명도 설정
	const [patternBgOpacity, setPatternBgOpacity] = useState(
		initialFillType.patternColor[0][3] * 100,
	);
	const handlePatternBgOpacity = (event: Event, newValue: number | number[]) => {
		const opacityNumber = Number(((newValue as number) / 100).toFixed(1));
		objectList.map((obj) => {
			if (
				foundFeature!._prop.guid === obj._prop.guid ||
				(obj._parent && obj._parent._prop.guid === foundFeature._prop.guid)
			) {
				changeFeatureLinePatternOpacity(obj, "bg", opacityNumber);
			}
		});
		setPatternBgOpacity(newValue as number);
	};

	// 생성된 선이 패턴일 때, 패턴의 전경 색상 설정
	const [fillPatternFgColor, setFillPatternFgColor] = useColor(
		"hex",
		GraphicUtil.rgb2hex(initialFillType.patternColor[1]),
	);
	const changePatternFgColor = (color: Color) => {
		setFillPatternFgColor(color);
		objectList.map((obj) => {
			if (
				foundFeature!._prop.guid === obj._prop.guid ||
				(obj._parent && obj._parent._prop.guid === foundFeature._prop.guid)
			) {
				changeFeatureLinePatternColor(obj, "fg", color);
			}
		});
	};

	// 생성된 선이 패턴일 때, 패턴의 전경 불투명도 설정
	const [patternFgOpacity, setPatternFgOpacity] = useState(
		initialFillType.patternColor[1][3] * 100,
	);
	const handlePatternFgOpacity = (event: Event, newValue: number | number[]) => {
		const opacityNumber = Number(((newValue as number) / 100).toFixed(1));
		objectList.map((obj) => {
			if (
				foundFeature!._prop.guid === obj._prop.guid ||
				(obj._parent && obj._parent._prop.guid === foundFeature._prop.guid)
			) {
				changeFeatureLinePatternOpacity(obj, "fg", opacityNumber);
			}
		});
		setPatternFgOpacity(newValue as number);
	};

	/**
	 * 그라데이션 핸들링 시작
	 */
	// 생성된 도형이 그라데이션일 때, 그라데이션의 유형을 설정
	const [gradientType, setGradientType] = useState(initialFillType.gradient.type);
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
	const [gradientColors, setGradientColors] = useState(initialFillType.gradient.color);
	const [stopPoints, setStopPoints] = useState(initialFillType.gradient.stopPoint);
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
				obj._style.line.fill.gradient.stopPoint = arr;
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
				obj._style.line.fill.gradient.stopPoint.push(1);
				obj._style.line.fill.gradient.color.push(defaultColor);
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
				obj._style.line.fill.gradient.stopPoint.filter((s, i) => i !== selectedGradient);
				obj._style.line.fill.gradient.color.filter((s, i) => i !== selectedGradient);
				obj.updateStyle(true);
				window.graphic.getSelectGraphicBoard().undoRedoSave();
			}
		});
	};

	// 선택된 그라디언트의 컬러를 핸들링함
	const [selectedGradientColor, setSelectedGradientColor] = useColor(
		"hex",
		GraphicUtil.rgb2hex(initialFillType.gradient.color[0]),
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
				obj._style.line.fill.gradient.color = arr;
				obj.updateStyle(true);
				window.graphic.getSelectGraphicBoard().undoRedoSave();
			}
		});
	};

	// 그라디언트 중 한개의 색상에 대한 불투명도 핸들링
	const [selectedGradientOpacity, setSelectedGradientOpacity] = useState(
		initialFillType.gradient.color[0][3] * 100,
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

	/**
	 * 그라데이션 핸들링 종료
	 */

	// 선 굵기 관련
	const [lineWidth, setLineWidth] = useState(initialWidth);

	// 선 종류 관련
	const [lineType, setLineType] = useState(initialLineType);
	const [dashLineType, setDashLineType] = useState(initialDashLineType);

	// 생성된 도형의 선 색상을 변경함
	const changeLineColor = (color: Color) => {
		setLineColor(color);
		objectList!.map((obj) => {
			if (
				foundFeature!._prop.guid === obj._prop.guid ||
				(obj._parent && obj._parent._prop.guid === foundFeature._prop.guid)
			) {
				obj._style.line.color = graphicUtil.hex2rgb(color.hex);
				obj.updateStyle(true);
				window.graphic.getSelectGraphicBoard().undoRedoSave();
			}
		});
	};

	// 생성된 도형의 선 굵기를 변경함
	const changeLineWidth = (event: ChangeEvent<HTMLInputElement>) => {
		setLineWidth(Number(event.target.value));
		objectList!.map((obj) => {
			if (
				foundFeature!._prop.guid === obj._prop.guid ||
				(obj._parent && obj._parent._prop.guid === foundFeature._prop.guid)
			) {
				obj._style.line.width = Number(event.target.value);
				obj.updateStyle(true);
				window.graphic.getSelectGraphicBoard().undoRedoSave();
			}
		});
	};

	// 생성된 도형의 종류를 변경함
	const changeLineType = (event: MouseEvent<HTMLElement>, selected: "simple" | "dash") => {
		objectList!.map((obj) => {
			if (
				foundFeature!._prop.guid === obj._prop.guid ||
				(obj._parent && obj._parent._prop.guid === foundFeature._prop.guid)
			) {
				obj._style.line.type = selected;
				setLineType(selected);
				if (selected === "dash") {
					obj._style.line.dash = [10, 10];
					setDashLineType("dot");
				}
				obj.updateStyle(true);
				window.graphic.getSelectGraphicBoard().undoRedoSave();
			}
		});
	};

	// 생성된 도형의 종류가 "dash"일 때, 그 점선의 종류를 결정함
	const changeDashLineType = (
		event: MouseEvent<HTMLElement>,
		selected: "dot" | "dash dot" | "dash dot dot",
	) => {
		objectList!.map((obj) => {
			if (
				foundFeature!._prop.guid === obj._prop.guid ||
				(obj._parent && obj._parent._prop.guid === foundFeature._prop.guid)
			) {
				obj._style.line.dash =
					dashLineTypes.find((dash) => dash.id === selected)?.type || undefined;
				setDashLineType(selected);
				obj.updateStyle(true);
				window.graphic.getSelectGraphicBoard().undoRedoSave();
			}
		});
	};

	// 겹선 핸들링
	const [multiLine, setMultiLine] = useState(initialMultiLine);
	const changeMultiLine = (
		event: MouseEvent<HTMLElement>,
		selected: "line-1" | "line-2" | "line-3" | "line-4" | "line-5",
	) => {
		objectList.map((obj) => {
			if (
				foundFeature!._prop.guid === obj._prop.guid ||
				(obj._parent && obj._parent._prop.guid === foundFeature._prop.guid)
			) {
				const foundMultiline =
					multiLineTypes.find((multi) => multi.id === selected)?.type || undefined;
				obj._style.line.doubleLine = foundMultiline;
				if (selected === "line-1") {
					obj._style.line.dash = undefined;
					setMultiLine(undefined);
				} else {
					setMultiLine(foundMultiline);
				}
				obj.updateStyle(true);
				window.graphic.getSelectGraphicBoard().undoRedoSave();
			}
		});
	};

	return (
		<Root>
			<Typography variant="body2" gutterBottom sx={{ mt: 1, mb: 2, fontWeight: 600 }}>
				{feature?._prop.name} 선 속성
			</Typography>
			<FeatureFillTypeHandler alignment={alignment} onFillTypeChange={onFillTypeChange} />

			{alignment === "simple" && (
				<FeatureSimpleColorHandler
					color={lineColor}
					opacity={lineOpacity}
					title="선 색상"
					handleOpacityRate={handleOpacityRate}
					changeColor={changeLineColor}
				/>
			)}
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
			<Divider sx={{ mt: 2, mb: 2 }} />
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
			<SpaceBetweenTextBox title="겹선 종류" marginBottom={15}>
				<ToggleButtonGroup
					value={multiLine}
					exclusive
					onChange={changeMultiLine}
					aria-label="multi-line-alignment"
					size="small"
				>
					<ToggleButton sx={{ lineHeight: 1 }} value="line-1" aria-label="단선">
						<Tooltip title="단선">
							<div>
								<HorizontalRuleIcon />
							</div>
						</Tooltip>
					</ToggleButton>
					<ToggleButton sx={{ lineHeight: 1 }} value="line-2" aria-label="2줄겹선">
						<Tooltip title="2줄 겹선 ">
							<div>
								<DensityLargeIcon />
							</div>
						</Tooltip>
					</ToggleButton>
					<ToggleButton sx={{ lineHeight: 1 }} value="line-3" aria-label="3줄겹선">
						<Tooltip title="3줄 겹선 ">
							<div>
								<DensityMediumIcon />
							</div>
						</Tooltip>
					</ToggleButton>
					<ToggleButton sx={{ lineHeight: 1 }} value="line-4" aria-label="4줄겹선">
						<Tooltip title="4줄 겹선 ">
							<div>
								<DensitySmallIcon />
							</div>
						</Tooltip>
					</ToggleButton>
					<ToggleButton sx={{ lineHeight: 1 }} value="line-5" aria-label="5줄겹선">
						<Tooltip title="5줄 겹선 ">
							<div>
								<FormatAlignJustifyIcon />
							</div>
						</Tooltip>
					</ToggleButton>
				</ToggleButtonGroup>
			</SpaceBetweenTextBox>
		</Root>
	);
};

export default FeatureLineHandler;

const Root = styled("div")(() => ({
	width: "100%",
	paddingBottom: 20,
}));
