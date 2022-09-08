import { Divider, TableCell, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import TableHelperText from "../components/dataGrid/TableHelperText";
import MapDataTableWrapper from "../components/map/MapDataTableWrapper";
import SimpleTable from "../components/simpleTable/SimpleTable";
import D2MapModule from "../libs/d2/D2MapModule";
import { simplifiedSymbolStyle } from "../libs/d2/mapSettings/styles/simplifiedSymbolStyle";
import { usePrototypesAll } from "../query/prototype";
import CircleIcon from "@mui/icons-material/Circle";
import { OpenLayersStandardDataTypes } from "../types/openlayers";
import { milColorHandler } from "../utils/milColorHandler";
import BaseBlockTitleBox from "../components/box/textBox/BaseBlockTitleBox";

const Main = () => {
	const { ol } = D2MapModule;
	const [openTable, setOpenTable] = useState(false);

	const [mapData, setMapData] = useState<OpenLayersStandardDataTypes | null>(null);
	const { data: prototypeData, isFetched } = usePrototypesAll();

	console.log(mapData);

	useEffect(() => {
		if (isFetched) {
			setMapData(prototypeData!);
			const olLayers = new ol.layer.Vector({
				name: "objectLayer",
				source: new ol.source.Vector({
					features: new ol.format.GeoJSON().readFeatures(prototypeData),
				}),
				zIndex: 500, //(디투맵 내부에서는 지도 0 ~ 99, 투명도 300 ~ 499의 인덱스를 사용한다.)
				style: simplifiedSymbolStyle,
			});
			return window.map.addLayer(olLayers);
		}
	}, [isFetched]);

	return (
		<>
			<MapDataTableWrapper show={openTable} setShow={() => setOpenTable(!openTable)}>
				<BaseBlockTitleBox title="전국공항상황" subtitle="상태를 보여줍니다" />
				<SimpleTable head={["지역", "상태", "이거의 형태"]}>
					{mapData?.features.map((row) => (
						<TableRow
							key={row.properties.id}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>
							<TableCell component="th" scope="row" align="center">
								{row.properties.name}
							</TableCell>
							<TableCell align="center">
								<CircleIcon
									sx={{ color: milColorHandler(row.properties.color) }}
									fontSize="small"
								/>
							</TableCell>
							<TableCell component="th" scope="row" align="center">
								{row.geometry.type}
							</TableCell>
						</TableRow>
					))}
				</SimpleTable>

				<Divider sx={{ mb: 2 }} />
				<TableHelperText type="percentage" />
			</MapDataTableWrapper>
		</>
	);
};

export default Main;
