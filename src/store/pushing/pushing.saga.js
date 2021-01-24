import { put, takeLatest } from "redux-saga/effects";
import * as pushingActions from "./pushing.actionTypes";
import API from "../../utils/api";
import { PUBLISHING_API } from "../../utils/constants";

function* createPushing({ payload }) {
  try {
    const result = yield API.post(
      `${PUBLISHING_API}`,
      JSON.stringify({ editora: payload })
    );
    console.log(result);
    yield put({
      type: pushingActions.CREATE_PUSHING_SUCCESS,
      lastId: result.id,
      data: null,
    });
  } catch (error) {
    yield put({
      type: pushingActions.CREATE_PUSHING_FAIL,
      error,
      message: error?.message,
    });
  }
}

function* editPushing({ payload }) {
  try {
    const result = yield API.put(
      `${PUBLISHING_API}`,
      JSON.stringify({ editora: payload })
    );
    console.log(result);
    yield put({
      type: pushingActions.EDIT_PUSHING_SUCCESS,
      lastId: result.id,
      data: null,
    });
    yield put({ type: pushingActions.GET_ALL_PUSHINGS_START });
  } catch (error) {
    yield put({
      type: pushingActions.EDIT_PUSHING_FAIL,
      error,
      message: error?.message,
    });
  }
}

function* deletePushing({ payload }) {
  try {
    const result = yield API.delete(`${PUBLISHING_API}/${payload.id}`);
    console.log(result);
    yield put({ type: pushingActions.DELETE_PUSHING_SUCCESS });
    yield put({ type: pushingActions.GET_ALL_PUSHINGS_START });
  } catch (error) {
    yield put({
      type: pushingActions.DELETE_PUSHING_FAIL,
      error,
      message: error?.message,
    });
  }
}

function* getAllPushings() {
  try {
    const result = yield API.get(`${PUBLISHING_API}/all`, {
      headers: {
        Accept: "application/json",
      },
    });

    yield put({
      type: pushingActions.GET_ALL_PUSHINGS_SUCCESS,
      payload: result.autores,
    });
  } catch (error) {
    yield put({
      type: pushingActions.GET_ALL_PUSHINGS_FAIL,
      error,
      message: error?.message,
    });
  }
}

export function* watchSaga() {
  yield takeLatest(pushingActions.CREATE_PUSHING_START, createPushing);

  yield takeLatest(pushingActions.EDIT_PUSHING_START, editPushing);

  yield takeLatest(pushingActions.DELETE_PUSHING_START, deletePushing);

  yield takeLatest(pushingActions.GET_ALL_PUSHINGS_START, getAllPushings);
}
