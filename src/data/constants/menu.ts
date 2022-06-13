export const operationSharingSystem = {
	name: "상황공유체계",
	title: "operationSharingSystem",
	subMenu: [
		{
			id: 0,
			name: "COP 환경설정",
		},
		{
			id: 1,
			name: "인사 관리",
		},
		{
			id: 2,
			name: "인사 상황도",
		},
		{
			id: 3,
			name: "군수 관리",
		},
		{
			id: 4,
			name: "군수 상황도",
		},
		{
			id: 5,
			name: "동원 관리",
		},
		{
			id: 6,
			name: "동원 상황도",
		},
		{
			id: 7,
			name: "기지방어 관리",
		},
		{
			id: 8,
			name: "기지방어 상황도",
		},
		{
			id: 9,
			name: "지휘통신 관리",
		},
		{
			id: 10,
			name: "지휘통신 상황도",
		},
		{
			id: 11,
			name: "공병 관리",
		},
		{
			id: 12,
			name: "공병 상황도",
		},
	],
};

export const COPTotalState = {
	name: "상황도종합현황",
	title: "COPTotalState",
	subMenu: [
		{
			id: 0,
			name: "메인 대시보드",
		},
		{
			id: 1,
			name: "종합상황현황",
		},
		{
			id: 2,
			name: "팝업상황도",
		},
		{
			id: 3,
			name: "상황도 종합현황관리",
		},
		{
			id: 4,
			name: "상황도 종합현황로그",
		},
	],
};

export const baseDefenseAndSecurityPolice = {
	name: "기지방어/헌병",
	title: "baseDefenseAndSecurityPolice",
	subMenu: [
		{
			id: 0,
			name: "작전현황",
		},
		{
			id: 1,
			name: "종합현황",
		},
		{
			id: 2,
			name: "전력현황",
		},
		{
			id: 3,
			name: "헌병 작전현황",
		},
	],
};

export const infoCommunication = {
	name: "정보통신",
	title: "infoCommunication",
	subMenu: [
		{
			id: 0,
			name: "종합현황",
		},
		{
			id: 1,
			name: "정보통신망",
		},
		{
			id: 2,
			name: "항행안전시설",
		},
		{
			id: 3,
			name: "사이버위협현황",
		},
		{
			id: 4,
			name: "장거리통시망",
		},
	],
};

export const mobilization = {
	name: "동원",
	title: "mobilization",
	subMenu: [
		{
			id: 0,
			name: "동원종합현황",
		},
		{
			id: 1,
			name: "동원공통작전상황도관리",
		},
	],
};

export const humanAffairs = {
	name: "인사",
	title: "humanAffairs",
	subMenu: [
		{
			id: 0,
			name: "인사상황도",
		},
		{
			id: 1,
			name: "의무현황",
		},
		{
			id: 2,
			name: "전투부대 병력종합현황",
		},
		{
			id: 3,
			name: "병력현황상황도",
		},
		{
			id: 4,
			name: "조종사종합상황도",
		},
	],
};

export const munitions = {
	name: "군수",
	title: "munitions",
	subMenu: [
		{
			id: 0,
			name: "급식",
		},
		{
			id: 1,
			name: "군수지원능력종합",
		},
		{
			id: 2,
			name: "군수지속능력종합",
		},
		{
			id: 3,
			name: "탄약",
		},
		{
			id: 4,
			name: "항공기",
		},
		{
			id: 5,
			name: "유류",
		},
		{
			id: 6,
			name: "수송",
		},
		{
			id: 7,
			name: "군수종합관리",
			subMenu: [
				{
					id: 0,
					name: "군수지원능력종합현황관리",
				},
				{
					id: 1,
					name: "군수지속능력종합현황관리",
				},
				{
					id: 2,
					name: "미공군항공기종합현황관리",
				},
				{
					id: 3,
					name: "병참선종합현황관리",
				},
			],
		},
	],
};

