import { put, takeLatest } from "redux-saga/effects";
import * as usersActions from "./users.actionTypes";
import API from "../../utils/api";
import { USER_API } from "../../utils/constants";

function* createUser({ payload }) {
  try {
    const result = yield API.post(
      `${USER_API}`,
      JSON.stringify({ usuario: payload })
    );

    yield put({
      type: usersActions.CREATE_USER_SUCCESS,
      lastId: result.data.id,
      data: null,
    });
  } catch (error) {
    yield put({
      type: usersActions.CREATE_USER_FAIL,
      error,
      message: error?.message,
    });
  }
}

function* editUser({ payload }) {
  try {
    const result = yield API.put(
      `${USER_API}`,
      JSON.stringify({ usuario: payload })
    );
    
    yield put({
      type: usersActions.EDIT_USER_SUCCESS,
      lastId: result.data.id,
      data: null,
    });
    yield put({ type: usersActions.GET_ALL_USERS_START });
  } catch (error) {
    yield put({
      type: usersActions.EDIT_USER_FAIL,
      error,
      message: error?.message,
    });
  }
}

function* deleteUser({ payload }) {
  try {
    const result = yield API.delete(`${USER_API}/${payload.id}`);
    
    yield put({ type: usersActions.DELETE_USER_SUCCESS });
    yield put({ type: usersActions.GET_ALL_USERS_START });
  } catch (error) {
    yield put({
      type: usersActions.DELETE_USER_FAIL,
      error,
      message: error?.message,
    });
  }
}

function* getAllUsers() {
  try {
    const result = yield API.get(`${USER_API}/all`, {
      headers: {
        Accept: "application/json",
      },
    });

    yield put({
      type: usersActions.GET_ALL_USERS_SUCCESS,
      payload: result.data.usuarios,
    });
  } catch (error) {
    yield put({
      type: usersActions.GET_ALL_USERS_FAIL,
      error,
      message: error?.message,
    });
  }
}

function* loginUser({ payload }) {
  try {
    const login = { email: payload.email, senha: payload.senha };
    const result = yield API.post(
      `${USER_API}/login`,
      JSON.stringify({ login }),
      {
        headers: {
          Accept: "Application/json",
          "Content-Type": "Application/json",
        },
      }
    );

    yield put({
      type: usersActions.USER_LOGIN_SUCCESS,
      payload: result.data.resultado,
    });
  } catch (error) {
    yield put({
      type: usersActions.USER_LOGIN_FAIL,
      error,
      message: error?.message,
    });
  }
}

export function* watchSaga() {
  yield takeLatest(usersActions.CREATE_USER_START, createUser);

  yield takeLatest(usersActions.EDIT_USER_START, editUser);

  yield takeLatest(usersActions.DELETE_USER_START, deleteUser);

  yield takeLatest(usersActions.GET_ALL_USERS_START, getAllUsers);

  yield takeLatest(usersActions.USER_LOGIN_START, loginUser);
}
