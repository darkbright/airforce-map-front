/**
 * 화면 좌측의 개별 메뉴를 구성하는 인터페이스
 */

export interface MenuProps {
	id: string;
	name: string;
	parentUrl: string;
	type: "dir" | "page";
	subMenu?: MenuProps[];
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
		subMenu: [
			{
				id: "Ethereum",
				name: "이더리움",
				type: "page",
				parentUrl: "bitcoin",
			},
			{
				id: "Tether",
				name: "테더",
				type: "page",
				parentUrl: "bitcoin",
			},
			{
				id: "USDCoin",
				name: "달러 코인",
				type: "page",
				parentUrl: "bitcoin",
			},
			{
				id: "BNB",
				name: "BNB",
				type: "page",
				parentUrl: "bitcoin",
			},
			{
				id: "BianceUSD",
				name: "바이낸스 USD",
				type: "page",
				parentUrl: "bitcoin",
			},
			{
				id: "XRP",
				name: "XRP",
				type: "page",
				parentUrl: "bitcoin",
			},
			{
				id: "Cardano",
				name: "카르다노",
				type: "page",
				parentUrl: "bitcoin",
			},
			{
				id: "Solana",
				name: "솔라나",
				type: "page",
				parentUrl: "bitcoin",
			},
			{
				id: "DogeCoin",
				name: "도지코인",
				type: "page",
				parentUrl: "bitcoin",
			},
			{
				id: "Dai",
				name: "다이",
				type: "page",
				parentUrl: "bitcoin",
			},
			{
				id: "Polkadat",
				name: "폴카닷",
				type: "page",
				parentUrl: "bitcoin",
			},
			{
				id: "TRON",
				name: "트론",
				type: "page",
				parentUrl: "bitcoin",
			},
			{
				id: "ShibaInu",
				name: "시바코인",
				type: "page",
				parentUrl: "bitcoin",
			},
		],
	},
	{
		name: "UNUSSEDLEO",
		id: "UNUSSEDLEO",
		type: "dir",
		parentUrl: "",
		subMenu: [
			{
				id: "WrappedBitcoin",
				name: "메인 대시보드",
				type: "page",
				parentUrl: "UNUSSEDLEO",
			},
			{
				id: "Avalanche",
				name: "아발란체",
				type: "page",
				parentUrl: "UNUSSEDLEO",
			},
			{
				id: "Polygon",
				name: "폴리곤",
				type: "page",
				parentUrl: "UNUSSEDLEO",
			},
			{
				id: "LiteCoin",
				name: "라이트코인",
				type: "page",
				parentUrl: "UNUSSEDLEO",
			},
			{
				id: "Uniswap",
				name: "유니스왑",
				type: "page",
				parentUrl: "UNUSSEDLEO",
			},
		],
	},
	{
		name: "FTX 토큰",
		id: "FTXToken",
		type: "dir",
		parentUrl: "",
		subMenu: [
			{
				id: "Chainlink",
				name: "체인링크",
				type: "page",
				parentUrl: "FTXToken",
			},
			{
				id: "Cronos",
				name: "크로노스",
				type: "page",
				parentUrl: "FTXToken",
			},
			{
				id: "Stellar",
				name: "스텔라",
				type: "page",
				parentUrl: "FTXToken",
			},
			{
				id: "NEARProtocal",
				name: "니어 프로토콜",
				type: "page",
				parentUrl: "FTXToken",
			},
		],
	},
	{
		name: "코스모스",
		id: "Cosmos",
		type: "dir",
		parentUrl: "",
		subMenu: [
			{
				id: "Algorand",
				name: "알고랜드",
				type: "page",
				parentUrl: "Cosmos",
			},
			{
				id: "Monero",
				name: "모네로",
				type: "page",
				parentUrl: "Cosmos",
			},
			{
				id: "BitcoinCash",
				name: "비트코인캐시",
				type: "page",
				parentUrl: "Cosmos",
			},
			{
				id: "EhereumClassic",
				name: "이더리움클래식",
				type: "page",
				parentUrl: "Cosmos",
			},
		],
	},
	{
		name: "비체인",
		id: "VeChain",
		type: "dir",
		parentUrl: "",
		subMenu: [
			{
				id: "Flow",
				name: "플로우",
				type: "page",
				parentUrl: "VeChain",
			},
		],
	},
	{
		name: "디센트럴랜드",
		id: "Decentraland",
		type: "dir",
		parentUrl: "",
		subMenu: [
			{
				id: "ApeCoin",
				name: "Ape코인",
				type: "page",
				parentUrl: "Decentraland",
			},
			{
				id: "Hedera",
				name: "헤데라",
				type: "page",
				parentUrl: "Decentraland",
			},
			{
				id: "TheSandbox",
				name: "더 샌드박스",
				type: "page",
				parentUrl: "Decentraland",
			},
		],
	},
	{
		name: "테조스",
		id: "Tezos",
		type: "dir",
		parentUrl: "",
		subMenu: [
			{
				id: "InternetComputer",
				name: "인터넷컴퓨터어쩌고",
				type: "page",
				parentUrl: "Tezos",
			},
			{
				id: "ThetaNetowrk",
				name: "세타네트워크",
				type: "page",
				parentUrl: "Tezos",
			},
			{
				id: "FileCoin",
				name: "파일코인",
				type: "page",
				parentUrl: "Tezos",
			},
			{
				id: "TrueUSD",
				name: "참달라",
				type: "page",
				parentUrl: "Tezos",
			},
			{
				id: "AxieInfinity",
				name: "엑시인피니티",
				type: "page",
				parentUrl: "Tezos",
			},
			{
				id: "Elrond",
				name: "엘론드",
				type: "page",
				parentUrl: "Tezos",
			},
			{
				id: "Helium",
				name: "군수종합관리",
				type: "dir",
				parentUrl: "Tezos",
				subMenu: [
					{
						id: "BitcoinSV",
						name: "비트코인SV",
						type: "page",
						parentUrl: "Tezos/Helium",
					},
					{
						id: "PaxDollar",
						name: "팍스달러",
						type: "page",
						parentUrl: "Tezos/Helium",
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
		subMenu: [
			{
				id: "maker",
				name: "메이커",
				type: "page",
				parentUrl: "EOS",
			},
		],
	},
	{
		name: "제트캐시",
		id: "Zcash",
		type: "dir",
		parentUrl: "",
		subMenu: [
			{
				id: "spaceCOPManager",
				name: "우주COP 관리자",
				type: "dir",
				parentUrl: "Zcash",
				subMenu: [
					{
						id: "SatelliteStatus",
						name: "위성현황",
						type: "page",
						parentUrl: "Zcash/spaceCOPManager",
					},
					{
						id: "SatelliteStatusManage",
						name: "위성현황 정보관리",
						type: "dir",
						parentUrl: "Zcash/spaceCOPManager",
						subMenu: [
							{
								id: "InputSatelliteTLE",
								name: "위성 TLE 입력",
								type: "page",
								parentUrl: "Zcash/spaceCOPManager/SatelliteStatusManage",
							},
						],
					},
					{
						id: "GPSManage",
						name: "GPS 위성신호 관리",
						type: "page",
						parentUrl: "Zcash/spaceCOPManager",
					},
					{
						id: "SpaceLog",
						name: "우주정보 공유 로그",
						type: "page",
						parentUrl: "Zcash/spaceCOPManager",
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
		subMenu: [
			{
				id: "IOTA",
				name: "아이오타",
				type: "dir",
				parentUrl: "eCash",
				subMenu: [
					{
						id: "HuobiToken",
						name: "후오비토큰",
						type: "page",
						parentUrl: "eCash/IOTA",
					},
					{
						id: "tomorrow",
						name: "내일",
						type: "page",
						parentUrl: "eCash/IOTA",
					},
				],
			},
		],
	},
];

// 2depth 까지 이름 flatten시킴.
// breadCrumb, 메누의 한국어명 찾기 등에 사용
export const flattenedMenu = () => {
	const result: { path: string; korean: string }[] = [];

	menu.map((m) => {
		result.push({
			path: m.id,
			korean: m.name,
		});
		if (m.subMenu !== undefined) {
			m.subMenu.map((sub) => {
				result.push({
					path: sub.id,
					korean: sub.name,
				});
				if (sub.subMenu !== undefined) {
					sub.subMenu.map((subsub) => {
						result.push({
							path: subsub.id,
							korean: sub.name,
						});
					});
				}
			});
		}
	});

	return result;
};
