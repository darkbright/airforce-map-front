import { FormControlLabel, FormGroup, styled, Switch, Typography } from "@mui/material";
import { useState } from "react";
import DefaultBox from "../../components/box/DefaultBox";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
	BaseColorPicker,
	BaseColorPickerShowDot,
} from "../../components/colorPicker/BaseColorPicker";
import { useColor } from "react-color-palette";

interface MapGridLayerItemCheckboxProps {
	title: string;
}

const MapGridLayerItemBox = ({ title }: MapGridLayerItemCheckboxProps) => {
	const [layerAdded, setLayerAdded] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [openColorPicker, setOpenColorPicker] = useState(false);
	const [color, setColor] = useColor("hex", "#121212");

	return (
		<DefaultBox padding="2% 3%" marginBottom={10} isBackgroundPaper={false}>
			<Root>
				<Root>
					<Typography variant="body1" sx={{ pr: 1 }}>
						{title}
					</Typography>
					<BaseColorPickerShowDot color={color.hex} onClick={() => setOpenColorPicker(true)} />
				</Root>

				<Root>
					<FormGroup>
						<FormControlLabel
							control={
								<Switch
									checked={layerAdded}
									color="primary"
									size="small"
									onChange={() => setLayerAdded(!layerAdded)}
								/>
							}
							label={layerAdded ? "적용됨" : "미적용"}
						/>
					</FormGroup>
					{dropdownOpen ? (
						<KeyboardArrowUpIcon
							color="action"
							onClick={() => setDropdownOpen(false)}
							sx={{ ...IconStyle, mr: 0.5 }}
						/>
					) : (
						<KeyboardArrowDownIcon
							color="action"
							onClick={() => setDropdownOpen(true)}
							sx={{ ...IconStyle, mr: 0.5 }}
						/>
					)}
				</Root>
			</Root>
			{dropdownOpen && (
				<DropdownPanel>
					<BaseColorPicker
						openColorPicker={openColorPicker}
						setOpenColorPicker={() => setOpenColorPicker(false)}
						color={color}
						onColorChange={(color) => setColor(color)}
					/>
				</DropdownPanel>
			)}
		</DefaultBox>
	);
};

export default MapGridLayerItemBox;

const Root = styled("div")(() => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
}));

const DropdownPanel = styled("div")(() => ({
	padding: "3% 0px",
}));

const IconStyle = {
	cursor: "pointer",
	opacity: 0.4,
	"&:hover": { opacity: 1 },
};
