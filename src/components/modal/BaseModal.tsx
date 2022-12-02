import { Dialog, styled } from "@mui/material";
import { ReactNode } from "react";

interface BaseModalProps {
	open: boolean;
	setOpen: (value: boolean) => void;
	children: ReactNode;
	padding?: string;
	minWidth?: number;
}

/**
 * 기본적인 모달(a.k.a 팝업) 의 틀 구성
 * @param {BaseModalProps}  BaseModalProps
 * @returns {JSX.Element} React Component
 */
const BaseModal = ({ open, setOpen, padding = "5%", minWidth = 600, children }: BaseModalProps) => {
	return (
		<Dialog maxWidth="lg" onClose={setOpen} open={open} sx={{ padding }}>
			<Root style={{ minWidth, padding }}>{children}</Root>
		</Dialog>
	);
};

export default BaseModal;

const Root = styled("div")(() => ({
	// minWidth: 580,
}));
