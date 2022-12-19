import { Checkbox, InputAdornment, styled, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import SpaceBetweenTextBox from "../../../../components/box/textBox/SpaceBetweenTextBox";
import TextInput from "../../../../components/form/TextInput";
import D2MapModule from "../../../../libs/d2/D2MapModule";
import { IGraphicUtil } from "../../../../types/d2/Core/IGraphicUtil";
import { IGraphicObject } from "../../../../types/d2/Graphic";

interface FeatureOthersHandlerProps {
	// 리액트 상태 관리용
	feature?: IGraphicObject;
	// window.graphic 내의 객체
	foundFeature: IGraphicObject;
	// 전체 objectList
	objectList: IGraphicObject[];
}

const { GraphicUtil } = D2MapModule;

const FeatureOthersHandler = ({ feature, foundFeature, objectList }: FeatureOthersHandlerProps) => {
	const graphicUtil: IGraphicUtil = GraphicUtil;
	const {
		rotate: initialRotate,
		// lock: initialLock,
		scaleLimit: initialScaleLimit,
		scaleLower: initialScaleLower,
		scaleUpper: initialScaleUpper,
		screenMode: initialScreenMode,
	} = foundFeature._prop;

	const [rotationDegree, setRotationDegree] = useState<number>(initialRotate);
	const handleRotationDegree = (event: ChangeEvent<HTMLInputElement>) => {
		const degree = Math.floor(Number(event.target.value));
		setRotationDegree(degree);
		objectList.map((obj) => {
			if (
				foundFeature!._prop.guid === obj._prop.guid ||
				(obj._parent && obj._parent._prop.guid === foundFeature._prop.guid)
			) {
				obj._prop.rotate = degree;
				obj.setRotate(degree);
				graphicUtil.setFeatureStyle(obj);
			}
		});
	};

	// 잠금 기능. 잠그면 이동도 안되고 그러는듯
	// const [isLocked, setIsLocked] = useState<boolean>(initialLock);
	// const handleLock = (event: ChangeEvent<HTMLInputElement>) => {
	// 	setIsLocked(event.target.checked);
	// 	objectList.map((obj) => {
	// 		if (foundFeature._prop.guid === obj._prop.guid) {
	// 			obj.setLock(event.target.checked);
	// 			graphicUtil.setFeatureStyle(obj);
	// 		}
	// 	});
	// };

	// 축척 설정 기능. 뭘 어떻게 한다는건지 난 잘 모르겠음
	const [isScaleLimited, setIsScaleLimited] = useState<boolean>(initialScaleLimit);
	const handleScaleLimit = (event: ChangeEvent<HTMLInputElement>) => {
		setIsScaleLimited(event.target.checked);
		objectList.map((obj) => {
			if (
				foundFeature!._prop.guid === obj._prop.guid ||
				(obj._parent && obj._parent._prop.guid === foundFeature._prop.guid)
			) {
				obj._prop.scaleLimit = event.target.checked;
				obj.updateStyle(true);
				window.graphic.getSelectGraphicBoard().undoRedoSave();
			}
		});
	};

	// 축척하한 value
	const [scaleLower, setScaleLower] = useState<number>(initialScaleLower);
	const handleScaleLower = (event: ChangeEvent<HTMLInputElement>) => {
		setScaleLower(Number(event.target.value));
		objectList.map((obj) => {
			if (
				foundFeature!._prop.guid === obj._prop.guid ||
				(obj._parent && obj._parent._prop.guid === foundFeature._prop.guid)
			) {
				// 이것의 동작원리 및 뭘 하는건지는 난 모르겠음
				obj.setScaleLimit(isScaleLimited, scaleUpper, Number(event.target.value));
				obj.updateStyle(true);
				window.graphic.getSelectGraphicBoard().undoRedoSave();
			}
		});
	};

	// 축척상한 value
	const [scaleUpper, setScaleUpper] = useState<number>(initialScaleUpper);
	const handleScaleUpper = (event: ChangeEvent<HTMLInputElement>) => {
		setScaleUpper(Number(event.target.value));
		objectList.map((obj) => {
			if (
				foundFeature!._prop.guid === obj._prop.guid ||
				(obj._parent && obj._parent._prop.guid === foundFeature._prop.guid)
			) {
				// 이것의 동작원리 및 뭘 하는건지는 난 모르겠음
				obj.setScaleLimit(isScaleLimited, Number(event.target.value), scaleLower);
				obj.updateStyle(true);
				window.graphic.getSelectGraphicBoard().undoRedoSave();
			}
		});
	};

	// 화면좌표에 도형을 고정시키기 (지도가 움직여도 도형 위치가 변하지 않음)
	const [screenMode, setScreenMode] = useState<boolean>(initialScreenMode);
	const handleScreenMode = (event: ChangeEvent<HTMLInputElement>) => {
		setScreenMode(event.target.checked);
		objectList.map((obj) => {
			if (
				foundFeature!._prop.guid === obj._prop.guid ||
				(obj._parent && obj._parent._prop.guid === foundFeature._prop.guid)
			) {
				obj.setScreenMode(event.target.checked);
				obj.updateStyle(true);
				window.graphic.getSelectGraphicBoard().undoRedoSave();
			}
		});
	};

	return (
		<Root>
			<Typography variant="body2" gutterBottom sx={{ mt: 1, mb: 2, fontWeight: 600 }}>
				{feature?._prop.name} 기타 속성
			</Typography>
			<SpaceBetweenTextBox title="회전" marginBottom={10}>
				<TextInput
					type="number"
					variant="outlined"
					value={rotationDegree}
					size="small"
					onChange={handleRotationDegree}
					InputProps={{
						endAdornment: <InputAdornment position="end">도</InputAdornment>,
					}}
				/>
			</SpaceBetweenTextBox>
			{/* 아래 기능은 global sharing이 안되고 있어 일단 중지 */}
			{/* TO_BE_CHECKED */}
			{/* <SpaceBetweenTextBox title="위치 잠금" marginBottom={10}>
				<Checkbox checked={isLocked} name="lock" onChange={handleLock} />
			</SpaceBetweenTextBox> */}
			<SpaceBetweenTextBox title="축척 설정" marginBottom={10}>
				<Checkbox checked={isScaleLimited} name="textBold" onChange={handleScaleLimit} />
			</SpaceBetweenTextBox>
			{isScaleLimited && (
				<div style={{ display: "flex", flexDirection: "row" }}>
					<TextInput
						style={{ marginRight: 4 }}
						type="number"
						variant="outlined"
						label="축척하한"
						value={scaleLower}
						size="small"
						onChange={handleScaleLower}
					/>
					<TextInput
						style={{ marginLeft: 4 }}
						type="number"
						variant="outlined"
						label="축척상한"
						value={scaleUpper}
						size="small"
						onChange={handleScaleUpper}
					/>
				</div>
			)}
			<SpaceBetweenTextBox title="화면에 고정" marginBottom={10}>
				<Checkbox checked={screenMode} name="screenMode" onChange={handleScreenMode} />
			</SpaceBetweenTextBox>
		</Root>
	);
};

export default FeatureOthersHandler;

const Root = styled("div")(() => ({
	width: "100%",
}));
