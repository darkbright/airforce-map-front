import { Outlet } from "react-router-dom";
import LandingFooter from "./LandingFooter";

/**
 * 랜딩 페이지의 레이아웃으로, 기본적으로 보여지는 컴포넌트와 랜딩 푸터로 구성되어 있음
 * @returns {JSX.Element} React Component
 */

const LandingLayout = () => {
	return (
		<>
			<Outlet />
			<LandingFooter />
		</>
	);
};

export default LandingLayout;
