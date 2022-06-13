import { Typography } from "@mui/material";

interface MenuIconWrapperProps {
	open: boolean;
	iconComponent: React.ReactNode;
	title: string;
}

const MenuIconWrapper = ({ open, title, iconComponent }: MenuIconWrapperProps) => {
	return (
		<div style={{ textAlign: "center" }}>
			{iconComponent}
			{!open && <Typography variant="subtitle2">{title}</Typography>}
		</div>
	);
};

export default MenuIconWrapper;
