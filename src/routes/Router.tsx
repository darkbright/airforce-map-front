import { Route, Routes } from "react-router-dom";
import BaseLayout from "../components/layout/BaseLayout";
import LandingLayout from "../components/layout/LandingLayout";
import { operationSharingSystem } from "../data/constants/menu";
import Login from "../pages/auth/Login";
import Landing from "../pages/Landing";
import Main from "../pages/Main";
import SampleTable from "../pages/SampleTable";
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
					{/* 운영시스템  */}
					{operationSharingSystem.subMenu.map((route) => (
						<Route
							key={route.id}
							path={`/operationSharingSystem/${route.id}`}
							element={<SampleTable />}
						/>
					))}
				</Route>
			</Route>
		</Routes>
	);
};

export default Router;