export const facilities = {
	name: "시설종합",
	title: "facilities",
	subMenu: [
		{
			id: 0,
			name: "활주로/비상활주로",
		},
		{
			id: 1,
			name: "기지시설",
		},
		{
			id: 2,
			name: "TBM피격현황",
		},
		{
			id: 3,
			name: "최소운영활주로선정결과",
		},
	],
};

export const aerospace = {
	name: "우주",
	title: "aerospace",
	subMenu: [
		{
			id: 0,
			name: "우주COP 관리자",
			subMenu: [
				{
					id: 0,
					name: "위성현황",
				},
				{
					id: 1,
					name: "위성현황 정보관리",
					subMenu: [
						{
							id: 0,
							name: "위성 TLE 입력",
						},
						{
							id: 1,
							name: "기본 위성 입력",
						},
						{
							id: 2,
							name: "위성상태 입력",
						},
						{
							id: 3,
							name: "위성상세정보 입력",
						},
					],
				},
				{
					id: 2,
					name: "GPS 위성신호 관리",
				},
				{
					id: 3,
					name: "GPS 정밀도",
				},
				{
					id: 4,
					name: "GPS 재밍탐지 정보관리",
				},
				{
					id: 5,
					name: "우주기상 정보 관리",
				},
				{
					id: 6,
					name: "우주정보 공유 게시판",
				},
				{
					id: 7,
					name: "우주정보 공유 로그",
				},
			],
		},
		{
			id: 1,
			name: "우주COP 사용자",
			subMenu: [
				{
					id: 0,
					name: "위성현황",
				},
				{
					id: 1,
					name: "GPS 위성신호",
				},
				{
					id: 2,
					name: "GPS 정밀도",
				},
				{
					id: 3,
					name: "GPS 재밍탐지",
				},
				{
					id: 4,
					name: "우주기상",
				},
				{
					id: 5,
					name: "우주기상 공유 게시판",
				},
			],
		},
		{
			id: 2,
			name: "전자광학위성감시체계",
			subMenu: [
				{
					id: 0,
					name: "우주전력 현황",
				},
				{
					id: 1,
					name: "자료조회",
				},
				{
					id: 2,
					name: "임무계획",
				},
			],
		},
	],
};

export const operationWeather = {
	name: "작전기상",
	title: "operationWeather",
	subMenu: [
		{
			id: 0,
			name: "기상예보 상황도",
			subMenu: [
				{
					id: 0,
					name: "오늘",
				},
				{
					id: 1,
					name: "내일",
				},
				{
					id: 2,
					name: "주간",
				},
			],
		},
		{
			id: 1,
			name: "작전기상 영향평가",
			subMenu: [
				{
					id: 0,
					name: "작전임무",
				},
				{
					id: 1,
					name: "해외기지",
				},
				{
					id: 2,
					name: "우주기상",
				},
			],
		},
		{
			id: 2,
			name: "기상지원능력 종합",
		},
		{
			id: 3,
			name: "작전기상 관리자(부대)",
			subMenu: [
				{
					id: 0,
					name: "비행장 기상영향 관리",
				},
				{
					id: 1,
					name: "기상지원능력 종합 관리",
				},
				{
					id: 2,
					name: "기지관리",
				},
				{
					id: 3,
					name: "비행장 기상영향 관리",
				},
				{
					id: 4,
					name: "기상예보 상황도 관리",
					subMenu: [
						{
							id: 0,
							name: "일일예보",
						},
						{
							id: 1,
							name: "주간예보",
						},
					],
				},
				{
					id: 5,
					name: "작전기상 영향평가 관리",
					subMenu: [
						{
							id: 0,
							name: "작전임무",
						},
						{
							id: 1,
							name: "해외기지",
						},
						{
							id: 2,
							name: "우주기상",
						},
					],
				},
				{
					id: 6,
					name: "기상지원능력 종합 관리",
				},
				{
					id: 7,
					name: "작전기상 로그",
				},
			],
		},
	],
};
