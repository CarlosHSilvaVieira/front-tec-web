import * as authorActions from "./authors.actionsTypes";
import { updateObject } from "../../utils/object";

const INITIAL_STATE = {
  createAuthor: {
    resultType: "",
    message: "",
    error: null,
    lastId: null,
    data: null,
  },
  editAuthor: {
    resultType: "",
    message: "",
    error: null,
    data: null,
  },
  deleteAuthor: {
    resultType: "",
    message: "",
    error: null,
    data: null,
  },
  getAuthor: {
    resultType: "",
    message: "",
    error: null,
    data: null,
  },
  listAuthors: {
    resultType: "",
    message: "",
    error: null,
    rows: [],
  },
};

/* create author */
const createAuthorStart = (state) =>
  updateObject(state, { createAuthor: INITIAL_STATE.createAuthor });

const createAuthorSucess = (state, action) =>
  updateObject(state, {
    createAuthor: {
      resultType: "success",
      lastId: action?.lastId,
      data: action?.data,
    },
  });

const createAuthorFail = (state, action) =>
  updateObject(state, {
    createAuthor: {
      resultType: "danger",
      error: action?.error,
      message: action?.message,
    },
  });

/* edit author */
const editAuthorStart = (state) =>
  updateObject(state, { editAuthor: INITIAL_STATE.editAuthor });

const editAuthorSucess = (state, action) =>
  updateObject(state, {
    editAuthor: {
      resultType: "success",
      data: action?.data,
    },
  });

const editAuthorFail = (state, action) =>
  updateObject(state, {
    editAuthor: {
      resultType: "danger",
      error: action?.error,
      message: action?.message,
    },
  });

/* delete author */
const deleteAuthorStart = (state) =>
  updateObject(state, { deleteAuthor: INITIAL_STATE.deleteAuthor });

const deleteAuthorSucess = (state, action) =>
  updateObject(state, {
    deleteAuthor: {
      resultType: "success",
      data: action?.data,
    },
  });

const deleteAuthorFail = (state, action) =>
  updateObject(state, {
    deleteAuthor: {
      resultType: "danger",
      error: action?.error,
      message: action?.message,
    },
  });

/* get author */
const getAuthorStart = (state) =>
  updateObject(state, { getAuthor: INITIAL_STATE.getAuthor });

const getAuthorSucess = (state, action) =>
  updateObject(state, {
    getAuthor: {
      resultType: "success",
      data: action?.data,
    },
  });

const getAuthorFail = (state, action) =>
  updateObject(state, {
    getAuthor: {
      resultType: "danger",
      error: action?.error,
      message: action?.message,
    },
  });

/* get all authors */
const getAllAuthorStart = (state) =>
  updateObject(state, { listAuthors: INITIAL_STATE.listAuthors });

const getAllAuthorSucess = (state, action) =>
  updateObject(state, {
    listAuthors: {
      resultType: "success",
      rows: action?.data,
    },
  });

const getAllAuthorFail = (state, action) =>
  updateObject(state, {
    listAuthors: {
      resultType: "danger",
      error: action?.error,
      message: action?.message,
      rows: [],
    },
  });

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    /* create */
    case authorActions.CREATE_AUTHOR_START:
      return createAuthorStart(state);

    case authorActions.CREATE_AUTHOR_SUCCESS:
      return createAuthorSucess(state, action);

    case authorActions.CREATE_AUTHOR_FAIL:
      return createAuthorFail(state, action);

    /* edit*/
    case authorActions.EDIT_AUTHOR_START:
      return editAuthorStart(state);

    case authorActions.EDIT_AUTHOR_SUCCESS:
      return editAuthorSucess(state, action);

    case authorActions.EDIT_AUTHOR_FAIL:
      return editAuthorFail(state, action);

    /* delete*/
    case authorActions.DELETE_AUTHOR_START:
      return deleteAuthorStart(state);

    case authorActions.DELETE_AUTHOR_SUCCESS:
      return deleteAuthorSucess(state, action);

    case authorActions.DELETE_AUTHOR_FAIL:
      return deleteAuthorFail(state, action);

    /* get */
    case authorActions.GET_AUTHOR_START:
      return getAuthorStart(state);

    case authorActions.GET_AUTHOR_SUCCESS:
      return getAuthorSucess(state, action);

    case authorActions.GET_AUTHOR_FAIL:
      return getAuthorFail(state, action);

    /* get all */
    case authorActions.GET_ALL_AUTHORS_START:
      return getAllAuthorStart(state);

    case authorActions.GET_ALL_AUTHORS_SUCCESS:
      return getAllAuthorSucess(state, action);

    case authorActions.GET_ALL_AUTHORS_FAIL:
      return getAllAuthorFail(state, action);

    default:
      return state;
  }
};
