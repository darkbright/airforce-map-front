import DataGridTitleBox from "../components/box/textBox/DataGridTitleBox";
import BaseDataGrid from "../components/dataGrid/BaseDataGrid";

const SampleTable = () => {
	return (
		<div style={{ width: "1300px", padding: "3%" }}>
			<DataGridTitleBox />
			<BaseDataGrid />
		</div>
	);
};

export default SampleTable;
