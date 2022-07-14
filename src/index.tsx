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

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
