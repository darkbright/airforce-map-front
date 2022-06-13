import { OutlinedTextFieldProps, TextField } from "@mui/material";

const TextInput = ({ ...rest }: OutlinedTextFieldProps) => {
	return <TextField {...rest} />;
};

export default TextInput;
