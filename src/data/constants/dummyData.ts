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
		type: "F-15K",
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
		type: "F-19K",
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
		type: "F-16K",
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
