interface ContainerProps {
	children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
	return <div style={{ padding: "20px 8%" }}>{children}</div>;
};

export default Container;
