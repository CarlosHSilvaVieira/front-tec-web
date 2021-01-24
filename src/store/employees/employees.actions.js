import * as actionTypes from "./employees.actionTypes";

/* login */
export const loginEmployeeStart = (login) => ({
  type: actionTypes.EMPLOYEER_LOGIN_START,
  payload: { ...login },
});

export const loginEmployeeSucess = (payload) => ({
  type: actionTypes.EMPLOYEER_LOGIN_SUCCESS,
  payload,
});

export const loginEmployeeFail = (error, message) => ({
  type: actionTypes.EMPLOYEER_LOGIN_FAIL,
  error,
  message,
});

/* logout */

export const logoutUser = () => ({
  type: actionTypes.EMPLOYEER_LOGOUT,
});
