import { Route, Routes } from "react-router-dom";
import BaseLayout from "../components/layout/BaseLayout";
import LandingLayout from "../components/layout/LandingLayout";
import { addSlugPath, flattedRoute, menu } from "../data/constants/menu";
import Login from "../pages/auth/Login";
import Landing from "../pages/Landing";
import Main from "../pages/Main";
import NotFound from "../pages/NotFound";
import Unauthroized from "../pages/Unauthorized";
import RequireAuth from "./RequireAuth";

// url의 path 핸들링에 대한 기존 react-router v6 문법이 적용되기 어려워,
// menu 리스트에서 부모를 찾고 이에 따라 slug를 합쳐준다음 일렬로 정렬하였음
const expandedPath = addSlugPath(menu);
const flatted = flattedRoute(expandedPath);

const Router = () => {
	return (
		<Routes>
			{/* public route - no auth required */}
			<Route path="/" element={<LandingLayout />}>
				<Route path="/" element={<Landing />} />
				<Route path="/unauthorized" element={<Unauthroized />} />
				<Route path="/auth/login" element={<Login />} />
			</Route>
			{/* protected route - require auth and specific pageIds */}
			<Route element={<RequireAuth allowedGroups={["test1"]} />}>
				<Route element={<BaseLayout />}>
					<Route path="/index" element={<Main />} />
					{flatted.map((route) => {
						return <Route key={route.idPath} path={`/${route.idPath}`} element={route.element} />;
					})}
				</Route>
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default Router;
