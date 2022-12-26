/**
 * 화면 좌측의 개별 메뉴를 구성하는 인터페이스
 */

import { ReactNode } from "react";
import MultipleTables from "../../pages/MultipleTables";
import SampleTable from "../../pages/SampleTable";
import TabSample from "../../pages/TabSample";
import Whatever from "../../pages/Whatever";
import AirportStatus from "../../pages/AirportStatus";

export interface MenuProps {
	id: string;
	name: string;
	parentUrl: string;
	type: "dir" | "page";
	element?: ReactNode;
	subMenu?: MenuProps[];
	isMapPage: boolean;
}

/**
 * 화면 좌측의 메뉴를 구성하기 위하여 URL을 갖는 개별 메뉴 Object들을 배치한 배열
 */

export const menu: MenuProps[] = [
	{
		name: "비트코인",
		id: "bitcoin",
		parentUrl: "",
		type: "dir",
		isMapPage: false,
		subMenu: [
			{
				id: "Ethereum",
				name: "이더리움",
				type: "page",
				parentUrl: "bitcoin",
				element: <AirportStatus />,
				isMapPage: true,
			},
			{
				id: "Tether",
				name: "테더",
				type: "page",
				parentUrl: "bitcoin",
				element: <Whatever />,
				isMapPage: true,
			},
			{
				id: "USDCoin",
				name: "달러 코인",
				type: "page",
				parentUrl: "bitcoin",
				element: <TabSample />,
				isMapPage: true,
			},
			{
				id: "BNB",
				name: "샘플",
				type: "page",
				parentUrl: "bitcoin",
				element: <MultipleTables />,
				isMapPage: true,
			},
			{
				id: "BianceUSD",
				name: "바이낸스 USD",
				type: "page",
				parentUrl: "bitcoin",
				element: <AirportStatus />,
				isMapPage: true,
			},
			{
				id: "XRP",
				name: "XRP",
				type: "page",
				parentUrl: "bitcoin",
				isMapPage: true,
			},
			{
				id: "Cardano",
				name: "카르다노",
				type: "page",
				parentUrl: "bitcoin",
				isMapPage: true,
			},
			{
				id: "Solana",
				name: "솔라나",
				type: "page",
				parentUrl: "bitcoin",
				isMapPage: true,
			},
			{
				id: "DogeCoin",
				name: "도지코인",
				type: "page",
				parentUrl: "bitcoin",
				isMapPage: true,
			},
			{
				id: "Dai",
				name: "다이",
				type: "page",
				parentUrl: "bitcoin",
				isMapPage: true,
			},
			{
				id: "Polkadat",
				name: "폴카닷",
				type: "page",
				parentUrl: "bitcoin",
				isMapPage: true,
			},
			{
				id: "TRON",
				name: "트론",
				type: "page",
				parentUrl: "bitcoin",
				isMapPage: true,
			},
			{
				id: "ShibaInu",
				name: "시바코인",
				type: "page",
				parentUrl: "bitcoin",
				isMapPage: true,
			},
		],
	},
	{
		name: "UNUSSEDLEO",
		id: "UNUSSEDLEO",
		type: "dir",
		parentUrl: "",
		isMapPage: false,
		subMenu: [
			{
				id: "WrappedBitcoin",
				name: "메인 대시보드",
				type: "page",
				parentUrl: "UNUSSEDLEO",
				element: <SampleTable />,
				isMapPage: false,
			},
			{
				id: "Avalanche",
				name: "아발란체",
				type: "page",
				parentUrl: "UNUSSEDLEO",
				isMapPage: true,
			},
			{
				id: "Polygon",
				name: "폴리곤",
				type: "page",
				parentUrl: "UNUSSEDLEO",
				isMapPage: true,
			},
			{
				id: "LiteCoin",
				name: "라이트코인",
				type: "page",
				parentUrl: "UNUSSEDLEO",
				isMapPage: true,
			},
			{
				id: "Uniswap",
				name: "유니스왑",
				type: "page",
				parentUrl: "UNUSSEDLEO",
				isMapPage: true,
			},
		],
	},
	{
		name: "FTX 토큰",
		id: "FTXToken",
		type: "dir",
		parentUrl: "",
		isMapPage: false,
		subMenu: [
			{
				id: "Chainlink",
				name: "체인링크",
				type: "page",
				parentUrl: "FTXToken",
				isMapPage: true,
			},
			{
				id: "Cronos",
				name: "크로노스",
				type: "page",
				parentUrl: "FTXToken",
				isMapPage: true,
			},
			{
				id: "Stellar",
				name: "스텔라",
				type: "page",
				parentUrl: "FTXToken",
				isMapPage: true,
			},
			{
				id: "NEARProtocal",
				name: "니어 프로토콜",
				type: "page",
				parentUrl: "FTXToken",
				isMapPage: true,
			},
		],
	},
	{
		name: "코스모스",
		id: "Cosmos",
		type: "dir",
		parentUrl: "",
		isMapPage: false,
		subMenu: [
			{
				id: "Algorand",
				name: "알고랜드",
				type: "page",
				parentUrl: "Cosmos",
				isMapPage: true,
			},
			{
				id: "Monero",
				name: "모네로",
				type: "page",
				parentUrl: "Cosmos",
				isMapPage: true,
			},
			{
				id: "BitcoinCash",
				name: "비트코인캐시",
				type: "page",
				parentUrl: "Cosmos",
				isMapPage: true,
			},
			{
				id: "EhereumClassic",
				name: "이더리움클래식",
				type: "page",
				parentUrl: "Cosmos",
				isMapPage: true,
			},
		],
	},
	{
		name: "비체인",
		id: "VeChain",
		type: "dir",
		parentUrl: "",
		isMapPage: false,
		subMenu: [
			{
				id: "Flow",
				name: "플로우",
				type: "page",
				parentUrl: "VeChain",
				isMapPage: true,
			},
		],
	},
	{
		name: "디센트럴랜드",
		id: "Decentraland",
		type: "dir",
		parentUrl: "",
		isMapPage: false,
		subMenu: [
			{
				id: "ApeCoin",
				name: "Ape코인",
				type: "page",
				parentUrl: "Decentraland",
				isMapPage: true,
			},
			{
				id: "Hedera",
				name: "헤데라",
				type: "page",
				parentUrl: "Decentraland",
				isMapPage: true,
			},
			{
				id: "TheSandbox",
				name: "더 샌드박스",
				type: "page",
				parentUrl: "Decentraland",
				isMapPage: true,
			},
		],
	},
	{
		name: "테조스",
		id: "Tezos",
		type: "dir",
		parentUrl: "",
		isMapPage: false,
		subMenu: [
			{
				id: "InternetComputer",
				name: "인터넷컴퓨터어쩌고",
				type: "page",
				parentUrl: "Tezos",
				isMapPage: true,
			},
			{
				id: "ThetaNetowrk",
				name: "세타네트워크",
				type: "page",
				parentUrl: "Tezos",
				isMapPage: true,
			},
			{
				id: "FileCoin",
				name: "파일코인",
				type: "page",
				parentUrl: "Tezos",
				isMapPage: true,
			},
			{
				id: "TrueUSD",
				name: "참달라",
				type: "page",
				parentUrl: "Tezos",
				isMapPage: true,
			},
			{
				id: "AxieInfinity",
				name: "엑시인피니티",
				type: "page",
				parentUrl: "Tezos",
				isMapPage: true,
			},
			{
				id: "Elrond",
				name: "엘론드",
				type: "page",
				parentUrl: "Tezos",
				isMapPage: true,
			},
			{
				id: "Helium",
				name: "군수종합관리",
				type: "dir",
				parentUrl: "Tezos",
				isMapPage: false,
				subMenu: [
					{
						id: "BitcoinSV",
						name: "비트코인SV",
						type: "page",
						parentUrl: "Tezos/Helium",
						isMapPage: true,
					},
					{
						id: "PaxDollar",
						name: "팍스달러",
						type: "page",
						parentUrl: "Tezos/Helium",
						isMapPage: true,
					},
				],
			},
		],
	},
	{
		name: "EOS",
		id: "EOS",
		type: "dir",
		parentUrl: "",
		isMapPage: false,
		subMenu: [
			{
				id: "maker",
				name: "메이커",
				type: "page",
				parentUrl: "EOS",
				isMapPage: true,
			},
		],
	},
	{
		name: "제트캐시",
		id: "Zcash",
		type: "dir",
		parentUrl: "",
		isMapPage: false,
		subMenu: [
			{
				id: "spaceCOPManager",
				name: "우주COP 관리자",
				type: "dir",
				parentUrl: "Zcash",
				isMapPage: false,
				subMenu: [
					{
						id: "SatelliteStatus",
						name: "위성현황",
						type: "page",
						parentUrl: "Zcash/spaceCOPManager",
						isMapPage: true,
					},
					{
						id: "SatelliteStatusManage",
						name: "위성현황 정보관리",
						type: "dir",
						parentUrl: "Zcash/spaceCOPManager",
						isMapPage: false,
						subMenu: [
							{
								id: "InputSatelliteTLE",
								name: "위성 TLE 입력",
								type: "page",
								parentUrl: "Zcash/spaceCOPManager/SatelliteStatusManage",
								isMapPage: true,
							},
						],
					},
					{
						id: "GPSManage",
						name: "GPS 위성신호 관리",
						type: "page",
						parentUrl: "Zcash/spaceCOPManager",
						isMapPage: true,
					},
					{
						id: "SpaceLog",
						name: "우주정보 공유 로그",
						type: "page",
						parentUrl: "Zcash/spaceCOPManager",
						isMapPage: true,
					},
				],
			},
		],
	},
	{
		name: "이캐시",
		id: "eCash",
		parentUrl: "",
		type: "dir",
		isMapPage: false,
		subMenu: [
			{
				id: "IOTA",
				name: "아이오타",
				type: "dir",
				parentUrl: "eCash",
				isMapPage: false,
				subMenu: [
					{
						id: "HuobiToken",
						name: "후오비토큰",
						type: "page",
						parentUrl: "eCash/IOTA",
						isMapPage: true,
					},
					{
						id: "tomorrow",
						name: "내일",
						type: "page",
						parentUrl: "eCash/IOTA",
						isMapPage: true,
					},
				],
			},
		],
	},
];

