import D2MapModule from "../../D2MapModule";

const { ol } = D2MapModule;

/**
 * 그리드의 스타일을 정의하는 클라스
 */
export class GridStyle {
	distanceVisible: string | undefined;
	labelVisible: boolean;
	label: any;
	grid: any;

	constructor() {
		this.distanceVisible = undefined;
		this.labelVisible = true;
		this.label = new ol.style.Style({
			text: new ol.style.Text({
				scale: 1.3,
				fill: new ol.style.Fill({
					color: "#ffffff",
				}),
				stroke: new ol.style.Stroke({
					color: "#000000",
					width: 2,
				}),
			}),
		});
		this.grid = new ol.style.Style({
			stroke: new ol.style.Stroke({
				color: "#ffffff",
				width: 1,
			}),
		});
	}

	setGridColor = (color: string) => {
		this.grid.getStroke().setColor(color);
	};

	setLabelColor = (color: string) => {
		return this.label.getText().getFill().setColor(color);
	};

	getGridColor = () => {
		return this.grid.getStroke().getColor();
	};

	getLabelColor = () => {
		return this.label.getText().getFill().getColor();
	};

	getGridWidth = () => {
		return this.grid.getStroke().getWidth();
	};

	setGridWidth = (width: number) => {
		this.grid.getStroke().setWidth(width);
	};

	getLabelWidth = () => {
		return this.grid.getStroke().getWidth();
	};

	setLabelVisible = (labelVisible: boolean) => {
		this.labelVisible = labelVisible;
	};

	getLabelVisible = () => {
		return this.labelVisible;
	};

	getGridLineType = () => {
		return this.grid.getStroke().getLineDash();
	};

	setGridLineType = (type: number[]) => {
		return this.grid.getStroke().setLineDash(type);
	};

	/**
	 * 이거는 뭐하는건지 나중에 확인
	 * @param cid
	 * @param layerVisible
	 * @param currentDistanceVisible
	 * @param color
	 * @param labelVisible
	 * @param width
	 */
	setDistanceVisible = (
		cid: string,
		layerVisible: boolean,
		currentDistanceVisible: string,
		color: string,
		labelVisible: boolean,
		width: number,
	) => {
		if (this.distanceVisible !== undefined) {
			if (this.distanceVisible === "20") {
				window.mapLayerManager.mapLayers[`grid-sub-${cid}`].setVisible(false);
			} else {
				window.mapLayerManager.mapLayers[`grid-sub-${cid}-${this.distanceVisible}`].setVisible(
					false,
				);
			}
		}

		this.distanceVisible = currentDistanceVisible;
		const gridDistanceLayer =
			this.distanceVisible === "20"
				? window.mapLayerManager.getLayer(`grid-sub-${cid}`)
				: window.mapLayerManager.getLayer(`grid-sub-${cid}-${this.distanceVisible}`);

		gridDistanceLayer.setVisible(layerVisible);
		gridDistanceLayer.styleProperty.setLabelVisible(labelVisible);
		gridDistanceLayer.styleProperty.setGridColor(color);
		gridDistanceLayer.styleProperty.setLabelColor(color);
		gridDistanceLayer.styleProperty.setGridWidth(width);
		gridDistanceLayer.changed();
	};
}
