import DataGridTitleBox from "../components/box/textBox/DataGridTitleBox";
import BaseDataGrid from "../components/dataGrid/BaseDataGrid";

/**
 * 테스트용 페이지 - 추가하지 마세요
 * @returns
 */
const SampleTable = () => {
	return (
		<div style={{ position: "absolute", top: 170, left: 250 }}>
			<DataGridTitleBox />
			<BaseDataGrid />
		</div>
	);
};

export default SampleTable;
