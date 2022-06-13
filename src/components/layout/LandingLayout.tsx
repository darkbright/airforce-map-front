import { Outlet } from "react-router-dom";
import LandingFooter from "./LandingFooter";

const LandingLayout = () => {
	return (
		<>
			<Outlet />
			<LandingFooter />
		</>
	);
};

export default LandingLayout;
