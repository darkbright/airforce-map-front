import BaseButton, { BaseButtonProps } from "./BaseButton";

interface TextButtonProps extends BaseButtonProps {
	textPosition?: "left" | "center" | "right";
}

const TextButton = ({
	title,
	type = "submit",
	textPosition = "left",
	...rest
}: TextButtonProps) => {
	return (
		<BaseButton
			title={title}
			variant="text"
			disableRipple
			disableFocusRipple
			size="small"
			sx={{
				padding: "10px 0px",
				marginBottom: 0,
				justifyContent: textPosition,
				"&:hover": { backgroundColor: "unset", color: (theme) => theme.palette.secondary.light },
			}}
			type={type}
			{...rest}
		/>
	);
};

export default TextButton;
