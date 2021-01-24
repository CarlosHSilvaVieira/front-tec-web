import * as actionTypes from "./authors.actionsTypes";

/* create author */
export const createAuthorStart = (data) => ({
  type: actionTypes.CREATE_AUTHOR_START,
  payload: { ...data },
});

export const createAuthorSucess = (response) => ({
  type: actionTypes.CREATE_AUTHOR_SUCCESS,
  response,
});

export const createAuthorFail = (error, message) => ({
  type: actionTypes.CREATE_AUTHOR_FAIL,
  error,
  message,
});

/* edit author */
export const editAuthorStart = (data) => ({
  type: actionTypes.EDIT_AUTHOR_START,
  payload: { ...data },
});

export const editAuthorSucess = (response) => ({
  type: actionTypes.EDIT_AUTHOR_SUCCESS,
  response,
});

export const editAuthorFail = (error, message) => ({
  type: actionTypes.EDIT_AUTHOR_FAIL,
  error,
  message,
});

/* delete author */
export const deleteAuthorStart = (id) => ({
  type: actionTypes.DELETE_AUTHOR_START,
  payload: { id },
});

export const deleteAuthorSucess = (response) => ({
  type: actionTypes.DELETE_AUTHOR_SUCCESS,
  response,
});

export const deleteAuthorFail = (error, message) => ({
  type: actionTypes.DELETE_AUTHOR_FAIL,
  error,
  message,
});

/* get author */
export const getAuthorStart = (id) => ({
  type: actionTypes.GET_AUTHOR_START,
  payload: { id },
});

export const getAuthorSucess = (author) => ({
  type: actionTypes.GET_AUTHOR_SUCCESS,
  author,
});

export const getAuthorFail = (error, message) => ({
  type: actionTypes.GET_AUTHOR_FAIL,
  error,
  message,
});

/* get all authors */
export const getAllAuthorsStart = () => ({
  type: actionTypes.GET_ALL_AUTHORS_START,
});

export const getAllAuthorsSucess = (authors) => ({
  type: actionTypes.GET_ALL_AUTHORS_SUCCESS,
  authors,
});

export const getAllAuthorsFail = (error, message) => ({
  type: actionTypes.GET_ALL_AUTHORS_FAIL,
  error,
  message,
});
