import {
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	InputAdornment,
	MenuItem,
	Select,
	SelectChangeEvent,
	styled,
	ToggleButton,
	ToggleButtonGroup,
	Tooltip,
	Typography,
} from "@mui/material";
import { ChangeEvent, MouseEvent, useState } from "react";
import { Color, useColor } from "react-color-palette";
import SpaceBetweenTextBox from "../../../../components/box/textBox/SpaceBetweenTextBox";
import {
	BaseColorPicker,
	BaseColorPickerShowDot,
} from "../../../../components/colorPicker/BaseColorPicker";
import TextInput from "../../../../components/form/TextInput";
import { FeatureFontFamilies } from "../../../../data/constants/featureFontFamilyList";
import D2MapModule from "../../../../libs/d2/D2MapModule";
import { IGraphicUtil } from "../../../../types/d2/Core/IGraphicUtil";
import {
	IFeatureFontFamily,
	IFeatureTextAlign,
	IFeatureTextVerticalALign,
	IGraphicObject,
} from "../../../../types/d2/Graphic";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";
import VerticalAlignCenterIcon from "@mui/icons-material/VerticalAlignCenter";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";
import { inputEnterCounter } from "../../../../utils/inputEnterCounter";

interface FeatureTextHandlerProp {
	feature?: IGraphicObject;
	foundFeature: IGraphicObject;
	objectList: IGraphicObject[];
}

const { GraphicUtil } = D2MapModule;

/**
 * 투명도 내 도형 및 선들에 입힐 텍스트 및 텍스트의 속성을 핸들링함
 * @param FeatureTextHandlerProp FeatureTextHandlerProp
 * @returns {JSX.Element} div
 */
