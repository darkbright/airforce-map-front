import {
	Box,
	Collapse,
	IconButton,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@mui/material";
import { useState } from "react";
import CustomTable from "./CustomTable";
import SimpleTable from "./SimpleTable";
import { SimpleTableCellProgress, SimpleTableCellText } from "./SimpleTableCellDisplay";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { BasicSymbolColorType } from "../../../utils/milColorHandler";

/**
 * 테이블 형태 중, 프로그레스 바를 통해 퍼센트를 그래피컬하게 표현해주는 예시 테이블임.
 * 해당 테이블을 보고 실제 표를 구현하면 됨
 * @returns
 */

export const ProgressTable = () => {
	const data = [
		{
			name: "시설자재",
			percent: 100,
		},
		{
			name: "복구장비",
			percent: 91,
		},
		{
			name: "시설병력",
			percent: 0,
		},
	];

	return (
		<SimpleTable head={["항목", "현황"]}>
			{data.map((d) => (
				<TableRow key={d.name}>
					<SimpleTableCellText text={d.name} />
					<SimpleTableCellProgress percent={d.percent} />
				</TableRow>
			))}
		</SimpleTable>
	);
};

interface CollapsibleBodyDataType {
	area: string;
	status: BasicSymbolColorType;
}

interface CollpasedSampleDataType {
	name: string;
	amount: number;
	progress: number;
}

interface CollapsibleBodyProps {
	data: CollapsibleBodyDataType;
	subData: CollpasedSampleDataType[];
	subDataHead: string[];
}

const CollapsibleBody = ({ data, subData, subDataHead }: CollapsibleBodyProps) => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<TableRow hover key={data.area} sx={{ "& > *": { borderBottom: "unset" } }}>
				<TableCell>
					<IconButton aria-label="expand-row" size="small" onClick={() => setOpen(!open)}>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<TableCell>{data.area}</TableCell>
				<TableCell>{data.status}</TableCell>
			</TableRow>

			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<Box sx={{ margin: 1 }}>
							<CustomTable>
								<TableHead>
									<TableRow>
										{subDataHead.map((subhead) => (
											<TableCell key={subhead}>{subhead}</TableCell>
										))}
									</TableRow>
								</TableHead>
								<TableBody>
									{subData.map((sub) => (
										<TableRow hover key={sub.name}>
											<SimpleTableCellText text={sub.name} />
											<SimpleTableCellText text={`${sub.amount}개`} />
											<SimpleTableCellProgress percent={sub.progress} />
										</TableRow>
									))}
								</TableBody>
							</CustomTable>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</>
	);
};

const exampleData: CollapsibleBodyDataType[] = [
	{
		area: "경기",
		status: "B",
	},
	{
		area: "충북",
		status: "G",
	},
];

const exampleSubData: CollpasedSampleDataType[] = [
	{
		name: "평택",
		amount: 20,
		progress: 50,
	},
	{
		name: "수원",
		amount: 60,
		progress: 80,
	},
	{
		name: "서울",
		amount: 50,
		progress: 20,
	},
];

/**
 * Collapsible Table 예시임
 * @returns JSX.Element(Table)
 */
export const CollapsibleTableExample = () => {
	const head = ["", "지역", "상태"];

	return (
		<CustomTable>
			<TableHead>
				<TableRow>
					{head.map((h) => (
						<TableCell key={h}>{h}</TableCell>
					))}
				</TableRow>
			</TableHead>
			<TableBody>
				{exampleData.map((ex) => (
					<CollapsibleBody
						key={ex.area}
						data={ex}
						subData={exampleSubData}
						subDataHead={["지역명", "수량", "진척률"]}
					/>
				))}
			</TableBody>
		</CustomTable>
	);
};
