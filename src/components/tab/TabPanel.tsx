import { Box } from "@mui/material";
import { ReactNode } from "react";

interface TabPanelProps {
	children?: ReactNode;
	index: number;
	value: number;
}

/**
 * 일반적인 형태의 Tab을 Wrapping하는 모듈임
 * @param props
 * @returns {JSX.Element} React Component
 */

const TabPanel = (props: TabPanelProps) => {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`tabpanel-${index}`}
			aria-labelledby={`tab-${index}`}
			{...other}
		>
			{value === index && <Box>{children}</Box>}
		</div>
	);
};

export default TabPanel;
