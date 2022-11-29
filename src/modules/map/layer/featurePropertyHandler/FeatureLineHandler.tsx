import {
	Divider,
	InputAdornment,
	SelectChangeEvent,
	styled,
	ToggleButton,
	ToggleButtonGroup,
	Tooltip,
} from "@mui/material";
import { ChangeEvent, MouseEvent, useState } from "react";
import { Color, useColor } from "react-color-palette";
import DashDotDotLineIcon from "../../../../assets/icons/lineTypes/DashDotDotLineIcon";
import DashDotLineIcon from "../../../../assets/icons/lineTypes/DashDotLineIcon";
import DashLineIcon from "../../../../assets/icons/lineTypes/DashLineIcon";
import OneLineIcon from "../../../../assets/icons/lineTypes/OneLineIcon";
import BaseBlockTitleBox from "../../../../components/box/textBox/BaseBlockTitleBox";
import SpaceBetweenTextBox from "../../../../components/box/textBox/SpaceBetweenTextBox";
import TextInput from "../../../../components/form/TextInput";
import D2MapModule from "../../../../libs/d2/D2MapModule";
import { TypesOfShapeType } from "../../../../libs/d2/mapSettings/draw/TypesOfShapes";
import { IGraphicUtil } from "../../../../types/d2/Core/IGraphicUtil";
import {
	IDashLineType,
	IFeatureFillType,
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
import FeatureFillTypeHandler from "./\bcomponents/FeatureFillTypeHandler";
import FeatureSimpleColorHandler from "./\bcomponents/FeatureSimpleColorHandler";
import FeaturePatternHandler from "./\bcomponents/FeaturePatternHandler";

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
const FeatureLineHandler = ({ objectList, foundFeature }: FeatureLineHandlerProps) => {
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
			if (foundFeature!._prop.guid === obj._prop.guid) {
				obj._style.line.fill.type = newAlignment;
				graphicUtil.setFeatureStyle(obj);
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
			if (foundFeature!._prop.guid === obj._prop.guid) {
				obj._style.line.color[3] = opacityNumber;
				graphicUtil.setFeatureStyle(obj);
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
			if (foundFeature!._prop.guid === obj._prop.guid) {
				obj._style.line.fill.pattern = event.target.value as IPatternType;
				graphicUtil.setFeatureStyle(obj);
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
			if (foundFeature!._prop.guid === obj._prop.guid) {
				obj._style.line.fill.patternColor[0] = graphicUtil.hex2rgb(color.hex);
				graphicUtil.setFeatureStyle(obj);
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
			if (foundFeature!._prop.guid === obj._prop.guid) {
				obj._style.line.fill.patternColor[0][3] = opacityNumber;
				graphicUtil.setFeatureStyle(obj);
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
			if (foundFeature!._prop.guid === obj._prop.guid) {
				obj._style.line.fill.patternColor[1] = graphicUtil.hex2rgb(color.hex);
				graphicUtil.setFeatureStyle(obj);
			}
		});
	};

	// 생성된 선이 패턴일 때, 패턴의 배경 불투명도 설정
	const [patternFgOpacity, setPatternFgOpacity] = useState(
		initialFillType.patternColor[1][3] * 100,
	);
	const handlePatternFgOpacity = (event: Event, newValue: number | number[]) => {
		const opacityNumber = Number(((newValue as number) / 100).toFixed(1));
		objectList.map((obj) => {
			if (foundFeature!._prop.guid === obj._prop.guid) {
				obj._style.line.fill.patternColor[1][3] = opacityNumber;
				graphicUtil.setFeatureStyle(obj);
			}
		});
		setPatternFgOpacity(newValue as number);
	};

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

	// 겹선 핸들링
	const [multiLine, setMultiLine] = useState(initialMultiLine);
	const changeMultiLine = (
		event: MouseEvent<HTMLElement>,
		selected: "line-1" | "line-2" | "line-3" | "line-4" | "line-5",
	) => {
		objectList.map((obj) => {
			if (foundFeature._prop.guid === obj._prop.guid) {
				const foundMultiline =
					multiLineTypes.find((multi) => multi.id === selected)?.type || undefined;
				obj._style.line.doubleLine = foundMultiline;
				if (selected === "line-1") {
					obj._style.line.dash = undefined;
					setMultiLine(undefined);
				} else {
					setMultiLine(foundMultiline);
				}
				graphicUtil.setFeatureStyle(obj);
			}
		});
	};

	return (
		<Root>
			<BaseBlockTitleBox title="선 속성" />
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
			<SpaceBetweenTextBox title="겹선 종류" marginBottom={10}>
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
}));
