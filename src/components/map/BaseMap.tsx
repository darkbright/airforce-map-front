import { useEffect, useState } from "react";
import mapSettings from "../../libs/d2/mapSettings";
import Loading from "../loading/Loading";
import MapToolbar from "./MapToolbar";

const BaseMap = () => {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		// initializing d2 map module
		setLoading(true);
		mapSettings();
		console.log("mapSettings");
		setLoading(false);
	}, []);

	return (
		<>
			{loading && <Loading />}
			<div style={{ width: "100%", overflow: "scroll" }}>
				<MapToolbar />
				<div id="map" className="map" style={{ width: "100%", height: "80%" }} />
				<div id="d2map-coord-bottom" className="d2map-coord-bottom" />
			</div>
		</>
	);
};

export default BaseMap;
