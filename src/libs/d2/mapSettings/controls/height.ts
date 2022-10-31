interface GetHeightType {
	lon: number;
	lat: number;
}

/**
 * 고도는 getHeight라는 함수를 써야 하는데,
 *  함수의 고도 부하를 줄이기 위해서 좌표 컨트롤에서는 조금 다른 방식을 쓰고 있느 것 같음. 이걸 밖으로 뺄 수는 없으니 d2에 얘기해야 함.
 * @param param0
 * @returns
 */
export const getHeight = ({ lon, lat }: GetHeightType) => {
	return { lon, lat };
};
