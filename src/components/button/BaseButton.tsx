import { Button, ButtonProps } from "@mui/material";

export interface BaseButtonProps extends ButtonProps {
	title: string;
}
/**
 * 버튼 모양임. 기본적으로 MUI의 button 모양임.
 * 여기를 참고 {@link https://mui.com/material-ui/react-button/ MUI의 버튼 구성}
 * @param {BaseButtonProps} BaseButtonProps
 * @returns {JSX.Element} React Component
 */
const BaseButton = ({ title, type = "submit", ...rest }: BaseButtonProps) => {
	return (
		<Button variant="contained" type={type} disableElevation {...rest}>
			{title}
		</Button>
	);
};

export default BaseButton;
