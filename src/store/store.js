import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";

import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import mySaga from "./saga";
import rootReducer from "./reducer";

// cria o historico do browser
export const history = createBrowserHistory();
// estado inicial do redux
const initialState = {};

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, routerMiddleware(history)];

let composeEnhancer = compose;

if (process.env.NODE_ENV === "development") {
  composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  //middlewares.push(logger);
}

const store = createStore(
  rootReducer(history),
  initialState,
  composeEnhancer(applyMiddleware(...middlewares))
);

// then run the saga
sagaMiddleware.run(mySaga);

export default store;
