import * as employeersActions from "./employees.actionTypes";
import { updateObject } from "../../utils/object";

const INITIAL_STATE = {
  employee: {
    resultType: "",
    message: "",
    error: null,
    data: null,
  },
};

/* get user */
const getEmployeerStart = (state) =>
  updateObject(state, { employee: INITIAL_STATE.employee });

const getEmployeerSucess = (state, action) =>
  updateObject(state, {
    employee: {
      resultType: "success",
      data: action?.payload,
    },
  });

const getEmployeerFail = (state, action) =>
  updateObject(state, {
    employee: {
      resultType: "danger",
      error: action?.error,
      message: action?.message,
    },
  });

const userLogout = (state) => updateObject(state, { user: INITIAL_STATE.user });

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    /* login */
    case employeersActions.EMPLOYEER_LOGIN_START:
      return getEmployeerStart(state);

    case employeersActions.EMPLOYEER_LOGIN_SUCCESS:
      return getEmployeerSucess(state, action);

    case employeersActions.EMPLOYEER_LOGIN_FAIL:
      return getEmployeerFail(state, action);

    case employeersActions.EMPLOYEER_LOGOUT:
      return userLogout(state);

    default:
      return state;
  }
};
