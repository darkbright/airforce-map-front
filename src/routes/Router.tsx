import { Route, Routes } from "react-router-dom";
import BaseLayout from "../components/layout/BaseLayout";
import LandingLayout from "../components/layout/LandingLayout";
import { menu } from "../data/constants/menu";
import Login from "../pages/auth/Login";
import Landing from "../pages/Landing";
import Main from "../pages/Main";
import NotFound from "../pages/NotFound";
import Unauthroized from "../pages/Unauthorized";
import RequireAuth from "./RequireAuth";

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
					{menu.map((route) =>
						route.subMenu?.map((subRoute) => {
							return (
								<Route
									key={subRoute.id}
									path={`/${route.id}/${subRoute.id}`}
									// element={route.id === "UNUSSEDLEO" ? <Whatever /> : <Main />}
									element={subRoute.element}
								/>
							);
						}),
					)}
				</Route>
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default Router;
