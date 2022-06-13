import LeftMenuBar from "../nav/LeftMenuBar";
import TopNav from "../nav/TopNav";

interface BaseLayoutProps {
	children: React.ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
	return (
		<>
			<TopNav />
			<div style={{ display: "flex", width: "100%", height: "100%" }}>
				<LeftMenuBar />
				{children}
			</div>
		</>
	);
};

export default BaseLayout;
