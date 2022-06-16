export interface MenuProps {
	id: string;
	name: string;
	parentUrl: string;
	type: "dir" | "page";
	subMenu?: MenuProps[];
}

export const menu: MenuProps[] = [
	{
		name: "상황공유체계",
		id: "operationSharingSystem",
		parentUrl: "",
		type: "dir",
		subMenu: [
			{
				id: "copEnv",
				name: "COP 환경설정",
				type: "page",
				parentUrl: "operationSharingSystem",
			},
			{
				id: "hr",
				name: "인사 관리",
				type: "page",
				parentUrl: "operationSharingSystem",
			},
			{
				id: "hrCop",
				name: "인사 상황도",
				type: "page",
				parentUrl: "operationSharingSystem",
			},
			{
				id: "munitionManagement",
				name: "군수 관리",
				type: "page",
				parentUrl: "operationSharingSystem",
			},
			{
				id: "munitionCop",
				name: "군수 상황도",
				type: "page",
				parentUrl: "operationSharingSystem",
			},
			{
				id: "mobilizationManage",
				name: "동원 관리",
				type: "page",
				parentUrl: "operationSharingSystem",
			},
			{
				id: "mobilizationCop",
				name: "동원 상황도",
				type: "page",
				parentUrl: "operationSharingSystem",
			},
			{
				id: "baseDefenceManage",
				name: "기지방어 관리",
				type: "page",
				parentUrl: "operationSharingSystem",
			},
			{
				id: "baseDefenceCop",
				name: "기지방어 상황도",
				type: "page",
				parentUrl: "operationSharingSystem",
			},
			{
				id: "controlCommunicationManage",
				name: "지휘통신 관리",
				type: "page",
				parentUrl: "operationSharingSystem",
			},
			{
				id: "controlCommunicationCop",
				name: "지휘통신 상황도",
				type: "page",
				parentUrl: "operationSharingSystem",
			},
			{
				id: "militaryEngineerManage",
				name: "공병 관리",
				type: "page",
				parentUrl: "operationSharingSystem",
			},
			{
				id: "militaryEngineerCop",
				name: "공병 상황도",
				type: "page",
				parentUrl: "operationSharingSystem",
			},
		],
	},
	{
		name: "상황도종합현황",
		id: "COPTotalState",
		type: "dir",
		parentUrl: "",
		subMenu: [
			{
				id: "main",
				name: "메인 대시보드",
				type: "page",
				parentUrl: "COPTotalState",
			},
			{
				id: "totalStatus",
				name: "종합상황현황",
				type: "page",
				parentUrl: "COPTotalState",
			},
			{
				id: "popupCop",
				name: "팝업상황도",
				type: "page",
				parentUrl: "COPTotalState",
			},
			{
				id: "copManagement",
				name: "상황도 종합현황관리",
				type: "page",
				parentUrl: "COPTotalState",
			},
			{
				id: "copLog",
				name: "상황도 종합현황로그",
				type: "page",
				parentUrl: "COPTotalState",
			},
		],
	},
	{
		name: "기지방어/헌병",
		id: "baseDefenseAndSecurityPolice",
		type: "dir",
		parentUrl: "",
		subMenu: [
			{
				id: "operationStatus",
				name: "작전현황",
				type: "page",
				parentUrl: "baseDefenseAndSecurityPolice",
			},
			{
				id: "totalStatus",
				name: "종합현황",
				type: "page",
				parentUrl: "baseDefenseAndSecurityPolice",
			},
			{
				id: "powerStatus",
				name: "전력현황",
				type: "page",
				parentUrl: "baseDefenseAndSecurityPolice",
			},
			{
				id: "spStatus",
				name: "헌병 작전현황",
				type: "page",
				parentUrl: "baseDefenseAndSecurityPolice",
			},
		],
	},
	{
		name: "정보통신",
		id: "infoCommunication",
		type: "dir",
		parentUrl: "",
		subMenu: [
			{
				id: "totalStatus",
				name: "종합현황",
				type: "page",
				parentUrl: "infoCommunication",
			},
			{
				id: "itNetwork",
				name: "정보통신망",
				type: "page",
				parentUrl: "infoCommunication",
			},
			{
				id: "navigationSecurityFacilities",
				name: "항행안전시설",
				type: "page",
				parentUrl: "infoCommunication",
			},
			{
				id: "cyberThreatStatus",
				name: "사이버위협현황",
				type: "page",
				parentUrl: "infoCommunication",
			},
			{
				id: "longDistanceNetwork",
				name: "장거리통신망",
				type: "page",
				parentUrl: "infoCommunication",
			},
		],
	},
	{
		name: "동원",
		id: "mobilization",
		type: "dir",
		parentUrl: "",
		subMenu: [
			{
				id: "totalStatus",
				name: "동원종합현황",
				type: "page",
				parentUrl: "mobilization",
			},
			{
				id: "commonOperationCopManage",
				name: "동원공통작전상황도관리",
				type: "page",
				parentUrl: "mobilization",
			},
		],
	},
	{
		name: "인사",
		id: "humanAffairs",
		type: "dir",
		parentUrl: "",
		subMenu: [
			{
				id: "hrCop",
				name: "인사상황도",
				type: "page",
				parentUrl: "humanAffairs",
			},
			{
				id: "serviceStatus",
				name: "의무현황",
				type: "page",
				parentUrl: "humanAffairs",
			},
			{
				id: "combatUnitTotalStatus",
				name: "전투부대 병력종합현황",
				type: "page",
				parentUrl: "humanAffairs",
			},
			{
				id: "troopCop",
				name: "병력현황상황도",
				type: "page",
				parentUrl: "humanAffairs",
			},
			{
				id: "pilotTotalStatus",
				name: "조종사종합상황도",
				type: "page",
				parentUrl: "humanAffairs",
			},
		],
	},
	{
		name: "군수",
		id: "munitions",
		type: "dir",
		parentUrl: "",
		subMenu: [
			{
				id: "subsistence",
				name: "급식",
				type: "page",
				parentUrl: "munitions",
			},
			{
				id: "munitionSupportPowerTotal",
				name: "군수지원능력종합",
				type: "page",
				parentUrl: "munitions",
			},
			{
				id: "munitionSustainability",
				name: "군수지속능력종합",
				type: "page",
				parentUrl: "munitions",
			},
			{
				id: "ammunition",
				name: "탄약",
				type: "page",
				parentUrl: "munitions",
			},
			{
				id: "aircraft",
				name: "항공기",
				type: "page",
				parentUrl: "munitions",
			},
			{
				id: "fuels",
				name: "유류",
				type: "page",
				parentUrl: "munitions",
			},
			{
				id: "transportation",
				name: "수송",
				type: "page",
				parentUrl: "munitions",
			},
			{
				id: "munitionTotalManage",
				name: "군수종합관리",
				type: "dir",
				parentUrl: "munitions",
				subMenu: [
					{
						id: "munitionSupportPowerTotalManage",
						name: "군수지원능력종합현황관리",
						type: "page",
						parentUrl: "munitions/munitionTotalManage",
					},
					{
						id: "munitionSustainabilityTotalManage",
						name: "군수지속능력종합현황관리",
						type: "page",
						parentUrl: "munitions/munitionTotalManage",
					},
					{
						id: "usAirforceTotalStatusManage",
						name: "미공군항공기종합현황관리",
						type: "page",
						parentUrl: "munitions/munitionTotalManage",
					},
					{
						id: "supplyLineTotalManage",
						name: "병참선종합현황관리",
						type: "page",
						parentUrl: "munitions/munitionTotalManage",
					},
				],
			},
		],
	},
	{
		name: "시설종합",
		id: "facilities",
		type: "dir",
		parentUrl: "",
		subMenu: [
			{
				id: "runway",
				name: "활주로/비상활주로",
				type: "page",
				parentUrl: "facilities",
			},
			{
				id: "installation",
				name: "기지시설",
				type: "page",
				parentUrl: "facilities",
			},
			{
				id: "TBMAttackStatus",
				name: "TBM피격현황",
				type: "page",
				parentUrl: "facilities",
			},
			{
				id: "minimumOptRunwayResult",
				name: "최소운영활주로선정결과",
				type: "page",
				parentUrl: "facilities",
			},
		],
	},
	{
		name: "우주",
		id: "aerospace",
		type: "dir",
		parentUrl: "",
		subMenu: [
			{
				id: "spaceCOPManager",
				name: "우주COP 관리자",
				type: "dir",
				parentUrl: "aerospace",
				subMenu: [
					{
						id: "SatelliteStatus",
						name: "위성현황",
						type: "page",
						parentUrl: "aerospace/spaceCOPManager",
					},
					{
						id: "SatelliteStatusManage",
						name: "위성현황 정보관리",
						type: "dir",
						parentUrl: "aerospace/spaceCOPManager",
						subMenu: [
							{
								id: "InputSatelliteTLE",
								name: "위성 TLE 입력",
								type: "page",
								parentUrl: "aerospace/spaceCOPManager/SatelliteStatusManage",
							},
							{
								id: "InputBaseSatellite",
								name: "기본 위성 입력",
								type: "page",
								parentUrl: "aerospace/spaceCOPManager/SatelliteStatusManage",
							},
							{
								id: "InputSatelliteStatus",
								name: "위성상태 입력",
								type: "page",
								parentUrl: "aerospace/spaceCOPManager/SatelliteStatusManage",
							},
							{
								id: "InputSatelliteInfo",
								name: "위성상세정보 입력",
								type: "page",
								parentUrl: "aerospace/spaceCOPManager/SatelliteStatusManage",
							},
						],
					},
					{
						id: "GPSManage",
						name: "GPS 위성신호 관리",
						type: "page",
						parentUrl: "aerospace/spaceCOPManager",
					},
					{
						id: "GPSAccuracy",
						name: "GPS 정밀도",
						type: "page",
						parentUrl: "aerospace/spaceCOPManager",
					},
					{
						id: "GPSJammingDetection",
						name: "GPS 재밍탐지 정보관리",
						type: "page",
						parentUrl: "aerospace/spaceCOPManager",
					},
					{
						id: "SpaceWeatherInfo",
						name: "우주기상 정보 관리",
						type: "page",
						parentUrl: "aerospace/spaceCOPManager",
					},
					{
						id: "SpaceBoard",
						name: "우주정보 공유 게시판",
						type: "page",
						parentUrl: "aerospace/spaceCOPManager",
					},
					{
						id: "SpaceLog",
						name: "우주정보 공유 로그",
						type: "page",
						parentUrl: "aerospace/spaceCOPManager",
					},
				],
			},
			{
				id: "spaceCOPUser",
				name: "우주COP 사용자",
				type: "dir",
				parentUrl: "aerospace",
				subMenu: [
					{
						id: "satelliteStatus",
						name: "위성현황",
						type: "page",
						parentUrl: "aerospace/spaceCOPUser",
					},
					{
						id: "GPSSignal",
						name: "GPS 위성신호",
						type: "page",
						parentUrl: "aerospace/spaceCOPUser",
					},
					{
						id: "GPSAccuracy",
						name: "GPS 정밀도",
						type: "page",
						parentUrl: "aerospace/spaceCOPUser",
					},
					{
						id: "GPSJammingDetection",
						name: "GPS 재밍탐지",
						type: "page",
						parentUrl: "aerospace/spaceCOPUser",
					},
					{
						id: "spaceWeather",
						name: "우주기상",
						type: "page",
						parentUrl: "aerospace/spaceCOPUser",
					},
					{
						id: "spaceWeatherBoard",
						name: "우주기상 공유 게시판",
						type: "page",
						parentUrl: "aerospace/spaceCOPUser",
					},
				],
			},
			{
				id: "electronicOpticssurveillance",
				name: "전자광학위성감시체계",
				type: "dir",
				parentUrl: "aerospace",
				subMenu: [
					{
						id: "spacePowerStatus",
						name: "우주전력 현황",
						type: "page",
						parentUrl: "aerospace/electronicOpticssurveillance",
					},
					{
						id: "searchDocument",
						name: "자료조회",
						type: "page",
						parentUrl: "aerospace/electronicOpticssurveillance",
					},
					{
						id: "dutyPlan",
						name: "임무계획",
						type: "page",
						parentUrl: "aerospace/electronicOpticssurveillance",
					},
				],
			},
		],
	},
	{
		name: "작전기상",
		id: "operationWeather",
		parentUrl: "",
		type: "dir",
		subMenu: [
			{
				id: "weatherForcastCop",
				name: "기상예보 상황도",
				type: "dir",
				parentUrl: "operationWeather",
				subMenu: [
					{
						id: "today",
						name: "오늘",
						type: "page",
						parentUrl: "operationWeather/weatherForcastCop",
					},
					{
						id: "tomorrow",
						name: "내일",
						type: "page",
						parentUrl: "operationWeather/weatherForcastCop",
					},
					{
						id: "weekly",
						name: "주간",
						type: "page",
						parentUrl: "operationWeather/weatherForcastCop",
					},
				],
			},
			{
				id: "operationWeatherAssessment",
				name: "작전기상 영향평가",
				type: "dir",
				parentUrl: "operationWeather",
				subMenu: [
					{
						id: "operationDuty",
						name: "작전임무",
						type: "page",
						parentUrl: "operationWeather/operationWeatherAssessment",
					},
					{
						id: "overseasbase",
						name: "해외기지",
						type: "page",
						parentUrl: "operationWeather/operationWeatherAssessment",
					},
					{
						id: "sapceWeather",
						name: "우주기상",
						type: "page",
						parentUrl: "operationWeather/operationWeatherAssessment",
					},
				],
			},
			{
				id: "weatherSupport",
				name: "기상지원능력 종합",
				type: "page",
				parentUrl: "operationWeather",
			},
			{
				id: "optWeatherManager",
				name: "작전기상 관리자(부대)",
				type: "dir",
				parentUrl: "operationWeather",
				subMenu: [
					{
						id: "airportWeatherManage",
						name: "비행장 기상영향 관리",
						type: "page",
						parentUrl: "operationWeather/optWeatherManager",
					},
					{
						id: "weatherSupportManage",
						name: "기상지원능력 종합 관리",
						type: "page",
						parentUrl: "operationWeather/optWeatherManager",
					},
					{
						id: "baseManage",
						name: "기지관리",
						type: "page",
						parentUrl: "operationWeather/optWeatherManager",
					},
					{
						id: "weatherForcaseCopManage",
						name: "기상예보 상황도 관리",
						type: "dir",
						parentUrl: "operationWeather/optWeatherManager",
						subMenu: [
							{
								id: "dailyForcast",
								name: "일일예보",
								type: "page",
								parentUrl: "operationWeather/optWeatherManager/weatherForcaseCopManage",
							},
							{
								id: "weeklyForcast",
								name: "주간예보",
								type: "page",
								parentUrl: "operationWeather/optWeatherManager/weatherForcaseCopManage",
							},
						],
					},
					{
						id: "optWeatherImpactAssessment",
						name: "작전기상 영향평가 관리",
						type: "dir",
						parentUrl: "optWeatherManager",
						subMenu: [
							{
								id: "optDuty",
								name: "작전임무",
								type: "page",
								parentUrl: "operationWeather/optWeatherManager/optWeatherImpactAssessment",
							},
							{
								id: "overseasbase",
								name: "해외기지",
								type: "page",
								parentUrl: "operationWeather/optWeatherManager/optWeatherImpactAssessment",
							},
							{
								id: "spaceWeather",
								name: "우주기상",
								type: "page",
								parentUrl: "operationWeather/optWeatherManager/optWeatherImpactAssessment",
							},
						],
					},
					{
						id: "weatherSupportPowerManage",
						name: "기상지원능력 종합 관리",
						type: "page",
						parentUrl: "operationWeather/optWeatherManager",
					},
					{
						id: "optWeatherLog",
						name: "작전기상 로그",
						type: "page",
						parentUrl: "operationWeather/optWeatherManager",
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
