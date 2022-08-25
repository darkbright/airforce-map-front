import { OutlinedTextFieldProps, TextField } from "@mui/material";

/**
 * input form 중 텍스트를 입력하는 Input의 구현채로,
 *
 * Mui의 TextField를 계승함.
 *
 * 다음을 참조 {@link https://mui.com/material-ui/react-text-field/ MUI Text Field}
 * @param {OutlinedTextFieldProps}  OutlinedTextFieldProps
 * @returns {JSX.Element} React Component
 */

const TextInput = ({ ...rest }: OutlinedTextFieldProps) => {
	return <TextField {...rest} />;
};

export default TextInput;
