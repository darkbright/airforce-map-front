import { OpenLayersStandardDataTypes } from "../../../../types/openlayers";
import D2MapModule from "../../D2MapModule";
import { simplifiedSymbolStyle } from "../styles/simplifiedSymbolStyle";

interface SetupVectorsOnPageType {
	data: OpenLayersStandardDataTypes;
	layerName: string;
}

/**
 *  데이터베이스에서 가져온 데이터를 OpenLayersStandardDataType의 형식에 맞게 변형한 후,
 *  아래의 setupVectorsOnPage를 통해 지도에 표시함.
 *
 *  두가지의 기능을 수행함.
 *  - 1. 신규 페이지 진입 시, 이전 페이지에 존재했던 vector features를 엀애줌 (layer는 전역변수이므로 페이지의 변경과는 무관하게 계속 쌓이는 구조임)
 *  - 2. 새로운 데이터를 지도에 등록해줌.
 *
 *  data는 OpenlayersStandardDataTypes 규격에 맞게 제작된 Data 형태를 의미함.
 *  layer name은 페이지별로 다르기만 하면 되지만, 일반적으로 "prototype-layer"와 같이 해당 페이지에서 가져오는 `api의 이름 - layer`와 같이 적는 것을 권장함(이러한 레이어만 별도로 다뤄야 할 것을 대비하여)
 * @param SetupVectorsOnPageType SetupVectorsOnPageType
 * @returns ol.layer
 */
export const setupVectorsOnPage = ({ data, layerName }: SetupVectorsOnPageType) => {
	const { ol } = D2MapModule;

	window.map.getLayers().forEach((element: any) => {
		if (element.get("type") === "vectors-on-page") {
			window.map.removeLayer(element);
		}
	});

	const olLayers = new ol.layer.Vector({
		name: layerName,
		type: "vectors-on-page",
		source: new ol.source.Vector({
			features: new ol.format.GeoJSON().readFeatures(data),
		}),
		zIndex: 500, //(디투맵 내부에서는 지도 0 ~ 99, 투명도 300 ~ 499의 인덱스를 사용한다.)
		style: simplifiedSymbolStyle,
	});
	return window.map.addLayer(olLayers);
};