// 메뉴들 이름 flatten시킴.
// breadCrumb, 메누의 한국어명 찾기 등에 사용
export const flattenedMenu = (items: MenuProps[]) => {
	const result: { path: string; korean: string; isMapPage: boolean }[] = [];

	items.forEach((item) => {
		result.push({
			path: item.id,
			korean: item.name,
			isMapPage: item.isMapPage,
		});
		if (Array.isArray(item.subMenu) && item.subMenu.length > 0) {
			result.push(...flattenedMenu(item.subMenu));
		}
	});

	return result;
};

/**
 * 메뉴 목록에서 개별 id 값을 부모의 url을 포함하는 방식으로 slug 재지정하는 로직임
 * @param items  menu List를 넣으면 됨
 * @param path 생략
 * @returns idPath가 추가된 menuList
 */
export const addSlugPath = (items: MenuProps[], path = [] as any): any =>
	items.map(({ id, subMenu, ...rest }, _, __, newPath = [...path, id]) => ({
		...rest,
		id,
		idPath: newPath.join("/"),
		...(subMenu ? { subMenu: addSlugPath(subMenu, newPath) } : {}),
	}));

/**
 * Nested Route를 flat화 함
 * @param items addSlugPath에서 받은 리턴값
 * @returns { idPath: string, element: ReactNode} idPath는 전체 slug, 즉 상위 카테고리를 포괄하는 전체 url을 의미함
 */
export const flattedRoute = (items: any) => {
	const result: { idPath: string; element: ReactNode }[] = [];

	items.forEach((item: any) => {
		result.push({
			idPath: item.idPath,
			element: item.element,
		});
		if (Array.isArray(item.subMenu) && item.subMenu.length > 0) {
			result.push(...flattedRoute(item.subMenu));
		}
	});

	return result;
};
