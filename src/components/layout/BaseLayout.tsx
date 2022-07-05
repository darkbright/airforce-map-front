import { Outlet } from "react-router-dom";
import BreadCrumbBar from "../nav/BreadCrumbBar";
import LeftMenuBar from "../nav/LeftMenuBar";
import TopNav from "../nav/TopNav";
import WidgetBar from "../widget/WidgetBar";

const BaseLayout = () => {
	return (
		<>
			<TopNav />
			<div style={{ display: "flex", width: "100%", height: "100%" }}>
				<LeftMenuBar />
				<div style={{ width: "100%" }}>
					<BreadCrumbBar />
					<Outlet />
				</div>
				<WidgetBar />
			</div>
		</>
	);
};

export default BaseLayout;
