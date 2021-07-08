import * as actionTypes from "./users.actionTypes";

/* create User */
export const createUserStart = (data) => ({
    type: actionTypes.CREATE_USER_START,
    payload: { ...data }
});

export const createUserSucess = (response) => ({
    type: actionTypes.CREATE_USER_SUCCESS,
    response
});

export const createUserFail = (error, message) => ({
    type: actionTypes.CREATE_USER_FAIL,
    error,
    message
});

/* edit User */
export const editUserStart = (data) => ({
    type: actionTypes.EDIT_USER_START,
    payload: { ...data }
});

export const editUserSucess = (response) => ({
    type: actionTypes.EDIT_USER_SUCCESS,
    response
});

export const editUserFail = (error, message) => ({
    type: actionTypes.EDIT_USER_FAIL,
    error,
    message
});

/* delete User */
export const deleteUserStart = (id) => ({
    type: actionTypes.DELETE_USER_START,
    payload: { id }
});

export const deleteUserSucess = (response) => ({
    type: actionTypes.DELETE_USER_SUCCESS,
    response
});

export const deleteUserFail = (error, message) => ({
    type: actionTypes.DELETE_USER_FAIL,
    error,
    message
});


/* get User */
export const getUserStart = (id) => ({
    type: actionTypes.GET_USER_START,
    payload: { id }
});

export const getUserSucess = (payload) => ({
    type: actionTypes.GET_USER_SUCCESS,
    payload
});

export const getUserFail = (error, message) => ({
    type: actionTypes.GET_USER_FAIL,
    error,
    message
});

/* get all Users */
export const getAllUsersStart = () => ({
    type: actionTypes.GET_ALL_USERS_START,
});

export const getAllUsersSucess = (Users) => ({
    type: actionTypes.GET_ALL_USERS_SUCCESS,
    Users
});

export const getAllUsersFail = (error, message) => ({
    type: actionTypes.GET_ALL_USERS_FAIL,
    error,
    message
});

/* shopping cart */
export const AddItemToCart = (book) => ({
    type: actionTypes.ADD_ITEM_TO_CART,
    book
});

export const RemoveItemFromCart = (book) => ({
    type: actionTypes.REMOVE_ITEM_FROM_CART,
    book
});

export const IncreaseItemFromCart = (book) => ({
    type: actionTypes.INCREASE_ITEM_FROM_CART,
    book
});

export const DeacreseItemFromCart = (book) => ({
    type: actionTypes.DECREASE_ITEM_FROM_CART,
    book
});

export const UpdateCart = (books) => ({
    type: actionTypes.UPDATE_CART,
    books
});

/* login */
export const loginUserStart = (data) => ({
    type: actionTypes.USER_LOGIN_START,
    payload: { ...data }
});

export const loginUserSucess = (payload) => ({
    type: actionTypes.USER_LOGIN_SUCCESS,
    payload
});

export const loginUserFail = (error, message) => ({
    type: actionTypes.USER_LOGIN_FAIL,
    error,
    message
});

/* logout */

export const logoutUser = () => ({
    type: actionTypes.USER_LOGOUT,
});
