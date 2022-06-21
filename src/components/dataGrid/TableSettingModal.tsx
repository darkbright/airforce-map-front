import { Slider } from "@mui/material";
import BaseBlockTitleBox from "../box/textBox/BaseBlockTitleBox";
import BaseModal from "../modal/BaseModal";

interface TableSettingModalProps {
	open: boolean;
	setOpen: (value: boolean) => void;
	currentWidth?: number; // TO_BE_CHECKED 가져올 방법이 없음
	setTableWidth?: (value: number) => void;
	currentHeight?: number; // TO_BE_CHECKED 가져올 방법이 없음
	setTableHeight?: (value: number) => void;
	currentFontSize?: number; // TO_BE_CHECKED 가져올 방법이 없음
	setTableFontSize?: (value: number) => void;
}

// 테이블(그리드) 너비, 높이 등 설정

const TableSettingModal = ({
	open,
	setOpen,
	currentWidth = 1200,
	setTableWidth,
	currentHeight = 400,
	setTableHeight,
	currentFontSize,
	setTableFontSize,
}: TableSettingModalProps) => {
	// 너비 바꾸기
	const changeWidth = (event: Event, value: number | number[]) => {
		setTableWidth!(value as number);
	};

	// 높이 바꾸기
	const changeHeight = (event: Event, value: number | number[]) => {
		setTableHeight!(value as number);
	};

	// 글씨크기 바꾸기
	const changeFontSize = (event: Event, value: number | number[]) => {
		setTableFontSize!(value as number);
	};

	return (
		<BaseModal open={open} setOpen={() => setOpen(!open)}>
			<div>
				<BaseBlockTitleBox title="테이블 너비 설정" subtitle="테이블의 너비를 설정해주세요." />
				<Slider
					aria-label="table-width-setting"
					defaultValue={currentWidth}
					valueLabelDisplay="auto"
					step={100}
					marks
					min={400}
					max={1400}
					onChange={changeWidth}
				/>
			</div>
			<div>
				<BaseBlockTitleBox title="테이블 높이 설정" subtitle="테이블의 높이를 설정해주세요." />
				<Slider
					color="secondary"
					aria-label="table-height-setting"
					defaultValue={currentHeight}
					valueLabelDisplay="auto"
					step={100}
					marks
					min={100}
					max={700}
					onChange={changeHeight}
				/>
			</div>
			<div>
				<BaseBlockTitleBox title="글씨 크기 설정" subtitle="테이블의 글씨크기를 설정해주세요" />
				<Slider
					color="primary"
					aria-label="table-fontSize-setting"
					defaultValue={currentFontSize}
					valueLabelDisplay="auto"
					step={1}
					marks
					min={13}
					max={20}
					onChange={changeFontSize}
				/>
			</div>
		</BaseModal>
	);
};

export default TableSettingModal;
