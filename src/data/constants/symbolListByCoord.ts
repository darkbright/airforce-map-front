import { baseSymbol, rocketSymbol, satelliteDishSymbol } from "../../assets/symbols/basicSymbols";

interface coordType {
	/**
	 * unitNm : 부대명
	 */
	unitNm: string;
	/**
	 * unitCd: 부대코드
	 */
	unitCd: string;
	/**
	 * unitTp: 부대유형
	 */
	unitTp: string;
	/**
	 * baseCd: 기지코드
	 */
	baseCd: string;
	/**
	 * baseNm: 기지명
	 */
	baseNm: string;
	/**
	 * baseCoord:기지좌표
	 */
	baseCoord: string;
	/**
	 * 기본부호 svg
	 */
	basicSymbol?: string;
	/**
	 * 군대부호 svg
	 */
	milSymbol?: string;
}

/**
 * 기지/지역 등 좌표 기준으로 기지의 스펙을 정리한 배열로,
 *
 * 여기에 기본으로 띄울 심볼(기본심볼 - 최초에 뜨는 원의 모양이 아닌 공군에서 지정한 간략한 부호의 형태를 매칠시켜 그 부호를 좌표에 의거하여 찾아낼 수 있음
 */
export const symbolListByCoord: coordType[] = [
	{
		unitNm: "1전비",
		unitCd: "7000000022",
		unitTp: "W1",
		baseCd: "K57",
		baseNm: "광주",
		baseCoord: "350733N1264835E",
		basicSymbol: baseSymbol,
	},
	{
		unitNm: "재경단",
		unitCd: "111111111",
		unitTp: "W1",
		baseCd: "K57",
		baseNm: "재경단",
		baseCoord: "373023N1265545E",
		basicSymbol: baseSymbol,
	},
	{
		unitNm: "3훈비",
		unitCd: "7000000044",
		unitTp: "W1",
		baseCd: "K04",
		baseNm: "사천",
		baseCoord: "350519N1280413E",
		basicSymbol: baseSymbol,
	},
	{
		unitNm: "5비",
		unitCd: "7000000007",
		unitTp: "W1",
		baseCd: "K01",
		baseNm: "김해",
		baseCoord: "351426N1285313E",
		basicSymbol: baseSymbol,
	},
	{
		unitNm: "8전비",
		unitCd: "7000000023",
		unitTp: "W1",
		baseCd: "K46",
		baseNm: "원주",
		baseCoord: "372617N1275737E",
		basicSymbol: baseSymbol,
	},
	{
		unitNm: "10전비",
		unitCd: "7000000024",
		unitTp: "W1",
		baseCd: "K13",
		baseNm: "수원",
		baseCoord: "371422N270025E",
		basicSymbol: baseSymbol,
	},
	{
		unitNm: "11전비",
		unitCd: "7000000025",
		unitTp: "W1",
		baseCd: "K02",
		baseNm: "대구",
		baseCoord: "355339N1283932E",
		basicSymbol: baseSymbol,
	},
	{
		unitNm: "15비",
		unitCd: "7000000008",
		unitTp: "W1",
		baseCd: "K16",
		baseNm: "서울",
		baseCoord: "372645N1270650E",
		basicSymbol: satelliteDishSymbol,
	},
	{
		unitNm: "16전비",
		unitCd: "7000000026",
		unitTp: "W1",
		baseCd: "K58",
		baseNm: "예천",
		baseCoord: "363755N1282117E",
		basicSymbol: baseSymbol,
	},
	{
		unitNm: "17전비",
		unitCd: "7000000027",
		unitTp: "W1",
		baseCd: "K59",
		baseNm: "청주",
		baseCoord: "364257N1272959E",
		basicSymbol: baseSymbol,
	},
	{
		unitNm: "18전비",
		unitCd: "7000000028",
		unitTp: "W1",
		baseCd: "K18",
		baseNm: "강릉",
		baseCoord: "374513N1285637E",
		basicSymbol: baseSymbol,
	},
	{
		unitNm: "19전비",
		unitCd: "7000000029",
		unitTp: "W1",
		baseCd: "K75",
		baseNm: "중원",
		baseCoord: "370148N1275307E",
		basicSymbol: satelliteDishSymbol,
	},
	{
		unitNm: "20전비",
		unitCd: "7000000030",
		unitTp: "W1",
		baseCd: "K76",
		baseNm: "서산",
		baseCoord: "364215N262910E",
		basicSymbol: satelliteDishSymbol,
	},
	{
		unitNm: "35전대",
		unitCd: "7000000541",
		unitTp: "W1",
		baseCd: "K16",
		baseNm: "서울",
		baseCoord: "372645N1270650E",
		basicSymbol: satelliteDishSymbol,
	},
	{
		unitNm: "38전대",
		unitCd: "7000001387",
		unitTp: "W1",
		baseCd: "K08",
		baseNm: "군산",
		baseCoord: "355414N1263657E",
		basicSymbol: rocketSymbol,
	},
	{
		unitNm: "2여단",
		unitCd: "7000000040",
		unitTp: "A1",
		baseCd: "K55",
		baseNm: "오산",
		baseCoord: "370526N1270147E",
		basicSymbol: rocketSymbol,
	},

	{
		unitNm: "기동정찰사",
		unitCd: "7000014206",
		unitTp: "H1",
		baseCd: "K01",
		baseNm: "김해",
		baseCoord: "351423N1285313E",
		basicSymbol: rocketSymbol,
	},
	{
		unitNm: "작근단",
		unitCd: "7000002659",
		unitTp: "H1",
		baseCd: "K55",
		baseNm: "오산",
		baseCoord: "370526N1270147E",
		basicSymbol: rocketSymbol,
	},
	{
		unitNm: "공본",
		unitCd: "7000000002",
		unitTp: "H1",
		baseCd: "KTF",
		baseNm: "계룡대",
		baseCoord: "3618630N1271411E",
		basicSymbol: rocketSymbol,
	},
	{
		unitNm: "82창",
		unitCd: "7000003868",
		unitTp: "WX",
		baseCd: "K76",
		baseNm: "서산",
		baseCoord: "346215N1262910E",
		basicSymbol: satelliteDishSymbol,
	},
	{
		unitNm: "1관제대",
		unitCd: "7000002686",
		unitTp: "C3",
		baseCd: "FE1",
		baseNm: "중원",
		baseCoord: "360113N1284154E",
		basicSymbol: rocketSymbol,
	},
	{
		unitNm: "2관제대",
		unitCd: "7000002687",
		unitTp: "C3",
		baseCd: "FE2",
		baseNm: "대성산",
		baseCoord: "365620N1262708E",
		basicSymbol: rocketSymbol,
	},
	{
		unitNm: "3관제대",
		unitCd: "7000002688",
		unitTp: "C3",
		baseCd: "FE3",
		baseNm: "파평산",
		baseCoord: "354111N1263553E",
		basicSymbol: baseSymbol,
	},
	{
		unitNm: "5관제대",
		unitCd: "7000002689",
		unitTp: "C3",
		baseCd: "FE5",
		baseNm: "별립산",
		baseCoord: "331418N1261528E",
		basicSymbol: baseSymbol,
	},
	{
		unitNm: "302관제대대",
		unitCd: "7000002674",
		unitTp: "C3",
		baseCd: "E02",
		baseNm: "팔공산",
		baseCoord: "381350N1273234E",
		basicSymbol: baseSymbol,
	},
	{
		unitNm: "305관제대대",
		unitCd: "7000002675",
		unitTp: "C3",
		baseCd: "E05",
		baseNm: "망일산",
		baseCoord: "375425N1265229E",
		basicSymbol: baseSymbol,
	},
	{
		unitNm: "307관제대대",
		unitCd: "7000002676",
		unitTp: "C3",
		baseCd: "E07",
		baseNm: "의상봉",
		baseCoord: "373024N1305238E",
		basicSymbol: baseSymbol,
	},
	{
		unitNm: "308관제대대",
		unitCd: "7000002677",
		unitTp: "C3",
		baseCd: "E08",
		baseNm: "제주도",
		baseCoord: "374628N1262231E",
		basicSymbol: baseSymbol,
	},
	{
		unitNm: "309관제대대",
		unitCd: "7000002678",
		unitTp: "C3",
		baseCd: "E09",
		baseNm: "백령도",
		baseCoord: "345934N1275210E",
		basicSymbol: baseSymbol,
	},
	{
		unitNm: "311관제대대",
		unitCd: "7000002679",
		unitTp: "C3",
		baseCd: "E11",
		baseNm: "일월산",
		baseCoord: "385515N1242029E",
		basicSymbol: baseSymbol,
	},
	{
		unitNm: "312관제대대",
		unitCd: "7000002680",
		unitTp: "C3",
		baseCd: "E12",
		baseNm: "용문산",
		baseCoord: "393447N1281009E",
		basicSymbol: baseSymbol,
	},
	{
		unitNm: "313관제대대",
		unitCd: "7000002681",
		unitTp: "C3",
		baseCd: "E13",
		baseNm: "수리산",
		baseCoord: "375400N1272450E",
		basicSymbol: baseSymbol,
	},
	{
		unitNm: "314관제대대",
		unitCd: "7000002682",
		unitTp: "C3",
		baseCd: "E14",
		baseNm: "황병산",
		baseCoord: "382515N1242029E",
		basicSymbol: baseSymbol,
	},
	{
		unitNm: "315관제대대",
		unitCd: "7000002683",
		unitTp: "C3",
		baseCd: "E15",
		baseNm: "화악산",
		baseCoord: "365353N1275708E",
		basicSymbol: baseSymbol,
	},
	{
		unitNm: "316관제대대",
		unitCd: "7000002684",
		unitTp: "C3",
		baseCd: "E16",
		baseNm: "평성산",
		baseCoord: "370500N1270200E",
		basicSymbol: baseSymbol,
	},
	{
		unitNm: "317관제대대",
		unitCd: "7000002685",
		unitTp: "C3",
		baseCd: "E17",
		baseNm: "성거산",
		baseCoord: "355259N1281800E",
		basicSymbol: baseSymbol,
	},
	{
		unitNm: "318관제대대",
		unitCd: "7000008752",
		unitTp: "C3",
		baseCd: "E18",
		baseNm: "금오산",
		baseCoord: "370500N1270200E",
		basicSymbol: baseSymbol,
	},
	{
		unitNm: "319관제대대",
		unitCd: "7000006178",
		unitTp: "C3",
		baseCd: "E19",
		baseNm: "울릉도",
		baseCoord: "370500N1270200E",
		basicSymbol: baseSymbol,
	},
	{
		unitNm: "316관제대대",
		unitCd: "7000002684",
		unitTp: "C3",
		baseCd: "E16",
		baseNm: "평성산",
		baseCoord: "370500N1270200E",
		basicSymbol: baseSymbol,
	},
	{
		unitNm: "316관제대대",
		unitCd: "7000002684",
		unitTp: "C3",
		baseCd: "E16",
		baseNm: "평성산",
		baseCoord: "370500N1270200E",
		basicSymbol: baseSymbol,
	},
	{
		unitNm: "316관제대대",
		unitCd: "7000002684",
		unitTp: "C3",
		baseCd: "E16",
		baseNm: "평성산",
		baseCoord: "370500N1270200E",
		basicSymbol: baseSymbol,
	},
	{
		unitNm: "316관제대대",
		unitCd: "7000002684",
		unitTp: "C3",
		baseCd: "E16",
		baseNm: "평성산",
		baseCoord: "370500N1270200E",
		basicSymbol: baseSymbol,
	},
	{
		unitNm: "316관제대대",
		unitCd: "7000002684",
		unitTp: "C3",
		baseCd: "E16",
		baseNm: "평성산",
		baseCoord: "370500N1270200E",
		basicSymbol: baseSymbol,
	},
	{
		unitNm: "부대1",
		unitCd: "7100000008",
		unitTp: "C3",
		baseCd: "A03",
		baseNm: "부대1",
		baseCoord: "372200N1283600E",
		basicSymbol: baseSymbol,
	},
	{
		unitNm: "부대2",
		unitCd: "7100000003",
		unitTp: "AD",
		baseCd: "A03",
		baseNm: "부대2",
		baseCoord: "360500N1275900E",
		basicSymbol: baseSymbol,
	},
	{
		unitNm: "부대3",
		unitCd: "7100000005",
		unitTp: "AD",
		baseCd: "A04",
		baseNm: "부대3",
		baseCoord: "361900N1264400E",
		basicSymbol: baseSymbol,
	},
	{
		unitNm: "부대4",
		unitCd: "7100000001",
		unitTp: "AD",
		baseCd: "A01",
		baseNm: "부대4",
		baseCoord: "360100N1275300E",
		basicSymbol: baseSymbol,
	},
	{
		unitNm: "부대53",
		unitCd: "7100000009",
		unitTp: "AD",
		baseCd: "A08",
		baseNm: "부대53",
		baseCoord: "360000N1285000E",
		basicSymbol: baseSymbol,
	},
];
