import { Button, ButtonProps } from "@mui/material";

export interface BaseButtonProps extends ButtonProps {
	title: string;
}

const BaseButton = ({ title, type = "submit", ...rest }: BaseButtonProps) => {
	return (
		<Button variant="contained" type={type} disableElevation {...rest}>
			{title}
		</Button>
	);
};

export default BaseButton;
