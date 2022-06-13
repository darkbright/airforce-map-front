import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import useThemeStore from "./stores/useThemeStore";
import { theme } from "./styles/theme";

function App() {
	const { isDark } = useThemeStore();

	return (
		<ThemeProvider theme={theme(isDark!)}>
			<CssBaseline enableColorScheme />
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
