import { mapGridLayerListType } from "../../../../data/constants/mapGridLayerList";
import D2MapModule from "../../D2MapModule";
import { GridStyle } from "./gridStyle";

interface FeatureValues {
	// 하기의 properties 내용은 Map Server에서 정의되어 전달되므로 front에서 수정 불가함.
	properties_: {
		Label: string;
		// utm인 경우에만 해당되는 내용으로, layer의 이름은 D2에서 정의한 이름으로 바꿔선 안되는 듯
		layer: "UTM_20000_Label";
		name: string;
	};
	type_: "Point" | "Polygon" | "LineString";
}

const { ol } = D2MapModule;

/**
 * 🌐 격자 무늬로 지도 위에 각 좌표 타입별로 생성되는 선을 제작하는 함수.
 *
 * Lonlat, GeoRef, MGRS 등의 개별 설정 값에 따라 다른 그리드가 로드됨.
 * @param gridLayer data/mapLayerList의 배열 내 객체를 넣어주면 됨
 */
export const gridGenerator = ({ url, name, maxZoom, minZoom }: mapGridLayerListType) => {
	const grid = new ol.layer.VectorTile({
		source: new ol.source.VectorTile({
			format: new ol.format.MVT(),
			url,
			minZoom,
			maxZoom,
		}),
		name,
		visible: true,
		zIndex: 101,
	});
	grid.styleProperty = new GridStyle();
	grid.setStyle((feature: FeatureValues) => {
		const { type_: type, properties_: properties } = feature;

		// Label 표시
		if (
			grid.styleProperty.getLabelVisible() &&
			type === "Point" &&
			properties.Label !== undefined
		) {
			// GRID의 종류가 UTM인 경우 해당
			if (properties.layer === "UTM_20000_Label" && properties.name !== undefined) {
				grid.styleProperty.label.getText().setText(properties.name);
				return grid.styleProperty.label;
			}

			grid.styleProperty.label.getText().setText(properties.Label);
			return grid.styleProperty.label;
		}
		if (type === "Polygon" || type === "LineString") {
			return grid.styleProperty.grid;
		}
	});
	window.map.addLayer(grid);
	window.mapLayerManager.addLayer(name, false, grid);
};
