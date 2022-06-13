import React from "react";
import { Alert, AlertTitle } from "@mui/material";

interface ShortAlertProps {
	title: string;
	severity: "error" | "warning" | "info" | "success";
	text?: string;
}

const defaultSecurityAccessWarning = `본 체계는 군사 II급 비밀 내용이 포함되어 있으므로 비인가자의 열람, 무단 인쇄, 복제 및 복사를
금합니다`;

const ShortAlert = ({ title, severity, text = defaultSecurityAccessWarning }: ShortAlertProps) => {
	return (
		<Alert severity={severity}>
			<AlertTitle>{title}</AlertTitle>
			<div>{text}</div>
		</Alert>
	);
};

export default ShortAlert;
