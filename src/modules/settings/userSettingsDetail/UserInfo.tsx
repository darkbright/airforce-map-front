import { FormGroup, FormLabel, styled } from "@mui/material";
import ShortAlert from "../../../components/alert/ShortAlert";
import BaseButton from "../../../components/button/BaseButton";
import TextInput from "../../../components/form/TextInput";
import { useAuth } from "../../../stores/useAuth";

/**
 * 유저 세팅 내에서 유저 정보를 핸들링하는 부분
 * 현재 이 부분은 사용할 수 없음 (구 체계에서만 변경 가능함)
 * @returns {JSX.Element} div
 */
const UserInfo = () => {
	const { authUser } = useAuth();

	return (
		<Root>
			<ShortAlert
				title="유저 정보 변경 불가"
				text="유저 정보는 현 시스템에서 변경 불가합니다. 구 AFCCS 시스템에서 변경해주세요"
				severity="warning"
			/>
			<FormGroup sx={{ mt: 2, mb: 2 }}>
				<FormLabel id="userName">군번?</FormLabel>
				<TextInput
					sx={{ mt: 1 }}
					variant="outlined"
					size="small"
					disabled
					value={authUser?.id || "정보없음"}
					type="text"
				/>
			</FormGroup>
			<FormGroup sx={{ mb: 2 }}>
				<FormLabel id="userName">이름</FormLabel>
				<TextInput
					sx={{ mt: 1 }}
					variant="outlined"
					size="small"
					disabled
					value={authUser?.name || "정보없음"}
					type="text"
				/>
			</FormGroup>
			<FormGroup sx={{ mb: 2 }}>
				<FormLabel id="userName">계급</FormLabel>
				<TextInput
					sx={{ mt: 1 }}
					variant="outlined"
					size="small"
					disabled
					value={authUser?.position || "정보없음"}
					type="text"
				/>
			</FormGroup>
			<FormGroup sx={{ mb: 2 }}>
				<FormLabel id="userName">소속</FormLabel>
				<TextInput
					sx={{ mt: 1 }}
					variant="outlined"
					size="small"
					disabled
					value={authUser?.unit.name || "정보없음"}
					type="text"
				/>
			</FormGroup>
			<BaseButton type="submit" disabled title="업데이트" />
		</Root>
	);
};

export default UserInfo;

const Root = styled("div")(() => ({
	width: "50%",
}));
