import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";
import "./index.css";

import store, { history } from "./store/store";

const render = () => {
  return ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App history={history} />
      </ThemeProvider>
    </Provider>,
    document.getElementById("root")
  );
};

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
