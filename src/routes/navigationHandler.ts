import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useDetectLocation = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [lastLocation, setLastLocation] = useState<any>(null);

	return lastLocation;
};
