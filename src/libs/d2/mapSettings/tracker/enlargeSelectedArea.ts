import D2MapModule from "../../D2MapModule";

const { Tracker } = D2MapModule;

/**
 * 선택영역 도시비율 확대 기능
 */
export const enlargeSelectedArea = () => {
	const tracker = new Tracker(window.map);
	tracker.setStyle([255, 173, 58, 1.0], 2, [128, 128, 128, 0.2]);

	tracker.select("rectangle", false, (extent: number[]) => {
		// extent: rectangle로 하는 경우, 선택되는 범위의 상하좌우 좌표

		const mainExtent = window.map.getView().calculateExtent();
		const ratio = (mainExtent[2] - mainExtent[0]) / (extent[2] - extent[0]);
		window.map.getView().setCenter([(extent[0] + extent[2]) * 0.5, (extent[1] + extent[3]) * 0.5]);
		const scale = Number(window.spatialMath.getMapScale().replace(/,/g, "")) / ratio;
		window.spatialMath.setMapScale(scale);
		tracker.handlerClear();
	});
};
