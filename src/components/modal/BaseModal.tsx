import { Dialog, styled } from "@mui/material";
import { ReactNode } from "react";

interface BaseModalProps {
	open: boolean;
	setOpen: (value: boolean) => void;
	children: ReactNode;
}

/**
 * 기본적인 모달(a.k.a 팝업) 의 틀 구성
 * @param {BaseModalProps}  BaseModalProps
 * @returns {JSX.Element} React Component
 */
const BaseModal = ({ open, setOpen, children }: BaseModalProps) => {
	return (
		<Dialog maxWidth="lg" onClose={setOpen} open={open}>
			<Root>{children}</Root>
		</Dialog>
	);
};

export default BaseModal;

const Root = styled("div")(() => ({
	minWidth: 600,
	padding: "4%",
}));
