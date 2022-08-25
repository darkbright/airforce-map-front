import dayjs, { ConfigType, ManipulateType } from "dayjs";
import "dayjs/locale/ko";

/**
 * 데이트 변환
 * @param {ConfigType} ConfigType 각종 Data 표기 형식
 * @returns "YYYY년 MM월 DD일"
 */
export const dateOnlyFormat = (date: ConfigType) => {
	return dayjs(date).format("YYYY년 MM월 DD일");
};

/**
 * 데이트 변환
 * @param {ConfigType} ConfigType 각종 Data 표기 형식
 * @returns "YYYY-MM-DD"
 */
export const dateOnlyDashFormat = (date: ConfigType) => {
	return dayjs(date).format("YYYY-MM-DD");
};

/**
 * 데이트 변환
 * @param {ConfigType} ConfigType 각종 Data 표기 형식
 * @returns "YYYY년 MM월 DD일 (ddd) A h시 mm분"
 */
export const fullDateFormat = (date: ConfigType) => {
	return dayjs(date).format("YYYY년 MM월 DD일 (ddd) A h시 mm분");
};

/**
 * 데이트 변환
 * @param {ConfigType} ConfigType 각종 Data 표기 형식
 * @returns "YYYY-MM-DD A h:mm"
 */
export const fullDateDashFormat = (date: ConfigType) => {
	return dayjs(date).format("YYYY-MM-DD A h:mm");
};

/**
 * 데이트 변환
 * @param {ConfigType} ConfigType 각종 Data 표기 형식
 * @returns "YYYYMMDD"
 */
export const apiDateFormat = (date: ConfigType) => {
	return dayjs(date).format("YYYYMMDD");
};

/**
 * 특정 날짜에서 특정 number를 빼면 몇월 몇일인지 보여줌
 * @param {ConfigType} ConfigType 각종 Data 표기 형식
 * @returns {dayjsObject} dayjs 전용 날짜 오브젝트가 리턴됨
 */
export const subtractDate = (date: ConfigType, number: number, dateType: ManipulateType) => {
	return dayjs(date).subtract(number, dateType);
};

/**
 * 특정 날짜에서 특정 number를 더하면 몇월 몇일인지 보여줌
 * @param {ConfigType} ConfigType 각종 Data 표기 형식
 * @returns {dayjsObject} dayjs 전용 날짜 오브젝트가 리턴됨
 */
export const addDate = (date: ConfigType, number: number, type: ManipulateType = "month") => {
	return dayjs(date).add(number, type);
};

/**
 * 특정 날짜가 오늘 이전인지 알려줌
 * @param {ConfigType} ConfigType 각종 Data 표기 형식
 * @returns {boolean} 맞다면 오늘 이전이다
 */
export const isBeforeToday = (date: ConfigType) => {
	const today = new Date();
	return dayjs(date).isBefore(today);
};

/**
 * D-day 카운트
 * @param {ConfigType} ConfigType 각종 Data 표기 형식
 * @returns {number} 몇일 남았다고 숫자 알려줌
 */
export const leftDateFromToday = (date: ConfigType) => {
	const today = dayjs(new Date());
	const targetDate = dayjs(date);
	return targetDate.diff(today, "day");
};
