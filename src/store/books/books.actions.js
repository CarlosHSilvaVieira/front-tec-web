import * as actionTypes from "./books.actionTypes";

/* create book */
export const createBookStart = (data) => ({
  type: actionTypes.CREATE_BOOK_START,
  payload: { ...data },
});

export const createBookSucess = (response) => ({
  type: actionTypes.CREATE_BOOK_SUCCESS,
  response,
});

export const createBookFail = (error, message) => ({
  type: actionTypes.CREATE_BOOK_FAIL,
  error,
  message,
});

/* edit book */
export const editBookStart = (data) => ({
  type: actionTypes.EDIT_BOOK_START,
  payload: { ...data },
});

export const editBookSucess = (response) => ({
  type: actionTypes.EDIT_BOOK_SUCCESS,
  response,
});

export const editBookFail = (error, message) => ({
  type: actionTypes.EDIT_BOOK_FAIL,
  error,
  message,
});

/* delete book */
export const deleteBookStart = (id) => ({
  type: actionTypes.DELETE_BOOK_START,
  payload: { id } ,
});

export const deleteBookSucess = (response) => ({
  type: actionTypes.DELETE_BOOK_SUCCESS,
  response,
});

export const deleteBookFail = (error, message) => ({
  type: actionTypes.DELETE_BOOK_FAIL,
  error,
  message,
});

/* get book */
export const getBookStart = (id) => ({
  type: actionTypes.GET_BOOK_START,
  payload: { id },
});

export const getBookSucess = (book) => ({
  type: actionTypes.GET_BOOK_SUCCESS,
  book,
});

export const getBookFail = (error, message) => ({
  type: actionTypes.GET_BOOK_FAIL,
  error,
  message,
});

/* get books home */
export const getBooksHomeStart = () => ({
  type: actionTypes.GET_BOOK_HOME_START,
});

export const getBooksHomeSucess = (data) => ({
  type: actionTypes.GET_BOOK_HOME_SUCCESS,
  data,
});

export const getBooksHomeFail = (error, message) => ({
  type: actionTypes.GET_BOOK_HOME_FAIL,
  error,
  message,
});

/* get all books */
export const getAllBooksStart = () => ({
  type: actionTypes.GET_ALL_BOOKS_START,
});

export const getAllBooksSucess = (data) => ({
  type: actionTypes.GET_ALL_BOOKS_SUCCESS,
  data,
});

export const getAllBooksFail = (error, message) => ({
  type: actionTypes.GET_ALL_BOOKS_FAIL,
  error,
  message,
});
