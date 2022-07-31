export interface DummyAirplaneStatusProps {
	type?: string;
	second?: number;
	loss?: number;
	hold?: number;
	notWorking?: number;
	working?: number;
	workingRate?: string;
	editedDate?: string;
	editedBy?: string;
}

export const dummyAirplaneStatus = [
	{
		type: "달러",
		second: 100,
		loss: 4,
		hold: 10,
		notWorking: 5,
		working: 10,
		workingRate: "2",
		editedDate: "2020-01-03",
		editedBy: "19-000223",
	},
	{
		type: "원",
		second: 200,
		loss: 4,
		hold: 10,
		notWorking: 5,
		working: 10,
		workingRate: "1",
		editedDate: "2020-01-03",
		editedBy: "19-000223",
	},
	{
		type: "원",
		second: 100,
		loss: 4,
		hold: 10,
		notWorking: 5,
		working: 10,
		workingRate: "2",
		editedDate: "2020-01-03",
		editedBy: "19-000223",
	},
];

interface DummyArmyStatusProps {
	name: string;
	type: string;
	current: number;
	plan: number;
}

export const dummyArmyStatus: DummyArmyStatusProps[] = [
	{
		name: "15비",
		type: "장교",
		current: 56,
		plan: 403,
	},
	{
		name: "15비",
		type: "준사관",
		current: 530,
		plan: 403,
	},
	{
		name: "15비",
		type: "부사관",
		current: 100,
		plan: 10,
	},
	{
		name: "15비",
		type: "병",
		current: 100,
		plan: 20,
	},
	{
		name: "15비",
		type: "군무원",
		current: 10,
		plan: 20,
	},
];
