import { put, takeLatest } from "redux-saga/effects";
import * as bookActions from "./books.actionTypes";
import API from "../../utils/api";
import { BOOK_API } from "../../utils/constants";

function* createBook({ payload }) {
  try {
    const result = yield API.post(
      `${BOOK_API}`,
      JSON.stringify({ produto: payload })
    );
    
    yield put({
      type: bookActions.CREATE_BOOK_SUCCESS,
      lastId: result.data.id,
      data: null,
    });
  } catch (error) {
    yield put({
      type: bookActions.CREATE_BOOK_FAIL,
      error,
      message: error?.message,
    });
  }
}

function* editBook({ payload }) {
  try {
    const result = yield API.put(
      `${BOOK_API}`,
      JSON.stringify({ produto: payload })
    );
    
    yield put({
      type: bookActions.EDIT_BOOK_SUCCESS,
      lastId: result.data.id,
      data: null,
    });
    yield put({ type: bookActions.GET_ALL_BOOKS_START });
  } catch (error) {
    yield put({
      type: bookActions.EDIT_BOOK_FAIL,
      error,
      message: error?.message,
    });
  }
}

function* deleteBook({ payload }) {
  try {
    const result = yield API.delete(`${BOOK_API}/${payload.id}`);
    
    yield put({ type: bookActions.DELETE_BOOK_SUCCESS });
    yield put({ type: bookActions.GET_ALL_BOOKS_START });
  } catch (error) {
    yield put({
      type: bookActions.DELETE_BOOK_FAIL,
      error,
      message: error?.message,
    });
  }
}

function* getBooksHome() {
  try {
    const result = yield API.get(`${BOOK_API}/limit/10`, {
      headers: {
        Accept: "application/json",
      },
    });

    yield put({
      type: bookActions.GET_BOOK_HOME_SUCCESS,
      payload: result.data.produtos,
    });
  } catch (error) {
    yield put({
      type: bookActions.GET_BOOK_HOME_FAIL,
      error,
      message: error?.message,
    });
  }
}

function* getAllBooks() {
  try {
    const result = yield API.get(`${BOOK_API}/all`, {
      headers: {
        Accept: "application/json",
      },
    });

    yield put({
      type: bookActions.GET_ALL_BOOKS_SUCCESS,
      payload: result.data.produtos,
    });
  } catch (error) {
    yield put({
      type: bookActions.GET_ALL_BOOKS_FAIL,
      error,
      message: error?.message,
    });
  }
}

export function* watchSaga() {
  yield takeLatest(bookActions.CREATE_BOOK_START, createBook);

  yield takeLatest(bookActions.EDIT_BOOK_START, editBook);

  yield takeLatest(bookActions.DELETE_BOOK_START, deleteBook);

  yield takeLatest(bookActions.GET_ALL_BOOKS_START, getAllBooks);

  yield takeLatest(bookActions.GET_BOOK_HOME_START, getBooksHome);
}
