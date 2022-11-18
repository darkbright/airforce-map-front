import { FormGroup, FormLabel, styled } from "@mui/material";
import BaseBlockTitleBox from "../../../components/box/textBox/BaseBlockTitleBox";
import SpaceBetweenTextBox from "../../../components/box/textBox/SpaceBetweenTextBox";
import TextInput from "../../../components/form/TextInput";
import BaseModal from "../../../components/modal/BaseModal";
import { IGraphicBoard } from "../../../types/d2/Graphic";
import { fullDateDashFormat } from "../../../utils/time";

interface SingleLayerHandlerModalProps {
	open: boolean;
	setOpen: () => void;
	layer: IGraphicBoard;
	layerName: string;
	setLayerName: (name: string) => void;
}

/**
 * 투명도 레이어의 개별 레이어 아코디언을 더블클릭했을 때 나타나는 모달로, 레이어의 각종 정보 및 프로퍼티 변경 등을 함
 * @param SingleLayerHandlerModalProps SingleLayerHandlerModalProps
 * @returns {JSX.Element} modal
 */
const SingleLayerHandlerModal = ({
	open,
	setOpen,
	layer,
	layerName,
	setLayerName,
}: SingleLayerHandlerModalProps) => {
	return (
		<BaseModal open={open} setOpen={setOpen}>
			<BaseBlockTitleBox title={`${layerName} 속성 관리`} />
			<PropertyBox>
				<SpaceBetweenTextBox title="GUID">{layer._guid}</SpaceBetweenTextBox>
				<SpaceBetweenTextBox title="생성일시">
					{fullDateDashFormat(layer._editTime)}
				</SpaceBetweenTextBox>
			</PropertyBox>

			<FormGroup sx={{ mb: 3 }}>
				<FormLabel id="layerName">레이어 명</FormLabel>
				<div style={{ marginTop: 15 }}>
					<TextInput
						variant="outlined"
						autoFocus
						size="small"
						value={layerName}
						onChange={(event) => {
							setLayerName(event.target.value);
							layer.setName(event.target.value);
						}}
						type="text"
					/>
				</div>
			</FormGroup>
		</BaseModal>
	);
};

export default SingleLayerHandlerModal;

const PropertyBox = styled("div")(({ theme }) => ({
	marginBottom: "5%",
	background: theme.palette.background.default,
	padding: "3%",
	borderRadius: 6,
}));
