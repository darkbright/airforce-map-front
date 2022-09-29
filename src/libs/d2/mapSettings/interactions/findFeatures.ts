/**
 * 지도 위의 feature를  찾아내는 기능.
 *
 * 지도 위의 좌표로 된 feature를 클릭하였을 때, 해당 feature의 property를 가져올 수 있음
 * @param event click event이나, ol event의 한종류로, typescript로 정의되지 않아 any로 처리함.
 * @returns feature
 */

export const findFeatures = (event: any) => {
	return window.map.forEachFeatureAtPixel(
		event.pixel,
		(feature: any) => {
			return feature;
		},
		{
			// 맵에서 해당 좌표를 선택할 때 어디까지 반경을 클릭 예상 범위로 둘 것인지 설정하는 값. 값이 좁아질수록 그 좌표의 중심에 가깝게 클릭해야만 클릭이 됨
			hitTolerence: 5,
		},
	);
};

/**
 * 클릭한 지점의 픽셀 값을 미리 저장해두고 그 값을 가지고 feature의 속성을 찾아냄
 * @param pixel number[x, y]
 * @returns feature
 */

export const findFeaturesByPixel = (pixel: number[]) => {
	return window.map.forEachFeatureAtPixel(
		pixel,
		(feature: any) => {
			return feature;
		},
		{
			// 맵에서 해당 좌표를 선택할 때 어디까지 반경을 클릭 예상 범위로 둘 것인지 설정하는 값. 값이 좁아질수록 그 좌표의 중심에 가깝게 클릭해야만 클릭이 됨
			hitTolerence: 5,
		},
	);
};
