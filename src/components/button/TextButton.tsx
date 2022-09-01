import BaseButton, { BaseButtonProps } from "./BaseButton";

interface TextButtonProps extends BaseButtonProps {
	textPosition?: "left" | "center" | "right";
}

/**
 * Text Link 타입의 버튼임. 주변을 둘러싼 백그라운드 컬러나 border가 없는 형태
 * @param {TextButtonProps} TextButtonProps
 * @returns {JSX.Element} React Component
 */

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
				minWidth: 10,
				padding: "10px 0",
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
