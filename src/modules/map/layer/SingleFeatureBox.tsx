import { Menu, MenuItem, styled, Tooltip, Typography } from "@mui/material";
import { MouseEvent, useState } from "react";
import { IGraphicObject } from "../../../types/d2/Graphic";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Draggable } from "react-beautiful-dnd";
import FeaturePropertyHandlerModal from "./featurePropertyHandler/FeaturePropertyHandlerModal";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";

interface SingleFeatureBoxProps {
	feature: IGraphicObject;
	parentVisibility: boolean;
	index: number;
}

/**
 * 레이어 내 개별 도형 또는 군대부호 표시 박스
 * @param SingleFeatureBoxProps SingleFeatureBoxProps
 * @returns {JSX.Element} div
 */
const SingleFeatureBox = ({ feature, parentVisibility, index }: SingleFeatureBoxProps) => {
	const [visible, setVisible] = useState(feature.getVisible());
	const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

	const [isLocked, setIsLocked] = useState(feature.getLock());

	const menuOpen = Boolean(anchorEl);

	const [propertyModalOpen, setPropertyModalOpen] = useState(false);

	const handleRightClick = (event: MouseEvent<HTMLDivElement>) => {
		event.preventDefault();
		setAnchorEl(event.currentTarget);
	};

	return (
		<>
			<Draggable draggableId={feature._prop.guid} index={index}>
				{(provided) => (
					<Root
						ref={provided.innerRef}
						{...provided.draggableProps}
						onContextMenu={handleRightClick}
					>
						<AlignWrapper>
							<Wrapper>
								<Tooltip title={visible ? "숨기기" : "보이기"}>
									<VisibilityWrapper
										onClick={() => {
											if (parentVisibility) {
												setVisible(!visible);
												feature.setVisible(!visible);
											}
										}}
									>
										<VisibilityIcon
											sx={{ fontSize: "0.9rem", opacity: visible && parentVisibility ? 1 : 0.2 }}
										/>
									</VisibilityWrapper>
								</Tooltip>

								<Typography sx={{ ml: 1 }} variant="body2" {...provided.dragHandleProps}>
									{feature._prop.name}
								</Typography>
							</Wrapper>
							<Tooltip title={isLocked ? "위치잠김" : "위치이동가능"}>
								<VisibilityWrapper
									onClick={() => {
										setIsLocked(!isLocked);
										feature.setLock(!isLocked);
									}}
								>
									{isLocked ? (
										<LockIcon sx={{ fontSize: "0.9rem", opacity: 0.7 }} />
									) : (
										<LockOpenIcon sx={{ fontSize: "0.9rem", opacity: 0.2 }} />
									)}
								</VisibilityWrapper>
							</Tooltip>
						</AlignWrapper>
					</Root>
				)}
			</Draggable>
			<Menu
				id="feature-menu"
				open={menuOpen}
				anchorEl={anchorEl}
				onClose={() => setAnchorEl(null)}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				<MenuItem
					dense
					onClick={() => {
						setPropertyModalOpen(true);
						setAnchorEl(null);
					}}
				>
					속성 변경
				</MenuItem>
				<MenuItem dense onClick={() => console.log("dfs")}>
					삭제
				</MenuItem>
				<MenuItem dense onClick={() => console.log("dfs")}>
					아이템 복사
				</MenuItem>
			</Menu>
			<FeaturePropertyHandlerModal
				open={propertyModalOpen}
				setOpen={() => setPropertyModalOpen(false)}
				feature={feature}
			/>
		</>
	);
};

export default SingleFeatureBox;

const Root = styled("div")(({ theme }) => ({
	background: theme.palette.background.default,
	padding: 8,
	marginBottom: "1%",
}));

const AlignWrapper = styled("div")(() => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
}));

const Wrapper = styled("div")(() => ({
	display: "flex",
	alignItems: "center",
}));

const VisibilityWrapper = styled("div")(() => ({
	height: 14,
	paddingTop: 1,
}));
