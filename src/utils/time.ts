import dayjs, { ConfigType, ManipulateType } from "dayjs";
import "dayjs/locale/ko";

export const dateOnlyFormat = (date: ConfigType) => {
	return dayjs(date).format("YYYY년 MM월 DD일");
};

export const dateOnlyDashFormat = (date: ConfigType) => {
	return dayjs(date).format("YYYY-MM-DD");
};

export const fullDateFormat = (date: ConfigType) => {
	return dayjs(date).format("YYYY년 MM월 DD일 (ddd) A h시 mm분");
};

export const fullDateDashFormat = (date: ConfigType) => {
	return dayjs(date).format("YYYY-MM-DD A h:mm");
};

// api 요청 시 보내는 string format
export const apiDateFormat = (date: ConfigType) => {
	return dayjs(date).format("YYYYMMDD");
};

export const subtractDate = (date: ConfigType, number: number, dateType: ManipulateType) => {
	return dayjs(date).subtract(number, dateType);
};

export const addDate = (date: ConfigType, number: number, type: ManipulateType = "month") => {
	return dayjs(date).add(number, type);
};

export const isBeforeToday = (date: ConfigType) => {
	const today = new Date();
	return dayjs(date).isBefore(today);
};

export const leftDateFromToday = (date: ConfigType) => {
	const today = dayjs(new Date());
	const targetDate = dayjs(date);
	return targetDate.diff(today, "day");
};
