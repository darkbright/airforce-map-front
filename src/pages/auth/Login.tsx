import { styled, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import F15Icon from "../../assets/icons/F15Icon";
import ShortAlert from "../../components/alert/ShortAlert";
import DefaultBox from "../../components/box/DefaultBox";
import BaseButton from "../../components/button/BaseButton";
import TextInput from "../../components/form/TextInput";
import Container from "../../components/layout/Container";
import Loading from "../../components/loading/Loading";
import { useAuth } from "../../stores/useAuth";

const loginSchema = yup.object({
	id: yup.string().defined("아이디를 입력해주세요"),
	password: yup.string().defined("비밀번호를 입력해주세요"),
});

type LoginValues = yup.InferType<typeof loginSchema>;

// TO_BE_CHECKED
// server side에서 여러 번 로그인 시 리밋 주는 것 코드 생성해서 받아올 것

const Login = () => {
	const initialValues: LoginValues = {
		id: "",
		password: "",
	};
	const navigate = useNavigate();
	const [invalid, setInvalid] = useState(false);
	const [loading, setLoading] = useState(false);
	const { signIn } = useAuth();

	return (
		<>
			<Container>
				<Root>
					<DefaultBox>
						<div style={{ marginBottom: "5%" }}>
							<F15Icon width={35} />
							<Typography gutterBottom variant="subtitle1">
								AFCCS COP 시스템에 오신 것을 환영합니다
							</Typography>
							<Typography gutterBottom variant="h4">
								시스템 로그인
							</Typography>
						</div>
						<Formik
							initialValues={initialValues}
							onSubmit={(values, actions) => {
								try {
									setLoading(true);
									setInvalid(false);
									actions.resetForm();
									if (values.id === "testUser" && values.password === "1q2w3e!") {
										setLoading(false);
										signIn();
										navigate("/index");
									} else {
										setInvalid(true);
										setLoading(false);
									}
								} catch (err) {
									console.log(err);
								}
							}}
							validationSchema={loginSchema}
						>
							{({ values, handleChange, isValid, touched, errors }) => (
								<Form>
									<TextInput
										label="아이디"
										name="id"
										value={values.id}
										onChange={handleChange}
										type="text"
										error={touched.id && Boolean(errors.id)}
										helperText={touched.id && errors.id}
										variant="outlined"
										autoFocus
										sx={{ marginBottom: "1.5%" }}
									/>
									<TextInput
										label="비밀번호"
										name="password"
										value={values.password}
										onChange={handleChange}
										type="password"
										error={touched.password && Boolean(errors.password)}
										helperText={touched.password && errors.password}
										variant="outlined"
										sx={{ marginBottom: "3%" }}
									/>
									{invalid && (
										<ShortAlert
											title="아이디 또는 비밀번호 오류"
											severity="error"
											text="아이디 또는 비밀번호가 맞지 않습니다"
										/>
									)}
									<BaseButton
										size="large"
										disabled={!isValid}
										title="로그인"
										sx={{ marginTop: "2%" }}
									/>
								</Form>
							)}
						</Formik>
					</DefaultBox>
				</Root>
			</Container>
			{loading && <Loading />}
		</>
	);
};

export default Login;

const Root = styled("div")(() => ({
	margin: "15% 20%",
}));
