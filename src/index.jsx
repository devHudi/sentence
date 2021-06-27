import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import reportWebVitals from "./reportWebVitals";

import RootRouter from "routers";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&family=Noto+Sans+KR:wght@300;400;500&display=swap');

  ${reset}
  
  html, body, #root {
    height: 100%;
  }

  body {
    background-color: #000000;
    background-attachment: fixed;
    font-family: 'Noto Sans KR', sans-serif;
    color: #ffffff;
  }

  * {
    box-sizing: border-box;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle e={true} />
    <RootRouter />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
