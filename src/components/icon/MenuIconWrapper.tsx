import { Typography } from "@mui/material";

interface MenuIconWrapperProps {
	open: boolean;
	setOpen: () => void;
	iconComponent: React.ReactNode;
	title: string;
	color: string | undefined;
}

const MenuIconWrapper = ({ open, setOpen, title, iconComponent, color }: MenuIconWrapperProps) => {
	return (
		<div style={{ textAlign: "center" }} onClick={setOpen}>
			{iconComponent}
			{!open && (
				<Typography color={color} variant="subtitle2">
					{title}
				</Typography>
			)}
		</div>
	);
};

export default MenuIconWrapper;
