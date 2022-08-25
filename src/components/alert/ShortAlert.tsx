import React from "react";
import { Alert, AlertTitle } from "@mui/material";

/**
 * 경고/안내 블록 관련 인터페이스
 *
 * @interface
 */
interface ShortAlertProps {
	title: string;
	severity: "error" | "warning" | "info" | "success";
	text?: string;
}

const defaultSecurityAccessWarning = `들어오지 마셈 혼자있고싶음`;

/**
 * 경고, 정보, 성공 등의 여부를 메시지와 함께 출력하여 유저에게 알려주는 Component로 div block의 형태임.
 *
 * @param {ShortAlertProps} ShortAlertProps
 * @returns {JSX.Element} React Component
 */
const ShortAlert = ({ title, severity, text = defaultSecurityAccessWarning }: ShortAlertProps) => {
	return (
		<Alert severity={severity}>
			<AlertTitle>{title}</AlertTitle>
			<div>{text}</div>
		</Alert>
	);
};

export default ShortAlert;
