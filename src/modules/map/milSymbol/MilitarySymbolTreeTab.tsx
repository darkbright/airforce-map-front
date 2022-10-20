import { styled } from "@mui/material";
import { useState } from "react";

import { milSymbolTreeList } from "../../../data/constants/milSymbolTreeList";
import { addMilSymbolOnMap } from "../../../libs/d2/mapSettings/draw/addMilSymbolOnMap";
import { ModifiedMilSymboListType } from "./MilitarySymbolListTreeDrawer";
import MilitarySymbolTreeItemTab from "./MilitarySymbolTreeItemTab";
import SingleMilitarySymbolBox from "./SingleMilitarySymbolBox";

export interface MilSymbolTreeType extends ModifiedMilSymboListType {
	children: MilSymbolTreeType[];
}

interface MilitarySymbolTreeTabProps {
	onSelectSymbol: () => void;
}
/**
 * 군대부호 표시 Drawer에서 군대부호트리 부분의 Tab을 핸들링함
 * @param MilitarySymbolTreeTabProps MilitarySymbolTreeTabProps
 * @returns {JSX.Element} JSX.Element(div)
 */
const MilitarySymbolTreeTab = ({ onSelectSymbol }: MilitarySymbolTreeTabProps) => {
	// flatten되어 있는 군대부호리스트를 계층구조로 변경
	const helper = milSymbolTreeList.reduce(
		(h, o) => ((h[o.id] = Object.assign({}, o)), h),
		Object.create(null),
	);
	const finalResult: MilSymbolTreeType[] = [];
	const tree: MilSymbolTreeType[] | undefined = milSymbolTreeList.reduce(
		(result: any, node: any) => {
			const current = helper[node.id];

			if (current.pId === "") {
				finalResult.push(current);
			} else {
				helper[node.pId].children || (helper[node.pId].children = []);
				helper[node.pId].children.push(current);

				return finalResult;
			}
		},
		[],
	);

	const [selectedSymbol, setSelectedSymbol] = useState<MilSymbolTreeType | null>(null);

	return (
		<>
			<SymbolBoxWrapper>
				{selectedSymbol && (
					<SingleMilitarySymbolBox
						symbol={selectedSymbol}
						onClick={() => {
							onSelectSymbol();
							addMilSymbolOnMap({ cd: selectedSymbol.cd });
						}}
					/>
				)}
			</SymbolBoxWrapper>
			<PageStructureWrapper>
				{tree?.map((m) => (
					<MilitarySymbolTreeItemTab tree={m} key={m.id} setSelectedSymbol={setSelectedSymbol} />
				))}
			</PageStructureWrapper>
		</>
	);
};

export default MilitarySymbolTreeTab;

const PageStructureWrapper = styled("div")(({ theme }) => ({
	minWidth: 240,
	padding: 20,
	background: theme.palette.background.default,
	borderRadius: 6,
}));

const SymbolBoxWrapper = styled("div")(() => ({
	marginBottom: 10,
	display: "flex",
	justifyContent: "center",
}));
