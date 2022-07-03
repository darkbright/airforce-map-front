// TO_BE_CHECKED

export type SSOUserInfoType = {
	id: string;
	name: string;
	position: string;
	unit: {
		code: string;
		name: string;
	};
	userGroups: string[];
	modeCode: "real" | "exercise";
};
