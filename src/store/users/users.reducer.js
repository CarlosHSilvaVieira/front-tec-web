import * as usersActions from "./users.actionTypes";
import { updateObject } from "../../utils/object";

const INITIAL_STATE = {
  shoppingCart: {},
  createUser: {
    resultType: "",
    message: "",
    error: null,
    lastId: null,
    data: null,
  },
  editUser: {
    resultType: "",
    message: "",
    error: null,
    data: null,
  },
  deleteUser: {
    resultType: "",
    message: "",
    error: null,
    data: null,
  },
  user: {
    resultType: "",
    message: "",
    error: null,
    data: null,
  },
  listUsers: {
    resultType: "",
    message: "",
    error: null,
    rows: [],
  },
};

/* create user */
const createUserStart = (state) =>
  updateObject(state, { createUser: INITIAL_STATE.createUser });

const createUserSucess = (state, action) =>
  updateObject(state, {
    createUser: {
      resultType: "success",
      lastId: action?.lastId,
      data: action?.data,
    },
  });

const createUserFail = (state, action) =>
  updateObject(state, {
    createUser: {
      resultType: "danger",
      error: action?.error,
      message: action?.message,
    },
  });

/* edit user */
const editUserStart = (state) =>
  updateObject(state, { editUser: INITIAL_STATE.editUser });

const editUserSucess = (state, action) =>
  updateObject(state, {
    editUser: {
      resultType: "success",
      data: action?.data,
    },
  });

const editUserFail = (state, action) =>
  updateObject(state, {
    editUser: {
      resultType: "danger",
      error: action?.error,
      message: action?.message,
    },
  });

/* delete user */
const deleteUserStart = (state) =>
  updateObject(state, { deleteUser: INITIAL_STATE.deleteUser });

const deleteUserSucess = (state, action) =>
  updateObject(state, {
    deleteUser: {
      resultType: "success",
      data: action?.data,
    },
  });

const deleteUserFail = (state, action) =>
  updateObject(state, {
    deleteUser: {
      resultType: "danger",
      error: action?.error,
      message: action?.message,
    },
  });

/* get user */
const getUserStart = (state) =>
  updateObject(state, { user: INITIAL_STATE.user });

const getUserSucess = (state, action) =>
  updateObject(state, {
    user: {
      resultType: "success",
      data: action?.payload,
    },
  });

const getUserFail = (state, action) =>
  updateObject(state, {
    user: {
      resultType: "danger",
      error: action?.error,
      message: action?.message,
    },
  });

const userLogout = (state) => updateObject(state, { user: INITIAL_STATE.user });

/* get all user */
const getAllUserStart = (state) =>
  updateObject(state, { listUsers: INITIAL_STATE.listUsers });

const getAllUserSucess = (state, action) =>
  updateObject(state, {
    listUsers: {
      resultType: "success",
      rows: action?.data,
    },
  });

const getAllUserFail = (state, action) =>
  updateObject(state, {
    listUsers: {
      resultType: "danger",
      error: action?.error,
      message: action?.message,
      rows: [],
    },
  });

/* shopping cart */

const addItemToCart = (state, action) => {
  const cart = state.shoppingCart;
  const item = action.payload;
  if (item?.id) {
    cart[item.id] = {
      item: item,
      quantity: cart?.[item.id]?.quantity ? cart[item.id].quantity + 1 : 1,
    };
  }

  return updateObject(state, { shoppingCart: cart });
};

const increaseItemToCart = (state, action) => {
  const cart = state.shoppingCart;
  const item = action.payload;
  if (item?.id && cart?.[item.id]) {
    cart[item.id] = {
      ...cart[item.id],
      quantity: cart[item.id].quantity + 1,
    };
  }
  return updateObject(state, { shoppingCart: cart });
};

const decreaseItemToCart = (state, action) => {
  const cart = state.shoppingCart;
  const item = action.payload;
  if (item?.id && cart?.[item.id]) {
    cart[item.id] = {
      ...cart[item.id],
      quantity: cart[item.id].quantity - 1,
    };
  }
  return updateObject(state, { shoppingCart: cart });
};

const removeItemFromCart = (state, action) => {
  const cart = state.shoppingCart;
  const item = action.payload;
  delete cart?.[item.id];
  return updateObject(state, { shoppingCart: cart });
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    /* create */
    case usersActions.CREATE_USER_START:
      return createUserStart(state);

    case usersActions.CREATE_USER_SUCCESS:
      return createUserSucess(state, action);

    case usersActions.CREATE_USER_FAIL:
      return createUserFail(state, action);

    /* edit*/
    case usersActions.EDIT_USER_START:
      return editUserStart(state);

    case usersActions.EDIT_USER_SUCCESS:
      return editUserSucess(state, action);

    case usersActions.EDIT_USER_FAIL:
      return editUserFail(state, action);

    /* delete*/
    case usersActions.DELETE_USER_START:
      return deleteUserStart(state);

    case usersActions.DELETE_USER_SUCCESS:
      return deleteUserSucess(state, action);

    case usersActions.DELETE_USER_FAIL:
      return deleteUserFail(state, action);

    /* get */
    case usersActions.GET_USER_START:
      return getUserStart(state);

    case usersActions.GET_USER_SUCCESS:
      return getUserSucess(state, action);

    case usersActions.GET_USER_FAIL:
      return getUserFail(state, action);

    /* login */
    case usersActions.USER_LOGIN_START:
      return getUserStart(state);

    case usersActions.USER_LOGIN_SUCCESS:
      return getUserSucess(state, action);

    case usersActions.USER_LOGIN_FAIL:
      return getUserFail(state, action);

    case usersActions.USER_LOGOUT:
      return userLogout(state);

    /* get all */
    case usersActions.GET_ALL_USERS_START:
      return getAllUserStart(state);

    case usersActions.GET_ALL_USERS_SUCCESS:
      return getAllUserSucess(state, action);

    case usersActions.GET_ALL_USERS_FAIL:
      return getAllUserFail(state, action);

    /* shopping cart */
    case usersActions.ADD_ITEM_TO_CART:
      return addItemToCart(state);

    case usersActions.INCREASE_ITEM_FROM_CART:
      return increaseItemToCart(state, action);

    case usersActions.DECREASE_ITEM_FROM_CART:
      return decreaseItemToCart(state, action);

    case usersActions.REMOVE_ITEM_FROM_CART:
      return removeItemFromCart(state, action);

    default:
      return state;
  }
};
