import DataGridTitleBox from "../components/box/textBox/DataGridTitleBox";
import BaseDataGrid from "../components/dataGrid/BaseDataGrid";

const SampleTable = () => {
	return (
		<div style={{ width: "90%", padding: "3%" }}>
			<DataGridTitleBox />
			<BaseDataGrid />
		</div>
	);
};

export default SampleTable;