const FeatureTextHandler = ({ feature, foundFeature, objectList }: FeatureTextHandlerProp) => {
	const graphicUtil: IGraphicUtil = GraphicUtil;
	const {
		color: initialColor,
		outlineColor: initialOutlineColor,
		fontSize: initialFontSize,
		font: initialFontFamily,
		bold: initialTextBold,
		directionRightToLeft: initialDirectionReversed,
		directionVertical: initialDirectionVertical,
		italic: initialTextItalic,
		textAlign: initialTextAlign,
		textBaseline: initialTextVerticalAlign,
	} = foundFeature._style.text;
	const initialText = foundFeature._prop.text;

	// 문자열 핸들링
	const [textMessage, setTextMessage] = useState<string>(initialText);
	const [entersCount, setEntersCount] = useState<number>(inputEnterCounter(initialText));
	const handleTextMessage = (event: ChangeEvent<HTMLInputElement>) => {
		setTextMessage(event.target.value);
		setEntersCount(inputEnterCounter(event.target.value));
		objectList!.map((obj) => {
			if (foundFeature._prop.guid === obj._prop.guid) {
				obj._prop.text = event.target.value;
				graphicUtil.setFeatureStyle(obj);
			}
		});
	};

	// 폰트 컬러 핸들링
	const [openColorPicker, setOpenColorPicker] = useState(false);
	const [textColor, setTextColor] = useColor("hex", graphicUtil.rgb2hex(initialColor));
	const handleTextColor = (color: Color) => {
		setTextColor(color);
		objectList.map((obj) => {
			if (foundFeature._prop.guid === obj._prop.guid) {
				obj._style.text.color = graphicUtil.hex2rgb(color.hex);
				graphicUtil.setFeatureStyle(obj);
			}
		});
	};

	// 아웃라인 컬러 핸들링
	const [openOutlineColorPicker, setOpenOutlineColorPicker] = useState(false);
	const [textOutlineColor, setTextOutlineColor] = useColor(
		"hex",
		graphicUtil.rgb2hex(initialOutlineColor),
	);
	const handleOutlineTextColor = (color: Color) => {
		setTextOutlineColor(color);
		objectList.map((obj) => {
			if (foundFeature._prop.guid === obj._prop.guid) {
				obj._style.text.outlineColor = graphicUtil.hex2rgb(color.hex);
				graphicUtil.setFeatureStyle(obj);
			}
		});
	};

	// 폰트 패밀리
	const [textFontFamily, setTextFontFamily] = useState<IFeatureFontFamily>(initialFontFamily);
	const handleFontFamily = (event: SelectChangeEvent) => {
		setTextFontFamily(event.target.value as IFeatureFontFamily);
		objectList.map((obj) => {
			if (foundFeature._prop.guid === obj._prop.guid) {
				obj._style.text.font = event.target.value as IFeatureFontFamily;
				graphicUtil.setFeatureStyle(obj);
			}
		});
	};

	// 텍스트 크기
	const [textSize, setTextSize] = useState<number>(initialFontSize);
	const handleTextSize = (event: ChangeEvent<HTMLInputElement>) => {
		setTextSize(Number(event.target.value));
		objectList.map((obj) => {
			if (foundFeature._prop.guid === obj._prop.guid) {
				obj._style.text.fontSize = Number(event.target.value);
				graphicUtil.setFeatureStyle(obj);
			}
		});
	};

	// 텍스트 굵게
	const [isTextBold, setIsTextBold] = useState(initialTextBold);
	const handleTextBold = (event: ChangeEvent<HTMLInputElement>) => {
		setIsTextBold(event.target.checked);
		objectList.map((obj) => {
			if (foundFeature._prop.guid === obj._prop.guid) {
				obj._style.text.bold = event.target.checked;
				graphicUtil.setFeatureStyle(obj);
			}
		});
	};

	// 텍스트 우에서 좌로
	// TO_BE_CHECKED - 작동 안함
	const [isTextReversed, setIsTextReversed] = useState<boolean>(initialDirectionReversed);
	const handleTextReversed = (event: ChangeEvent<HTMLInputElement>) => {
		setIsTextReversed(event.target.checked);
		objectList.map((obj) => {
			if (foundFeature._prop.guid === obj._prop.guid) {
				obj._style.text.directionRightToLeft = event.target.checked;
				graphicUtil.setFeatureStyle(obj);
			}
		});
	};

	// 텍스트 기울임
	const [isTextItalic, setIsTextItalic] = useState<boolean>(initialTextItalic);
	const handleTextItalic = (event: ChangeEvent<HTMLInputElement>) => {
		setIsTextItalic(event.target.checked);
		objectList.map((obj) => {
			if (foundFeature._prop.guid === obj._prop.guid) {
				obj._style.text.italic = event.target.checked;
				graphicUtil.setFeatureStyle(obj);
			}
		});
	};

	// 텍스트 세로방향
	const [isTextVertical, setIsTextVertical] = useState<boolean>(initialDirectionVertical);
	const handleTextVertical = (event: ChangeEvent<HTMLInputElement>) => {
		setIsTextVertical(event.target.checked);
		objectList.map((obj) => {
			if (foundFeature._prop.guid === obj._prop.guid) {
				obj._style.text.directionVertical = event.target.checked;
				graphicUtil.setFeatureStyle(obj);
			}
		});
	};

	// 정렬
	const [textAlign, setTextAlign] = useState<IFeatureTextAlign>(initialTextAlign);
	const handleTextAlign = (event: MouseEvent<HTMLElement>, selected: IFeatureTextAlign) => {
		objectList!.map((obj) => {
			if (foundFeature!._prop.guid === obj._prop.guid) {
				obj._style.text.textAlign = selected;
				setTextAlign(selected);
				graphicUtil.setFeatureStyle(obj);
			}
		});
	};

	const [textVerticalAlign, setTextVerticalAlign] =
		useState<IFeatureTextVerticalALign>(initialTextVerticalAlign);
	const handleTextVerticalAlign = (
		event: MouseEvent<HTMLElement>,
		selected: IFeatureTextVerticalALign,
	) => {
		objectList!.map((obj) => {
			if (foundFeature!._prop.guid === obj._prop.guid) {
				obj._style.text.textBaseline = selected;
				setTextVerticalAlign(selected);
				graphicUtil.setFeatureStyle(obj);
			}
		});
	};

	return (
		<Root>
			<Typography variant="body2" gutterBottom sx={{ mt: 1, mb: 2, fontWeight: 600 }}>
				{feature?._prop.name} 텍스트 속성
			</Typography>
			<div style={{ marginBottom: 10 }}>
				<Typography variant="body1" gutterBottom sx={{ mb: 2 }}>
					입력할 문자
				</Typography>
				<TextInput
					type="text"
					multiline
					maxRows={4}
					variant="outlined"
					value={textMessage}
					size="small"
					onChange={handleTextMessage}
				/>
			</div>

			<SpaceBetweenTextBox title="텍스트 색상" marginBottom={10}>
				<BaseColorPickerShowDot
					color={textColor.hex}
					clickable
					circleSize="large"
					onClick={() => setOpenColorPicker(true)}
				/>
			</SpaceBetweenTextBox>
			<SpaceBetweenTextBox title="텍스트 아웃라인 색상" marginBottom={10}>
				<BaseColorPickerShowDot
					color={textOutlineColor.hex}
					clickable
					circleSize="large"
					onClick={() => setOpenOutlineColorPicker(true)}
				/>
			</SpaceBetweenTextBox>
			<SpaceBetweenTextBox title="텍스트 크기" marginBottom={10}>
				<TextInput
					type="number"
					variant="outlined"
					value={textSize}
					size="small"
					disabled={textMessage.length === 0}
					onChange={handleTextSize}
					InputProps={{
						endAdornment: <InputAdornment position="end">px</InputAdornment>,
					}}
				/>
			</SpaceBetweenTextBox>
			<SpaceBetweenTextBox title="글꼴" marginBottom={16}>
				<FormControl fullWidth>
					<Select
						size="small"
						labelId="start-arrow-type-select"
						id="start-arrow-type-select"
						value={textFontFamily}
						onChange={handleFontFamily}
						disabled={textMessage.length === 0}
					>
						{FeatureFontFamilies.map((f) => (
							<MenuItem key={f} value={f}>
								{f}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</SpaceBetweenTextBox>

			<SpaceBetweenTextBox title="가로 정렬" marginBottom={10}>
				<ToggleButtonGroup
					value={textAlign}
					exclusive
					disabled={textMessage.length === 0}
					onChange={handleTextAlign}
					aria-label="text-alignment"
					size="small"
				>
					<ToggleButton sx={{ lineHeight: 1 }} value="left" aria-label="left">
						<Tooltip title="좌측">
							<div>
								<FormatAlignLeftIcon fontSize="small" />
							</div>
						</Tooltip>
					</ToggleButton>

					<ToggleButton sx={{ lineHeight: 1 }} value="center" aria-label="center">
						<Tooltip title="중간">
							<div>
								<FormatAlignCenterIcon fontSize="small" />
							</div>
						</Tooltip>
					</ToggleButton>
					<ToggleButton sx={{ lineHeight: 1 }} value="right" aria-label="right">
						<Tooltip title="우측">
							<div>
								<FormatAlignRightIcon fontSize="small" />
							</div>
						</Tooltip>
					</ToggleButton>
				</ToggleButtonGroup>
			</SpaceBetweenTextBox>
			<SpaceBetweenTextBox title="세로 정렬" marginBottom={10}>
				<ToggleButtonGroup
					value={textVerticalAlign}
					exclusive
					disabled={textMessage.length === 0}
					onChange={handleTextVerticalAlign}
					aria-label="text-vertical-alignment"
					size="small"
				>
					<ToggleButton sx={{ lineHeight: 1 }} value="top" aria-label="top">
						<Tooltip title="상">
							<div>
								<VerticalAlignTopIcon fontSize="small" />
							</div>
						</Tooltip>
					</ToggleButton>

					<ToggleButton sx={{ lineHeight: 1 }} value="middle" aria-label="middle">
						<Tooltip title="중">
							<div>
								<VerticalAlignCenterIcon fontSize="small" />
							</div>
						</Tooltip>
					</ToggleButton>
					<ToggleButton sx={{ lineHeight: 1 }} value="bottom" aria-label="bottom">
						<Tooltip title="하">
							<div>
								<VerticalAlignBottomIcon fontSize="small" />
							</div>
						</Tooltip>
					</ToggleButton>
				</ToggleButtonGroup>
			</SpaceBetweenTextBox>
			<FormControl sx={{ width: "100%" }}>
				<FormGroup
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					<FormControlLabel
						control={
							<Checkbox
								checked={isTextBold}
								name="textBold"
								onChange={handleTextBold}
								disabled={textMessage.length === 0}
							/>
						}
						label="굵게"
					/>
					<FormControlLabel
						control={
							<Checkbox
								checked={isTextItalic}
								name="textItalic"
								onChange={handleTextItalic}
								disabled={textMessage.length === 0}
							/>
						}
						label="이탤릭"
					/>
					<FormControlLabel
						control={
							<Checkbox
								checked={isTextReversed}
								name="textItalic"
								onChange={handleTextReversed}
								disabled={isTextVertical === false || entersCount < 2 || textMessage.length === 0}
							/>
						}
						label="우철 세로쓰기"
					/>
					<FormControlLabel
						control={
							<Checkbox
								checked={isTextVertical}
								name="textVertical"
								onChange={handleTextVertical}
								disabled={textMessage.length === 0}
							/>
						}
						label="세로방향"
					/>
				</FormGroup>
			</FormControl>

			<BaseColorPicker
				openColorPicker={openColorPicker}
				setOpenColorPicker={() => setOpenColorPicker(false)}
				color={textColor}
				onColorChange={handleTextColor}
			/>
			<BaseColorPicker
				openColorPicker={openOutlineColorPicker}
				setOpenColorPicker={() => setOpenOutlineColorPicker(false)}
				color={textOutlineColor}
				onColorChange={handleOutlineTextColor}
			/>
		</Root>
	);
};

export default FeatureTextHandler;

const Root = styled("div")(() => ({
	width: "100%",
}));
