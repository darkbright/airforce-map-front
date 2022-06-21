import DataGridTitleBox from "../components/box/textBox/DataGridTitleBox";
import BaseDataGrid from "../components/dataGrid/BaseDataGrid";

const SampleTable = () => {
	return (
		<div style={{ padding: "3%", height: "auto" }}>
			<DataGridTitleBox />
			<BaseDataGrid />
		</div>
	);
};

export default SampleTable;
