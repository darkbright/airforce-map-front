import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles/index.css";
// d2 styles
import "./styles/d2/main.css";
import "./styles/d2/d2map.ui.css";
import "./styles/d2/d2map.ui.ms.popup.css";
import "./styles/d2/ol.css";
import "./styles/d2/sub.dark.css";
import "./styles/d2/zTreeStyle.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

// toastify styles
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Infinity,
			structuralSharing: false,
		},
	},
});

/**
 * 최초 시작
 */
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<QueryClientProvider client={queryClient}>
		<ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
		<App />
	</QueryClientProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
