import BaseModal from "../modal/BaseModal";
import { Formatter } from "tui-grid/types/store/column";
import ShortAlert from "../alert/ShortAlert";
import BaseBlockTitleBox from "../box/textBox/BaseBlockTitleBox";
import TextInput from "../form/TextInput";
import { Form, Formik } from "formik";
import * as yup from "yup";
import BaseButton from "../button/BaseButton";

const HeaderSettingSchema = yup.object({
	frozenCount: yup
		.number()
		.defined("틀고정을 취소하시려면 0을 입력해주세요")
		.min(0)
		.max(3, "틀고정 수는 최대 3개를 넘을 수 없습니다"),
});

type HeaderSettingValues = yup.InferType<typeof HeaderSettingSchema>;

interface ColumnProps {
	name: string;
	header: string;
	sortable?: boolean;
	formatter?: Formatter;
}

interface HeaderSettingModalProps {
	open: boolean;
	setOpen: (value: boolean) => void;
	headerData: ColumnProps[];
	tableRef: any;
	frozenCount: number;
	setFrozenCount: (value: number) => void;
}

const HeaderSettingModal = ({
	open,
	setOpen,
	headerData,
	tableRef,
	frozenCount,
	setFrozenCount,
}: HeaderSettingModalProps) => {
	const initialValues: HeaderSettingValues = {
		frozenCount,
	};

	return (
		<BaseModal open={open} setOpen={() => setOpen(!open)}>
			<ShortAlert
				title="도움말"
				text={`움직이고자 하는 컬럼명에 마우스 왼쪽을 누른채로 약간 아래로 당기면 컬럼의 위치를 움직일 수 있습니다\n 컬럼을 맨 왼쪽으로 옮기면 그 행을 기준으로 틀고정이 됩니다`}
				severity="info"
			/>
			<BaseBlockTitleBox title="틀 고정 설정" subtitle="왼쪽에 고정시킬 행의 갯수를 적어주세요" />
			<Formik
				initialValues={initialValues}
				onSubmit={(values) => {
					setFrozenCount(values.frozenCount);
					tableRef.current?.getInstance().setFrozenColumnCount(values.frozenCount);
					setOpen(false);
				}}
				validationSchema={HeaderSettingSchema}
			>
				{({ values, handleChange, errors }) => (
					<Form>
						<TextInput
							name="frozenCount"
							variant="outlined"
							type="number"
							value={values.frozenCount}
							onChange={handleChange}
							error={Boolean(errors.frozenCount)}
							helperText={errors.frozenCount}
							autoFocus
						/>
						<BaseButton type="submit" title="확인" />
					</Form>
				)}
			</Formik>
		</BaseModal>
	);
};

export default HeaderSettingModal;
