import Grid from "@toast-ui/react-grid";

const SampleTable = () => {
	const data = [
		{
			type: "F-15K",
			second: 100,
			loss: 4,
			hold: 10,
			notWorking: 5,
			working: 10,
			workingRate: 10,
			editedDate: "2020-01-03",
			editedBy: "19-000223",
			_attributes: {
				disabled: true,
			},
		},
		{
			type: "F-16K",
			second: 100,
			loss: 4,
			hold: 10,
			notWorking: 5,
			working: 10,
			workingRate: 10,
			editedDate: "2020-01-03",
			editedBy: "19-000223",
			_attributes: {
				checked: true,
				className: {
					row: ["red"],
				},
			},
		},
	];

	const columns = [
		{
			name: "type",
			header: "기종",
		},
		{ name: "second", header: "초도" },
		{ name: "loss", header: "손실" },
		{ name: "hold", header: "보유" },
		{ name: "notWorking", header: "불가동" },
		{ name: "working", header: "가동" },
		{ name: "workingRate", header: "가동률" },
		{ name: "editedDate", header: "수정일시" },
		{ name: "editedBy", header: "수정자" },
	];

	return (
		<div style={{ width: "100%", padding: "3%" }}>
			<Grid
				data={data}
				columns={columns}
				rowHeight={30}
				bodyHeight={200}
				heightResizable={true}
				rowHeaders={["rowNum", "checkbox"]}
			/>
		</div>
	);
};

export default SampleTable;
