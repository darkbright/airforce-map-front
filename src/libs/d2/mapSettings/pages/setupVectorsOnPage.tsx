import { toastShow } from "../../../../components/alert/ToastMessage";
import { OpenLayersStandardDataTypes } from "../../../../types/openlayers";
import D2MapModule from "../../D2MapModule";
import { simplifiedSymbolStyle } from "../styles/simplifiedSymbolStyle";
import { basicSymbolStyle } from "../styles/basicSymbolStyle";
import { MapSymbolType } from "../../../../types/army/symbolType";
import { defaultMilitarySymbolStyle } from "../styles/militarySymbolStyle";
import { ICoordManager } from "../../../../types/d2/Core/CoordManager";
import { KOREA_CENTER_LAT, KOREA_CENTER_LON } from "../../../../data/constants/baseCoord";

interface SetupVectorsOnPageType {
	data: OpenLayersStandardDataTypes;
	layerName: string;
	favSymbol: MapSymbolType;
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
export const setupVectorsOnPage = ({ data, layerName, favSymbol }: SetupVectorsOnPageType) => {
	const { ol, CoordManager }: { ol: any; CoordManager: ICoordManager } = D2MapModule;

	const symbolType = () => {
		if (favSymbol === "basic") {
			return basicSymbolStyle;
		}
		if (favSymbol === "simplified") {
			return simplifiedSymbolStyle;
		}
		if (favSymbol === "military") {
			return defaultMilitarySymbolStyle;
		}
	};

	try {
		window.map.getLayers().forEach((element: any) => {
			if (element.get("type") === "vectors-on-page") {
				window.map.removeLayer(element);
			}
		});

		// 아래의 레이어에서 type 은 각종 레이어 종류(지도 tile 레이어, 그리기 레이어 등등) 중에 개별 페이지 내에서 지도위에 띄울 장소 좌표 및 기타 properties를 포함한 객체인 경우, 구분을 쉽게하고 레이어를 없앴다가 띄웠다가 하기 위하여 custom하게 삽입한 것이므로 건드리지 말 것.
		const olLayers = new ol.layer.Vector({
			name: layerName,
			type: "vectors-on-page",
			source: new ol.source.Vector({
				features: new ol.format.GeoJSON().readFeatures(data),
			}),
			zIndex: 500, //(지도 0 ~ 99, 투명도 300 ~ 499의 인덱스를 사용한다.)
			style: symbolType(),
		});

		// 페이지 이동 시 지도의 중심을 대한민국의 중심 좌표로 이동시킴
		CoordManager.setGeoAnimatedMoveCenter(KOREA_CENTER_LON, KOREA_CENTER_LAT, 3);

		return window.map.addLayer(olLayers);
	} catch (error) {
		return toastShow({
			title: "네트워크 에러",
			message: `에러가 발생하여 데이터를 가져올 수 없습니다.\n서버가 제대로 연결되었는지 다시 확인해주세요.`,
			type: "error",
		});
	}
};
