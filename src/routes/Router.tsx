import { Route, Routes } from "react-router-dom";
import LandingLayout from "../components/layout/LandingLayout";
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
				<Route path="/index" element={<Main />} />
				<Route path="/sampletable" element={<SampleTable />} />
			</Route>
		</Routes>
	);
};

export default Router;
