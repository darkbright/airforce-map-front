import D2MapModule from "../../D2MapModule";

const { ol } = D2MapModule;

export const showZoomControl = () => {
	window.map.addControl(new ol.control.Zoom());
};

export const removeZoomInControls = () =>
	window.map?.getControls().forEach(function (control: any) {
		if (control instanceof ol.control.Zoom) {
			window.map.removeControl(control);
		}
	}, this);

export const isZoomControlOn = () => {
	let isOn;
	window.map?.getControls().forEach(function (control: any) {
		if (control instanceof ol.control.Zoom) {
			isOn = true;
		}
	});

	return isOn;
};
