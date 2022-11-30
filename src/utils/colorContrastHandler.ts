/**
 * 특정 백그라운드 색상이 밝거나 어두울 때, 그에 대비되는 폰트 색상을 정해주어야 할 때가 있음.
 * 만약 아래와 같이 계산한 결과가 true라면 어두운 계열이고, 반대는 밝은 계열임.
 * 어두운 계열일 경우 하얀색 폰트 색상을 지정해주면 되겠음.
 * @param rgba number[]
 * @returns boolean
 */
export const isDarkColor = (rgba: number[]): boolean =>
	rgba[0] * 0.299 + rgba[1] * 0.587 + rgba[1] * 0.114 < 186;
