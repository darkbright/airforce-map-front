import D2MapModule from "../../D2MapModule";

const { ol } = D2MapModule;

/**
 * 지도 좌측 상단의 zoom in/out 버튼을 표시함.
 * 맵이 로드될 때 기본으로 켜짐.
 */
export const showZoomControl = () => {
	window.map.addControl(new ol.control.Zoom());
};

/**
 * 지도 좌측 상단의 zoom in/out 버튼을 지움
 * 즉, ol controls에서 zoom 관련 항목을 array에서 지움
 * @returns void
 */
export const removeZoomInControls = () =>
	window.map?.getControls().forEach(function (control: any) {
		if (control instanceof ol.control.Zoom) {
			window.map.removeControl(control);
		}
	}, this);

/**
 * zoom in/out 버튼이 지도 위에 표시되고 있는지 확인
 * 즉, ol.controls array에 zoom 관련 컨트롤 object가 등록되어 있는지 확인
 * @returns {boolean | undefined} boolean
 */
export const isZoomControlOn = () => {
	let isOn;
	window.map?.getControls().forEach(function (control: any) {
		if (control instanceof ol.control.Zoom) {
			isOn = true;
		}
	});

	return isOn;
};
