import { useContext } from "react";
import BaseMap, { MapContext } from "../components/map/BaseMap";

const Main = () => {
	const test = useContext(MapContext);
	console.log("test", test);

	return <BaseMap>머지</BaseMap>;
};

export default Main;
