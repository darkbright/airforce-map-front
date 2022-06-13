import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";

// 실제모드, 연습모드 ModeCode 토글 버튼
const ModeCodeToggle = () => {
	const [alignment, setAlignment] = useState("real");

	const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
		setAlignment(newAlignment);
	};

	return (
		<ToggleButtonGroup
			sx={{ marginLeft: "10px" }}
			size="small"
			color="primary"
			value={alignment}
			exclusive
			onChange={handleChange}
		>
			<ToggleButton value="real">실제</ToggleButton>
			<ToggleButton value="exercise">연습</ToggleButton>
		</ToggleButtonGroup>
	);
};

export default ModeCodeToggle;
