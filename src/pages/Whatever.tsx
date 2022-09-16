import { useEffect, useState } from "react";
import MapDataTableWrapper from "../components/map/MapDataTableWrapper";
import { setupVectorsOnPage } from "../libs/d2/mapSettings/pages/setupVectorsOnPage";
import { useWhateverAll } from "../query/whatever";
import { OpenLayersStandardFeatureTypes } from "../types/openlayers";

const Whatever = () => {
	const [openTable, setOpenTable] = useState(true);

	// 맵에 뿌려즐 전체 데이터 (DB에서 받은 데이터 그대로 보존)
	const [mapData, setMapData] = useState<OpenLayersStandardFeatureTypes[] | null | undefined>(null);
	const { data: whateverData, isFetched } = useWhateverAll();

	useEffect(() => {
		setMapData(whateverData && whateverData.features!);
		if (isFetched) {
			setupVectorsOnPage({
				data: whateverData!,
				layerName: "whatever-layer",
			});
		}
	}, [isFetched]);

	return (
		<MapDataTableWrapper show={openTable} setShow={() => setOpenTable(!openTable)}>
			test
		</MapDataTableWrapper>
	);
};

export default Whatever;
