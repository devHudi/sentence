import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import reportWebVitals from "./reportWebVitals";

import RootRouter from "routers";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <RootRouter />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
