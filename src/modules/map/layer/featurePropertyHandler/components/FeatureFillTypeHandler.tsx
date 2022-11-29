import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { MouseEvent } from "react";
import { IFeatureFillType } from "../../../../../types/d2/Graphic";
import SquareIcon from "@mui/icons-material/Square";
import TextureIcon from "@mui/icons-material/Texture";
import GradientIcon from "@mui/icons-material/Gradient";

interface FeatureFillTypeHandlerProps {
	alignment: IFeatureFillType | null;
	onFillTypeChange: (event: MouseEvent<HTMLElement>, newAlignment: IFeatureFillType) => void;
}

/**
 * 선 또는 도형의 채움의 형태를 결정하는 토글버튼그룹으로, 단색이냐, 패턴이냐, 그라디언트냐 등을 결정함
 * @param param0 FeatureFillTypeHandlerProps
 * @returns {JSX.Element} ToggleButtonGroup
 */
const FeatureFillTypeHandler = ({ alignment, onFillTypeChange }: FeatureFillTypeHandlerProps) => {
	return (
		<ToggleButtonGroup
			sx={{
				mb: 2,
			}}
			size="small"
			exclusive
			color="primary"
			value={alignment}
			onChange={onFillTypeChange}
		>
			<ToggleButton value="simple" aria-label="simple">
				<SquareIcon fontSize="small" sx={{ mr: 1 }} />
				단색
			</ToggleButton>
			<ToggleButton value="pattern" aria-label="pattern">
				<TextureIcon fontSize="small" sx={{ mr: 1 }} />
				패턴
			</ToggleButton>
			<ToggleButton value="gradient" aria-label="gradient">
				<GradientIcon fontSize="small" sx={{ mr: 1 }} />
				그라디언트
			</ToggleButton>
		</ToggleButtonGroup>
	);
};

export default FeatureFillTypeHandler;
