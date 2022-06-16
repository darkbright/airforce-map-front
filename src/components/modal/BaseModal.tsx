import { Dialog, styled } from "@mui/material";
import { ReactNode } from "react";

interface BaseModalProps {
	open: boolean;
	setOpen: (value: boolean) => void;
	children: ReactNode;
}

const Root = styled("div")(() => ({
	minWidth: 600,
	padding: "4%",
}));

const BaseModal = ({ open, setOpen, children }: BaseModalProps) => {
	return (
		<Dialog onClose={setOpen} open={open}>
			<Root>{children}</Root>
		</Dialog>
	);
};

export default BaseModal;
