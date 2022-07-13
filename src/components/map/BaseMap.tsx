import { createContext, ReactNode, useEffect, useState } from "react";
import mapSettings from "../../libs/d2/mapSettings";
import Loading from "../loading/Loading";
import MapToolbar from "./MapToolbar";

export const MapContext = createContext<any | undefined>(undefined);

interface BaseMapProps {
	children: ReactNode;
}

const BaseMap = ({ children }: BaseMapProps) => {
	const [loading, setLoading] = useState(false);
	const [display, setDisplay] = useState("block");

	useEffect(() => {
		// initializing d2 map module
		setLoading(true);
		mapSettings();
		setLoading(false);

		return () => window.map.setTarget(undefined);
	}, []);

	return (
		<MapContext.Provider value={window.map}>
			<div style={{ display }}>
				{loading && <Loading />}
				<div style={{ width: "100%" }}>
					<MapToolbar />
					<div id="map" className="map" style={{ width: "100%", height: "800px" }} />
					<div id="d2map-coord-bottom" className="d2map-coord-bottom" />
					{children}
				</div>
			</div>
		</MapContext.Provider>
	);
};

export default BaseMap;
