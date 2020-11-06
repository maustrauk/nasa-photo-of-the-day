import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import "./css/tailwind.css";
import App from "./App";
import theme from "./theme/theme.js";

ReactDOM.render(<ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>,
    document.getElementById("root"));
