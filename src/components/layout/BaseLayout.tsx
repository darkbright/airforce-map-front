import { Outlet, matchPath, useLocation } from "react-router-dom";
import BaseMap from "../map/BaseMap";
import BreadCrumbBar from "../nav/BreadCrumbBar";
import LeftMenuBar from "../nav/LeftMenuBar";
import TopNav from "../nav/TopNav";
import WidgetBar from "../widget/WidgetBar";

/**
 * 기본 전체 화면 레이아웃.
 *
 * - 맨 위에 상태바 (로고, 유저 정보, 다크모드 설정 등)
 *
 * - 좌측에 URL 핸들링 메뉴 바
 *
 * - 우측에 Widget 관련 Tab
 *
 * - 중간에 Map 화면으로 구성됨
 *
 * 이때 Map을 보여줄지 말지 여부는 해당 Component(BaseMap) 내에서 핸들링할 것
 * @returns { JSX.Element} React Component
 */

const BaseLayout = () => {
	/**
	 * 지도를 로드하고 싶지 않은 페이지를 찾아서 지도를 숨김.
	 * 지도 Component를 필요한 페이지에서 개별 페이지에서 따로 로드하지 않는 이유는 지도를 재로딩하지 않게하여 상태를 Router-dom에서 한번에 관리하기 위함임.
	 * 지도 재로딩 시 (새로고침 등) 자원의 소모가 크므로 최대한 지도를 재로딩하지 않는 것이 바람직.
	 * Context가 아닌 Router에서 처리하는 이유는 d2Map이 Window변수에 박제되도록 설계되어 있어, 중첩으로 Context를 만들 이유가 없기 때문임.
	 */
	const { pathname } = useLocation();
	const match = matchPath("/bitcoin/*", pathname);

	return (
		<>
			<TopNav />
			<div style={{ display: "flex", width: "100%", height: "100%" }}>
				<LeftMenuBar />
				<div style={{ width: "100%" }}>
					<BreadCrumbBar />
					{<BaseMap show={match ? false : true} />}
					<Outlet />
				</div>
				<WidgetBar />
			</div>
		</>
	);
};

export default BaseLayout;
