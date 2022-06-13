export const operationSharingSystem = {
	name: "상황공유체계",
	title: "operationSharingSystem",
	subMenu: [
		{
			id: "copEnv",
			name: "COP 환경설정",
		},
		{
			id: "hr",
			name: "인사 관리",
		},
		{
			id: "hrCop",
			name: "인사 상황도",
		},
		{
			id: "munitionManagement",
			name: "군수 관리",
		},
		{
			id: "munitionCop",
			name: "군수 상황도",
		},
		{
			id: "mobilizationManage",
			name: "동원 관리",
		},
		{
			id: "mobilizationCop",
			name: "동원 상황도",
		},
		{
			id: "baseDefenceManage",
			name: "기지방어 관리",
		},
		{
			id: "baseDefenceCop",
			name: "기지방어 상황도",
		},
		{
			id: "controlCommunicationManage",
			name: "지휘통신 관리",
		},
		{
			id: "controlCommunicationCop",
			name: "지휘통신 상황도",
		},
		{
			id: "militaryEngineerManage",
			name: "공병 관리",
		},
		{
			id: "militaryEngineerCop",
			name: "공병 상황도",
		},
	],
};

export const COPTotalState = {
	name: "상황도종합현황",
	title: "COPTotalState",
	subMenu: [
		{
			id: "main",
			name: "메인 대시보드",
		},
		{
			id: "totalStatus",
			name: "종합상황현황",
		},
		{
			id: "popupCop",
			name: "팝업상황도",
		},
		{
			id: "copManagement",
			name: "상황도 종합현황관리",
		},
		{
			id: "copLog",
			name: "상황도 종합현황로그",
		},
	],
};

export const baseDefenseAndSecurityPolice = {
	name: "기지방어/헌병",
	title: "baseDefenseAndSecurityPolice",
	subMenu: [
		{
			id: "operationStatus",
			name: "작전현황",
		},
		{
			id: "totalStatus",
			name: "종합현황",
		},
		{
			id: "powerStatus",
			name: "전력현황",
		},
		{
			id: "spStatus",
			name: "헌병 작전현황",
		},
	],
};

export const infoCommunication = {
	name: "정보통신",
	title: "infoCommunication",
	subMenu: [
		{
			id: "totalStatus",
			name: "종합현황",
		},
		{
			id: "itNetwork",
			name: "정보통신망",
		},
		{
			id: "navigationSecurityFacilities",
			name: "항행안전시설",
		},
		{
			id: "cyberThreatStatus",
			name: "사이버위협현황",
		},
		{
			id: "longDistanceNetwork",
			name: "장거리통신망",
		},
	],
};

export const mobilization = {
	name: "동원",
	title: "mobilization",
	subMenu: [
		{
			id: "totalStatus",
			name: "동원종합현황",
		},
		{
			id: "commonOperationCopManage",
			name: "동원공통작전상황도관리",
		},
	],
};

export const humanAffairs = {
	name: "인사",
	title: "humanAffairs",
	subMenu: [
		{
			id: "hrCop",
			name: "인사상황도",
		},
		{
			id: "serviceStatus",
			name: "의무현황",
		},
		{
			id: "combatUnitTotalStatus",
			name: "전투부대 병력종합현황",
		},
		{
			id: "troopCop",
			name: "병력현황상황도",
		},
		{
			id: "pilotTotalStatus",
			name: "조종사종합상황도",
		},
	],
};

