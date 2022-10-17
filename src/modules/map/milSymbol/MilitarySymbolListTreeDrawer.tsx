import {
	Autocomplete,
	Box,
	CircularProgress,
	Drawer,
	styled,
	TextField,
	Typography,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";

import BaseBlockTitleBox from "../../../components/box/textBox/BaseBlockTitleBox";
import {
	milSymbolTreeList,
	MilSymbolTreeListType,
} from "../../../data/constants/milSymbolTreeList";
import { getMilSymbolImage } from "../../../libs/d2/mapSettings/milSymbols/getMilSymbolImage";
import SingleMilitarySymbolBox from "./SingleMilitarySymbolBox";

interface MilitarySymbolListTreeDrawerProps {
	open: boolean;
	setOpen: (set: boolean) => void;
}

export interface ModifiedMilSymboListType extends MilSymbolTreeListType {
	groupName: string;
	modifiedName: string;
	symbolImage: string;
}

const MilitarySymbolListTreeDrawer = ({ open, setOpen }: MilitarySymbolListTreeDrawerProps) => {
	const groupedSearchOptions = milSymbolTreeList.map((option) => {
		// 그룹핑을 하기 위하여 심볼리스트에서 아이디 값이 1, 2와 같이 떨어지는 값의 이름을 찾고 대분류화함. 그 이름을 기준으로 그 하위에 속하는 모든 객체들을 그룹핑함
		const groupName = option.id[0] || 1;
		const foundName =
			milSymbolTreeList.find((sym: MilSymbolTreeListType) => sym.id === groupName)?.name || "";
		// 중복되는 이름을 가리기 위하여 상위 항목의 이름 및 부호값을 로드함.
		const parentName = option.pId;
		const modifiedName = `${
			milSymbolTreeList.find((sym: MilSymbolTreeListType) => sym.id === parentName)?.name ||
			"최상위"
		} > ${option.name}  | ${option.cd}`;
		const symbolImage = getMilSymbolImage(option.cd)?.imgURL || "";

		return {
			groupName: foundName,
			modifiedName,
			symbolImage,
			...option,
		};
	});

	function sleep(delay = 0) {
		return new Promise((resolve) => {
			setTimeout(resolve, delay);
		});
	}

	const [autoCompleteOpen, setAutoCompleteOpen] = useState(false);
	const [options, setOptions] = useState<readonly ModifiedMilSymboListType[]>([]);
	const loading = autoCompleteOpen && options.length === 0;

	useEffect(() => {
		let active = true;

		if (!loading) {
			return undefined;
		}

		(async () => {
			await sleep(2);

			if (active) {
				setOptions([...groupedSearchOptions]);
			}
		})();

		return () => {
			active = false;
		};
	}, [loading]);

	useEffect(() => {
		if (!autoCompleteOpen) {
			setOptions([]);
		}
	}, [autoCompleteOpen]);

	const [selectedMilSymbol, setSelectedMilSymbol] = useState<ModifiedMilSymboListType | null>(null);

	return (
		<Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
			<Box role="milSymbolTree" sx={{ width: 500, padding: "10% 5%" }}>
				<BaseBlockTitleBox title="군대부호 찾기" subtitle="군대부호를 찾아주세요" />
				<Autocomplete
					id="milSymbolList"
					sx={{ width: "100%" }}
					open={autoCompleteOpen}
					onOpen={() => setAutoCompleteOpen(true)}
					onClose={() => setAutoCompleteOpen(false)}
					loading={loading}
					loadingText="로딩 중..."
					options={options}
					groupBy={(option) => option.groupName!}
					autoHighlight
					noOptionsText="결과가 없습니다"
					getOptionLabel={(option) => option.modifiedName}
					renderOption={(props, option) => (
						<Box component="li" {...props}>
							<img
								loading="lazy"
								style={{ width: 35, height: 35, paddingRight: 10 }}
								src={option.symbolImage}
							/>
							<Typography variant="body2">{option.modifiedName}</Typography>
						</Box>
					)}
					value={selectedMilSymbol}
					isOptionEqualToValue={(option, value) => option.modifiedName === value.modifiedName}
					onChange={(event, value) => {
						if (value) {
							setSelectedMilSymbol(value);
						}
					}}
					renderInput={(params) => (
						<TextField
							{...params}
							label="군대부호 검색"
							inputProps={{
								...params.inputProps,
								autoComplete: "new",
							}}
							InputProps={{
								...params.InputProps,
								endAdornment: (
									<Fragment>
										{loading ? <CircularProgress color="inherit" size={20} /> : null}
										{params.InputProps.endAdornment}
									</Fragment>
								),
							}}
						/>
					)}
				/>
				{/* d2에서 만든거 - 현재 필요없음 */}
				{/* <div
					id="d2map_milsymbolTree"
					className="d2map_ztree"
					onClick={() => window.MilSymbol.loadMilsymbolTree()}
				>
					ddd
				</div> */}
				<SingleSymbolWrapper>
					{selectedMilSymbol && <SingleMilitarySymbolBox symbol={selectedMilSymbol!} />}
				</SingleSymbolWrapper>
			</Box>
		</Drawer>
	);
};

export default MilitarySymbolListTreeDrawer;

const SingleSymbolWrapper = styled("div")(() => ({
	marginTop: 20,
}));