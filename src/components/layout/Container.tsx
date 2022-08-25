interface ContainerProps {
	children: React.ReactNode;
}

/**
 * 패딩값 20px 8%를 준수하는 컨테이너 형태의 Div Element
 * @param {ContainerProps} ContainerProps
 * @returns {JSX.Element} React Component
 */
const Container = ({ children }: ContainerProps) => {
	return <div style={{ padding: "20px 8%" }}>{children}</div>;
};

export default Container;
