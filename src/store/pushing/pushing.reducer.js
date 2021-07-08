import * as pushingActions from "./pushing.actionTypes"
import { updateObject } from "../../utils/object";

const INITIAL_STATE = {
  createPushing: {
    resultType: "",
    message: "",
    error: null,
    lastId: null,
    data: null,
  },
  editPushing: {
    resultType: "",
    message: "",
    error: null,
    data: null,
  },
  deletePushing: {
    resultType: "",
    message: "",
    error: null,
    data: null,
  },
  getPushing: {
    resultType: "",
    message: "",
    error: null,
    data: null,
  },
  listPushings: {
    resultType: "",
    message: "",
    error: null,
    rows: [],
  }
};

/* create pushing */
const createPushingStart = (state) =>
  updateObject(state, { createPushing: INITIAL_STATE.createPushing });

const createPushingSucess = (state, action) =>
  updateObject(state, {
    createPushing: {
      resultType: "success",
      lastId: action?.lastId,
      data: action?.data,
    },
  });

const createPushingFail = (state, action) =>
  updateObject(state, {
    createPushing: {
      resultType: "danger",
      error: action?.error,
      message: action?.message,
    },
  });

/* edit pushing */
const editPushingStart = (state) =>
  updateObject(state, { editPushing: INITIAL_STATE.editPushing });

const editPushingSucess = (state, action) =>
  updateObject(state, {
    editPushing: {
      resultType: "success",
      data: action?.data,
    },
  });

const editPushingFail = (state, action) =>
  updateObject(state, {
    editPushing: {
      resultType: "danger",
      error: action?.error,
      message: action?.message,
    },
  });

/* delete pushing */
const deletePushingStart = (state) =>
  updateObject(state, { deletePushing: INITIAL_STATE.deletePushing });

const deletePushingSucess = (state, action) =>
  updateObject(state, {
    deletePushing: {
      resultType: "success",
      data: action?.data,
    },
  });

const deletePushingFail = (state, action) =>
  updateObject(state, {
    deletePushing: {
      resultType: "danger",
      error: action?.error,
      message: action?.message,
    },
  });

/* get pushing */
const getPushingStart = (state) =>
  updateObject(state, { getPushing: INITIAL_STATE.getPushing });

const getPushingSucess = (state, action) =>
  updateObject(state, {
    getPushing: {
      resultType: "success",
      data: action?.data,
    },
  });

const getPushingFail = (state, action) =>
  updateObject(state, {
    getPushing: {
      resultType: "danger",
      error: action?.error,
      message: action?.message,
    },
  });

/* get all pushing */
const getAllPushingStart = (state) =>
  updateObject(state, { listPushings: INITIAL_STATE.listPushings });

const getAllPushingSucess = (state, action) =>
  updateObject(state, {
    listPushings: {
      resultType: "success",
      rows: action?.data,
    },
  });

const getAllPushingFail = (state, action) =>
  updateObject(state, {
    listPushings: {
      resultType: "danger",
      error: action?.error,
      message: action?.message,
      rows: [],
    },
  });

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    /* create */
    case pushingActions.CREATE_PUSHING_START:
      return createPushingStart(state);

    case pushingActions.CREATE_PUSHING_SUCCESS:
      return createPushingSucess(state, action);

    case pushingActions.CREATE_PUSHING_FAIL:
      return createPushingFail(state, action);

    /* edit*/
    case pushingActions.EDIT_PUSHING_START:
      return editPushingStart(state);

    case pushingActions.EDIT_PUSHING_SUCCESS:
      return editPushingSucess(state, action);

    case pushingActions.EDIT_PUSHING_FAIL:
      return editPushingFail(state, action);

    /* delete*/
    case pushingActions.DELETE_PUSHING_START:
      return deletePushingStart(state);

    case pushingActions.DELETE_PUSHING_SUCCESS:
      return deletePushingSucess(state, action);

    case pushingActions.DELETE_PUSHING_FAIL:
      return deletePushingFail(state, action);

    /* get */
    case pushingActions.GET_PUSHING_START:
      return getPushingStart(state);

    case pushingActions.GET_PUSHING_SUCCESS:
      return getPushingSucess(state, action);

    case pushingActions.GET_PUSHING_FAIL:
      return getPushingFail(state, action);

    /* get all */
    case pushingActions.GET_ALL_PUSHINGS_START:
      return getAllPushingStart(state);

    case pushingActions.GET_ALL_PUSHINGS_SUCCESS:
      return getAllPushingSucess(state, action);

    case pushingActions.GET_ALL_PUSHINGS_FAIL:
      return getAllPushingFail(state, action);

    default:
      return state;
  }
};
