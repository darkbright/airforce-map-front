import { MenuItem, styled } from "@mui/material";
import TextInput from "./TextInput";

interface SelectBoxProps {
	value: string;
	onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
	data: string[];
}

const SelectBox = ({ value, onChange, data }: SelectBoxProps) => {
	return (
		<Root>
			<TextInput
				select
				id="test"
				label="선택"
				size="small"
				variant="outlined"
				value={value}
				onChange={onChange}
				sx={{ width: "40%" }}
			>
				{data.map((index) => (
					<MenuItem key={index} value={index}>
						{index}
					</MenuItem>
				))}
			</TextInput>
		</Root>
	);
};

export default SelectBox;

const Root = styled("div")(() => ({
	display: "flex",
	justifyContent: "flex-end",
}));
