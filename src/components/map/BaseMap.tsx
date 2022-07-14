import { useEffect, useState } from "react";
import mapSettings from "../../libs/d2/mapSettings";
import Loading from "../loading/Loading";
import MapToolbar from "./MapToolbar";

interface BaseMapProps {
	show?: boolean;
}

const BaseMap = ({ show = true }: BaseMapProps) => {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		// initializing d2 map module
		setLoading(true);
		mapSettings();
		setLoading(false);

		return () => window.map.setTarget(undefined);
	}, []);

	return (
		<div style={{ display: show ? "block" : "none" }}>
			{loading && <Loading />}
			<div style={{ width: "100%" }}>
				<MapToolbar />
				<div id="map" className="map" style={{ width: "100%", height: "810px" }} />
				<div id="d2map-coord-bottom" className="d2map-coord-bottom" />
			</div>
		</div>
	);
};

export default BaseMap;
