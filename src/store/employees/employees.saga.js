import { put, takeLatest } from "redux-saga/effects";
import * as employeersActions from "./employees.actionTypes";
import API from "../../utils/api";
import { EMPLOYEER_API } from "../../utils/constants";

function* loginEmployeer({ payload }) {
  try {
    const login = { email: payload.email, senha: payload.senha, isEmployee: true };
    const result = yield API.post(
      `${EMPLOYEER_API}/login`,
      JSON.stringify({ login }),
      {
        headers: {
          Accept: "Application/json",
          "Content-Type": "Application/json",
        },
      }
    );

    yield put({
      type: employeersActions.EMPLOYEER_LOGIN_SUCCESS,
      payload: result.resultado,
    });
  } catch (error) {
    yield put({
      type: employeersActions.EMPLOYEER_LOGIN_FAIL,
      error,
      message: error?.message,
    });
  }
}


export function* watchSaga() {
  yield takeLatest(employeersActions.EMPLOYEER_LOGIN_START, loginEmployeer);
}
