import { styled, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { BasicSymbolColorType, milColorHandler } from "../../utils/milColorHandler";

interface TableHelperTextProps {
	type: "percentage" | "text";
	percentType?: PercentTypeElement[];
}

interface ColorPercentageProps {
	percentType: PercentTypeElement[];
}

interface PercentTypeElement {
	percent: string;
	desc: string;
	isDash: boolean;
	color: BasicSymbolColorType;
}

/**
 * 범례(도움말) 중 퍼센티지에 따른 색상을 안내하기 위한 컴포넌트
 * @returns {JSX.Element} React Component(div)
 */
const ColorPercentage = ({ percentType }: ColorPercentageProps) => {
	return (
		<Root>
			{percentType.map((p) => (
				<ColorWrapper key={p.color}>
					{p.isDash ? (
						<HorizontalRuleIcon sx={{ color: milColorHandler(p.color) }} fontSize="small" />
					) : (
						<CircleIcon sx={{ color: milColorHandler(p.color) }} fontSize="small" />
					)}
					<div>
						<Typography sx={{ pl: 1 }} variant="subtitle2">
							{p.percent}
						</Typography>
						<Typography sx={{ pl: 1 }} variant="subtitle2">
							{p.desc}
						</Typography>
					</div>
				</ColorWrapper>
			))}
		</Root>
	);
};

/**
 * 디폴트 값. 가장 많이 쓰는 값으로 이것을 설정해두면 별도로 나중에 쓰지 않아도 이 값이 유지됨
 */
const defaultPercentType: PercentTypeElement[] = [
	{ percent: "100 - 75%", desc: "정상", isDash: false, color: "G" },
	{ percent: "74 - 60%", desc: "경고", isDash: false, color: "Y" },
	{ percent: "59 - 50%", desc: "위험", isDash: false, color: "R" },
	{ percent: "49% 이하", desc: "낮음", isDash: true, color: "X" },
];

/**
 * 테이블 표시 시 범례를 표시하는 컴포넌트로, 주로 퍼센티지별 색상 및 범위를 표시함
 * - type을 percentage로 설정하면 퍼센티지를 표시하는 형식의 범례가 구성됨. 기타 type은 추후 추가 예정임
 * - percentType은 각각의 범례마다 표기하는 텍스트가 다르므르, percentage 선택 시 입력해주어야 함. 입력하지 않을 시 기본으로 설정된 값이 뜨게 됨.
 * @param TableHelperTextProps TableHelperTextProps
 * @returns React.Element
 */
const TableHelperText = ({ type, percentType = defaultPercentType }: TableHelperTextProps) => {
	const helperType = (value: string) => {
		switch (value) {
			case "percentage": {
				return <ColorPercentage percentType={percentType} />;
			}
			default:
				return;
		}
	};

	return <HelperWrapper sx={{ mb: 1 }}>{helperType(type)}</HelperWrapper>;
};

export default TableHelperText;

const Root = styled("div")(() => ({
	display: "flex",
	justifyContent: "space-between",
}));

const ColorWrapper = styled("div")(() => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	paddingRight: 10,
}));

const HelperWrapper = styled("div")(({ theme }) => ({
	padding: 6,
	borderRadius: 4,
	border: `1px solid ${theme.palette.divider}`,
}));