export const munitions = {
	name: "군수",
	title: "munitions",
	subMenu: [
		{
			id: "subsistence",
			name: "급식",
		},
		{
			id: "munitionSupportPowerTotal",
			name: "군수지원능력종합",
		},
		{
			id: "munitionSustainability",
			name: "군수지속능력종합",
		},
		{
			id: "ammunition",
			name: "탄약",
		},
		{
			id: "aircraft",
			name: "항공기",
		},
		{
			id: "fuels",
			name: "유류",
		},
		{
			id: "transportation",
			name: "수송",
		},
		{
			id: "munitionTotalManage",
			name: "군수종합관리",
			subMenu: [
				{
					id: "munitionSupportPowerTotalManage",
					name: "군수지원능력종합현황관리",
				},
				{
					id: "munitionSustainabilityTotalManage",
					name: "군수지속능력종합현황관리",
				},
				{
					id: "usAirforceTotalStatusManage",
					name: "미공군항공기종합현황관리",
				},
				{
					id: "supplyLineTotalManage",
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
			id: "runway",
			name: "활주로/비상활주로",
		},
		{
			id: "installation",
			name: "기지시설",
		},
		{
			id: "TBMAttackStatus",
			name: "TBM피격현황",
		},
		{
			id: "minimumOptRunwayResult",
			name: "최소운영활주로선정결과",
		},
	],
};

export const aerospace = {
	name: "우주",
	title: "aerospace",
	subMenu: [
		{
			id: "SpaceCOPManager",
			name: "우주COP 관리자",
			subMenu: [
				{
					id: "SatelliteStatus",
					name: "위성현황",
				},
				{
					id: "SatelliteStatusManage",
					name: "위성현황 정보관리",
					subMenu: [
						{
							id: "InputSatelliteTLE",
							name: "위성 TLE 입력",
						},
						{
							id: "InputBaseSatellite",
							name: "기본 위성 입력",
						},
						{
							id: "InputSatelliteStatus",
							name: "위성상태 입력",
						},
						{
							id: "InputSatelliteInfo",
							name: "위성상세정보 입력",
						},
					],
				},
				{
					id: "GPSManage",
					name: "GPS 위성신호 관리",
				},
				{
					id: "GPSAccuracy",
					name: "GPS 정밀도",
				},
				{
					id: "GPSJammingDetection",
					name: "GPS 재밍탐지 정보관리",
				},
				{
					id: "SpaceWeatherInfo",
					name: "우주기상 정보 관리",
				},
				{
					id: "SpaceBoard",
					name: "우주정보 공유 게시판",
				},
				{
					id: "SpaceLog",
					name: "우주정보 공유 로그",
				},
			],
		},
		{
			id: "SpaceCOPUser",
			name: "우주COP 사용자",
			subMenu: [
				{
					id: "satelliteStatus",
					name: "위성현황",
				},
				{
					id: "GPSSignal",
					name: "GPS 위성신호",
				},
				{
					id: "GPSAccuracy",
					name: "GPS 정밀도",
				},
				{
					id: "GPSJammingDetection",
					name: "GPS 재밍탐지",
				},
				{
					id: "spaceWeather",
					name: "우주기상",
				},
				{
					id: "spaceWeatherBoard",
					name: "우주기상 공유 게시판",
				},
			],
		},
		{
			id: "eleectroinicOpticssurveillance",
			name: "전자광학위성감시체계",
			subMenu: [
				{
					id: "spacePowerStatus",
					name: "우주전력 현황",
				},
				{
					id: "searchDocument",
					name: "자료조회",
				},
				{
					id: "dutyPlan",
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
			id: "weatherForcastCop",
			name: "기상예보 상황도",
			subMenu: [
				{
					id: "today",
					name: "오늘",
				},
				{
					id: "tomorrow",
					name: "내일",
				},
				{
					id: "weekly",
					name: "주간",
				},
			],
		},
		{
			id: "operationWeatherAssessment",
			name: "작전기상 영향평가",
			subMenu: [
				{
					id: "operationDuty",
					name: "작전임무",
				},
				{
					id: "overseasbase",
					name: "해외기지",
				},
				{
					id: "sapceWeather",
					name: "우주기상",
				},
			],
		},
		{
			id: "weatherSupport",
			name: "기상지원능력 종합",
		},
		{
			id: "optWeatherManager",
			name: "작전기상 관리자(부대)",
			subMenu: [
				{
					id: "airportWeatherManage",
					name: "비행장 기상영향 관리",
				},
				{
					id: "weatherSupportManage",
					name: "기상지원능력 종합 관리",
				},
				{
					id: "baseManage",
					name: "기지관리",
				},
				{
					id: "weatherForcaseCopManage",
					name: "기상예보 상황도 관리",
					subMenu: [
						{
							id: "dailyForcast",
							name: "일일예보",
						},
						{
							id: "weeklyForcast",
							name: "주간예보",
						},
					],
				},
				{
					id: "optWeatherImpactAssessment",
					name: "작전기상 영향평가 관리",
					subMenu: [
						{
							id: "optDuty",
							name: "작전임무",
						},
						{
							id: "overseasbase",
							name: "해외기지",
						},
						{
							id: "spaceWeather",
							name: "우주기상",
						},
					],
				},
				{
					id: "weatherSupportPowerManage",
					name: "기상지원능력 종합 관리",
				},
				{
					id: "optWeatherLog",
					name: "작전기상 로그",
				},
			],
		},
	],
};
