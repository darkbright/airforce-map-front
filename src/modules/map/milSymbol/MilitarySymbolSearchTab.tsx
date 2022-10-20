import { Autocomplete, CircularProgress, styled, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment, useEffect, useState } from "react";
import ShortAlert from "../../../components/alert/ShortAlert";
import {
	milSymbolTreeList,
	MilSymbolTreeListType,
} from "../../../data/constants/milSymbolTreeList";
import { getMilSymbolImage } from "../../../libs/d2/mapSettings/milSymbols/getMilSymbolImage";
import { ModifiedMilSymboListType } from "./MilitarySymbolListTreeDrawer";
import SingleMilitarySymbolBox from "./SingleMilitarySymbolBox";

interface MilitarySymbolSearchTabProps {
	selectedMilSymbol: ModifiedMilSymboListType;
	setSelectedMilSymbol: (value: ModifiedMilSymboListType) => void;
	onClickSingleSymbolBox: () => void;
}

/**
 * 군대부호명 또는 군대부호 기호명을 넣어 서칭할 수 있는 탭
 * @param MilitarySymbolSearchTabProps MilitarySymbolSearchTabProps
 * @returns {JSX.Element} React Element(div)
 */
const MilitarySymbolSearchTab = ({
	selectedMilSymbol,
	setSelectedMilSymbol,
	onClickSingleSymbolBox,
}: MilitarySymbolSearchTabProps) => {
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

	const [autoCompleteOpen, setAutoCompleteOpen] = useState(false);

	function sleep(delay = 0) {
		return new Promise((resolve) => {
			setTimeout(resolve, delay);
		});
	}

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

	return (
		<>
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
			<SingleSymbolWrapper>
				{selectedMilSymbol && (
					<>
						<ShortAlert
							title="부호를 클릭하여 맵에 표시"
							severity="info"
							text="아래의 부호를 클릭하면 지도 위 마우스 커서가 + 모양이 되고 선택한 지점에 부호가 표시됩니다."
						/>
						<SingleMilitarySymbolBox symbol={selectedMilSymbol!} onClick={onClickSingleSymbolBox} />
					</>
				)}
			</SingleSymbolWrapper>
		</>
	);
};

export default MilitarySymbolSearchTab;

const SingleSymbolWrapper = styled("div")(() => ({
	marginTop: 20,
}));
