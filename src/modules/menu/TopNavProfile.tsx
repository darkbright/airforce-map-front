import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Divider, ListItemIcon, Menu, MenuItem, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useAuth } from "../../stores/useAuth";
import UserSettings from "../settings/UserSettings";

interface TapNavProfileProps {
	title: string;
	display: "block" | "none";
}

/**
 * 화면 최상단의 TopNav에서 우측의 유저의 프로필을 확인할 수 있는 Div
 * @param {TapNavProfileProps} TapNavProfileProps
 * @returns {JSX.Element} React Component(div)
 */

const TopNavProfile = ({ title, display }: TapNavProfileProps) => {
	const [anchorOpen, setAnchorOpen] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorOpen);
	const handleClose = () => setAnchorOpen(null);
	const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorOpen(event.currentTarget);
	};

	const [userSettingOpen, setUserSettingOpen] = useState(false);

	const { authUser } = useAuth();

	return (
		<div style={{ display }}>
			<Root
				id="profile-button"
				aria-controls={open ? "profile-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleOpen}
			>
				<AccountCircleIcon color="primary" />
				<Typography variant="body1">{title}</Typography>
			</Root>
			<Menu
				id="profile-menu"
				open={open}
				anchorEl={anchorOpen}
				onClose={handleClose}
				MenuListProps={{ "aria-labelledby": "profile-button" }}
			>
				<UserInfoPanel>
					<Typography variant="body1" gutterBottom>
						{authUser?.name} {authUser?.position}
					</Typography>
					<Divider sx={{ mt: 1, mb: 1 }} />
					<Typography variant="subtitle2">{authUser?.unit.name}</Typography>
					<Typography variant="subtitle2">{authUser?.unit.code}</Typography>
					<Typography variant="subtitle2">비밀등급: 쉿! 🤐</Typography>
				</UserInfoPanel>
				<Divider sx={{ mt: 1, mb: 1 }} />
				<MenuItem
					onClick={() => {
						setAnchorOpen(null);
						setUserSettingOpen(true);
					}}
				>
					<ListItemIcon>
						<Settings fontSize="small" />
					</ListItemIcon>
					세팅
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<ListItemIcon>
						<Logout fontSize="small" />
					</ListItemIcon>
					로그아웃
				</MenuItem>
			</Menu>
			{userSettingOpen && (
				<UserSettings open={userSettingOpen} setOpen={() => setUserSettingOpen(false)} />
			)}
		</div>
	);
};

export default TopNavProfile;

const Root = styled("button")(() => ({
	display: "flex",
	width: "110px",
	flexDirection: "row",
	background: "none",
	border: "none",
	justifyContent: "space-between",
	cursor: "pointer",
}));

const UserInfoPanel = styled("div")(() => ({
	padding: "10%",
}));
