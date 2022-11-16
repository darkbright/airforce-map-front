import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface CloseButtonProps {
	onClick: () => void;
}
/**
 * X 표시가 뜨는 종료 버튼 (모달이나 기타 등등을 꺼야 할 때 사용)
 * @param CloseButtonProps CloseButtonProps
 * @returns {JSX.Element} button
 */
const CloseButton = ({ onClick }: CloseButtonProps) => {
	return (
		<IconButton
			color="default"
			aria-label="close-layer-manager"
			component="label"
			onClick={onClick}
		>
			<CloseIcon fontSize="small" />
		</IconButton>
	);
};

export default CloseButton;
