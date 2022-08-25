import create from "zustand";
import { SSOUserInfoType } from "../types/auth/sso";
import { persist } from "zustand/middleware";

type UserActions = {
	authUser: SSOUserInfoType | null;
	isAuthenticated: boolean;
	setUser: (newUser: SSOUserInfoType) => void;
	signIn: () => Promise<void>;
	signOut: () => void;
};

// TO_BE_CHECKED
/**
 * Authentication, Authorization의 전역 관리 모듈.
 * 추후 업데이트 필요
 */

export const useAuth = create<UserActions>()(
	persist(
		(set, get) => ({
			authUser: null,
			isAuthenticated: false,
			setUser: (newUser: SSOUserInfoType) => set({ authUser: newUser, isAuthenticated: true }),
			signIn: async () => {
				try {
					// test user
					get().setUser({
						id: "12345",
						name: "마이클",
						position: "중령",
						unit: {
							code: "afccs",
							name: "공군작전사령부",
						},
						userGroups: ["test1", "test2"],
						modeCode: "real",
					});
				} catch (err) {
					console.log(err);
				}
			},
			signOut: () => {
				set({
					authUser: undefined,
				});
			},
		}),
		{
			name: "auth-user",
			getStorage: () => sessionStorage,
		},
	),
);
