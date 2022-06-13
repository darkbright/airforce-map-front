import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../stores/useAuth";

interface UserGroupsProp {
	allowedGroups: string[];
}

const RequireAuth = ({ allowedGroups }: UserGroupsProp) => {
	const { authUser, isAuthenticated } = useAuth();
	const location = useLocation();

	if (isAuthenticated) {
		// 페이지 id와 usergroup에서 지정한 page와 맞는지 체크.
		// 아직 페이지그룹에 대한 value값이 없으므로 나중에 넣기
		// TO_BE_CHECKED
		if (allowedGroups.some((group) => authUser?.userGroups.includes(group))) {
			return <Outlet />;
		}

		return <Navigate to="/unauthorized" state={{ from: location }} replace />;
	}

	return <Navigate to="/auth/login" state={{ from: location }} replace />;
};

export default RequireAuth;
