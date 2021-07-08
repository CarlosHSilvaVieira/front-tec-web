import * as actionTypes from "./pushing.actionTypes";

/* create author */
export const createPushingStart = (data) => ({
  type: actionTypes.CREATE_PUSHING_START,
  payload: { ...data },
});

export const createPushingSucess = (response) => ({
  type: actionTypes.CREATE_PUSHING_SUCCESS,
  response,
});

export const createPushingFail = (error, message) => ({
  type: actionTypes.CREATE_PUSHING_FAIL,
  error,
  message,
});

/* edit author */
export const editPushingStart = (data) => ({
  type: actionTypes.EDIT_PUSHING_START,
  payload: { ...data },
});

export const editPushingSucess = (response) => ({
  type: actionTypes.EDIT_PUSHING_SUCCESS,
  response,
});

export const editPushingFail = (error, message) => ({
  type: actionTypes.EDIT_PUSHING_FAIL,
  error,
  message,
});

/* delete author */
export const deletePushingStart = (id) => ({
  type: actionTypes.DELETE_PUSHING_START,
  payload: { id },
});

export const deletePushingSucess = (response) => ({
  type: actionTypes.DELETE_PUSHING_SUCCESS,
  response,
});

export const deletePushingFail = (error, message) => ({
  type: actionTypes.DELETE_PUSHING_FAIL,
  error,
  message,
});

/* get author */
export const getPushingStart = (id) => ({
  type: actionTypes.GET_PUSHING_START,
  payload: { id },
});

export const getPushingSucess = (author) => ({
  type: actionTypes.GET_PUSHING_SUCCESS,
  author,
});

export const getPushingFail = (error, message) => ({
  type: actionTypes.GET_PUSHING_FAIL,
  error,
  message,
});

/* get all authors */
export const getAllPushingsStart = () => ({
  type: actionTypes.GET_ALL_PUSHINGS_START,
});

export const getAllPushingsSucess = (authors) => ({
  type: actionTypes.GET_ALL_PUSHINGS_SUCCESS,
  authors,
});

export const getAllPushingsFail = (error, message) => ({
  type: actionTypes.GET_ALL_PUSHINGS_FAIL,
  error,
  message,
});
