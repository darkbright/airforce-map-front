import { BaseTextFieldProps, SxProps, TextField, Theme } from "@mui/material";
import { ChangeEventHandler } from "react";
import InputMask from "react-input-mask";

interface MaskedTextInputProps {
	mask: string | (string | RegExp)[];
	value: string;
	onChange: ChangeEventHandler<HTMLInputElement> | undefined;
	name: string;
	label: string;
	sx?: SxProps<Theme> | undefined;
	error?: BaseTextFieldProps["error"];
	helperText?: BaseTextFieldProps["helperText"];
}

const directionMask = /[WENS]/;
const digit = /[0-9]/;

export const maskType = {
	lon: [digit, digit, digit, "°", digit, digit, "′", digit, digit, "″", directionMask],
};

const MaskedTextInput = ({
	mask,
	value,
	onChange,
	label,
	name,
	sx,
	error,
	helperText,
}: MaskedTextInputProps) => {
	return (
		<InputMask mask={mask} value={value} onChange={onChange}>
			<TextField
				name={name}
				label={label}
				type="text"
				sx={sx}
				error={error}
				helperText={helperText}
			/>
		</InputMask>
	);
};

export default MaskedTextInput;

// <InputMask mask={mask} value={value} onChange={onChange}>
// 	<TextField
// 		variant="outlined"
// 		label={label}
// 		onChange={onChange}
// 		value={value}
// 		name={name}
// 		type="text"
// 	/>
// </InputMask>

/* {() => (
				<TextField variant="outlined" type="text" name={name} label={label} />
			)} */
