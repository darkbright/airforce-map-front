import setupMap from "./setupMap";
import setupOverviewMap from "./setupOverviewMap";

/**
 * window에 map 객체를 등록시키는 함수.
 * 이 함수는 최초 렌더링 시 생성됨. 따라서 useEffect를 통해 단 한번 생성해주는 것이 좋음.
 */

export default async () => {
	await setupMap();
	await setupOverviewMap();
};
