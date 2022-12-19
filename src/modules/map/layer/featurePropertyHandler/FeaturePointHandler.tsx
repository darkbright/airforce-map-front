import {
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
import D2MapModule from "../../../../libs/d2/D2MapModule";
import { IGraphicUtil } from "../../../../types/d2/Core/IGraphicUtil";
import { IFeaturePointType, IGraphicObject } from "../../../../types/d2/Graphic";

import { featurePointTypeList } from "../../../../data/constants/featurePointTypeList";
import TextInput from "../../../../components/form/TextInput";

interface FeaturePointHandlerProps {
	// 리액트 상태 관리용
	feature?: IGraphicObject;
	// window.graphic 내의 객체
	foundFeature: IGraphicObject;
	// 전체 objectList
	objectList: IGraphicObject[];
}

const { GraphicUtil } = D2MapModule;

/**
 * 도형이 점 타입인 경우 점의 사이즈와 종류를 핸들링함
 * @param FeaturePointHandlerProps FeaturePointHandlerProps
 * @returns {JSX.Element} div
 */
const FeaturePointHandler = ({ feature, foundFeature, objectList }: FeaturePointHandlerProps) => {
	const graphicUtil: IGraphicUtil = GraphicUtil;
	const { type: initialType, size: initialSize } = foundFeature._style.point;

	const [pointType, setPointType] = useState(initialType);
	const handlePointType = (event: SelectChangeEvent) => {
		objectList!.map((obj) => {
			if (
				foundFeature!._prop.guid === obj._prop.guid ||
				(obj._parent && obj._parent._prop.guid === foundFeature._prop.guid)
			) {
				obj._style.point.type = event.target.value as IFeaturePointType;
				setPointType(event.target.value as IFeaturePointType);
				graphicUtil.setFeatureStyle(obj);
			}
		});
	};

	const [pointSize, setPointSize] = useState(initialSize);
	const handlePointSize = (event: ChangeEvent<HTMLInputElement>) => {
		setPointSize(Number(event.target.value));
		objectList!.map((obj) => {
			if (
				foundFeature!._prop.guid === obj._prop.guid ||
				(obj._parent && obj._parent._prop.guid === foundFeature._prop.guid)
			) {
				obj._style.point.size = Number(event.target.value);
				graphicUtil.setFeatureStyle(obj);
			}
		});
	};

	return (
		<Root>
			<Typography variant="body2" gutterBottom sx={{ mt: 1, mb: 2, fontWeight: 600 }}>
				{feature?._prop.name} 점 속성
			</Typography>
			<SpaceBetweenTextBox title="점 종류" marginBottom={16}>
				<FormControl fullWidth>
					<Select
						size="small"
						labelId="start-arrow-type-select"
						id="start-arrow-type-select"
						value={pointType}
						onChange={handlePointType}
					>
						{featurePointTypeList.map((p) => (
							<MenuItem key={p.value} value={p.value}>
								{p.name}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</SpaceBetweenTextBox>
			<SpaceBetweenTextBox title="점 크기" marginBottom={10}>
				<TextInput
					type="number"
					variant="outlined"
					value={pointSize}
					size="small"
					onChange={handlePointSize}
					InputProps={{
						endAdornment: <InputAdornment position="end">px</InputAdornment>,
					}}
				/>
			</SpaceBetweenTextBox>
		</Root>
	);
};

export default FeaturePointHandler;

const Root = styled("div")(() => ({
	width: "100%",
}));
