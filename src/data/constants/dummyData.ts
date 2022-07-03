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
