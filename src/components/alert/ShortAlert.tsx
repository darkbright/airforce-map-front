import React from "react";
import { Alert, AlertTitle } from "@mui/material";

interface ShortAlertProps {
	title: string;
	severity: "error" | "warning" | "info" | "success";
	text?: string;
}

const defaultSecurityAccessWarning = `들어오지 마셈 혼자있고싶음`;

const ShortAlert = ({ title, severity, text = defaultSecurityAccessWarning }: ShortAlertProps) => {
	return (
		<Alert severity={severity}>
			<AlertTitle>{title}</AlertTitle>
			<div>{text}</div>
		</Alert>
	);
};

export default ShortAlert;
