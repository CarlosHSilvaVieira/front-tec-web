import * as bookActions from "./books.actionTypes";
import { updateObject } from "../../utils/object";

const INITIAL_STATE = {
  createBook: {
    resultType: "",
    message: "",
    error: null,
    lastId: null,
    data: null,
  },
  editBook: {
    resultType: "",
    message: "",
    error: null,
    data: null,
  },
  deleteBook: {
    resultType: "",
    message: "",
    error: null,
    data: null,
  },
  getBook: {
    resultType: "",
    message: "",
    error: null,
    data: null,
  },
  listBooks: {
    resultType: "",
    message: "",
    error: null,
    rows: [],
  },
  listBooksHome: {
    resultType: "",
    message: "",
    error: null,
    rows: [],
  },
};

/* create book */
const createBookStart = (state) =>
  updateObject(state, { createBook: INITIAL_STATE.createBook });

const createBookSucess = (state, action) =>
  updateObject(state, {
    createBook: {
      resultType: "success",
      lastId: action?.lastId,
      data: action?.data,
    },
  });

const createBookFail = (state, action) =>
  updateObject(state, {
    createBook: {
      resultType: "danger",
      error: action?.error,
      message: action?.message,
    },
  });

/* edit book */
const editBookStart = (state) =>
  updateObject(state, { editBook: INITIAL_STATE.editBook });

const editBookSucess = (state, action) =>
  updateObject(state, {
    editBook: {
      resultType: "success",
      data: action?.data,
    },
  });

const editBookFail = (state, action) =>
  updateObject(state, {
    editBook: {
      resultType: "danger",
      error: action?.error,
      message: action?.message,
    },
  });

/* delete book */
const deleteBookStart = (state) =>
  updateObject(state, { deleteBook: INITIAL_STATE.deleteBook });

const deleteBookSucess = (state, action) =>
  updateObject(state, {
    deleteBook: {
      resultType: "success",
      data: action?.data,
    },
  });

const deleteBookFail = (state, action) =>
  updateObject(state, {
    deleteBook: {
      resultType: "danger",
      error: action?.error,
      message: action?.message,
    },
  });

/* get book */
const getBookStart = (state) =>
  updateObject(state, { getBook: INITIAL_STATE.getBook });

const getBookSucess = (state, action) =>
  updateObject(state, {
    getBook: {
      resultType: "success",
      data: action?.data,
    },
  });

const getBookFail = (state, action) =>
  updateObject(state, {
    getBook: {
      resultType: "danger",
      error: action?.error,
      message: action?.message,
    },
  });

/* get books home */
const getBookHomeStart = (state) =>
  updateObject(state, { listBooksHome: INITIAL_STATE.listBooksHome });

const getBookHomeSucess = (state, action) =>
  updateObject(state, {
    listBooksHome: {
      ...state.listBooksHome,
      resultType: "success",
      rows: action.payload,
    },
  });

const getBookHomeFail = (state, action) =>
  updateObject(state, {
    listBooksHome: {
      resultType: "danger",
      error: action?.error,
      message: action?.message,
      rows: [],
    },
  });

/* get all books */
const getAllBookStart = (state) =>
  updateObject(state, { listBooks: INITIAL_STATE.listBooks });

const getAllBookSucess = (state, action) =>
  updateObject(state, {
    listBooks: {
      resultType: "success",
      rows: action?.data,
    },
  });

const getAllBookFail = (state, action) =>
  updateObject(state, {
    listBooks: {
      resultType: "danger",
      error: action?.error,
      message: action?.message,
      rows: [],
    },
  });

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    /* create */
    case bookActions.CREATE_BOOK_START:
      return createBookStart(state);

    case bookActions.CREATE_BOOK_SUCCESS:
      return createBookSucess(state, action);

    case bookActions.CREATE_BOOK_FAIL:
      return createBookFail(state, action);

    /* edit*/
    case bookActions.EDIT_BOOK_START:
      return editBookStart(state);

    case bookActions.EDIT_BOOK_SUCCESS:
      return editBookSucess(state, action);

    case bookActions.EDIT_BOOK_FAIL:
      return editBookFail(state, action);

    /* delete*/
    case bookActions.DELETE_BOOK_START:
      return deleteBookStart(state);

    case bookActions.DELETE_BOOK_SUCCESS:
      return deleteBookSucess(state, action);

    case bookActions.DELETE_BOOK_FAIL:
      return deleteBookFail(state, action);

    /* get */
    case bookActions.GET_BOOK_START:
      return getBookStart(state);

    case bookActions.GET_BOOK_SUCCESS:
      return getBookSucess(state, action);

    case bookActions.GET_BOOK_FAIL:
      return getBookFail(state, action);

    /* get book home */
    case bookActions.GET_BOOK_HOME_START:
      return getBookHomeStart(state);

    case bookActions.GET_BOOK_HOME_SUCCESS:
      return getBookHomeSucess(state, action);

    case bookActions.GET_BOOK_HOME_FAIL:
      return getBookHomeFail(state, action);

    /* get all */
    case bookActions.GET_ALL_BOOKS_START:
      return getAllBookStart(state);

    case bookActions.GET_ALL_BOOKS_SUCCESS:
      return getAllBookSucess(state, action);

    case bookActions.GET_ALL_BOOKS_FAIL:
      return getAllBookFail(state, action);

    default:
      return state;
  }
};
