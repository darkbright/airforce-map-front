import D2MapModule from "../../D2MapModule";

const { ol } = D2MapModule;

export const setScaleLineControl = () => {
	const scale = new ol.control.ScaleLine({
		units: "metric",
		bar: true,
		steps: 2,
		text: true,
		minWidth: 80,
	});

	return scale;
};

export const showScaleControl = () => {
	window.map.addControl(setScaleLineControl());
};

// 축적표시 controls array에서 날리기
export const removeScaleInControls = () =>
	window.map?.getControls().forEach(function (control: any) {
		if (control instanceof ol.control.ScaleLine) {
			window.map.removeControl(control);
		}
	}, this);

// 축적이 버튼이 활성화되어 있는지 확인
export const isScaleControlOn = () => {
	let isOn;
	window.map?.getControls().forEach(function (control: any) {
		if (control instanceof ol.control.ScaleLine) {
			isOn = true;
		}
	});

	return isOn;
};
