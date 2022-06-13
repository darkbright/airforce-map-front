import urlInfo from "../urlInfo";

// --------------- MVT LAYERS  ----------------------

// 육도 2.5만
export const G25K = {
	sourceUrl: urlInfo.map.mvtG25k,
	minZoom: 14,
	maxZoom: 16,
	btnName: "mvtG25K",
	url: urlInfo.mvtStyle.g25K,
};

// 공도 25만
export const A250K = {
	sourceUrl: urlInfo.map.mvtA250K,
	minZoom: 10,
	maxZoom: 12,
	btnName: "mvtA250K",
	url: urlInfo.mvtStyle.a250k,
};

// 해도 KR1
export const NAVYK1 = {
	sourceUrl: urlInfo.map.mvtKR1,
	minZoom: 7,
	maxZoom: 10,
	btnName: "mvtKR1",
	url: urlInfo.mvtStyle.kr1,
};

// 해도 KR2
export const NAVYK2 = {
	sourceUrl: urlInfo.map.mvtKR2,
	minZoom: 9,
	maxZoom: 11,
	btnName: "mvtKR2",
	url: urlInfo.mvtStyle.kr2,
};

// 해도 KR3
export const NAVYK3 = {
	sourceUrl: urlInfo.map.mvtKR3,
	minZoom: 10,
	maxZoom: 12,
	btnName: "mvtKR3",
	url: urlInfo.mvtStyle.kr3,
};

// 해도 KR4
export const NAVYK4 = {
	sourceUrl: urlInfo.map.mvtKR4,
	minZoom: 12,
	maxZoom: 14,
	btnName: "mvtKR4",
	url: urlInfo.mvtStyle.kr4,
};

// 해도 KR5
export const NAVYK5 = {
	sourceUrl: urlInfo.map.mvtKR4,
	minZoom: 14,
	maxZoom: 16,
	btnName: "mvtKR5",
	url: urlInfo.mvtStyle.kr5,
};
