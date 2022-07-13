import D2MapModule from "../../D2MapModule";

const { ol } = D2MapModule;

// 지도 좌측 상단 zoom in zoom out button 활성화
export const showZoomControl = () => {
	window.map.addControl(new ol.control.Zoom());
};

// zoom 버튼 controls array에서 날리기
export const removeZoomInControls = () =>
	window.map?.getControls().forEach(function (control: any) {
		if (control instanceof ol.control.Zoom) {
			window.map.removeControl(control);
		}
	}, this);

// zoom 버튼이 활성화되어 있는지 확인
export const isZoomControlOn = () => {
	let isOn;
	window.map?.getControls().forEach(function (control: any) {
		if (control instanceof ol.control.Zoom) {
			isOn = true;
		}
	});

	return isOn;
};
