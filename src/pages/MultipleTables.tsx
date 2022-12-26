import React, { useState } from "react";
import MapDataTableWrapper from "../components/map/MapDataTableWrapper";

const MultipleTables = () => {
	const [openTable, setOpenTable] = useState(true);

	return (
		<MapDataTableWrapper show={openTable} setShow={() => setOpenTable(!openTable)}>
			test
		</MapDataTableWrapper>
	);
};

export default MultipleTables;
