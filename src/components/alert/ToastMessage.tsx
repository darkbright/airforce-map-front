import { Typography } from "@mui/material";
import { toast } from "react-toastify";

interface ToastMessageProps {
	title: string;
	message: string;
}

interface ToastShowProps {
	title: string;
	message: string;
	type: "info" | "success" | "warning" | "error";
}
/**
 * Toastify 메시지 커스텀 조작 블록. 스타일링을 위하여 사용함
 * @param ToastMessageProps ToastMessageProps
 * @returns JSX.Element(div)
 */
export const ToastMessage = ({ title, message }: ToastMessageProps) => {
	return (
		<div>
			<Typography variant="body1" sx={{ fontWeight: 600 }} gutterBottom>
				{title}
			</Typography>
			<Typography variant="body2" sx={{ lineHeight: 1.5 }}>
				{message}
			</Typography>
		</div>
	);
};

/**
 * 에러, 성공, 인포 등 각종 메시지를 화면 위에 빠르게 띄우고 싶을 때 사용하는 Toastify Module
 * @param ToastShowProps ToastShowProps
 * @returns toast
 */
export const toastShow = ({ title, message, type }: ToastShowProps) => {
	return toast(<ToastMessage title={title} message={message} />, {
		type,
	});
};
