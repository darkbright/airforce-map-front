import {
	Divider,
	FormControl,
	InputAdornment,
	MenuItem,
	Select,
	SelectChangeEvent,
	styled,
	Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import SpaceBetweenTextBox from "../../../../components/box/textBox/SpaceBetweenTextBox";
import TextInput from "../../../../components/form/TextInput";
import { lineArrowList } from "../../../../data/constants/lineArrowList";
import D2MapModule from "../../../../libs/d2/D2MapModule";
import { IGraphicUtil } from "../../../../types/d2/Core/IGraphicUtil";
import { IArrowType, IGraphicObject } from "../../../../types/d2/Graphic";

interface FeatureArrowHandlerProps {
	feature?: IGraphicObject;
	foundFeature: IGraphicObject;
	objectList: IGraphicObject[];
}

const { GraphicUtil } = D2MapModule;

/**
 * Polyline 선의 화살표 끝 점의 타입 및 그 크기를 설정
 * @param FeatureArrowHandlerProps FeatureArrowHandlerProps
 * @returns {JSX.Element} div
 */
const FeatureArrowHandler = ({ feature, foundFeature, objectList }: FeatureArrowHandlerProps) => {
	const { begin: initialBeginArrow, end: initialEndArrow } = foundFeature._style.line.arrow;

	const graphicUtil: IGraphicUtil = GraphicUtil;

	// 시작 화살표 핸들링
	const [startArrowType, setStartArrowType] = useState<IArrowType>(initialBeginArrow.type);
	const handleStartArrowType = (event: SelectChangeEvent) => {
		setStartArrowType(event.target.value as IArrowType);
		objectList.map((obj) => {
			if (
				foundFeature!._prop.guid === obj._prop.guid ||
				(obj._parent && obj._parent._prop.guid === foundFeature._prop.guid)
			) {
				obj._style.line.arrow.begin.type = event.target.value as IArrowType;
				graphicUtil.setFeatureStyle(obj);
			}
		});
	};

	// 시작 화살표 길이
	const [startArrowWidth, setStartArrowWidth] = useState<number>(initialBeginArrow.width);
	const handleStartArrowWidth = (event: ChangeEvent<HTMLInputElement>) => {
		// TO_BE_CHECKED 디투에서는 5를 못넘게 처리하던데 왜그런지 모르곘음
		setStartArrowWidth(Number(event.target.value));
		objectList.map((obj) => {
			if (
				foundFeature!._prop.guid === obj._prop.guid ||
				(obj._parent && obj._parent._prop.guid === foundFeature._prop.guid)
			) {
				obj._style.line.arrow.begin.width = Number(event.target.value);
				graphicUtil.setFeatureStyle(obj);
			}
		});
	};

	// 시작 화살표 높이(폭)
	const [startArrowHeight, setStartArrowHeight] = useState<number>(initialBeginArrow.width);
	const handleStartArrowHeight = (event: ChangeEvent<HTMLInputElement>) => {
		// TO_BE_CHECKED 디투에서는 5를 못넘게 처리하던데 왜그런지 모르곘음
		setStartArrowHeight(Number(event.target.value));
		objectList.map((obj) => {
			if (
				foundFeature!._prop.guid === obj._prop.guid ||
				(obj._parent && obj._parent._prop.guid === foundFeature._prop.guid)
			) {
				obj._style.line.arrow.begin.height = Number(event.target.value);
				graphicUtil.setFeatureStyle(obj);
			}
		});
	};

	// 끝 화살표 핸들링
	const [endArrowType, setEndArrowType] = useState<IArrowType>(initialEndArrow.type);
	const handleEndArrowType = (event: SelectChangeEvent) => {
		setEndArrowType(event.target.value as IArrowType);
		objectList.map((obj) => {
			if (
				foundFeature!._prop.guid === obj._prop.guid ||
				(obj._parent && obj._parent._prop.guid === foundFeature._prop.guid)
			) {
				obj._style.line.arrow.end.type = event.target.value as IArrowType;
				graphicUtil.setFeatureStyle(obj);
			}
		});
	};

	// 끝 화살표 길이
	const [endArrowWidth, setEndArrowWidth] = useState<number>(initialEndArrow.width);
	const handleEndArrowWidth = (event: ChangeEvent<HTMLInputElement>) => {
		// TO_BE_CHECKED 디투에서는 5를 못넘게 처리하던데 왜그런지 모르곘음
		setEndArrowWidth(Number(event.target.value));
		objectList.map((obj) => {
			if (
				foundFeature!._prop.guid === obj._prop.guid ||
				(obj._parent && obj._parent._prop.guid === foundFeature._prop.guid)
			) {
				obj._style.line.arrow.end.width = Number(event.target.value);
				graphicUtil.setFeatureStyle(obj);
			}
		});
	};

	// 끝 화살표 높이(폭)
	const [endArrowHeight, setEndArrowHeight] = useState<number>(initialEndArrow.width);
	const handleEndArrowHeight = (event: ChangeEvent<HTMLInputElement>) => {
		// TO_BE_CHECKED 디투에서는 5를 못넘게 처리하던데 왜그런지 모르곘음
		setEndArrowHeight(Number(event.target.value));
		objectList.map((obj) => {
			if (
				foundFeature!._prop.guid === obj._prop.guid ||
				(obj._parent && obj._parent._prop.guid === foundFeature._prop.guid)
			) {
				obj._style.line.arrow.end.height = Number(event.target.value);
				graphicUtil.setFeatureStyle(obj);
			}
		});
	};

	return (
		<Root>
			<Typography variant="body2" gutterBottom sx={{ mt: 1, mb: 2, fontWeight: 600 }}>
				{feature?._prop.name} 화살표 속성
			</Typography>
			<SpaceBetweenTextBox title="시작 화살표 타입" marginBottom={16}>
				<FormControl fullWidth>
					<Select
						size="small"
						labelId="start-arrow-type-select"
						id="start-arrow-type-select"
						value={startArrowType}
						onChange={handleStartArrowType}
					>
						{lineArrowList.map((l) => (
							<MenuItem key={l.type} value={l.type}>
								{l.kName}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</SpaceBetweenTextBox>
			<SpaceBetweenTextBox title="시작 화살표 길이" marginBottom={10}>
				<TextInput
					type="number"
					variant="outlined"
					value={startArrowWidth}
					size="small"
					onChange={handleStartArrowWidth}
					InputProps={{
						endAdornment: <InputAdornment position="end">px</InputAdornment>,
					}}
				/>
			</SpaceBetweenTextBox>
			<SpaceBetweenTextBox title="시작 화살표 폭" marginBottom={10}>
				<TextInput
					type="number"
					variant="outlined"
					value={startArrowHeight}
					size="small"
					onChange={handleStartArrowHeight}
					InputProps={{
						endAdornment: <InputAdornment position="end">px</InputAdornment>,
					}}
				/>
			</SpaceBetweenTextBox>
			<Divider sx={{ mt: 2, mb: 2 }} />
			{/* 끝 화살표 */}
			<SpaceBetweenTextBox title="끝 화살표 타입" marginBottom={16}>
				<FormControl fullWidth>
					<Select
						size="small"
						labelId="start-arrow-type-select"
						id="start-arrow-type-select"
						value={endArrowType}
						onChange={handleEndArrowType}
					>
						{lineArrowList.map((l) => (
							<MenuItem key={l.type} value={l.type}>
								{l.kName}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</SpaceBetweenTextBox>
			<SpaceBetweenTextBox title="끝 화살표 길이" marginBottom={10}>
				<TextInput
					type="number"
					variant="outlined"
					value={endArrowWidth}
					size="small"
					onChange={handleEndArrowWidth}
					InputProps={{
						endAdornment: <InputAdornment position="end">px</InputAdornment>,
					}}
				/>
			</SpaceBetweenTextBox>
			<SpaceBetweenTextBox title="끝 화살표 폭" marginBottom={10}>
				<TextInput
					type="number"
					variant="outlined"
					value={endArrowHeight}
					size="small"
					onChange={handleEndArrowHeight}
					InputProps={{
						endAdornment: <InputAdornment position="end">px</InputAdornment>,
					}}
				/>
			</SpaceBetweenTextBox>
		</Root>
	);
};

export default FeatureArrowHandler;

const Root = styled("div")(() => ({
	width: "100%",
}));
