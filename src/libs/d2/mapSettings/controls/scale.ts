import D2MapModule from "../../D2MapModule";

const { ol } = D2MapModule;

/**
 * @deprecated
 * 스케일(축적)을 초기 맵 객체에 구동시키는 함수
 * 현재 사용하지 않음 (window.spatialMath.getMapScale();)로 대체하여 사용.
 * @returns {object} 스케일 객체
 */
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

/**
 * 스케일(축적)을 화면에 보여줄지 설정하는 함수
 */
export const showScaleControl = () => {
	window.map.addControl(setScaleLineControl());
};

/**
 * 맵 화면에서 스케일(축적)이 표시된 부분을 지움.
 * 즉, ol.controls array에서 스케일 관련 내용을 지움
 * @returns void
 */
export const removeScaleInControls = () =>
	window.map?.getControls().forEach(function (control: any) {
		if (control instanceof ol.control.ScaleLine) {
			window.map.removeControl(control);
		}
	}, this);

// 축적이 버튼이 활성화되어 있는지 확인
/**
 * 스케일(축적)이 화면에 표시되고 있는지 여부를 확인
 * 즉, ol.controls array에 스케일 관련 내용이 있는지 확인
 * @returns {boolean | undefined} boolean
 */
export const isScaleControlOn = () => {
	let isOn;
	window.map?.getControls().forEach(function (control: any) {
		if (control instanceof ol.control.ScaleLine) {
			isOn = true;
		}
	});

	return isOn;
};
