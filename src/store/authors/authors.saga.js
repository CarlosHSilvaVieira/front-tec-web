import { put, takeLatest } from "redux-saga/effects";
import * as authorActions from "./authors.actionsTypes";
import API from "../../utils/api";
import { AUTHOR_API } from "../../utils/constants";

function* createAuthor({ payload }) {
  try {
    const result = yield API.post(
      `${AUTHOR_API}`,
      JSON.stringify({ autor: payload })
    );
    console.log(result);
    yield put({
      type: authorActions.CREATE_AUTHOR_SUCCESS,
      lastId: result.id,
      data: null,
    });
  } catch (error) {
    yield put({
      type: authorActions.CREATE_AUTHOR_FAIL,
      error,
      message: error?.message,
    });
  }
}

function* editAuthor({ payload }) {
  try {
    const result = yield API.put(
      `${AUTHOR_API}`,
      JSON.stringify({ autor: payload })
    );
    console.log(result);
    yield put({
      type: authorActions.EDIT_AUTHOR_SUCCESS,
      lastId: result.id,
      data: null,
    });
    yield put({ type: authorActions.GET_ALL_AUTHORS_START });
  } catch (error) {
    yield put({
      type: authorActions.EDIT_AUTHOR_FAIL,
      error,
      message: error?.message,
    });
  }
}

function* deleteAuthor({ payload }) {
  try {
    const result = yield API.delete(`${AUTHOR_API}/${payload.id}`);
    console.log(result);
    yield put({ type: authorActions.DELETE_AUTHOR_SUCCESS });
    yield put({ type: authorActions.GET_ALL_AUTHORS_START });
  } catch (error) {
    yield put({
      type: authorActions.DELETE_AUTHOR_FAIL,
      error,
      message: error?.message,
    });
  }
}

function* getAllAuthors() {
  try {
    const result = yield API.get(`${AUTHOR_API}/all`, {
      headers: {
        Accept: "application/json",
      },
    });

    yield put({
      type: authorActions.GET_ALL_AUTHORS_SUCCESS,
      payload: result.autores,
    });
  } catch (error) {
    yield put({
      type: authorActions.GET_ALL_AUTHORS_FAIL,
      error,
      message: error?.message,
    });
  }
}

export function* watchSaga() {
  yield takeLatest(authorActions.CREATE_AUTHOR_START, createAuthor);

  yield takeLatest(authorActions.EDIT_AUTHOR_START, editAuthor);

  yield takeLatest(authorActions.DELETE_AUTHOR_START, deleteAuthor);

  yield takeLatest(authorActions.GET_ALL_AUTHORS_START, getAllAuthors);
}
