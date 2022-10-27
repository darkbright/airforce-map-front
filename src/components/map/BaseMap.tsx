import React, { ReactNode, useEffect, useState } from "react";
import mapSettings from "../../libs/d2/mapSettings";
import RightClickFeatureBox from "../../modules/map/rightClick/RightClickFeatureBox";
import useRightClickStore from "../../stores/useRightClickStore";
import Loading from "../loading/Loading";
import MapToolbar from "./MapToolbar";

interface BaseMapProps {
	show?: boolean;
	children: ReactNode;
}

/**
 * 기본이 되는 맵 객체를 생성하고, 기본 값들을 보여주는 Component
 *
 * 어플리케이션이 로드되고, Map객체를 로드하는 페이지에 진입 시 Map 객체가 생성됨.
 * 경우에 따라 어떤 페이지에서는 Map을 보여주고 싶지 않은 경우도 있을 수 있음(예: 테이블만 있는 페이지 등) 그런 경우 맵 객체를 지우고 새로 생성하면, 유저가
 * 설정해둔 값이 모두 날라가게 되고, 새롭게 객체를 형성하는데 비용이 발생하므로 보여주고 싶지 않은 페이지에서는 보여주기를 false로 설정하여 Map 객체는 존재하되,
 * 단순히 보이지만 않는 형태로 사용할 수 있음.
 * @param param0
 * @returns {JSX.Element} React Component
 */

const BaseMap = ({ show = true, children }: BaseMapProps) => {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		// initializing d2 map module
		setLoading(true);
		mapSettings();
		setLoading(false);

		return () => window.map.setTarget(undefined);
	}, []);

	// 우클릭 핸들링
	const { rightClickEnabled } = useRightClickStore();

	return (
		<div style={{ display: show ? "block" : "none" }}>
			{loading && <Loading />}
			<div style={{ width: "100%" }}>
				<div
					id="map"
					className="map"
					style={{
						width: "100vw",
						height: "100vh",
						position: "relative",
					}}
				>
					<MapToolbar />
					{children}
				</div>
				<div id="d2map-coord-bottom" className="d2map-coord-bottom" />
				{rightClickEnabled && <RightClickFeatureBox />}
			</div>
		</div>
	);
};

export default BaseMap;
