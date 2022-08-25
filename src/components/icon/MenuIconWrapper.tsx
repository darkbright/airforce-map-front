import { Typography } from "@mui/material";

interface MenuIconWrapperProps {
	open: boolean;
	setOpen: () => void;
	iconComponent: React.ReactNode;
	title: string;
	color: string | undefined;
}

/**
 * Navigation 또는 전체 URL을 핸들링하는 Menu에서 사용되는 Icon 및 제목을 핸들링하는 컴포넌트
 *
 * 상기 용도 외에도 아이콘을 띄우고 그 아래에 관련 제목을 적는 형태로 사용할 수 있겠음.
 * @param { MenuIconWrapperProps } MenuIconWrapperProps
 * @returns {JSX.Element} React Component
 */

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
